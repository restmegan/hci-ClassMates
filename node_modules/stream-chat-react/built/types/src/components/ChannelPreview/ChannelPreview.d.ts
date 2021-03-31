import React from 'react';
import { ChatContextValue } from '../../context/ChatContext';
import type { Channel } from 'stream-chat';
import type { AvatarProps } from '../Avatar/Avatar';
import type { StreamMessage } from '../../context/ChannelContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
export declare type ChannelPreviewUIComponentProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us> & {
    /** If the component's channel is the active (selected) Channel */
    active?: boolean;
    /** Image of Channel to display */
    displayImage?: string;
    /** Title of Channel to display */
    displayTitle?: string;
    /** The last message received in a channel */
    lastMessage?: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>;
    /** Latest message preview text to display */
    latestMessage?: string;
    /** Text truncation limit for latest message */
    latestMessageLength?: number;
    /** Number of unread Messages */
    unread?: number;
};
export declare type ChannelPreviewProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = {
    /** Comes from either the `channelRenderFilterFn` or `usePaginatedChannels` call from [ChannelList](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChannelList/ChannelList.tsx) */
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    /** Current selected channel object */
    activeChannel?: Channel<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Custom UI component to display user avatar
     * Defaults to and accepts same props as: [Avatar](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Avatar/Avatar.tsx)
     */
    Avatar?: React.ComponentType<AvatarProps>;
    /** Forces the update of preview component on channel update */
    channelUpdateCount?: number;
    key?: string;
    /**
     * Available built-in options (also accepts the same props as):
     *
     * 1. [ChannelPreviewCompact](https://getstream.github.io/stream-chat-react/#ChannelPreviewCompact) (default)
     * 2. [ChannelPreviewLastMessage](https://getstream.github.io/stream-chat-react/#ChannelPreviewLastMessage)
     * 3. [ChannelPreviewMessenger](https://getstream.github.io/stream-chat-react/#ChannelPreviewMessanger)
     *
     * The Preview to use, defaults to ChannelPreviewLastMessage
     * */
    Preview?: React.ComponentType<ChannelPreviewUIComponentProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** Setter for selected Channel */
    setActiveChannel?: ChatContextValue<At, Ch, Co, Ev, Me, Re, Us>['setActiveChannel'];
    /**
     * Object containing watcher parameters
     * @see See [Pagination documentation](https://getstream.io/chat/docs/react/channel_pagination/?language=js) for a list of available fields for sort.
     */
    watchers?: {
        limit?: number;
        offset?: number;
    };
};
export declare const ChannelPreview: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: ChannelPreviewProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
//# sourceMappingURL=ChannelPreview.d.ts.map