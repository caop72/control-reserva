declare module 'mongoose' {
  import mongodb = require('mongodb');

  export interface DiscriminatorOptions {
    valor?: string | number | mongodb.ObjectId;
    clone?: boolean;
    overwriteModels?: boolean;
    mergeHooks?: boolean;
    mergePlugins?: boolean;
  }

  export interface AcceptsDiscriminator {
    /** Agrega un tipo de discriminador. */
    discriminator<D>(
      name: string | number,
      schema: Schema,
      valor?: string | number | mongodb.ObjectId | DiscriminatorOptions
    ): Model<D>;
    discriminator<T, U>(
      name: string | number,
      schema: Schema<T, U>,
      valor?: string | number | mongodb.ObjectId | DiscriminatorOptions
    ): U;
  }

  type MongooseBulkWriteResult = mongodb.BulkWriteResult & {
    mongoose?: {
      validationErrors: Error[],
      results: Array<Error | mongodb.WriteError | null>
  };

  lastErrorObject?: {
    updatedExisting?: boolean;
    upserted?: import("mongodb").ObjectId;
  };
  ok: 0 | 1;

  type WriteConcern = mongodb.WriteConcern;

  /** Lista de paths a validar. Si se define, Mongoose valida sólo los paths modificados que estén en esta lista. */
  type PathsToValidate = string[] | string;

  /** @deprecated */
  type pathsToValidate = PathsToValidate;

  interface SaveOptions extends SessionOption {
    checkKeys?: boolean;
    j?: boolean;
    safe?: boolean | WriteConcern;
    timestamps?: boolean | QueryTimestampsConfig;
    validateBeforeSave?: boolean;
    validateModifiedOnly?: boolean;
    w?: number | string;
    wtimeout?: number;
  }

  interface CreateOptions extends SaveOptions {
    ordered?: boolean;
    aggregateErrors?: boolean;
  }

  interface RemoveOptions extends SessionOption, Omit<mongodb.DeleteOptions, 'session'> {}

  const Model: Model<any>;

  export type AnyBulkWriteOperation<TSchema = AnyObject> = {
    insertOne: InsertOneModel<TSchema>;
  } | {
    replaceOne: ReplaceOneModel<TSchema>;
  } | {
    updateOne: UpdateOneModel<TSchema>;
  } | {
    updateMany: UpdateManyModel<TSchema>;
  } | {
    deleteOne: DeleteOneModel<TSchema>;
  } | {
    deleteMany: DeleteManyModel<TSchema>;
  };

  export interface InsertOneModel<TSchema> {
    document: mongodb.OptionalId<TSchema>;
    /** No agregar timestamps si es false. True anula opción timestamps en bulkWrite. */
    timestamps?: boolean;
  }

  export interface ReplaceOneModel<TSchema = AnyObject> {
    filter: RootFilterQuery<TSchema>;
    replacement: mongodb.WithoutId<TSchema>;
    collation?: mongodb.CollationOptions;
    hint?: mongodb.Hint;
    upsert?: boolean;
    timestamps?: boolean;
  }

  export interface UpdateOneModel<TSchema = AnyObject> {
    filter: RootFilterQuery<TSchema>;
    update: UpdateQuery<TSchema>;
    arrayFilters?: AnyObject[];
    collation?: mongodb.CollationOptions;
    hint?: mongodb.Hint;
    upsert?: boolean;
    timestamps?: boolean;
  }

  export interface UpdateManyModel<TSchema = AnyObject> {
    filter: RootFilterQuery<TSchema>;
    update: UpdateQuery<TSchema>;
    arrayFilters?: AnyObject[];
    collation?: mongodb.CollationOptions;
    hint?: mongodb.Hint;
    upsert?: boolean;
    timestamps?: boolean;
  }

  export interface DeleteOneModel<TSchema = AnyObject> {
    filter: RootFilterQuery<TSchema>;
    collation?: mongodb.CollationOptions;
    hint?: mongodb.Hint;
  }

  export interface DeleteManyModel<TSchema = AnyObject> {
    filter: RootFilterQuery<TSchema>;
    collation?: mongodb.CollationOptions;
    hint?: mongodb.Hint;
  }

  export interface Model<
    TRawDocType,
    TQueryHelpers = {},
    TInstanceMethods = {},
    TVirtuals = {},
    THydratedDocumentType = HydratedDocument<TRawDocType, TVirtuals & TInstanceMethods, TQueryHelpers, TVirtuals>,
    TSchema = any> extends
    NodeJS.EventEmitter,
    IndexManager,
    SessionStarter {
    new <DocType = Partial<TRawDocType>>(doc?: DocType, fields?: any | null, options?: boolean | AnyObject): THydratedDocumentType;

    aggregate<R = any>(pipeline?: PipelineStage[], options?: AggregateOptions): Aggregate<Array<R>>;
    aggregate<R = any>(pipeline: PipelineStage[]): Aggregate<Array<R>>;

    base: Mongoose;

    baseModelName: string | undefined;

    castObject(obj: AnyObject, options?: { ignoreCastErrors?: boolean }): TRawDocType;

    applyDefaults(obj: AnyObject): AnyObject;
    applyDefaults(obj: TRawDocType): TRawDocType;

    applyVirtuals(obj: AnyObject, virtalsToApply?: string[]): AnyObject;

    applyTimestamps(obj: AnyObject, options?: { isUpdate?: boolean, currentTime?: () => Date }): AnyObject;

    bulkWrite<DocContents = TRawDocType>(
      writes: Array<AnyBulkWriteOperation<DocContents>>,
      options: MongooseBulkWriteOptions & { ordered: false }
    ): Promise<MongooseBulkWriteResult>;
    bulkWrite<DocContents = TRawDocType>(
      writes: Array<AnyBulkWriteOperation<DocContents>>,
      options?: MongooseBulkWriteOptions
    ): Promise<MongooseBulkWriteResult>;

    bulkSave(documents: Array<Document>, options?: MongooseBulkSaveOptions): Promise<MongooseBulkWriteResult>;

    collection: Collection;

    countDocuments(
      filter?: RootFilterQuery<TRawDocType>,
      options?: (mongodb.CountOptions & MongooseBaseQueryOptions<TRawDocType> & mongodb.Abortable) | null
    ): QueryWithHelpers<
      number,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'countDocuments',
      TInstanceMethods & TVirtuals
    >;

    create<DocContents = AnyKeys<TRawDocType>>(docs: Array<TRawDocType | DocContents>, options: CreateOptions & { aggregateErrors: true }): Promise<(THydratedDocumentType | Error)[]>;
    create<DocContents = AnyKeys<TRawDocType>>(docs: Array<TRawDocType | DocContents>, options?: CreateOptions): Promise<THydratedDocumentType[]>;
    create<DocContents = AnyKeys<TRawDocType>>(doc: DocContents | TRawDocType): Promise<THydratedDocumentType>;
    create<DocContents = AnyKeys<TRawDocType>>(...docs: Array<TRawDocType | DocContents>): Promise<THydratedDocumentType[]>;

    createCollection<T extends mongodb.Document>(options?: mongodb.CreateCollectionOptions & Pick<SchemaOptions, 'expires'>): Promise<mongodb.Collection<T>>;

    createSearchIndex(description: SearchIndexDescription): Promise<string>;

    createSearchIndexes(): Promise<string[]>;

    db: Connection;

    deleteMany(
      filter?: RootFilterQuery<TRawDocType>,
      options?: (mongodb.DeleteOptions & MongooseBaseQueryOptions<TRawDocType>) | null
    ): QueryWithHelpers<
      mongodb.DeleteResult,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'deleteMany',
      TInstanceMethods & TVirtuals
    >;
    deleteMany(
      filter: RootFilterQuery<TRawDocType>
    ): QueryWithHelpers<
      mongodb.DeleteResult,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'deleteMany',
      TInstanceMethods & TVirtuals
    >;

    deleteOne(
      filter?: RootFilterQuery<TRawDocType>,
      options?: (mongodb.DeleteOptions & MongooseBaseQueryOptions<TRawDocType>) | null
    ): QueryWithHelpers<
      mongodb.DeleteResult,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'deleteOne',
      TInstanceMethods & TVirtuals
    >;
    deleteOne(
      filter: RootFilterQuery<TRawDocType>
    ): QueryWithHelpers<
      mongodb.DeleteResult,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'deleteOne',
      TInstanceMethods & TVirtuals
    >;

    discriminator<TDiscriminatorSchema extends Schema<any, any>>(
      name: string | number,
      schema: TDiscriminatorSchema,
      value?: string | number | mongodb.ObjectId | DiscriminatorOptions
    ): Model<
      TRawDocType & InferSchemaType<TDiscriminatorSchema>,
      TQueryHelpers & ObtainSchemaGeneric<TDiscriminatorSchema, 'TQueryHelpers'>,
      TInstanceMethods & ObtainSchemaGeneric<TDiscriminatorSchema, 'TInstanceMethods'>,
      TVirtuals & ObtainSchemaGeneric<TDiscriminatorSchema, 'TVirtuals'>
    > & ObtainSchemaGeneric<TSchema, 'TStaticMethods'> & ObtainSchemaGeneric<TDiscriminatorSchema, 'TStaticMethods'>;
    discriminator<D>(
      name: string | number,
      schema: Schema,
      value?: string | number | mongodb.ObjectId | DiscriminatorOptions
    ): Model<D>;
    discriminator<T, U>(
      name: string | number,
      schema: Schema<T, U>,
      value?: string | number | mongodb.ObjectId | DiscriminatorOptions
    ): U;

    dropSearchIndex(name: string): Promise<void>;

    events: NodeJS.EventEmitter;

    findById<ResultDoc = THydratedDocumentType>(
      id: any,
      projection: ProjectionType<TRawDocType> | null | undefined,
      options: QueryOptions<TRawDocType> & { lean: true }
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOne'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOne',
      TInstanceMethods & TVirtuals
    >;
    findById<ResultDoc = THydratedDocumentType>(
      id: any,
      projection?: ProjectionType<TRawDocType> | null,
      options?: QueryOptions<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOne', TInstanceMethods & TVirtuals>;
    findById<ResultDoc = THydratedDocumentType>(
      id: any,
      projection?: ProjectionType<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOne', TInstanceMethods & TVirtuals>;

    findOne<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      projection: ProjectionType<TRawDocType> | null | undefined,
      options: QueryOptions<TRawDocType> & { lean: true } & mongodb.Abortable
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOne'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOne',
      TInstanceMethods & TVirtuals
    >;
    findOne<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType>,
      projection?: ProjectionType<TRawDocType> | null,
      options?: QueryOptions<TRawDocType> & mongodb.Abortable | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOne', TInstanceMethods & TVirtuals>;
    findOne<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType>,
      projection?: ProjectionType<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOne', TInstanceMethods & TVirtuals>;
    findOne<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType>
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOne', TInstanceMethods & TVirtuals>;

    hydrate(obj: any, projection?: ProjectionType<TRawDocType>, options?: HydrateOptions): THydratedDocumentType;

    init(): Promise<THydratedDocumentType>;

    insertMany(
      docs: Array<TRawDocType>
    ): Promise<Array<THydratedDocumentType>>;
    insertMany(
      docs: Array<TRawDocType>,
      options: InsertManyOptions & { lean: true; }
    ): Promise<Array<Require_id<TRawDocType>>>;
    insertMany(
      doc: Array<TRawDocType>,
      options: InsertManyOptions & { ordered: false; rawResult: true; }
    ): Promise<mongodb.InsertManyResult<Require_id<TRawDocType>> & {
      mongoose: {
        validationErrors: (CastError | Error.ValidatorError)[];
        results: Array<
          Error |
          Object |
          THydratedDocumentType
        >
      }
    }>;
    insertMany(
      docs: Array<TRawDocType>,
      options: InsertManyOptions & { lean: true, rawResult: true; }
    ): Promise<mongodb.InsertManyResult<Require_id<TRawDocType>>>;
    insertMany(
      docs: Array<TRawDocType>,
      options: InsertManyOptions & { rawResult: true; }
    ): Promise<mongodb.InsertManyResult<Require_id<THydratedDocumentType>>>;
    insertMany(
      doc: Array<TRawDocType>,
      options: InsertManyOptions
    ): Promise<Array<THydratedDocumentType>>;
    insertMany<DocContents = TRawDocType>(
      docs: Array<DocContents | TRawDocType>,
      options: InsertManyOptions & { lean: true; }
    ): Promise<Array<Require_id<DocContents>>>;
    insertMany<DocContents = TRawDocType>(
      docs: DocContents | TRawDocType,
      options: InsertManyOptions & { lean: true; }
    ): Promise<Array<Require_id<DocContents>>>;
    insertMany<DocContents = TRawDocType>(
      doc: DocContents | TRawDocType,
      options: InsertManyOptions & { ordered: false; rawResult: true; }
    ): Promise<mongodb.InsertManyResult<Require_id<DocContents>> & {
      mongoose: {
        validationErrors: (CastError | Error.ValidatorError)[];
        results: Array<
          Error |
          Object |
          MergeType<THydratedDocumentType, DocContents>
        >
      }
    }>;
    insertMany<DocContents = TRawDocType>(
      docs: Array<DocContents | TRawDocType>,
      options: InsertManyOptions & { rawResult: true; }
    ): Promise<mongodb.InsertManyResult<Require_id<DocContents>>>;
    insertMany<DocContents = TRawDocType>(
      docs: Array<DocContents | TRawDocType>
    ): Promise<Array<MergeType<THydratedDocumentType, Omit<DocContents, '_id'>>>>;
    insertMany<DocContents = TRawDocType>(
      doc: DocContents,
      options: InsertManyOptions & { lean: true; }
    ): Promise<Array<Require_id<DocContents>>>;
    insertMany<DocContents = TRawDocType>(
      doc: DocContents,
      options: InsertManyOptions & { rawResult: true; }
    ): Promise<mongodb.InsertManyResult<Require_id<DocContents>>>;
    insertMany<DocContents = TRawDocType>(
      doc: DocContents,
      options: InsertManyOptions
    ): Promise<Array<MergeType<THydratedDocumentType, Omit<DocContents, '_id'>>>>;
    insertMany<DocContents = TRawDocType>(
      docs: Array<DocContents | TRawDocType>,
      options: InsertManyOptions
    ): Promise<Array<MergeType<THydratedDocumentType, Omit<DocContents, '_id'>>>>;
    insertMany<DocContents = TRawDocType>(
      doc: DocContents
    ): Promise<
      Array<MergeType<THydratedDocumentType, Omit<DocContents, '_id'>>>
    >;

    insertOne<DocContents = AnyKeys<TRawDocType>>(doc: DocContents | TRawDocType, options?: SaveOptions): Promise<THydratedDocumentType>;

    listSearchIndexes(options?: mongodb.ListSearchIndexesOptions): Promise<Array<{ name: string }>>;

    modelName: string;

    populate(
      docs: Array<any>,
      options: PopulateOptions | Array<PopulateOptions> | string
    ): Promise<Array<THydratedDocumentType>>;
    populate(
      doc: any, options: PopulateOptions | Array<PopulateOptions> | string
    ): Promise<THydratedDocumentType>;
    populate<Paths>(
      docs: Array<any>,
      options: PopulateOptions | Array<PopulateOptions> | string
    ): Promise<Array<MergeType<THydratedDocumentType, Paths>>>;
    populate<Paths>(
      doc: any, options: PopulateOptions | Array<PopulateOptions> | string
    ): Promise<MergeType<THydratedDocumentType, Paths>>;

    updateSearchIndex(name: string, definition: AnyObject): Promise<void>;

    useConnection(connection: Connection): this;

    validate(): Promise<void>;
    validate(obj: any): Promise<void>;
    validate(obj: any, pathsOrOptions: PathsToValidate): Promise<void>; 
    validate(obj: any, pathsOrOptions: { pathsToSkip?: pathsToSkip }): Promise<void>;

    watch<ResultType extends mongodb.Document = any, ChangeType extends mongodb.ChangeStreamDocument = any>(pipeline?: Array<Record<string, unknown>>, options?: mongodb.ChangeStreamOptions & { hydrate?: boolean }): mongodb.ChangeStream<ResultType, ChangeType>;

    $where(argument: string | Function): QueryWithHelpers<Array<THydratedDocumentType>, THydratedDocumentType, TQueryHelpers, TRawDocType, 'find', TInstanceMethods & TVirtuals>;

    discriminators: { [name: string]: Model<any> } | undefined;

    translateAliases(raw: any): any;

    distinct<DocKey extends string, ResultType = unknown>(
      field: DocKey,
      filter?: RootFilterQuery<TRawDocType>,
      options?: QueryOptions<TRawDocType>
    ): QueryWithHelpers<
      Array<
        DocKey extends keyof WithLevel1NestedPaths<TRawDocType>
          ? WithoutUndefined<Unpacked<WithLevel1NestedPaths<TRawDocType>[DocKey]>>
          : ResultType
      >,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'distinct',
      TInstanceMethods & TVirtuals
    >;

    estimatedDocumentCount(options?: QueryOptions<TRawDocType>): QueryWithHelpers<
      number,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'estimatedDocumentCount',
      TInstanceMethods & TVirtuals
    >;

    exists(
      filter: RootFilterQuery<TRawDocType>
    ): QueryWithHelpers<
      { _id: InferId<TRawDocType> } | null,
      THydratedDocumentType,
      TQueryHelpers,
      TRawDocType,
      'findOne',
      TInstanceMethods & TVirtuals
    >;

    find<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      projection: ProjectionType<TRawDocType> | null | undefined,
      options: QueryOptions<TRawDocType> & { lean: true } & mongodb.Abortable
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType[], 'find'>,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'find',
      TInstanceMethods & TVirtuals
    >;
    find<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      projection?: ProjectionType<TRawDocType> | null | undefined,
      options?: QueryOptions<TRawDocType> & mongodb.Abortable | null | undefined
    ): QueryWithHelpers<Array<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'find', TInstanceMethods & TVirtuals>;
    find<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      projection?: ProjectionType<TRawDocType> | null | undefined
    ): QueryWithHelpers<Array<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'find', TInstanceMethods & TVirtuals>;
    find<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>
    ): QueryWithHelpers<Array<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'find', TInstanceMethods & TVirtuals>;
    find<ResultDoc = THydratedDocumentType>(
    ): QueryWithHelpers<Array<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'find', TInstanceMethods & TVirtuals>;

    findByIdAndDelete<ResultDoc = THydratedDocumentType>(
      id: mongodb.ObjectId | any,
      options: QueryOptions<TRawDocType> & { lean: true }
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOneAndDelete'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndDelete',
      TInstanceMethods & TVirtuals
    >;
    findByIdAndDelete<ResultDoc = THydratedDocumentType>(
      id: mongodb.ObjectId | any,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true }
    ): QueryWithHelpers<ModifyResult<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndDelete', TInstanceMethods & TVirtuals>;
    findByIdAndDelete<ResultDoc = THydratedDocumentType>(
      id?: mongodb.ObjectId | any,
      options?: QueryOptions<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndDelete', TInstanceMethods & TVirtuals>;

    findByIdAndUpdate<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true, lean: true }
    ): QueryWithHelpers<
      ModifyResult<TRawDocType>,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndUpdate',
      TInstanceMethods & TVirtuals
    >;
    findByIdAndUpdate<ResultDoc = THydratedDocumentType>(
      id: mongodb.ObjectId | any,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { lean: true }
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOneAndUpdate'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndUpdate',
      TInstanceMethods & TVirtuals
    >;
    findByIdAndUpdate<ResultDoc = THydratedDocumentType>(
      id: mongodb.ObjectId | any,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true }
    ): QueryWithHelpers<ModifyResult<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;
    findByIdAndUpdate<ResultDoc = THydratedDocumentType>(
      id: mongodb.ObjectId | any,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { upsert: true } & ReturnsNewDoc
    ): QueryWithHelpers<ResultDoc, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;
    findByIdAndUpdate<ResultDoc = THydratedDocumentType>(
      id?: mongodb.ObjectId | any,
      update?: UpdateQuery<TRawDocType>,
      options?: QueryOptions<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;
    findByIdAndUpdate<ResultDoc = THydratedDocumentType>(
      id: mongodb.ObjectId | any,
      update: UpdateQuery<TRawDocType>,
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;

    findOneAndDelete<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { lean: true }
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOneAndDelete'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndDelete',
      TInstanceMethods & TVirtuals
    >;
    findOneAndDelete<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true }
    ): QueryWithHelpers<ModifyResult<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndDelete', TInstanceMethods & TVirtuals>;
    findOneAndDelete<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType> | null,
      options?: QueryOptions<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndDelete', TInstanceMethods & TVirtuals>;

    findOneAndReplace<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      replacement: TRawDocType | AnyObject,
      options: QueryOptions<TRawDocType> & { lean: true }
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOneAndReplace'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndReplace',
      TInstanceMethods & TVirtuals
    >;
    findOneAndReplace<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      replacement: TRawDocType | AnyObject,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true }
    ): QueryWithHelpers<ModifyResult<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndReplace', TInstanceMethods & TVirtuals>;
    findOneAndReplace<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      replacement: TRawDocType | AnyObject,
      options: QueryOptions<TRawDocType> & { upsert: true } & ReturnsNewDoc
    ): QueryWithHelpers<ResultDoc, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndReplace', TInstanceMethods & TVirtuals>;
    findOneAndReplace<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType>,
      replacement?: TRawDocType | AnyObject,
      options?: QueryOptions<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndReplace', TInstanceMethods & TVirtuals>;

    findOneAndUpdate<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true, lean: true }
    ): QueryWithHelpers<
      ModifyResult<TRawDocType>,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndUpdate',
      TInstanceMethods & TVirtuals
    >;
    findOneAndUpdate<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { lean: true }
    ): QueryWithHelpers<
      GetLeanResultType<TRawDocType, TRawDocType, 'findOneAndUpdate'> | null,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'findOneAndUpdate',
      TInstanceMethods & TVirtuals
    >;
    findOneAndUpdate<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { includeResultMetadata: true }
    ): QueryWithHelpers<ModifyResult<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;
    findOneAndUpdate<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType>,
      options: QueryOptions<TRawDocType> & { upsert: true } & ReturnsNewDoc
    ): QueryWithHelpers<ResultDoc, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;
    findOneAndUpdate<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType>,
      update?: UpdateQuery<TRawDocType>,
      options?: QueryOptions<TRawDocType> | null
    ): QueryWithHelpers<ResultDoc | null, ResultDoc, TQueryHelpers, TRawDocType, 'findOneAndUpdate', TInstanceMethods & TVirtuals>;

    replaceOne<ResultDoc = THydratedDocumentType>(
      filter?: RootFilterQuery<TRawDocType>,
      replacement?: TRawDocType | AnyObject,
      options?: (mongodb.ReplaceOptions & QueryOptions<TRawDocType>) | null
    ): QueryWithHelpers<UpdateWriteOpResult, ResultDoc, TQueryHelpers, TRawDocType, 'replaceOne', TInstanceMethods & TVirtuals>;

    recompileSchema(): void;

    schema: Schema<TRawDocType>;

    updateMany<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType> | UpdateWithAggregationPipeline,
      options?: (mongodb.UpdateOptions & MongooseUpdateQueryOptions<TRawDocType>) | null
    ): QueryWithHelpers<UpdateWriteOpResult, ResultDoc, TQueryHelpers, TRawDocType, 'updateMany', TInstanceMethods & TVirtuals>;

    updateOne<ResultDoc = THydratedDocumentType>(
      filter: RootFilterQuery<TRawDocType>,
      update: UpdateQuery<TRawDocType> | UpdateWithAggregationPipeline,
      options?: (mongodb.UpdateOptions & MongooseUpdateQueryOptions<TRawDocType>) | null
    ): QueryWithHelpers<UpdateWriteOpResult, ResultDoc, TQueryHelpers, TRawDocType, 'updateOne', TInstanceMethods & TVirtuals>;
    updateOne<ResultDoc = THydratedDocumentType>(
      update: UpdateQuery<TRawDocType> | UpdateWithAggregationPipeline
    ): QueryWithHelpers<UpdateWriteOpResult, ResultDoc, TQueryHelpers, TRawDocType, 'updateOne', TInstanceMethods & TVirtuals>;

    where<ResultDoc = THydratedDocumentType>(
      path: string,
      val?: unknown
    ): QueryWithHelpers<Array<ResultDoc>, ResultDoc, TQueryHelpers, TRawDocType, 'find', TInstanceMethods>;
    where<ResultDoc = THydratedDocumentType>(obj: object): QueryWithHelpers<
      Array<ResultDoc>,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'find',
      TInstanceMethods & TVirtuals
    >;
    where<ResultDoc = THydratedDocumentType>(): QueryWithHelpers<
      Array<ResultDoc>,
      ResultDoc,
      TQueryHelpers,
      TRawDocType,
      'find',
      TInstanceMethods & TVirtuals
    >;

    clientEncryption(): mongodb.ClientEncryption | null;
  }
}
