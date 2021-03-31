import React, { PropsWithChildren } from 'react';
import { AvatarProps } from '../Avatar';
import { ChatDownProps } from '../ChatDown/ChatDown';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
export declare type ChannelListTeamProps = {
    /**
     * Custom UI component to display user avatar.
     * Defaults to and accepts same props as: [Avatar](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Avatar/Avatar.tsx)
     * */
    Avatar?: React.ComponentType<AvatarProps>;
    /**
     * If channel list ran into error.
     * When true, error indicator is shown - [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown/ChatDown.tsx)
     */
    error?: boolean;
    /**
     * If channel list is in loading state.
     * When true, loading indicator is shown - [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Loading/LoadingChannels.tsx)
     */
    loading?: boolean;
    /**
     * Error indicator UI Component. It will be displayed if `error` prop is true.
     * Defaults to and accepts same props as:
     * [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown/ChatDown.tsx)
     */
    LoadingErrorIndicator?: React.ComponentType<ChatDownProps>;
    /**
     * Loading indicator UI Component. It will be displayed if `loading` prop is true.
     * Defaults to and accepts same props as:
     * [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Loading/LoadingChannels.tsx)
     */
    LoadingIndicator?: React.ComponentType;
    /** When true, sidebar containing logo of the team is visible */
    showSidebar?: boolean;
    /** Url for sidebar logo image. */
    sidebarImage?: string;
};
/**
 * ChannelListTeam - A preview list of channels, allowing you to select the channel you want to open
 */
export declare const ChannelListTeam: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: PropsWithChildren<ChannelListTeamProps>) => JSX.Element;
//# sourceMappingURL=ChannelListTeam.d.ts.map