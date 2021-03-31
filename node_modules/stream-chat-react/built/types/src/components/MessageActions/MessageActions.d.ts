import React from 'react';
import { MessageActionsArray } from '../Message/utils';
import type { MessageUIComponentProps } from '../Message/types';
import type { StreamMessage } from '../../context/ChannelContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../types/types';
export declare type MessageActionsProps<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = Partial<MessageUIComponentProps<At, Ch, Co, Ev, Me, Re, Us>> & {
    getMessageActions: () => MessageActionsArray;
    message: StreamMessage<At, Ch, Co, Ev, Me, Re, Us>;
    customWrapperClass?: string;
    inline?: boolean;
    messageWrapperRef?: React.RefObject<HTMLDivElement>;
};
export declare const MessageActions: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageActionsProps<At, Ch, Co, Ev, Me, Re, Us>) => JSX.Element | null;
export declare type MessageActionsWrapperProps = {
    setActionsBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
    customWrapperClass?: string;
    inline?: boolean;
};
//# sourceMappingURL=MessageActions.d.ts.map