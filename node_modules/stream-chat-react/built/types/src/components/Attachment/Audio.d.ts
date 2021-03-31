/// <reference types="react" />
import type { Attachment } from 'stream-chat';
import type { DefaultAttachmentType } from '../../../types/types';
/**
 * Audio attachment with play/pause button and progress bar
 */
export declare type AudioProps<At extends DefaultAttachmentType = DefaultAttachmentType> = {
    og: Attachment<At>;
};
export declare const Audio: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: AudioProps<At>) => JSX.Element;
//# sourceMappingURL=Audio.d.ts.map