/// <reference types="react" />
import type { MessageInputState } from './hooks/messageInput';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../types/types';
export declare type MessageInputUploadsProps<At extends DefaultAttachmentType = DefaultAttachmentType, Us extends DefaultUserType<Us> = DefaultUserType> = MessageInputState<At, Us> & {
    removeFile?: (id: string) => void;
    removeImage?: (id: string) => void;
    uploadFile?: (id: string) => void;
    uploadImage?: (id: string) => void;
    uploadNewFiles?: (files: FileList | File[]) => void;
};
export declare const UploadsPreview: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../types/types").DefaultUserTypeInternal>>(props: MessageInputUploadsProps<At, Us>) => JSX.Element;
//# sourceMappingURL=UploadsPreview.d.ts.map