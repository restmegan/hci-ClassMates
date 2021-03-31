import React from 'react';
import type { EmojiData } from 'emoji-mart';
import type { MessageInputState } from './hooks/messageInput';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
export declare type MessageInputEmojiPickerProps<At extends DefaultAttachmentType = DefaultAttachmentType, Us extends DefaultUserType<Us> = DefaultUserType> = MessageInputState<At, Us> & {
    emojiPickerRef: React.MutableRefObject<HTMLDivElement | null>;
    onSelectEmoji: (emoji: EmojiData) => void;
    small?: boolean;
};
export declare const EmojiPicker: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageInputEmojiPickerProps<At, Us>) => JSX.Element | null;
//# sourceMappingURL=EmojiPicker.d.ts.map