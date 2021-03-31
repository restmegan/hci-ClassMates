import React, { PropsWithChildren } from 'react';
import { Message, MessageResponse, Channel as StreamChannel, StreamChat, UpdatedMessage } from 'stream-chat';
import { OnMentionAction } from './hooks/useMentionsHandlers';
import { AttachmentProps } from '../Attachment';
import { LoadingErrorIndicatorProps, LoadingIndicatorProps } from '../Loading';
import { MessageUIComponentProps } from '../Message';
import type { Data as EmojiMartData, NimbleEmojiIndex, NimbleEmojiProps, NimblePickerProps } from 'emoji-mart';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
export declare type ChannelProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = {
    /** List of accepted file types */
    acceptedFiles?: string[];
    /**
     * Attachment UI component to display attachment in individual message.
     * Defaults to and accepts same props as: [Attachment](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Attachment.tsx)
     * */
    Attachment?: React.ComponentType<AttachmentProps<At>>;
    /** The connected and active channel */
    channel?: StreamChannel<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Override mark channel read request (Advanced usage only)
     * */
    doMarkReadRequest?: (channel: StreamChannel<At, Ch, Co, Ev, Me, Re, Us>) => Promise<MessageResponse<At, Ch, Co, Me, Re, Us>> | void;
    /**
     * Override send message request (Advanced usage only)
     */
    doSendMessageRequest?: (channelId: string, message: Message<At, Me, Us>) => ReturnType<StreamChannel<At, Ch, Co, Ev, Me, Re, Us>['sendMessage']> | void;
    /**
     * Override update(edit) message request (Advanced usage only)
     */
    doUpdateMessageRequest?: (cid: string, updatedMessage: UpdatedMessage<At, Ch, Co, Me, Re, Us>) => ReturnType<StreamChat<At, Ch, Co, Ev, Me, Re, Us>['updateMessage']>;
    /** Optional component to override default NimbleEmoji from emoji-mart */
    Emoji?: React.ComponentType<NimbleEmojiProps>;
    /** Optional prop to override default facebook.json emoji data set from emoji-mart */
    emojiData?: EmojiMartData;
    /** Optional component to override default NimbleEmojiIndex from emoji-mart */
    EmojiIndex?: NimbleEmojiIndex;
    /** Optional component to override default NimblePicker from emoji-mart */
    EmojiPicker?: React.ComponentType<NimblePickerProps>;
    /**
     * Empty channel UI component. This will be shown on the screen if there is no active channel.
     * Defaults to null which skips rendering the Channel
     * */
    EmptyPlaceholder?: React.ReactElement;
    /**
     * Error indicator UI component. This will be shown on the screen if channel query fails.
     * Defaults to and accepts same props as: [LoadingErrorIndicator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingErrorIndicator.tsx).
     * */
    LoadingErrorIndicator?: React.ComponentType<LoadingErrorIndicatorProps>;
    /**
     * Loading indicator UI component. This will be shown on the screen until the messages are
     * being queried from channel. Once the messages are loaded, loading indicator is removed from the screen
     * and replaced with children of the Channel component.
     * Defaults to and accepts same props as: [LoadingIndicator](https://github.com/GetStream/stream-chat-react/blob/master/src/components/LoadingIndicator.tsx)
     */
    LoadingIndicator?: React.ComponentType<LoadingIndicatorProps>;
    /** Maximum number of attachments allowed per message */
    maxNumberOfFiles?: number;
    /**
     * Message UI component to display a message in message list.
     *
     * Available built-in components (also accepts the same props as):
     *
     * 1. [MessageSimple](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageSimple.tsx) (default)
     * 2. [MessageTeam](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageTeam.tsx)
     * 3. [MessageLivestream](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageLivestream.tsx)
     * 3. [MessageCommerce](https://github.com/GetStream/stream-chat-react/blob/master/src/components/MessageCommerce.tsx)
     *
     * */
    Message?: React.ComponentType<MessageUIComponentProps<At, Ch, Co, Ev, Me, Re, Us>>;
    /** Whether to allow multiple attachment uploads */
    multipleUploads?: boolean;
    /**
     * Handle for click on @mention in message
     */
    onMentionsClick?: OnMentionAction<Us>;
    /**
     * Handle for hover on @mention in message, user object
     */
    onMentionsHover?: OnMentionAction<Us>;
};
/**
 * Channel - Wrapper component for Channel. This Channel component provides the [ChannelContext](https://getstream.github.io/stream-chat-react/#section-channelcontext).
 *
 * It also exposes the [withChannelContext](https://getstream.github.io/stream-chat-react/#section-withchannelcontext) HOC which you can use to consume the [ChannelContext](https://getstream.github.io/stream-chat-react/#section-channelcontext).
 * @example ./Channel.md
 */
export declare const Channel: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: React.PropsWithChildren<ChannelProps<At, Ch, Co, Ev, Me, Re, Us>>) => JSX.Element | null;
//# sourceMappingURL=Channel.d.ts.map