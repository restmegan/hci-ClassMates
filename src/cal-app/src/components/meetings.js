import moment from "moment";

export const meetings=[
  {
    start: new Date(2021, 3, 2, 13, 40, 0),
    end: new Date(2021, 3, 2, 15, 20, 0),
    title: "IS4300 Study Group"
  },
  {
    start: new Date(2021, 3, 1, 9, 30, 0),
    end: new Date(2021, 3, 1, 11, 30, 0),
    title: "Group Project CS2510"
  },
  {
    start: moment().add(-1, "hours").toDate(),
    end: moment().add(2, "hours").toDate(),
    title: "Study Group T4 part 2"
}
]
