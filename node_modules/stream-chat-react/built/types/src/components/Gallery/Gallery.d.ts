/// <reference types="react" />
import type { Attachment } from 'stream-chat';
import type { DefaultAttachmentType } from '../../../types/types';
export declare type GalleryProps<At extends DefaultAttachmentType = DefaultAttachmentType> = {
    images: Attachment<At>[];
};
/**
 * Gallery - displays up to 4 images in a simple responsive grid with a lightbox to view the images.
 * @example ./Gallery.md
 */
export declare const Gallery: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: GalleryProps<At>) => JSX.Element;
//# sourceMappingURL=Gallery.d.ts.map