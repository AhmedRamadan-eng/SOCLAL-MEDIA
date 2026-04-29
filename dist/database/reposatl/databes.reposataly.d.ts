import { HydratedDocument, Model, PopulateOptions } from "mongoose";
export declare class DatabasRepository<TRawDocs> {
    private model;
    constructor(model: Model<TRawDocs>);
    create(data: Partial<TRawDocs>): Promise<HydratedDocument<TRawDocs>>;
    findOne(filter: Partial<TRawDocs>, select?: string | Record<string, 0 | 1>, populate?: PopulateOptions | PopulateOptions[]): import("mongoose").Query<import("mongoose").IfAny<TRawDocs, any, import("mongoose").Document<unknown, {}, TRawDocs, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<TRawDocs> & {
        __v: number;
    } & import("mongoose").AddDefaultId<TRawDocs, {}, import("mongoose").DefaultSchemaOptions>> | null, import("mongoose").IfAny<TRawDocs, any, import("mongoose").Document<unknown, {}, TRawDocs, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").Require_id<TRawDocs> & {
        __v: number;
    } & import("mongoose").AddDefaultId<TRawDocs, {}, import("mongoose").DefaultSchemaOptions>>, {}, TRawDocs, "findOne", {}>;
}
//# sourceMappingURL=databes.reposataly.d.ts.map