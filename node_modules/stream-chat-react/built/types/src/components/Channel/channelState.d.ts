import type { Reducer } from 'react';
import type { Channel, MessageResponse, ChannelState as StreamChannelState } from 'stream-chat';
import type { ChannelState, StreamMessage } from '../../context/ChannelContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
export declare type ChannelStateReducerAction<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    type: 'initStateFromChannel';
} | {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    type: 'copyStateFromChannelOnEvent';
} | {
    message: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>;
    type: 'setThread';
} | {
    hasMore: boolean;
    messages: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>[];
    type: 'loadMoreFinished';
} | {
    loadingMore: boolean;
    type: 'setLoadingMore';
} | {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    type: 'copyMessagesFromChannel';
    parentId?: string | null;
} | {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    message: MessageResponse<At, Ch, Co, Me, Re, Us>;
    type: 'updateThreadOnEvent';
} | {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    message: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>;
    type: 'openThread';
} | {
    type: 'startLoadingThread';
} | {
    threadHasMore: boolean;
    threadMessages: Array<ReturnType<StreamChannelState<At, Ch, Co, Ev, Me, Re, Us>['formatMessage']>>;
    type: 'loadMoreThreadFinished';
} | {
    type: 'closeThread';
} | {
    error: Error;
    type: 'setError';
};
export declare type ChannelStateReducer<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = Reducer<ChannelState<At, Ch, Co, Ev, Me, Re, Us>, ChannelStateReducerAction<At, Ch, Co, Ev, Me, Re, Us>>;
export declare const channelReducer: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(state: ChannelState<At, Ch, Co, Ev, Me, Re, Us>, action: ChannelStateReducerAction<At, Ch, Co, Ev, Me, Re, Us>) => ChannelState<At, Ch, Co, Ev, Me, Re, Us>;
export declare const initialState: {
    error: null;
    hasMore: boolean;
    loading: boolean;
    loadingMore: boolean;
    members: {};
    messages: never[];
    pinnedMessages: never[];
    read: {};
    thread: null;
    threadHasMore: boolean;
    threadLoadingMore: boolean;
    threadMessages: never[];
    typing: {};
    watcherCount: number;
    watchers: {};
};
//# sourceMappingURL=channelState.d.ts.map