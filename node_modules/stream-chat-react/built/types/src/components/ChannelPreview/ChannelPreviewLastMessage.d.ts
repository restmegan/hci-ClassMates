/// <reference types="react" />
import type { ChannelPreviewUIComponentProps } from './ChannelPreview';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
/**
 * Used as preview component for channel item in [ChannelList](#channellist) component
 * @example ./ChannelPreviewLastMessage.md
 */
export declare const ChannelPreviewLastMessage: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: ChannelPreviewUIComponentProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element;
//# sourceMappingURL=ChannelPreviewLastMessage.d.ts.map