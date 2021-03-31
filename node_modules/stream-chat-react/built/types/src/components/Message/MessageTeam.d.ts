/// <reference types="react" />
import type { MessageUIComponentProps } from './types';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
/**
 * MessageTeam - handles the rendering of a Message and depends on the Message component for all the logic.
 * Implements the look and feel for a team style collaboration environment.
 * @example ./MessageTeam.md
 */
export declare const MessageTeam: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageUIComponentProps<At, Ch, Co, Ev, Me, Re, Us, import("../../../types/types").CustomTrigger>) => JSX.Element;
//# sourceMappingURL=MessageTeam.d.ts.map