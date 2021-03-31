import React from 'react';
import { AvatarProps } from '../Avatar';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
export declare type TypingIndicatorProps = {
    /**
     * Custom UI component to display user avatar.
     * Defaults to and accepts same props as: [Avatar](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Avatar/Avatar.tsx)
     * */
    Avatar?: React.ComponentType<AvatarProps>;
    /** Size in pixels
     * @default 32px
     */
    avatarSize?: number;
    /** Whether or not the typing indicator is in a thread */
    threadList?: boolean;
};
export declare const TypingIndicator: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: TypingIndicatorProps) => JSX.Element | null;
//# sourceMappingURL=TypingIndicator.d.ts.map