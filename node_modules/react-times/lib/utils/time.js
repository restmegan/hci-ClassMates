'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

var _func = require('./func');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// loads moment-timezone's timezone data, which comes from the
// IANA Time Zone Database at https://www.iana.org/time-zones
_momentTimezone2.default.tz.load({
  zones: [],
  links: [],
  version: 'latest'
});

var guessUserTz = function guessUserTz() {
  // User-Agent sniffing is not always reliable, but is the recommended technique
  // for determining whether or not we're on a mobile device according to MDN
  // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Tablet_or_Desktop
  var isMobile = global.navigator !== undefined ? global.navigator.userAgent.match(/Mobi/) : false;

  var supportsIntl = global.Intl !== undefined;

  var userTz = void 0;

  if (isMobile && supportsIntl) {
    // moment-timezone gives preference to the Intl API regardless of device type,
    // so unset global.Intl to trick moment-timezone into using its fallback
    // see https://github.com/moment/moment-timezone/issues/441
    // TODO: Clean this up when that issue is resolved
    var globalIntl = global.Intl;
    global.Intl = undefined;
    userTz = _momentTimezone2.default.tz.guess();
    global.Intl = globalIntl;
  } else {
    userTz = _momentTimezone2.default.tz.guess();
  }

  // return GMT if we're unable to guess or the system is using UTC
  if (!userTz || userTz === 'UTC') return getTzForName('Etc/Greenwich');

  try {
    return getTzForName(userTz);
  } catch (e) {
    console.error(e);
    return getTzForName('Etc/Greenwich');
  }
};

/**
 * Create a time data object using moment.
 * If a time is provided, just format it; if not, use the current time.
 *
 * @function getValidTimeData
 * @param  {string} time          a time; defaults to now
 * @param  {string} meridiem      AM or PM; defaults to AM via moment
 * @param  {Number} timeMode      12 or 24-hour mode
 * @param  {string} tz            a timezone name; defaults to guessing a user's tz or GMT
 * @return {Object}               a key-value representation of time data
 */
var getValidTimeData = function getValidTimeData() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var tz = options.tz,
      time = options.time,
      timeMode = options.timeMode,
      _options$useTz = options.useTz,
      useTz = _options$useTz === undefined ? true : _options$useTz,
      _options$meridiem = options.meridiem,
      meridiem = _options$meridiem === undefined ? null : _options$meridiem;

  var validMeridiem = getValidMeridiem(meridiem);

  // when we only have a valid meridiem, that implies a 12h mode
  var mode = validMeridiem && !timeMode ? 12 : timeMode || 24;
  var timezone = tz || guessUserTz().zoneName;

  var validMode = getValidateTimeMode(mode);
  var validTime = getValidTimeString(time, validMeridiem);
  var format12 = 'hh:mmA';
  var format24 = 'HH:mmA';

  // What format is the hour we provide to moment below in?
  var hourFormat = validMode === 12 ? format12 : format24;

  var time24 = void 0;
  var time12 = void 0;
  var formatTime = (0, _momentTimezone2.default)('1970-01-01 ' + validTime, 'YYYY-MM-DD ' + hourFormat, 'en');
  if (time || !useTz) {
    time24 = (validTime ? formatTime.format(format24) : (0, _momentTimezone2.default)().format(format24)).split(/:/);
    time12 = (validTime ? formatTime.format(format12) : (0, _momentTimezone2.default)().format(format12)).split(/:/);
  } else {
    time24 = (validTime ? formatTime.tz(timezone).format(format24) : (0, _momentTimezone2.default)().tz(timezone).format(format24)).split(/:/);

    time12 = (validTime ? formatTime.tz(timezone).format(format12) : (0, _momentTimezone2.default)().tz(timezone).format(format12)).split(/:/);
  }

  var timeData = {
    timezone: timezone,
    mode: validMode,
    hour24: (0, _func.head)(time24),
    minute: (0, _func.last)(time24).slice(0, 2),
    hour12: (0, _func.head)(time12).replace(/^0/, ''),
    meridiem: validMode === 12 ? (0, _func.last)(time12).slice(2) : null
  };

  return timeData;
};

/**
 * Format the current time as a string
 * @function getCurrentTime
 * @return {string}
 */
var getCurrentTime = function getCurrentTime() {
  var time = getValidTimeData();
  return time.hour24 + ':' + time.minute;
};

/**
 * Get an integer representation of a time.
 * @function getValidateIntTime
 * @param  {string} time
 * @return {Number}
 */
var getValidateIntTime = function getValidateIntTime(time) {
  if (isNaN(parseInt(time, 10))) {
    return 0;
  }
  return parseInt(time, 10);
};

/**
 * Validate, set a default for, and stringify time data.
 * @function getValidateTime
 * @param {string}
 * @return {string}
 */
var getValidateTime = function getValidateTime(time) {
  var result = time;
  if (_func.is.undefined(result)) {
    result = '00';
  }
  if (isNaN(parseInt(result, 10))) {
    result = '00';
  }
  if (parseInt(result, 10) < 10) {
    result = '0' + parseInt(result, 10);
  }
  return '' + result;
};

/**
 * Given a time and meridiem, produce a time string to pass to moment
 * @function getValidTimeString
 * @param  {string} time
 * @param  {string} meridiem
 * @return {string}
 */
var getValidTimeString = function getValidTimeString(time, meridiem) {
  if (_func.is.string(time)) {
    var validTime = time && time.indexOf(':').length >= 0 ? time.split(/:/).map(function (t) {
      return getValidateTime(t);
    }).join(':') : time;
    var hourAsInt = parseInt((0, _func.head)(validTime.split(/:/)), 10);
    var is12hTime = hourAsInt > 0 && hourAsInt <= 12;

    validTime = validTime && meridiem && is12hTime ? validTime + ' ' + meridiem : validTime;

    return validTime;
  }

  return time;
};

/**
 * Given a meridiem, try to ensure that it's formatted for use with moment
 * @function getValidMeridiem
 * @param  {string} meridiem
 * @return {string}
 */
var getValidMeridiem = function getValidMeridiem(meridiem) {
  if (_func.is.string(meridiem)) {
    return meridiem && meridiem.match(/am|pm/i) ? meridiem.toLowerCase() : null;
  }

  return meridiem;
};

/**
 * Ensure that a meridiem passed as a prop has a valid value
 * @function getValidateMeridiem
 * @param  {string} time
 * @param  {string|Number} timeMode
 * @return {string|null}
 */
var getValidateMeridiem = function getValidateMeridiem(time, timeMode) {
  var validateTime = time || getCurrentTime();
  var mode = parseInt(timeMode, 10);
  // eslint-disable-next-line no-unused-vars
  var hour = validateTime.split(/:/)[0];
  hour = getValidateIntTime(hour);

  if (mode === 12) return hour > 12 ? 'PM' : 'AM';

  return null;
};

/**
 * Validate and set a sensible default for time modes.
 *
 * @function getValidateTimeMode
 * @param  {string|Number} timeMode
 * @return {Number}
 */
var getValidateTimeMode = function getValidateTimeMode(timeMode) {
  var mode = parseInt(timeMode, 10);

  if (isNaN(mode)) {
    return 24;
  }
  if (mode !== 24 && mode !== 12) {
    return 24;
  }

  return mode;
};

var tzNames = function () {
  //  We want to subset the existing timezone data as much as possible, both for efficiency
  //  and to avoid confusing the user. Here, we focus on removing reduntant timezone names
  //  and timezone names for timezones we don't necessarily care about, like Antarctica, and
  //  special timezone names that exist for convenience.
  var scrubbedPrefixes = ['Antarctica', 'Arctic', 'Chile'];
  var scrubbedSuffixes = ['ACT', 'East', 'Knox_IN', 'LHI', 'North', 'NSW', 'South', 'West'];

  var tznames = _momentTimezone2.default.tz.names().filter(function (name) {
    return name.indexOf('/') >= 0;
  }).filter(function (name) {
    return !scrubbedPrefixes.indexOf(name.split('/')[0]) >= 0;
  }).filter(function (name) {
    return !scrubbedSuffixes.indexOf(name.split('/').slice(-1)[0]) >= 0;
  });

  return tznames;
}();

// We need a human-friendly city name for each timezone identifier
// counting Canada/*, Mexico/*, and US/* allows users to search for
// things like 'Eastern' or 'Mountain' and get matches back
var tzCities = tzNames.map(function (name) {
  return ['Canada', 'Mexico', 'US'].indexOf(name.split('/')[0]) >= 0 ? name : name.split('/').slice(-1)[0];
}).map(function (name) {
  return name.replace(/_/g, ' ');
});

// Provide a mapping between a human-friendly city name and its corresponding
// timezone identifier and timezone abbreviation as a named export.
// We can fuzzy match on any of these.
var tzMaps = tzCities.map(function (city) {
  var tzMap = {};
  var tzName = tzNames[tzCities.indexOf(city)];

  tzMap.city = city;
  tzMap.zoneName = tzName;
  tzMap.zoneAbbr = (0, _momentTimezone2.default)().tz(tzName).zoneAbbr();

  return tzMap;
});

var getTzForCity = function getTzForCity(city) {
  var val = city.toLowerCase();
  var maps = tzMaps.filter(function (tzMap) {
    return tzMap.city.toLowerCase() === val;
  });
  return (0, _func.head)(maps);
};

var getTzCountryAndCity = function getTzCountryAndCity(name) {
  var sections = name.split('/');
  return {
    country: sections[0].toLowerCase(),
    city: sections.slice(-1)[0].toLowerCase()
  };
};

var _matchTzByName = function _matchTzByName(target, name) {
  var v1 = getTzCountryAndCity(target);
  var v2 = getTzCountryAndCity(name);

  return v1.country === v2.country && v1.city === v2.city;
};

var getTzForName = function getTzForName(name) {
  var maps = tzMaps.filter(function (tzMap) {
    return tzMap.zoneName === name;
  });
  if (!maps.length && /\//.test(name)) {
    maps = tzMaps.filter(function (tzMap) {
      return tzMap.zoneAbbr === name;
    });
  }
  if (!maps.length) {
    maps = tzMaps.filter(function (tzMap) {
      return _matchTzByName(tzMap.zoneName, name);
    });
  }
  if (!maps.length) {
    throw new Error('Can not find target timezone for ' + name);
  }
  return (0, _func.head)(maps);
};

var hourFormatter = function hourFormatter(hour) {
  var defaultTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00:00';

  if (!hour) return defaultTime;

  var _$split = ('' + hour).split(/[:|\s]/),
      _$split2 = _slicedToArray(_$split, 3),
      h = _$split2[0],
      m = _$split2[1],
      meridiem = _$split2[2];

  if (meridiem && meridiem.toLowerCase() === 'pm') meridiem = 'PM';
  if (meridiem && meridiem.toLowerCase() === 'am') meridiem = 'AM';
  if (meridiem && meridiem !== 'AM' && meridiem !== 'PM') meridiem = 'AM';

  if (!h || isNaN(h)) h = '0';
  if (!meridiem && Number(h > 24)) h = Number(h) - 24;
  if (meridiem && Number(h > 12)) h = Number(h) - 12;
  if (!m || isNaN(m) || Number(m) >= 60) m = '0';

  if (Number(h) < 10) h = '0' + Number(h);
  if (Number(m) < 10) m = '0' + Number(m);

  return meridiem ? h + ':' + m + ' ' + meridiem : h + ':' + m;
};

var withoutMeridiem = function withoutMeridiem(hour) {
  return hour.replace(/\s[P|A]M$/, '');
};

var getStartAndEnd = function getStartAndEnd(from, to) {
  var current = (0, _momentTimezone2.default)();
  var date = current.format('YYYY-MM-DD');
  var nextDate = current.add(1, 'day').format('YYYY-MM-DD');

  var f = hourFormatter(from, '00:00');
  var t = hourFormatter(to, '23:30');

  var start = date + ' ' + withoutMeridiem(f);
  var endTmp = withoutMeridiem(t);
  var end = (0, _momentTimezone2.default)(date + ' ' + endTmp) <= (0, _momentTimezone2.default)(start) ? nextDate + ' ' + endTmp : date + ' ' + endTmp;

  if (/PM$/.test(f)) start = (0, _momentTimezone2.default)(start).add(12, 'hours').format('YYYY-MM-DD HH:mm');
  if (/PM$/.test(t)) end = (0, _momentTimezone2.default)(end).add(12, 'hours').format('YYYY-MM-DD HH:mm');

  return {
    start: start,
    end: end
  };
};

var get12ModeTimes = function get12ModeTimes(_ref) {
  var from = _ref.from,
      to = _ref.to,
      _ref$step = _ref.step,
      step = _ref$step === undefined ? 30 : _ref$step,
      _ref$unit = _ref.unit,
      unit = _ref$unit === undefined ? 'minutes' : _ref$unit;

  var _getStartAndEnd = getStartAndEnd(from, to),
      start = _getStartAndEnd.start,
      end = _getStartAndEnd.end;

  var times = [];
  var time = (0, _momentTimezone2.default)(start);
  while (time <= (0, _momentTimezone2.default)(end)) {
    var hour = Number(time.format('HH'));
    times.push(time.format('hh:mm') + ' ' + (hour >= 12 ? 'PM' : 'AM'));
    time = time.add(step, unit);
  }
  return times;
};

var get24ModeTimes = function get24ModeTimes(_ref2) {
  var from = _ref2.from,
      to = _ref2.to,
      _ref2$step = _ref2.step,
      step = _ref2$step === undefined ? 30 : _ref2$step,
      _ref2$unit = _ref2.unit,
      unit = _ref2$unit === undefined ? 'minutes' : _ref2$unit;

  var _getStartAndEnd2 = getStartAndEnd(from, to),
      start = _getStartAndEnd2.start,
      end = _getStartAndEnd2.end;

  var times = [];
  var time = (0, _momentTimezone2.default)(start);
  while (time <= (0, _momentTimezone2.default)(end)) {
    times.push(time.format('HH:mm'));
    time = time.add(step, unit);
  }
  return times;
};

exports.default = {
  tzMaps: tzMaps,
  guessUserTz: guessUserTz,
  hourFormatter: hourFormatter,
  getStartAndEnd: getStartAndEnd,
  get12ModeTimes: get12ModeTimes,
  get24ModeTimes: get24ModeTimes,
  withoutMeridiem: withoutMeridiem,
  time: getValidTimeData,
  current: getCurrentTime,
  tzForCity: getTzForCity,
  tzForName: getTzForName,
  validate: getValidateTime,
  validateInt: getValidateIntTime,
  validateMeridiem: getValidateMeridiem,
  validateTimeMode: getValidateTimeMode
};