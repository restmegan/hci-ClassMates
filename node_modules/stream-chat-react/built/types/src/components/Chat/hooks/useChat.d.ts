/// <reference types="node" />
/// <reference types="react" />
import { Streami18n } from '../../../i18n';
import type { Channel, Mute, StreamChat } from 'stream-chat';
import type { TranslationContextValue } from '../../../context/TranslationContext';
import type { DefaultAttachmentType, DefaultChannelType, DefaultCommandType, DefaultEventType, DefaultMessageType, DefaultReactionType, DefaultUserType } from '../../../../types/types';
export declare type UseChatParams<At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends DefaultCommandType = DefaultCommandType, Ev extends DefaultEventType = DefaultEventType, Me extends DefaultMessageType = DefaultMessageType, Re extends DefaultReactionType = DefaultReactionType, Us extends DefaultUserType<Us> = DefaultUserType> = {
    client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>;
    i18nInstance?: Streami18n;
    initialNavOpen?: boolean;
};
export declare const useChat: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../../types/types").DefaultUserTypeInternal>>({ client, i18nInstance, initialNavOpen, }: UseChatParams<At, Ch, Co, Ev, Me, Re, Us>) => {
    channel: Channel<At, Ch, Co, Ev, Me, Re, Us> | undefined;
    closeMobileNav: () => void;
    mutes: Mute<Us>[];
    navOpen: boolean | undefined;
    openMobileNav: () => NodeJS.Timeout;
    setActiveChannel: (activeChannel?: Channel<At, Ch, Co, Ev, Me, Re, Us> | undefined, watchers?: {
        limit?: number;
        offset?: number;
    }, event?: import("react").BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
    translators: TranslationContextValue;
};
//# sourceMappingURL=useChat.d.ts.map