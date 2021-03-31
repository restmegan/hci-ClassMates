/// <reference types="react" />
import type { StreamMessage } from '../../context/ChannelContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
export declare type MessageDeletedProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = {
    message: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>;
};
export declare const MessageDeleted: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageDeletedProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
//# sourceMappingURL=MessageDeleted.d.ts.map