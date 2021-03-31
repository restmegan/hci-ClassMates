import type { Data as EmojiData } from 'emoji-mart';
import type { CommonEmoji, EmojiSetDef, MinimalEmoji } from '../../context/ChannelContext';
export declare const commonEmoji: CommonEmoji;
export declare const emojiSetDef: EmojiSetDef;
export declare const defaultMinimalEmojis: MinimalEmoji[];
export declare const getStrippedEmojiData: (data?: EmojiData | undefined) => {
    emojis: {};
    compressed?: boolean;
    categories?: import("emoji-mart/dist-es/utils/data").Category[];
    aliases?: {
        [key: string]: string;
    };
};
//# sourceMappingURL=emojiData.d.ts.map