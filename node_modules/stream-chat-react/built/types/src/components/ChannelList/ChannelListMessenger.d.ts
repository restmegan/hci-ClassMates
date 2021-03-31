import React from 'react';
import { ChatDownProps } from '../ChatDown/ChatDown';
export declare type ChannelListMessengerProps = {
    /**
     * If channel list ran into an error.
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
     *
     * Defaults to and accepts same props as:
     * [ChatDown](https://github.com/GetStream/stream-chat-react/blob/master/src/components/ChatDown/ChatDown.tsx)
     *
     */
    LoadingErrorIndicator?: React.ComponentType<ChatDownProps>;
    /**
     * Loading indicator UI Component. It will be displayed if `loading` prop is true.
     *
     * Defaults to and accepts same props as:
     * [LoadingChannels](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Loading/LoadingChannels.tsx)
     *
     */
    LoadingIndicator?: React.ComponentType;
};
/**
 * ChannelList - A preview list of channels, allowing you to select the channel you want to open
 * @example ../../docs/ChannelList.md
 */
export declare const ChannelListMessenger: React.FC<ChannelListMessengerProps>;
//# sourceMappingURL=ChannelListMessenger.d.ts.map