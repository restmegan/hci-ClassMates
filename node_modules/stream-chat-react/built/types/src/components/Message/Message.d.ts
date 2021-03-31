/// <reference types="react" />
import type { MessageProps } from './types';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
/**
 * Message - A high level component which implements all the logic required for a Message.
 * The actual rendering of the Message is delegated via the "Message" property.
 * @example ./Message.md
 */
export declare const Message: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageProps<At, Ch, Co, Ev, Me, Re, Us, import("../../../types/types").CustomTrigger>) => JSX.Element;
//# sourceMappingURL=Message.d.ts.map