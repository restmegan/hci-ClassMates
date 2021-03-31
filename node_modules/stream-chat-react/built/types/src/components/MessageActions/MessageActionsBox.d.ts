/// <reference types="react" />
import type { MessageActionsProps } from './MessageActions';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
declare type PropsDrilledToMessageActionsBox = 'getMessageActions' | 'handleDelete' | 'handleEdit' | 'handleFlag' | 'handleMute' | 'handlePin' | 'message' | 'messageListRect';
export declare type MessageActionsBoxProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = Pick<MessageActionsProps<At, Ch, Co, Ev, Me, Re, Us>, PropsDrilledToMessageActionsBox> & {
    isUserMuted: () => boolean;
    mine: boolean;
    open: boolean;
};
/**
 * MessageActionsBox - Allows a user to edit, flag or delete a message.
 * @example ./MessageActionsBox.md
 */
export declare const MessageActionsBox: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageActionsBoxProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
export {};
//# sourceMappingURL=MessageActionsBox.d.ts.map