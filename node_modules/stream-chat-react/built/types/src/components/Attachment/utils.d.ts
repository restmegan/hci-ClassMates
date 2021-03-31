import React, { PropsWithChildren } from 'react';
import type { DefaultAttachmentProps, ExtendedAttachment, InnerAttachmentUIComponentProps } from './Attachment';
import type { DefaultAttachmentType } from '../../../types/types';
export declare const SUPPORTED_VIDEO_FORMATS: string[];
export declare const isAudioAttachment: <At extends DefaultAttachmentType = DefaultAttachmentType>(attachment: ExtendedAttachment<At>) => boolean;
export declare const isFileAttachment: <At extends DefaultAttachmentType = DefaultAttachmentType>(attachment: ExtendedAttachment<At>) => boolean | "" | undefined;
export declare const isGalleryAttachment: <At extends DefaultAttachmentType = DefaultAttachmentType>(attachment: ExtendedAttachment<At>) => boolean;
export declare const isImageAttachment: <At extends DefaultAttachmentType = DefaultAttachmentType>(attachment: ExtendedAttachment<At>) => boolean;
export declare const isMediaAttachment: <At extends DefaultAttachmentType = DefaultAttachmentType>(attachment: ExtendedAttachment<At>) => boolean;
export declare const renderAttachmentWithinContainer: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: React.PropsWithChildren<Partial<DefaultAttachmentProps<At>>>) => JSX.Element;
export declare const renderAttachmentActions: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: InnerAttachmentUIComponentProps<At>) => JSX.Element | null;
export declare const renderGallery: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: InnerAttachmentUIComponentProps<At>) => JSX.Element | null;
export declare const renderImage: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: InnerAttachmentUIComponentProps<At>) => JSX.Element | null;
export declare const renderCard: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: InnerAttachmentUIComponentProps<At>) => JSX.Element | null;
export declare const renderFile: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: InnerAttachmentUIComponentProps<At>) => JSX.Element | null;
export declare const renderAudio: <At extends DefaultAttachmentType = DefaultAttachmentType>(props: InnerAttachmentUIComponentProps<At>) => JSX.Element | null;
export declare const renderMedia: React.FC<InnerAttachmentUIComponentProps>;
//# sourceMappingURL=utils.d.ts.map