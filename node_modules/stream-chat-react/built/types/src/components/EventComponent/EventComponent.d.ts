import React from 'react';
import { AvatarProps } from '../Avatar';
import type { StreamMessage } from '../../context/ChannelContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
export declare type EventComponentProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = {
    /** Message object */
    message: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>;
    /**
     * Custom UI component to display user avatar.
     * Defaults to and accepts same props as: [Avatar](https://github.com/GetStream/stream-chat-react/blob/master/src/components/Avatar/Avatar.tsx)
     * */
    Avatar?: React.ComponentType<AvatarProps>;
};
export declare const EventComponent: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: EventComponentProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
//# sourceMappingURL=EventComponent.d.ts.map