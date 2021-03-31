/// <reference types="react" />
import type { PinIndicatorProps } from './types';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
export declare const ReplyIcon: () => JSX.Element;
export declare const DeliveredCheckIcon: () => JSX.Element;
export declare const ReactionIcon: () => JSX.Element;
export declare const ThreadIcon: () => JSX.Element;
export declare const ErrorIcon: () => JSX.Element;
export declare const PinIcon: () => JSX.Element;
export declare const PinIndicator: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>({ message, t, }: PinIndicatorProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
//# sourceMappingURL=icons.d.ts.map