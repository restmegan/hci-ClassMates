import React from 'react';
import { AvatarProps } from '../Avatar';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
export declare type ChannelHeaderProps = {
    /**
     * Custom UI component to display user avatar.
     *
     * Defaults to and accepts same props as: [Avatar](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Avatar/Avatar.tsx)
     * */
    Avatar?: React.ComponentType<AvatarProps>;
    /** Manually set the image to render, defaults to the Channel image */
    image?: string;
    /** Show a little indicator that the Channel is live right now */
    live?: boolean;
    /** Set title manually */
    title?: string;
};
/**
The ChannelHeader component renders some basic information about a Channel.
* @example ./ChannelHeader.md
*/
export declare const ChannelHeader: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: ChannelHeaderProps) => JSX.Element;
//# sourceMappingURL=ChannelHeader.d.ts.map