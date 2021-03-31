/// <reference types="react" />
import type { Channel, ChannelFilters, ChannelOptions, ChannelSort, StreamChat } from 'stream-chat';
import type { DefaultAttachmentType, DefaultChannelType, DefaultMessageType, DefaultUserType } from '../../../../types/types';
export declare const usePaginatedChannels: <At extends DefaultAttachmentType = DefaultAttachmentType, Ch extends DefaultChannelType = DefaultChannelType, Co extends string & {} = string & {}, Ev extends Record<string, unknown> = Record<string, unknown>, Me extends DefaultMessageType = DefaultMessageType, Re extends Record<string, unknown> = Record<string, unknown>, Us extends DefaultUserType<Us> = DefaultUserType<import("../../../../types/types").DefaultUserTypeInternal>>(client: StreamChat<At, Ch, Co, Ev, Me, Re, Us>, filters: import("stream-chat").QueryFilters<import("stream-chat").ContainsOperator<Ch> & {
    members?: string[] | (Pick<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in" | "$nin">, never> & Required<Pick<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in" | "$nin">, "$in">> & Partial<Record<"$nin", undefined>>) | (Pick<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in" | "$nin">, never> & Required<Pick<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in" | "$nin">, "$nin">> & Partial<Record<"$in", undefined>>) | import("stream-chat").RequireOnlyOne<Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null)[] | undefined;
    }, "$eq">, "$eq"> | null | undefined;
} & {
    name?: import("stream-chat").ChannelResponse<Ch, Co, Us>["name"] | import("stream-chat").RequireOnlyOne<{
        $autocomplete?: import("stream-chat").ChannelResponse<Ch, Co, Us>["name"] | undefined;
    } & import("stream-chat").QueryFilter<import("stream-chat").ChannelResponse<Ch, Co, Us>["name"]>, "$autocomplete" | keyof import("stream-chat").QueryFilter<import("stream-chat").ChannelResponse<Ch, Co, Us>["name"]>> | null | undefined;
} & {
    frozen: boolean | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null;
    id: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null;
    created_at?: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    updated_at?: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    cid: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null;
    deleted_at?: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    type: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null;
    auto_translation_enabled?: boolean | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    auto_translation_language?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $exists?: boolean | undefined;
        $gt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $gte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $in?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
        $lt?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $lte?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $ne?: "so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined;
        $nin?: ("so" | "hr" | "th" | "tr" | "no" | "af" | "am" | "ar" | "az" | "bg" | "bn" | "bs" | "cs" | "da" | "de" | "el" | "en" | "es" | "es-MX" | "et" | "fa" | "fa-AF" | "fi" | "fr" | "fr-CA" | "ha" | "he" | "hi" | "hu" | "id" | "it" | "ja" | "ka" | "ko" | "lv" | "ms" | "nl" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "sq" | "sr" | "sv" | "sw" | "ta" | "tl" | "uk" | "ur" | "vi" | "zh" | "zh-TW" | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    config?: import("stream-chat").ChannelConfigWithInfo<Co> | (Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$ne", undefined>>) | (Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$ne", undefined>>) | (Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$ne", undefined>>) | (Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$ne", undefined>>) | (Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $exists?: boolean | undefined;
        $in?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
        $ne?: import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined;
        $nin?: (import("stream-chat").ChannelConfigWithInfo<Co> | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists", undefined>>) | null | undefined;
    created_by?: import("stream-chat").UserResponse<Us> | import("stream-chat").RequireOnlyOne<import("stream-chat").QueryFilter<import("stream-chat").UserResponse<Us> | null | undefined>, keyof import("stream-chat").QueryFilter<import("stream-chat").UserResponse<Us> | null | undefined>> | null | undefined;
    created_by_id?: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    invites?: string[] | (Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$ne", undefined>>) | (Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$ne", undefined>>) | (Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$ne", undefined>>) | (Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$ne", undefined>>) | (Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string[] | null | undefined;
        $exists?: boolean | undefined;
        $in?: (string[] | null | undefined)[] | undefined;
        $ne?: string[] | null | undefined;
        $nin?: (string[] | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists", undefined>>) | null | undefined;
    last_message_at?: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    member_count?: number | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: number | null | undefined;
        $exists?: boolean | undefined;
        $gt?: number | null | undefined;
        $gte?: number | null | undefined;
        $in?: (number | null | undefined)[] | undefined;
        $lt?: number | null | undefined;
        $lte?: number | null | undefined;
        $ne?: number | null | undefined;
        $nin?: (number | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    muted?: boolean | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: boolean | null | undefined;
        $exists?: boolean | undefined;
        $gt?: boolean | null | undefined;
        $gte?: boolean | null | undefined;
        $in?: (boolean | null | undefined)[] | undefined;
        $lt?: boolean | null | undefined;
        $lte?: boolean | null | undefined;
        $ne?: boolean | null | undefined;
        $nin?: (boolean | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
    team?: string | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$in">> & Partial<Record<"$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$nin">> & Partial<Record<"$in" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$eq">> & Partial<Record<"$in" | "$nin" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$exists">> & Partial<Record<"$in" | "$nin" | "$eq" | "$gt" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gte" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$gte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$lt" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lt">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lte" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$lte">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$ne", undefined>>) | (Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, never> & Required<Pick<{
        $eq?: string | null | undefined;
        $exists?: boolean | undefined;
        $gt?: string | null | undefined;
        $gte?: string | null | undefined;
        $in?: (string | null | undefined)[] | undefined;
        $lt?: string | null | undefined;
        $lte?: string | null | undefined;
        $ne?: string | null | undefined;
        $nin?: (string | null | undefined)[] | undefined;
    }, "$ne">> & Partial<Record<"$in" | "$nin" | "$eq" | "$exists" | "$gt" | "$gte" | "$lt" | "$lte", undefined>>) | null | undefined;
}>, sort: ChannelSort<Ch>, options: ChannelOptions, activeChannelHandler: (channels: Channel<At, Ch, Co, Ev, Me, Re, Us>[], setChannels: import("react").Dispatch<import("react").SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>) => void) => {
    channels: Channel<At, Ch, Co, Ev, Me, Re, Us>[];
    hasNextPage: boolean;
    loadNextPage: () => void;
    setChannels: import("react").Dispatch<import("react").SetStateAction<Channel<At, Ch, Co, Ev, Me, Re, Us>[]>>;
    status: {
        error: boolean;
        loadingChannels: boolean;
        refreshing: boolean;
    };
};
//# sourceMappingURL=usePaginatedChannels.d.ts.map