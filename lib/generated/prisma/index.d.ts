
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UploadedFile
 * 
 */
export type UploadedFile = $Result.DefaultSelection<Prisma.$UploadedFilePayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Quiz
 * 
 */
export type Quiz = $Result.DefaultSelection<Prisma.$QuizPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UploadedFiles
 * const uploadedFiles = await prisma.uploadedFile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more UploadedFiles
   * const uploadedFiles = await prisma.uploadedFile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.uploadedFile`: Exposes CRUD operations for the **UploadedFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UploadedFiles
    * const uploadedFiles = await prisma.uploadedFile.findMany()
    * ```
    */
  get uploadedFile(): Prisma.UploadedFileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quiz`: Exposes CRUD operations for the **Quiz** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quizzes
    * const quizzes = await prisma.quiz.findMany()
    * ```
    */
  get quiz(): Prisma.QuizDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    UploadedFile: 'UploadedFile',
    Unit: 'Unit',
    Quiz: 'Quiz',
    Question: 'Question'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "uploadedFile" | "unit" | "quiz" | "question"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UploadedFile: {
        payload: Prisma.$UploadedFilePayload<ExtArgs>
        fields: Prisma.UploadedFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UploadedFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UploadedFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findFirst: {
            args: Prisma.UploadedFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UploadedFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          findMany: {
            args: Prisma.UploadedFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          create: {
            args: Prisma.UploadedFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          createMany: {
            args: Prisma.UploadedFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UploadedFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          delete: {
            args: Prisma.UploadedFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          update: {
            args: Prisma.UploadedFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          deleteMany: {
            args: Prisma.UploadedFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UploadedFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UploadedFileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>[]
          }
          upsert: {
            args: Prisma.UploadedFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UploadedFilePayload>
          }
          aggregate: {
            args: Prisma.UploadedFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploadedFile>
          }
          groupBy: {
            args: Prisma.UploadedFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UploadedFileCountArgs<ExtArgs>
            result: $Utils.Optional<UploadedFileCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Quiz: {
        payload: Prisma.$QuizPayload<ExtArgs>
        fields: Prisma.QuizFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuizFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuizFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findFirst: {
            args: Prisma.QuizFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuizFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          findMany: {
            args: Prisma.QuizFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          create: {
            args: Prisma.QuizCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          createMany: {
            args: Prisma.QuizCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuizCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          delete: {
            args: Prisma.QuizDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          update: {
            args: Prisma.QuizUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          deleteMany: {
            args: Prisma.QuizDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuizUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuizUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>[]
          }
          upsert: {
            args: Prisma.QuizUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuizPayload>
          }
          aggregate: {
            args: Prisma.QuizAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuiz>
          }
          groupBy: {
            args: Prisma.QuizGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuizGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuizCountArgs<ExtArgs>
            result: $Utils.Optional<QuizCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    uploadedFile?: UploadedFileOmit
    unit?: UnitOmit
    quiz?: QuizOmit
    question?: QuestionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UploadedFileCountOutputType
   */

  export type UploadedFileCountOutputType = {
    units: number
    questions: number
    quizzes: number
  }

  export type UploadedFileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | UploadedFileCountOutputTypeCountUnitsArgs
    questions?: boolean | UploadedFileCountOutputTypeCountQuestionsArgs
    quizzes?: boolean | UploadedFileCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * UploadedFileCountOutputType without action
   */
  export type UploadedFileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFileCountOutputType
     */
    select?: UploadedFileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UploadedFileCountOutputType without action
   */
  export type UploadedFileCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * UploadedFileCountOutputType without action
   */
  export type UploadedFileCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UploadedFileCountOutputType without action
   */
  export type UploadedFileCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    questions: number
    quizzes: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | UnitCountOutputTypeCountQuestionsArgs
    quizzes?: boolean | UnitCountOutputTypeCountQuizzesArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountQuizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
  }


  /**
   * Count Type QuizCountOutputType
   */

  export type QuizCountOutputType = {
    questions: number
  }

  export type QuizCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | QuizCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuizCountOutputType
     */
    select?: QuizCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuizCountOutputType without action
   */
  export type QuizCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UploadedFile
   */

  export type AggregateUploadedFile = {
    _count: UploadedFileCountAggregateOutputType | null
    _avg: UploadedFileAvgAggregateOutputType | null
    _sum: UploadedFileSumAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  export type UploadedFileAvgAggregateOutputType = {
    pageCount: number | null
    processingTime: number | null
  }

  export type UploadedFileSumAggregateOutputType = {
    pageCount: number | null
    processingTime: number | null
  }

  export type UploadedFileMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSlug: string | null
    filePath: string | null
    subject: string | null
    grade: string | null
    pdfType: string | null
    status: string | null
    pageCount: number | null
    extractedContent: boolean | null
    processingTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadedFileMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    fileSlug: string | null
    filePath: string | null
    subject: string | null
    grade: string | null
    pdfType: string | null
    status: string | null
    pageCount: number | null
    extractedContent: boolean | null
    processingTime: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UploadedFileCountAggregateOutputType = {
    id: number
    fileName: number
    fileSlug: number
    filePath: number
    subject: number
    grade: number
    pdfType: number
    status: number
    pageCount: number
    extractedContent: number
    processingTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UploadedFileAvgAggregateInputType = {
    pageCount?: true
    processingTime?: true
  }

  export type UploadedFileSumAggregateInputType = {
    pageCount?: true
    processingTime?: true
  }

  export type UploadedFileMinAggregateInputType = {
    id?: true
    fileName?: true
    fileSlug?: true
    filePath?: true
    subject?: true
    grade?: true
    pdfType?: true
    status?: true
    pageCount?: true
    extractedContent?: true
    processingTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadedFileMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileSlug?: true
    filePath?: true
    subject?: true
    grade?: true
    pdfType?: true
    status?: true
    pageCount?: true
    extractedContent?: true
    processingTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UploadedFileCountAggregateInputType = {
    id?: true
    fileName?: true
    fileSlug?: true
    filePath?: true
    subject?: true
    grade?: true
    pdfType?: true
    status?: true
    pageCount?: true
    extractedContent?: true
    processingTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UploadedFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFile to aggregate.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UploadedFiles
    **/
    _count?: true | UploadedFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadedFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadedFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadedFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadedFileMaxAggregateInputType
  }

  export type GetUploadedFileAggregateType<T extends UploadedFileAggregateArgs> = {
        [P in keyof T & keyof AggregateUploadedFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploadedFile[P]>
      : GetScalarType<T[P], AggregateUploadedFile[P]>
  }




  export type UploadedFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UploadedFileWhereInput
    orderBy?: UploadedFileOrderByWithAggregationInput | UploadedFileOrderByWithAggregationInput[]
    by: UploadedFileScalarFieldEnum[] | UploadedFileScalarFieldEnum
    having?: UploadedFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadedFileCountAggregateInputType | true
    _avg?: UploadedFileAvgAggregateInputType
    _sum?: UploadedFileSumAggregateInputType
    _min?: UploadedFileMinAggregateInputType
    _max?: UploadedFileMaxAggregateInputType
  }

  export type UploadedFileGroupByOutputType = {
    id: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status: string
    pageCount: number | null
    extractedContent: boolean | null
    processingTime: number | null
    createdAt: Date
    updatedAt: Date
    _count: UploadedFileCountAggregateOutputType | null
    _avg: UploadedFileAvgAggregateOutputType | null
    _sum: UploadedFileSumAggregateOutputType | null
    _min: UploadedFileMinAggregateOutputType | null
    _max: UploadedFileMaxAggregateOutputType | null
  }

  type GetUploadedFileGroupByPayload<T extends UploadedFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadedFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadedFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
            : GetScalarType<T[P], UploadedFileGroupByOutputType[P]>
        }
      >
    >


  export type UploadedFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSlug?: boolean
    filePath?: boolean
    subject?: boolean
    grade?: boolean
    pdfType?: boolean
    status?: boolean
    pageCount?: boolean
    extractedContent?: boolean
    processingTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    units?: boolean | UploadedFile$unitsArgs<ExtArgs>
    questions?: boolean | UploadedFile$questionsArgs<ExtArgs>
    quizzes?: boolean | UploadedFile$quizzesArgs<ExtArgs>
    _count?: boolean | UploadedFileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSlug?: boolean
    filePath?: boolean
    subject?: boolean
    grade?: boolean
    pdfType?: boolean
    status?: boolean
    pageCount?: boolean
    extractedContent?: boolean
    processingTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileSlug?: boolean
    filePath?: boolean
    subject?: boolean
    grade?: boolean
    pdfType?: boolean
    status?: boolean
    pageCount?: boolean
    extractedContent?: boolean
    processingTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["uploadedFile"]>

  export type UploadedFileSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileSlug?: boolean
    filePath?: boolean
    subject?: boolean
    grade?: boolean
    pdfType?: boolean
    status?: boolean
    pageCount?: boolean
    extractedContent?: boolean
    processingTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UploadedFileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "fileSlug" | "filePath" | "subject" | "grade" | "pdfType" | "status" | "pageCount" | "extractedContent" | "processingTime" | "createdAt" | "updatedAt", ExtArgs["result"]["uploadedFile"]>
  export type UploadedFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | UploadedFile$unitsArgs<ExtArgs>
    questions?: boolean | UploadedFile$questionsArgs<ExtArgs>
    quizzes?: boolean | UploadedFile$quizzesArgs<ExtArgs>
    _count?: boolean | UploadedFileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UploadedFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UploadedFileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UploadedFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UploadedFile"
    objects: {
      units: Prisma.$UnitPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      fileSlug: string
      filePath: string
      subject: string
      grade: string
      pdfType: string
      status: string
      pageCount: number | null
      extractedContent: boolean | null
      processingTime: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["uploadedFile"]>
    composites: {}
  }

  type UploadedFileGetPayload<S extends boolean | null | undefined | UploadedFileDefaultArgs> = $Result.GetResult<Prisma.$UploadedFilePayload, S>

  type UploadedFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UploadedFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadedFileCountAggregateInputType | true
    }

  export interface UploadedFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UploadedFile'], meta: { name: 'UploadedFile' } }
    /**
     * Find zero or one UploadedFile that matches the filter.
     * @param {UploadedFileFindUniqueArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UploadedFileFindUniqueArgs>(args: SelectSubset<T, UploadedFileFindUniqueArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UploadedFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UploadedFileFindUniqueOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UploadedFileFindUniqueOrThrowArgs>(args: SelectSubset<T, UploadedFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UploadedFileFindFirstArgs>(args?: SelectSubset<T, UploadedFileFindFirstArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UploadedFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindFirstOrThrowArgs} args - Arguments to find a UploadedFile
     * @example
     * // Get one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UploadedFileFindFirstOrThrowArgs>(args?: SelectSubset<T, UploadedFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UploadedFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany()
     * 
     * // Get first 10 UploadedFiles
     * const uploadedFiles = await prisma.uploadedFile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UploadedFileFindManyArgs>(args?: SelectSubset<T, UploadedFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UploadedFile.
     * @param {UploadedFileCreateArgs} args - Arguments to create a UploadedFile.
     * @example
     * // Create one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.create({
     *   data: {
     *     // ... data to create a UploadedFile
     *   }
     * })
     * 
     */
    create<T extends UploadedFileCreateArgs>(args: SelectSubset<T, UploadedFileCreateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UploadedFiles.
     * @param {UploadedFileCreateManyArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UploadedFileCreateManyArgs>(args?: SelectSubset<T, UploadedFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UploadedFiles and returns the data saved in the database.
     * @param {UploadedFileCreateManyAndReturnArgs} args - Arguments to create many UploadedFiles.
     * @example
     * // Create many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UploadedFileCreateManyAndReturnArgs>(args?: SelectSubset<T, UploadedFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UploadedFile.
     * @param {UploadedFileDeleteArgs} args - Arguments to delete one UploadedFile.
     * @example
     * // Delete one UploadedFile
     * const UploadedFile = await prisma.uploadedFile.delete({
     *   where: {
     *     // ... filter to delete one UploadedFile
     *   }
     * })
     * 
     */
    delete<T extends UploadedFileDeleteArgs>(args: SelectSubset<T, UploadedFileDeleteArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UploadedFile.
     * @param {UploadedFileUpdateArgs} args - Arguments to update one UploadedFile.
     * @example
     * // Update one UploadedFile
     * const uploadedFile = await prisma.uploadedFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UploadedFileUpdateArgs>(args: SelectSubset<T, UploadedFileUpdateArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UploadedFiles.
     * @param {UploadedFileDeleteManyArgs} args - Arguments to filter UploadedFiles to delete.
     * @example
     * // Delete a few UploadedFiles
     * const { count } = await prisma.uploadedFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UploadedFileDeleteManyArgs>(args?: SelectSubset<T, UploadedFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UploadedFileUpdateManyArgs>(args: SelectSubset<T, UploadedFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UploadedFiles and returns the data updated in the database.
     * @param {UploadedFileUpdateManyAndReturnArgs} args - Arguments to update many UploadedFiles.
     * @example
     * // Update many UploadedFiles
     * const uploadedFile = await prisma.uploadedFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UploadedFiles and only return the `id`
     * const uploadedFileWithIdOnly = await prisma.uploadedFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UploadedFileUpdateManyAndReturnArgs>(args: SelectSubset<T, UploadedFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UploadedFile.
     * @param {UploadedFileUpsertArgs} args - Arguments to update or create a UploadedFile.
     * @example
     * // Update or create a UploadedFile
     * const uploadedFile = await prisma.uploadedFile.upsert({
     *   create: {
     *     // ... data to create a UploadedFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UploadedFile we want to update
     *   }
     * })
     */
    upsert<T extends UploadedFileUpsertArgs>(args: SelectSubset<T, UploadedFileUpsertArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UploadedFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileCountArgs} args - Arguments to filter UploadedFiles to count.
     * @example
     * // Count the number of UploadedFiles
     * const count = await prisma.uploadedFile.count({
     *   where: {
     *     // ... the filter for the UploadedFiles we want to count
     *   }
     * })
    **/
    count<T extends UploadedFileCountArgs>(
      args?: Subset<T, UploadedFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadedFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadedFileAggregateArgs>(args: Subset<T, UploadedFileAggregateArgs>): Prisma.PrismaPromise<GetUploadedFileAggregateType<T>>

    /**
     * Group by UploadedFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadedFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UploadedFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UploadedFileGroupByArgs['orderBy'] }
        : { orderBy?: UploadedFileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UploadedFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadedFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UploadedFile model
   */
  readonly fields: UploadedFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UploadedFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UploadedFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends UploadedFile$unitsArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFile$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends UploadedFile$questionsArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFile$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends UploadedFile$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFile$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UploadedFile model
   */
  interface UploadedFileFieldRefs {
    readonly id: FieldRef<"UploadedFile", 'String'>
    readonly fileName: FieldRef<"UploadedFile", 'String'>
    readonly fileSlug: FieldRef<"UploadedFile", 'String'>
    readonly filePath: FieldRef<"UploadedFile", 'String'>
    readonly subject: FieldRef<"UploadedFile", 'String'>
    readonly grade: FieldRef<"UploadedFile", 'String'>
    readonly pdfType: FieldRef<"UploadedFile", 'String'>
    readonly status: FieldRef<"UploadedFile", 'String'>
    readonly pageCount: FieldRef<"UploadedFile", 'Int'>
    readonly extractedContent: FieldRef<"UploadedFile", 'Boolean'>
    readonly processingTime: FieldRef<"UploadedFile", 'Int'>
    readonly createdAt: FieldRef<"UploadedFile", 'DateTime'>
    readonly updatedAt: FieldRef<"UploadedFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UploadedFile findUnique
   */
  export type UploadedFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findUniqueOrThrow
   */
  export type UploadedFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile findFirst
   */
  export type UploadedFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findFirstOrThrow
   */
  export type UploadedFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFile to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UploadedFiles.
     */
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile findMany
   */
  export type UploadedFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter, which UploadedFiles to fetch.
     */
    where?: UploadedFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UploadedFiles to fetch.
     */
    orderBy?: UploadedFileOrderByWithRelationInput | UploadedFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UploadedFiles.
     */
    cursor?: UploadedFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UploadedFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UploadedFiles.
     */
    skip?: number
    distinct?: UploadedFileScalarFieldEnum | UploadedFileScalarFieldEnum[]
  }

  /**
   * UploadedFile create
   */
  export type UploadedFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The data needed to create a UploadedFile.
     */
    data: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
  }

  /**
   * UploadedFile createMany
   */
  export type UploadedFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile createManyAndReturn
   */
  export type UploadedFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to create many UploadedFiles.
     */
    data: UploadedFileCreateManyInput | UploadedFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UploadedFile update
   */
  export type UploadedFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The data needed to update a UploadedFile.
     */
    data: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
    /**
     * Choose, which UploadedFile to update.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile updateMany
   */
  export type UploadedFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile updateManyAndReturn
   */
  export type UploadedFileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * The data used to update UploadedFiles.
     */
    data: XOR<UploadedFileUpdateManyMutationInput, UploadedFileUncheckedUpdateManyInput>
    /**
     * Filter which UploadedFiles to update
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to update.
     */
    limit?: number
  }

  /**
   * UploadedFile upsert
   */
  export type UploadedFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * The filter to search for the UploadedFile to update in case it exists.
     */
    where: UploadedFileWhereUniqueInput
    /**
     * In case the UploadedFile found by the `where` argument doesn't exist, create a new UploadedFile with this data.
     */
    create: XOR<UploadedFileCreateInput, UploadedFileUncheckedCreateInput>
    /**
     * In case the UploadedFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UploadedFileUpdateInput, UploadedFileUncheckedUpdateInput>
  }

  /**
   * UploadedFile delete
   */
  export type UploadedFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
    /**
     * Filter which UploadedFile to delete.
     */
    where: UploadedFileWhereUniqueInput
  }

  /**
   * UploadedFile deleteMany
   */
  export type UploadedFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UploadedFiles to delete
     */
    where?: UploadedFileWhereInput
    /**
     * Limit how many UploadedFiles to delete.
     */
    limit?: number
  }

  /**
   * UploadedFile.units
   */
  export type UploadedFile$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * UploadedFile.questions
   */
  export type UploadedFile$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * UploadedFile.quizzes
   */
  export type UploadedFile$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * UploadedFile without action
   */
  export type UploadedFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UploadedFile
     */
    select?: UploadedFileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UploadedFile
     */
    omit?: UploadedFileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UploadedFileInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    wordCount: number | null
  }

  export type UnitSumAggregateOutputType = {
    wordCount: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    title: string | null
    pageRange: string | null
    wordCount: number | null
    documentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    title: string | null
    pageRange: string | null
    wordCount: number | null
    documentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    title: number
    pageRange: number
    wordCount: number
    keyTopics: number
    documentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    wordCount?: true
  }

  export type UnitSumAggregateInputType = {
    wordCount?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    title?: true
    pageRange?: true
    wordCount?: true
    documentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    title?: true
    pageRange?: true
    wordCount?: true
    documentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    title?: true
    pageRange?: true
    wordCount?: true
    keyTopics?: true
    documentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics: string[]
    documentId: string
    createdAt: Date
    updatedAt: Date
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pageRange?: boolean
    wordCount?: boolean
    keyTopics?: boolean
    documentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    questions?: boolean | Unit$questionsArgs<ExtArgs>
    quizzes?: boolean | Unit$quizzesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pageRange?: boolean
    wordCount?: boolean
    keyTopics?: boolean
    documentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    pageRange?: boolean
    wordCount?: boolean
    keyTopics?: boolean
    documentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    title?: boolean
    pageRange?: boolean
    wordCount?: boolean
    keyTopics?: boolean
    documentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "pageRange" | "wordCount" | "keyTopics" | "documentId" | "createdAt" | "updatedAt", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    questions?: boolean | Unit$questionsArgs<ExtArgs>
    quizzes?: boolean | Unit$quizzesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      document: Prisma.$UploadedFilePayload<ExtArgs>
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      quizzes: Prisma.$QuizPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      pageRange: string
      wordCount: number
      keyTopics: string[]
      documentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends UploadedFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFileDefaultArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends Unit$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quizzes<T extends Unit$quizzesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$quizzesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly title: FieldRef<"Unit", 'String'>
    readonly pageRange: FieldRef<"Unit", 'String'>
    readonly wordCount: FieldRef<"Unit", 'Int'>
    readonly keyTopics: FieldRef<"Unit", 'String[]'>
    readonly documentId: FieldRef<"Unit", 'String'>
    readonly createdAt: FieldRef<"Unit", 'DateTime'>
    readonly updatedAt: FieldRef<"Unit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.questions
   */
  export type Unit$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Unit.quizzes
   */
  export type Unit$quizzesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    cursor?: QuizWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Quiz
   */

  export type AggregateQuiz = {
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  export type QuizMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: string | null
    documentId: string | null
    unitId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: string | null
    documentId: string | null
    unitId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuizCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    documentId: number
    unitId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuizMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    documentId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    documentId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuizCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    documentId?: true
    unitId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuizAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quiz to aggregate.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quizzes
    **/
    _count?: true | QuizCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuizMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuizMaxAggregateInputType
  }

  export type GetQuizAggregateType<T extends QuizAggregateArgs> = {
        [P in keyof T & keyof AggregateQuiz]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuiz[P]>
      : GetScalarType<T[P], AggregateQuiz[P]>
  }




  export type QuizGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuizWhereInput
    orderBy?: QuizOrderByWithAggregationInput | QuizOrderByWithAggregationInput[]
    by: QuizScalarFieldEnum[] | QuizScalarFieldEnum
    having?: QuizScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuizCountAggregateInputType | true
    _min?: QuizMinAggregateInputType
    _max?: QuizMaxAggregateInputType
  }

  export type QuizGroupByOutputType = {
    id: string
    title: string
    description: string | null
    difficulty: string
    documentId: string
    unitId: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuizCountAggregateOutputType | null
    _min: QuizMinAggregateOutputType | null
    _max: QuizMaxAggregateOutputType | null
  }

  type GetQuizGroupByPayload<T extends QuizGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuizGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuizGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuizGroupByOutputType[P]>
            : GetScalarType<T[P], QuizGroupByOutputType[P]>
        }
      >
    >


  export type QuizSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    documentId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Quiz$unitArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    documentId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Quiz$unitArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    documentId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Quiz$unitArgs<ExtArgs>
  }, ExtArgs["result"]["quiz"]>

  export type QuizSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    documentId?: boolean
    unitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuizOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "documentId" | "unitId" | "createdAt" | "updatedAt", ExtArgs["result"]["quiz"]>
  export type QuizInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Quiz$unitArgs<ExtArgs>
    questions?: boolean | Quiz$questionsArgs<ExtArgs>
    _count?: boolean | QuizCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuizIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Quiz$unitArgs<ExtArgs>
  }
  export type QuizIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Quiz$unitArgs<ExtArgs>
  }

  export type $QuizPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quiz"
    objects: {
      document: Prisma.$UploadedFilePayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      difficulty: string
      documentId: string
      unitId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["quiz"]>
    composites: {}
  }

  type QuizGetPayload<S extends boolean | null | undefined | QuizDefaultArgs> = $Result.GetResult<Prisma.$QuizPayload, S>

  type QuizCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuizCountAggregateInputType | true
    }

  export interface QuizDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quiz'], meta: { name: 'Quiz' } }
    /**
     * Find zero or one Quiz that matches the filter.
     * @param {QuizFindUniqueArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuizFindUniqueArgs>(args: SelectSubset<T, QuizFindUniqueArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quiz that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuizFindUniqueOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuizFindUniqueOrThrowArgs>(args: SelectSubset<T, QuizFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuizFindFirstArgs>(args?: SelectSubset<T, QuizFindFirstArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quiz that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindFirstOrThrowArgs} args - Arguments to find a Quiz
     * @example
     * // Get one Quiz
     * const quiz = await prisma.quiz.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuizFindFirstOrThrowArgs>(args?: SelectSubset<T, QuizFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quizzes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quizzes
     * const quizzes = await prisma.quiz.findMany()
     * 
     * // Get first 10 Quizzes
     * const quizzes = await prisma.quiz.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quizWithIdOnly = await prisma.quiz.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuizFindManyArgs>(args?: SelectSubset<T, QuizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quiz.
     * @param {QuizCreateArgs} args - Arguments to create a Quiz.
     * @example
     * // Create one Quiz
     * const Quiz = await prisma.quiz.create({
     *   data: {
     *     // ... data to create a Quiz
     *   }
     * })
     * 
     */
    create<T extends QuizCreateArgs>(args: SelectSubset<T, QuizCreateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quizzes.
     * @param {QuizCreateManyArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuizCreateManyArgs>(args?: SelectSubset<T, QuizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quizzes and returns the data saved in the database.
     * @param {QuizCreateManyAndReturnArgs} args - Arguments to create many Quizzes.
     * @example
     * // Create many Quizzes
     * const quiz = await prisma.quiz.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuizCreateManyAndReturnArgs>(args?: SelectSubset<T, QuizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quiz.
     * @param {QuizDeleteArgs} args - Arguments to delete one Quiz.
     * @example
     * // Delete one Quiz
     * const Quiz = await prisma.quiz.delete({
     *   where: {
     *     // ... filter to delete one Quiz
     *   }
     * })
     * 
     */
    delete<T extends QuizDeleteArgs>(args: SelectSubset<T, QuizDeleteArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quiz.
     * @param {QuizUpdateArgs} args - Arguments to update one Quiz.
     * @example
     * // Update one Quiz
     * const quiz = await prisma.quiz.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuizUpdateArgs>(args: SelectSubset<T, QuizUpdateArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quizzes.
     * @param {QuizDeleteManyArgs} args - Arguments to filter Quizzes to delete.
     * @example
     * // Delete a few Quizzes
     * const { count } = await prisma.quiz.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuizDeleteManyArgs>(args?: SelectSubset<T, QuizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuizUpdateManyArgs>(args: SelectSubset<T, QuizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quizzes and returns the data updated in the database.
     * @param {QuizUpdateManyAndReturnArgs} args - Arguments to update many Quizzes.
     * @example
     * // Update many Quizzes
     * const quiz = await prisma.quiz.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quizzes and only return the `id`
     * const quizWithIdOnly = await prisma.quiz.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuizUpdateManyAndReturnArgs>(args: SelectSubset<T, QuizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quiz.
     * @param {QuizUpsertArgs} args - Arguments to update or create a Quiz.
     * @example
     * // Update or create a Quiz
     * const quiz = await prisma.quiz.upsert({
     *   create: {
     *     // ... data to create a Quiz
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quiz we want to update
     *   }
     * })
     */
    upsert<T extends QuizUpsertArgs>(args: SelectSubset<T, QuizUpsertArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quizzes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizCountArgs} args - Arguments to filter Quizzes to count.
     * @example
     * // Count the number of Quizzes
     * const count = await prisma.quiz.count({
     *   where: {
     *     // ... the filter for the Quizzes we want to count
     *   }
     * })
    **/
    count<T extends QuizCountArgs>(
      args?: Subset<T, QuizCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuizCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuizAggregateArgs>(args: Subset<T, QuizAggregateArgs>): Prisma.PrismaPromise<GetQuizAggregateType<T>>

    /**
     * Group by Quiz.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuizGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuizGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuizGroupByArgs['orderBy'] }
        : { orderBy?: QuizGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quiz model
   */
  readonly fields: QuizFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quiz.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuizClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends UploadedFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFileDefaultArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends Quiz$unitArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    questions<T extends Quiz$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Quiz$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Quiz model
   */
  interface QuizFieldRefs {
    readonly id: FieldRef<"Quiz", 'String'>
    readonly title: FieldRef<"Quiz", 'String'>
    readonly description: FieldRef<"Quiz", 'String'>
    readonly difficulty: FieldRef<"Quiz", 'String'>
    readonly documentId: FieldRef<"Quiz", 'String'>
    readonly unitId: FieldRef<"Quiz", 'String'>
    readonly createdAt: FieldRef<"Quiz", 'DateTime'>
    readonly updatedAt: FieldRef<"Quiz", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Quiz findUnique
   */
  export type QuizFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findUniqueOrThrow
   */
  export type QuizFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz findFirst
   */
  export type QuizFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findFirstOrThrow
   */
  export type QuizFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quiz to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quizzes.
     */
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz findMany
   */
  export type QuizFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter, which Quizzes to fetch.
     */
    where?: QuizWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quizzes to fetch.
     */
    orderBy?: QuizOrderByWithRelationInput | QuizOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quizzes.
     */
    cursor?: QuizWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quizzes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quizzes.
     */
    skip?: number
    distinct?: QuizScalarFieldEnum | QuizScalarFieldEnum[]
  }

  /**
   * Quiz create
   */
  export type QuizCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to create a Quiz.
     */
    data: XOR<QuizCreateInput, QuizUncheckedCreateInput>
  }

  /**
   * Quiz createMany
   */
  export type QuizCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quiz createManyAndReturn
   */
  export type QuizCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to create many Quizzes.
     */
    data: QuizCreateManyInput | QuizCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz update
   */
  export type QuizUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The data needed to update a Quiz.
     */
    data: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
    /**
     * Choose, which Quiz to update.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz updateMany
   */
  export type QuizUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
  }

  /**
   * Quiz updateManyAndReturn
   */
  export type QuizUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * The data used to update Quizzes.
     */
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyInput>
    /**
     * Filter which Quizzes to update
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quiz upsert
   */
  export type QuizUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * The filter to search for the Quiz to update in case it exists.
     */
    where: QuizWhereUniqueInput
    /**
     * In case the Quiz found by the `where` argument doesn't exist, create a new Quiz with this data.
     */
    create: XOR<QuizCreateInput, QuizUncheckedCreateInput>
    /**
     * In case the Quiz was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuizUpdateInput, QuizUncheckedUpdateInput>
  }

  /**
   * Quiz delete
   */
  export type QuizDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    /**
     * Filter which Quiz to delete.
     */
    where: QuizWhereUniqueInput
  }

  /**
   * Quiz deleteMany
   */
  export type QuizDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quizzes to delete
     */
    where?: QuizWhereInput
    /**
     * Limit how many Quizzes to delete.
     */
    limit?: number
  }

  /**
   * Quiz.unit
   */
  export type Quiz$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * Quiz.questions
   */
  export type Quiz$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Quiz without action
   */
  export type QuizDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    correctAnswer: number | null
  }

  export type QuestionSumAggregateOutputType = {
    correctAnswer: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    type: string | null
    question: string | null
    correctAnswer: number | null
    reasoning: string | null
    documentId: string | null
    unitId: string | null
    quizId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    question: string | null
    correctAnswer: number | null
    reasoning: string | null
    documentId: string | null
    unitId: string | null
    quizId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    type: number
    question: number
    options: number
    correctAnswer: number
    reasoning: number
    documentId: number
    unitId: number
    quizId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    correctAnswer?: true
  }

  export type QuestionSumAggregateInputType = {
    correctAnswer?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    type?: true
    question?: true
    correctAnswer?: true
    reasoning?: true
    documentId?: true
    unitId?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    type?: true
    question?: true
    correctAnswer?: true
    reasoning?: true
    documentId?: true
    unitId?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    type?: true
    question?: true
    options?: true
    correctAnswer?: true
    reasoning?: true
    documentId?: true
    unitId?: true
    quizId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    type: string
    question: string
    options: string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    unitId: string | null
    quizId: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    reasoning?: boolean
    documentId?: boolean
    unitId?: boolean
    quizId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Question$unitArgs<ExtArgs>
    quiz?: boolean | Question$quizArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    reasoning?: boolean
    documentId?: boolean
    unitId?: boolean
    quizId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Question$unitArgs<ExtArgs>
    quiz?: boolean | Question$quizArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    reasoning?: boolean
    documentId?: boolean
    unitId?: boolean
    quizId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Question$unitArgs<ExtArgs>
    quiz?: boolean | Question$quizArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    type?: boolean
    question?: boolean
    options?: boolean
    correctAnswer?: boolean
    reasoning?: boolean
    documentId?: boolean
    unitId?: boolean
    quizId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "question" | "options" | "correctAnswer" | "reasoning" | "documentId" | "unitId" | "quizId" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Question$unitArgs<ExtArgs>
    quiz?: boolean | Question$quizArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Question$unitArgs<ExtArgs>
    quiz?: boolean | Question$quizArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | UploadedFileDefaultArgs<ExtArgs>
    unit?: boolean | Question$unitArgs<ExtArgs>
    quiz?: boolean | Question$quizArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      document: Prisma.$UploadedFilePayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
      quiz: Prisma.$QuizPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      question: string
      options: string[]
      correctAnswer: number
      reasoning: string
      documentId: string
      unitId: string | null
      quizId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends UploadedFileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UploadedFileDefaultArgs<ExtArgs>>): Prisma__UploadedFileClient<$Result.GetResult<Prisma.$UploadedFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends Question$unitArgs<ExtArgs> = {}>(args?: Subset<T, Question$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    quiz<T extends Question$quizArgs<ExtArgs> = {}>(args?: Subset<T, Question$quizArgs<ExtArgs>>): Prisma__QuizClient<$Result.GetResult<Prisma.$QuizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly type: FieldRef<"Question", 'String'>
    readonly question: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String[]'>
    readonly correctAnswer: FieldRef<"Question", 'Int'>
    readonly reasoning: FieldRef<"Question", 'String'>
    readonly documentId: FieldRef<"Question", 'String'>
    readonly unitId: FieldRef<"Question", 'String'>
    readonly quizId: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.unit
   */
  export type Question$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
  }

  /**
   * Question.quiz
   */
  export type Question$quizArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quiz
     */
    select?: QuizSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quiz
     */
    omit?: QuizOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuizInclude<ExtArgs> | null
    where?: QuizWhereInput
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UploadedFileScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileSlug: 'fileSlug',
    filePath: 'filePath',
    subject: 'subject',
    grade: 'grade',
    pdfType: 'pdfType',
    status: 'status',
    pageCount: 'pageCount',
    extractedContent: 'extractedContent',
    processingTime: 'processingTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UploadedFileScalarFieldEnum = (typeof UploadedFileScalarFieldEnum)[keyof typeof UploadedFileScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    title: 'title',
    pageRange: 'pageRange',
    wordCount: 'wordCount',
    keyTopics: 'keyTopics',
    documentId: 'documentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const QuizScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    documentId: 'documentId',
    unitId: 'unitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuizScalarFieldEnum = (typeof QuizScalarFieldEnum)[keyof typeof QuizScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    question: 'question',
    options: 'options',
    correctAnswer: 'correctAnswer',
    reasoning: 'reasoning',
    documentId: 'documentId',
    unitId: 'unitId',
    quizId: 'quizId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UploadedFileWhereInput = {
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    id?: StringFilter<"UploadedFile"> | string
    fileName?: StringFilter<"UploadedFile"> | string
    fileSlug?: StringFilter<"UploadedFile"> | string
    filePath?: StringFilter<"UploadedFile"> | string
    subject?: StringFilter<"UploadedFile"> | string
    grade?: StringFilter<"UploadedFile"> | string
    pdfType?: StringFilter<"UploadedFile"> | string
    status?: StringFilter<"UploadedFile"> | string
    pageCount?: IntNullableFilter<"UploadedFile"> | number | null
    extractedContent?: BoolNullableFilter<"UploadedFile"> | boolean | null
    processingTime?: IntNullableFilter<"UploadedFile"> | number | null
    createdAt?: DateTimeFilter<"UploadedFile"> | Date | string
    updatedAt?: DateTimeFilter<"UploadedFile"> | Date | string
    units?: UnitListRelationFilter
    questions?: QuestionListRelationFilter
    quizzes?: QuizListRelationFilter
  }

  export type UploadedFileOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSlug?: SortOrder
    filePath?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    pdfType?: SortOrder
    status?: SortOrder
    pageCount?: SortOrderInput | SortOrder
    extractedContent?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    units?: UnitOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type UploadedFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fileSlug?: string
    AND?: UploadedFileWhereInput | UploadedFileWhereInput[]
    OR?: UploadedFileWhereInput[]
    NOT?: UploadedFileWhereInput | UploadedFileWhereInput[]
    fileName?: StringFilter<"UploadedFile"> | string
    filePath?: StringFilter<"UploadedFile"> | string
    subject?: StringFilter<"UploadedFile"> | string
    grade?: StringFilter<"UploadedFile"> | string
    pdfType?: StringFilter<"UploadedFile"> | string
    status?: StringFilter<"UploadedFile"> | string
    pageCount?: IntNullableFilter<"UploadedFile"> | number | null
    extractedContent?: BoolNullableFilter<"UploadedFile"> | boolean | null
    processingTime?: IntNullableFilter<"UploadedFile"> | number | null
    createdAt?: DateTimeFilter<"UploadedFile"> | Date | string
    updatedAt?: DateTimeFilter<"UploadedFile"> | Date | string
    units?: UnitListRelationFilter
    questions?: QuestionListRelationFilter
    quizzes?: QuizListRelationFilter
  }, "id" | "fileSlug">

  export type UploadedFileOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSlug?: SortOrder
    filePath?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    pdfType?: SortOrder
    status?: SortOrder
    pageCount?: SortOrderInput | SortOrder
    extractedContent?: SortOrderInput | SortOrder
    processingTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UploadedFileCountOrderByAggregateInput
    _avg?: UploadedFileAvgOrderByAggregateInput
    _max?: UploadedFileMaxOrderByAggregateInput
    _min?: UploadedFileMinOrderByAggregateInput
    _sum?: UploadedFileSumOrderByAggregateInput
  }

  export type UploadedFileScalarWhereWithAggregatesInput = {
    AND?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    OR?: UploadedFileScalarWhereWithAggregatesInput[]
    NOT?: UploadedFileScalarWhereWithAggregatesInput | UploadedFileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UploadedFile"> | string
    fileName?: StringWithAggregatesFilter<"UploadedFile"> | string
    fileSlug?: StringWithAggregatesFilter<"UploadedFile"> | string
    filePath?: StringWithAggregatesFilter<"UploadedFile"> | string
    subject?: StringWithAggregatesFilter<"UploadedFile"> | string
    grade?: StringWithAggregatesFilter<"UploadedFile"> | string
    pdfType?: StringWithAggregatesFilter<"UploadedFile"> | string
    status?: StringWithAggregatesFilter<"UploadedFile"> | string
    pageCount?: IntNullableWithAggregatesFilter<"UploadedFile"> | number | null
    extractedContent?: BoolNullableWithAggregatesFilter<"UploadedFile"> | boolean | null
    processingTime?: IntNullableWithAggregatesFilter<"UploadedFile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UploadedFile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UploadedFile"> | Date | string
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    title?: StringFilter<"Unit"> | string
    pageRange?: StringFilter<"Unit"> | string
    wordCount?: IntFilter<"Unit"> | number
    keyTopics?: StringNullableListFilter<"Unit">
    documentId?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    document?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
    questions?: QuestionListRelationFilter
    quizzes?: QuizListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    pageRange?: SortOrder
    wordCount?: SortOrder
    keyTopics?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: UploadedFileOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
    quizzes?: QuizOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    title?: StringFilter<"Unit"> | string
    pageRange?: StringFilter<"Unit"> | string
    wordCount?: IntFilter<"Unit"> | number
    keyTopics?: StringNullableListFilter<"Unit">
    documentId?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
    document?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
    questions?: QuestionListRelationFilter
    quizzes?: QuizListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    pageRange?: SortOrder
    wordCount?: SortOrder
    keyTopics?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    title?: StringWithAggregatesFilter<"Unit"> | string
    pageRange?: StringWithAggregatesFilter<"Unit"> | string
    wordCount?: IntWithAggregatesFilter<"Unit"> | number
    keyTopics?: StringNullableListFilter<"Unit">
    documentId?: StringWithAggregatesFilter<"Unit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Unit"> | Date | string
  }

  export type QuizWhereInput = {
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    difficulty?: StringFilter<"Quiz"> | string
    documentId?: StringFilter<"Quiz"> | string
    unitId?: StringNullableFilter<"Quiz"> | string | null
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    document?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    questions?: QuestionListRelationFilter
  }

  export type QuizOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: UploadedFileOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type QuizWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuizWhereInput | QuizWhereInput[]
    OR?: QuizWhereInput[]
    NOT?: QuizWhereInput | QuizWhereInput[]
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    difficulty?: StringFilter<"Quiz"> | string
    documentId?: StringFilter<"Quiz"> | string
    unitId?: StringNullableFilter<"Quiz"> | string | null
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
    document?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    questions?: QuestionListRelationFilter
  }, "id">

  export type QuizOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    difficulty?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuizCountOrderByAggregateInput
    _max?: QuizMaxOrderByAggregateInput
    _min?: QuizMinOrderByAggregateInput
  }

  export type QuizScalarWhereWithAggregatesInput = {
    AND?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    OR?: QuizScalarWhereWithAggregatesInput[]
    NOT?: QuizScalarWhereWithAggregatesInput | QuizScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Quiz"> | string
    title?: StringWithAggregatesFilter<"Quiz"> | string
    description?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    difficulty?: StringWithAggregatesFilter<"Quiz"> | string
    documentId?: StringWithAggregatesFilter<"Quiz"> | string
    unitId?: StringNullableWithAggregatesFilter<"Quiz"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Quiz"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: IntFilter<"Question"> | number
    reasoning?: StringFilter<"Question"> | string
    documentId?: StringFilter<"Question"> | string
    unitId?: StringNullableFilter<"Question"> | string | null
    quizId?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    document?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    reasoning?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: UploadedFileOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    quiz?: QuizOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    type?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: IntFilter<"Question"> | number
    reasoning?: StringFilter<"Question"> | string
    documentId?: StringFilter<"Question"> | string
    unitId?: StringNullableFilter<"Question"> | string | null
    quizId?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    document?: XOR<UploadedFileScalarRelationFilter, UploadedFileWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
    quiz?: XOR<QuizNullableScalarRelationFilter, QuizWhereInput> | null
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    reasoning?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    quizId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    type?: StringWithAggregatesFilter<"Question"> | string
    question?: StringWithAggregatesFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: IntWithAggregatesFilter<"Question"> | number
    reasoning?: StringWithAggregatesFilter<"Question"> | string
    documentId?: StringWithAggregatesFilter<"Question"> | string
    unitId?: StringNullableWithAggregatesFilter<"Question"> | string | null
    quizId?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type UploadedFileCreateInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutDocumentInput
    questions?: QuestionCreateNestedManyWithoutDocumentInput
    quizzes?: QuizCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileUncheckedCreateInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutDocumentInput
    questions?: QuestionUncheckedCreateNestedManyWithoutDocumentInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutDocumentNestedInput
    questions?: QuestionUpdateManyWithoutDocumentNestedInput
    quizzes?: QuizUpdateManyWithoutDocumentNestedInput
  }

  export type UploadedFileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutDocumentNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutDocumentNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UploadedFileCreateManyInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UploadedFileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UploadedFileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutUnitsInput
    questions?: QuestionCreateNestedManyWithoutUnitInput
    quizzes?: QuizCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    documentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUnitInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutUnitsNestedInput
    questions?: QuestionUpdateManyWithoutUnitNestedInput
    quizzes?: QuizUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUnitNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    documentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizCreateInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutQuizzesInput
    unit?: UnitCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    documentId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutQuizzesNestedInput
    unit?: UnitUpdateOneWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    documentId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutQuestionsInput
    unit?: UnitCreateNestedOneWithoutQuestionsInput
    quiz?: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    unitId?: string | null
    quizId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutQuestionsNestedInput
    unit?: UnitUpdateOneWithoutQuestionsNestedInput
    quiz?: QuizUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    unitId?: string | null
    quizId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuizListRelationFilter = {
    every?: QuizWhereInput
    some?: QuizWhereInput
    none?: QuizWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuizOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UploadedFileCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSlug?: SortOrder
    filePath?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    pdfType?: SortOrder
    status?: SortOrder
    pageCount?: SortOrder
    extractedContent?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadedFileAvgOrderByAggregateInput = {
    pageCount?: SortOrder
    processingTime?: SortOrder
  }

  export type UploadedFileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSlug?: SortOrder
    filePath?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    pdfType?: SortOrder
    status?: SortOrder
    pageCount?: SortOrder
    extractedContent?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadedFileMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileSlug?: SortOrder
    filePath?: SortOrder
    subject?: SortOrder
    grade?: SortOrder
    pdfType?: SortOrder
    status?: SortOrder
    pageCount?: SortOrder
    extractedContent?: SortOrder
    processingTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UploadedFileSumOrderByAggregateInput = {
    pageCount?: SortOrder
    processingTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UploadedFileScalarRelationFilter = {
    is?: UploadedFileWhereInput
    isNot?: UploadedFileWhereInput
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pageRange?: SortOrder
    wordCount?: SortOrder
    keyTopics?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    wordCount?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pageRange?: SortOrder
    wordCount?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    pageRange?: SortOrder
    wordCount?: SortOrder
    documentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    wordCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type QuizCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuizMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type QuizNullableScalarRelationFilter = {
    is?: QuizWhereInput | null
    isNot?: QuizWhereInput | null
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    question?: SortOrder
    options?: SortOrder
    correctAnswer?: SortOrder
    reasoning?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    correctAnswer?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    reasoning?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    question?: SortOrder
    correctAnswer?: SortOrder
    reasoning?: SortOrder
    documentId?: SortOrder
    unitId?: SortOrder
    quizId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    correctAnswer?: SortOrder
  }

  export type UnitCreateNestedManyWithoutDocumentInput = {
    create?: XOR<UnitCreateWithoutDocumentInput, UnitUncheckedCreateWithoutDocumentInput> | UnitCreateWithoutDocumentInput[] | UnitUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutDocumentInput | UnitCreateOrConnectWithoutDocumentInput[]
    createMany?: UnitCreateManyDocumentInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutDocumentInput = {
    create?: XOR<QuestionCreateWithoutDocumentInput, QuestionUncheckedCreateWithoutDocumentInput> | QuestionCreateWithoutDocumentInput[] | QuestionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDocumentInput | QuestionCreateOrConnectWithoutDocumentInput[]
    createMany?: QuestionCreateManyDocumentInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutDocumentInput = {
    create?: XOR<QuizCreateWithoutDocumentInput, QuizUncheckedCreateWithoutDocumentInput> | QuizCreateWithoutDocumentInput[] | QuizUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutDocumentInput | QuizCreateOrConnectWithoutDocumentInput[]
    createMany?: QuizCreateManyDocumentInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<UnitCreateWithoutDocumentInput, UnitUncheckedCreateWithoutDocumentInput> | UnitCreateWithoutDocumentInput[] | UnitUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutDocumentInput | UnitCreateOrConnectWithoutDocumentInput[]
    createMany?: UnitCreateManyDocumentInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<QuestionCreateWithoutDocumentInput, QuestionUncheckedCreateWithoutDocumentInput> | QuestionCreateWithoutDocumentInput[] | QuestionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDocumentInput | QuestionCreateOrConnectWithoutDocumentInput[]
    createMany?: QuestionCreateManyDocumentInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<QuizCreateWithoutDocumentInput, QuizUncheckedCreateWithoutDocumentInput> | QuizCreateWithoutDocumentInput[] | QuizUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutDocumentInput | QuizCreateOrConnectWithoutDocumentInput[]
    createMany?: QuizCreateManyDocumentInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<UnitCreateWithoutDocumentInput, UnitUncheckedCreateWithoutDocumentInput> | UnitCreateWithoutDocumentInput[] | UnitUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutDocumentInput | UnitCreateOrConnectWithoutDocumentInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutDocumentInput | UnitUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: UnitCreateManyDocumentInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutDocumentInput | UnitUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutDocumentInput | UnitUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<QuestionCreateWithoutDocumentInput, QuestionUncheckedCreateWithoutDocumentInput> | QuestionCreateWithoutDocumentInput[] | QuestionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDocumentInput | QuestionCreateOrConnectWithoutDocumentInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutDocumentInput | QuestionUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: QuestionCreateManyDocumentInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutDocumentInput | QuestionUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutDocumentInput | QuestionUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<QuizCreateWithoutDocumentInput, QuizUncheckedCreateWithoutDocumentInput> | QuizCreateWithoutDocumentInput[] | QuizUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutDocumentInput | QuizCreateOrConnectWithoutDocumentInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutDocumentInput | QuizUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: QuizCreateManyDocumentInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutDocumentInput | QuizUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutDocumentInput | QuizUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<UnitCreateWithoutDocumentInput, UnitUncheckedCreateWithoutDocumentInput> | UnitCreateWithoutDocumentInput[] | UnitUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutDocumentInput | UnitCreateOrConnectWithoutDocumentInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutDocumentInput | UnitUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: UnitCreateManyDocumentInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutDocumentInput | UnitUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutDocumentInput | UnitUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<QuestionCreateWithoutDocumentInput, QuestionUncheckedCreateWithoutDocumentInput> | QuestionCreateWithoutDocumentInput[] | QuestionUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutDocumentInput | QuestionCreateOrConnectWithoutDocumentInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutDocumentInput | QuestionUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: QuestionCreateManyDocumentInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutDocumentInput | QuestionUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutDocumentInput | QuestionUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<QuizCreateWithoutDocumentInput, QuizUncheckedCreateWithoutDocumentInput> | QuizCreateWithoutDocumentInput[] | QuizUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutDocumentInput | QuizCreateOrConnectWithoutDocumentInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutDocumentInput | QuizUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: QuizCreateManyDocumentInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutDocumentInput | QuizUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutDocumentInput | QuizUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UnitCreatekeyTopicsInput = {
    set: string[]
  }

  export type UploadedFileCreateNestedOneWithoutUnitsInput = {
    create?: XOR<UploadedFileCreateWithoutUnitsInput, UploadedFileUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutUnitsInput
    connect?: UploadedFileWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutUnitInput = {
    create?: XOR<QuestionCreateWithoutUnitInput, QuestionUncheckedCreateWithoutUnitInput> | QuestionCreateWithoutUnitInput[] | QuestionUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUnitInput | QuestionCreateOrConnectWithoutUnitInput[]
    createMany?: QuestionCreateManyUnitInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizCreateNestedManyWithoutUnitInput = {
    create?: XOR<QuizCreateWithoutUnitInput, QuizUncheckedCreateWithoutUnitInput> | QuizCreateWithoutUnitInput[] | QuizUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUnitInput | QuizCreateOrConnectWithoutUnitInput[]
    createMany?: QuizCreateManyUnitInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<QuestionCreateWithoutUnitInput, QuestionUncheckedCreateWithoutUnitInput> | QuestionCreateWithoutUnitInput[] | QuestionUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUnitInput | QuestionCreateOrConnectWithoutUnitInput[]
    createMany?: QuestionCreateManyUnitInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuizUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<QuizCreateWithoutUnitInput, QuizUncheckedCreateWithoutUnitInput> | QuizCreateWithoutUnitInput[] | QuizUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUnitInput | QuizCreateOrConnectWithoutUnitInput[]
    createMany?: QuizCreateManyUnitInputEnvelope
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnitUpdatekeyTopicsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UploadedFileUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<UploadedFileCreateWithoutUnitsInput, UploadedFileUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutUnitsInput
    upsert?: UploadedFileUpsertWithoutUnitsInput
    connect?: UploadedFileWhereUniqueInput
    update?: XOR<XOR<UploadedFileUpdateToOneWithWhereWithoutUnitsInput, UploadedFileUpdateWithoutUnitsInput>, UploadedFileUncheckedUpdateWithoutUnitsInput>
  }

  export type QuestionUpdateManyWithoutUnitNestedInput = {
    create?: XOR<QuestionCreateWithoutUnitInput, QuestionUncheckedCreateWithoutUnitInput> | QuestionCreateWithoutUnitInput[] | QuestionUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUnitInput | QuestionCreateOrConnectWithoutUnitInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUnitInput | QuestionUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: QuestionCreateManyUnitInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUnitInput | QuestionUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUnitInput | QuestionUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizUpdateManyWithoutUnitNestedInput = {
    create?: XOR<QuizCreateWithoutUnitInput, QuizUncheckedCreateWithoutUnitInput> | QuizCreateWithoutUnitInput[] | QuizUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUnitInput | QuizCreateOrConnectWithoutUnitInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutUnitInput | QuizUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: QuizCreateManyUnitInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutUnitInput | QuizUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutUnitInput | QuizUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<QuestionCreateWithoutUnitInput, QuestionUncheckedCreateWithoutUnitInput> | QuestionCreateWithoutUnitInput[] | QuestionUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUnitInput | QuestionCreateOrConnectWithoutUnitInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUnitInput | QuestionUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: QuestionCreateManyUnitInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUnitInput | QuestionUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUnitInput | QuestionUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuizUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<QuizCreateWithoutUnitInput, QuizUncheckedCreateWithoutUnitInput> | QuizCreateWithoutUnitInput[] | QuizUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: QuizCreateOrConnectWithoutUnitInput | QuizCreateOrConnectWithoutUnitInput[]
    upsert?: QuizUpsertWithWhereUniqueWithoutUnitInput | QuizUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: QuizCreateManyUnitInputEnvelope
    set?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    disconnect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    delete?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    connect?: QuizWhereUniqueInput | QuizWhereUniqueInput[]
    update?: QuizUpdateWithWhereUniqueWithoutUnitInput | QuizUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: QuizUpdateManyWithWhereWithoutUnitInput | QuizUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: QuizScalarWhereInput | QuizScalarWhereInput[]
  }

  export type UploadedFileCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<UploadedFileCreateWithoutQuizzesInput, UploadedFileUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutQuizzesInput
    connect?: UploadedFileWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutQuizzesInput = {
    create?: XOR<UnitCreateWithoutQuizzesInput, UnitUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutQuizzesInput
    connect?: UnitWhereUniqueInput
  }

  export type QuestionCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutQuizInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UploadedFileUpdateOneRequiredWithoutQuizzesNestedInput = {
    create?: XOR<UploadedFileCreateWithoutQuizzesInput, UploadedFileUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutQuizzesInput
    upsert?: UploadedFileUpsertWithoutQuizzesInput
    connect?: UploadedFileWhereUniqueInput
    update?: XOR<XOR<UploadedFileUpdateToOneWithWhereWithoutQuizzesInput, UploadedFileUpdateWithoutQuizzesInput>, UploadedFileUncheckedUpdateWithoutQuizzesInput>
  }

  export type UnitUpdateOneWithoutQuizzesNestedInput = {
    create?: XOR<UnitCreateWithoutQuizzesInput, UnitUncheckedCreateWithoutQuizzesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutQuizzesInput
    upsert?: UnitUpsertWithoutQuizzesInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutQuizzesInput, UnitUpdateWithoutQuizzesInput>, UnitUncheckedUpdateWithoutQuizzesInput>
  }

  export type QuestionUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutQuizNestedInput = {
    create?: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput> | QuestionCreateWithoutQuizInput[] | QuestionUncheckedCreateWithoutQuizInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutQuizInput | QuestionCreateOrConnectWithoutQuizInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutQuizInput | QuestionUpsertWithWhereUniqueWithoutQuizInput[]
    createMany?: QuestionCreateManyQuizInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutQuizInput | QuestionUpdateWithWhereUniqueWithoutQuizInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutQuizInput | QuestionUpdateManyWithWhereWithoutQuizInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionCreateoptionsInput = {
    set: string[]
  }

  export type UploadedFileCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UploadedFileCreateWithoutQuestionsInput, UploadedFileUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutQuestionsInput
    connect?: UploadedFileWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<UnitCreateWithoutQuestionsInput, UnitUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutQuestionsInput
    connect?: UnitWhereUniqueInput
  }

  export type QuizCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    connect?: QuizWhereUniqueInput
  }

  export type QuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UploadedFileUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<UploadedFileCreateWithoutQuestionsInput, UploadedFileUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UploadedFileCreateOrConnectWithoutQuestionsInput
    upsert?: UploadedFileUpsertWithoutQuestionsInput
    connect?: UploadedFileWhereUniqueInput
    update?: XOR<XOR<UploadedFileUpdateToOneWithWhereWithoutQuestionsInput, UploadedFileUpdateWithoutQuestionsInput>, UploadedFileUncheckedUpdateWithoutQuestionsInput>
  }

  export type UnitUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<UnitCreateWithoutQuestionsInput, UnitUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutQuestionsInput
    upsert?: UnitUpsertWithoutQuestionsInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutQuestionsInput, UnitUpdateWithoutQuestionsInput>, UnitUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: QuizCreateOrConnectWithoutQuestionsInput
    upsert?: QuizUpsertWithoutQuestionsInput
    disconnect?: QuizWhereInput | boolean
    delete?: QuizWhereInput | boolean
    connect?: QuizWhereUniqueInput
    update?: XOR<XOR<QuizUpdateToOneWithWhereWithoutQuestionsInput, QuizUpdateWithoutQuestionsInput>, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UnitCreateWithoutDocumentInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutUnitInput
    quizzes?: QuizCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutDocumentInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUnitInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutDocumentInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutDocumentInput, UnitUncheckedCreateWithoutDocumentInput>
  }

  export type UnitCreateManyDocumentInputEnvelope = {
    data: UnitCreateManyDocumentInput | UnitCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutDocumentInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutQuestionsInput
    quiz?: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutDocumentInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    unitId?: string | null
    quizId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutDocumentInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutDocumentInput, QuestionUncheckedCreateWithoutDocumentInput>
  }

  export type QuestionCreateManyDocumentInputEnvelope = {
    data: QuestionCreateManyDocumentInput | QuestionCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutDocumentInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    unit?: UnitCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutDocumentInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutDocumentInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutDocumentInput, QuizUncheckedCreateWithoutDocumentInput>
  }

  export type QuizCreateManyDocumentInputEnvelope = {
    data: QuizCreateManyDocumentInput | QuizCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type UnitUpsertWithWhereUniqueWithoutDocumentInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutDocumentInput, UnitUncheckedUpdateWithoutDocumentInput>
    create: XOR<UnitCreateWithoutDocumentInput, UnitUncheckedCreateWithoutDocumentInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutDocumentInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutDocumentInput, UnitUncheckedUpdateWithoutDocumentInput>
  }

  export type UnitUpdateManyWithWhereWithoutDocumentInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutDocumentInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    title?: StringFilter<"Unit"> | string
    pageRange?: StringFilter<"Unit"> | string
    wordCount?: IntFilter<"Unit"> | number
    keyTopics?: StringNullableListFilter<"Unit">
    documentId?: StringFilter<"Unit"> | string
    createdAt?: DateTimeFilter<"Unit"> | Date | string
    updatedAt?: DateTimeFilter<"Unit"> | Date | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutDocumentInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutDocumentInput, QuestionUncheckedUpdateWithoutDocumentInput>
    create: XOR<QuestionCreateWithoutDocumentInput, QuestionUncheckedCreateWithoutDocumentInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutDocumentInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutDocumentInput, QuestionUncheckedUpdateWithoutDocumentInput>
  }

  export type QuestionUpdateManyWithWhereWithoutDocumentInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutDocumentInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    type?: StringFilter<"Question"> | string
    question?: StringFilter<"Question"> | string
    options?: StringNullableListFilter<"Question">
    correctAnswer?: IntFilter<"Question"> | number
    reasoning?: StringFilter<"Question"> | string
    documentId?: StringFilter<"Question"> | string
    unitId?: StringNullableFilter<"Question"> | string | null
    quizId?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type QuizUpsertWithWhereUniqueWithoutDocumentInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutDocumentInput, QuizUncheckedUpdateWithoutDocumentInput>
    create: XOR<QuizCreateWithoutDocumentInput, QuizUncheckedCreateWithoutDocumentInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutDocumentInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutDocumentInput, QuizUncheckedUpdateWithoutDocumentInput>
  }

  export type QuizUpdateManyWithWhereWithoutDocumentInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutDocumentInput>
  }

  export type QuizScalarWhereInput = {
    AND?: QuizScalarWhereInput | QuizScalarWhereInput[]
    OR?: QuizScalarWhereInput[]
    NOT?: QuizScalarWhereInput | QuizScalarWhereInput[]
    id?: StringFilter<"Quiz"> | string
    title?: StringFilter<"Quiz"> | string
    description?: StringNullableFilter<"Quiz"> | string | null
    difficulty?: StringFilter<"Quiz"> | string
    documentId?: StringFilter<"Quiz"> | string
    unitId?: StringNullableFilter<"Quiz"> | string | null
    createdAt?: DateTimeFilter<"Quiz"> | Date | string
    updatedAt?: DateTimeFilter<"Quiz"> | Date | string
  }

  export type UploadedFileCreateWithoutUnitsInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutDocumentInput
    quizzes?: QuizCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileUncheckedCreateWithoutUnitsInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutDocumentInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileCreateOrConnectWithoutUnitsInput = {
    where: UploadedFileWhereUniqueInput
    create: XOR<UploadedFileCreateWithoutUnitsInput, UploadedFileUncheckedCreateWithoutUnitsInput>
  }

  export type QuestionCreateWithoutUnitInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutQuestionsInput
    quiz?: QuizCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutUnitInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    quizId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutUnitInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUnitInput, QuestionUncheckedCreateWithoutUnitInput>
  }

  export type QuestionCreateManyUnitInputEnvelope = {
    data: QuestionCreateManyUnitInput | QuestionCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type QuizCreateWithoutUnitInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutQuizzesInput
    questions?: QuestionCreateNestedManyWithoutQuizInput
  }

  export type QuizUncheckedCreateWithoutUnitInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    documentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutQuizInput
  }

  export type QuizCreateOrConnectWithoutUnitInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutUnitInput, QuizUncheckedCreateWithoutUnitInput>
  }

  export type QuizCreateManyUnitInputEnvelope = {
    data: QuizCreateManyUnitInput | QuizCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type UploadedFileUpsertWithoutUnitsInput = {
    update: XOR<UploadedFileUpdateWithoutUnitsInput, UploadedFileUncheckedUpdateWithoutUnitsInput>
    create: XOR<UploadedFileCreateWithoutUnitsInput, UploadedFileUncheckedCreateWithoutUnitsInput>
    where?: UploadedFileWhereInput
  }

  export type UploadedFileUpdateToOneWithWhereWithoutUnitsInput = {
    where?: UploadedFileWhereInput
    data: XOR<UploadedFileUpdateWithoutUnitsInput, UploadedFileUncheckedUpdateWithoutUnitsInput>
  }

  export type UploadedFileUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutDocumentNestedInput
    quizzes?: QuizUpdateManyWithoutDocumentNestedInput
  }

  export type UploadedFileUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutDocumentNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutUnitInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUnitInput, QuestionUncheckedUpdateWithoutUnitInput>
    create: XOR<QuestionCreateWithoutUnitInput, QuestionUncheckedCreateWithoutUnitInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUnitInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUnitInput, QuestionUncheckedUpdateWithoutUnitInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUnitInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUnitInput>
  }

  export type QuizUpsertWithWhereUniqueWithoutUnitInput = {
    where: QuizWhereUniqueInput
    update: XOR<QuizUpdateWithoutUnitInput, QuizUncheckedUpdateWithoutUnitInput>
    create: XOR<QuizCreateWithoutUnitInput, QuizUncheckedCreateWithoutUnitInput>
  }

  export type QuizUpdateWithWhereUniqueWithoutUnitInput = {
    where: QuizWhereUniqueInput
    data: XOR<QuizUpdateWithoutUnitInput, QuizUncheckedUpdateWithoutUnitInput>
  }

  export type QuizUpdateManyWithWhereWithoutUnitInput = {
    where: QuizScalarWhereInput
    data: XOR<QuizUpdateManyMutationInput, QuizUncheckedUpdateManyWithoutUnitInput>
  }

  export type UploadedFileCreateWithoutQuizzesInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutDocumentInput
    questions?: QuestionCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileUncheckedCreateWithoutQuizzesInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutDocumentInput
    questions?: QuestionUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileCreateOrConnectWithoutQuizzesInput = {
    where: UploadedFileWhereUniqueInput
    create: XOR<UploadedFileCreateWithoutQuizzesInput, UploadedFileUncheckedCreateWithoutQuizzesInput>
  }

  export type UnitCreateWithoutQuizzesInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutUnitsInput
    questions?: QuestionCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutQuizzesInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    documentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutQuizzesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutQuizzesInput, UnitUncheckedCreateWithoutQuizzesInput>
  }

  export type QuestionCreateWithoutQuizInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutQuestionsInput
    unit?: UnitCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutQuizInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionCreateManyQuizInputEnvelope = {
    data: QuestionCreateManyQuizInput | QuestionCreateManyQuizInput[]
    skipDuplicates?: boolean
  }

  export type UploadedFileUpsertWithoutQuizzesInput = {
    update: XOR<UploadedFileUpdateWithoutQuizzesInput, UploadedFileUncheckedUpdateWithoutQuizzesInput>
    create: XOR<UploadedFileCreateWithoutQuizzesInput, UploadedFileUncheckedCreateWithoutQuizzesInput>
    where?: UploadedFileWhereInput
  }

  export type UploadedFileUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: UploadedFileWhereInput
    data: XOR<UploadedFileUpdateWithoutQuizzesInput, UploadedFileUncheckedUpdateWithoutQuizzesInput>
  }

  export type UploadedFileUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutDocumentNestedInput
    questions?: QuestionUpdateManyWithoutDocumentNestedInput
  }

  export type UploadedFileUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutDocumentNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UnitUpsertWithoutQuizzesInput = {
    update: XOR<UnitUpdateWithoutQuizzesInput, UnitUncheckedUpdateWithoutQuizzesInput>
    create: XOR<UnitCreateWithoutQuizzesInput, UnitUncheckedCreateWithoutQuizzesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutQuizzesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutQuizzesInput, UnitUncheckedUpdateWithoutQuizzesInput>
  }

  export type UnitUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutUnitsNestedInput
    questions?: QuestionUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutQuizzesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type QuestionUpsertWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
    create: XOR<QuestionCreateWithoutQuizInput, QuestionUncheckedCreateWithoutQuizInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutQuizInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutQuizInput, QuestionUncheckedUpdateWithoutQuizInput>
  }

  export type QuestionUpdateManyWithWhereWithoutQuizInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutQuizInput>
  }

  export type UploadedFileCreateWithoutQuestionsInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitCreateNestedManyWithoutDocumentInput
    quizzes?: QuizCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileUncheckedCreateWithoutQuestionsInput = {
    id?: string
    fileName: string
    fileSlug: string
    filePath: string
    subject: string
    grade: string
    pdfType: string
    status?: string
    pageCount?: number | null
    extractedContent?: boolean | null
    processingTime?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    units?: UnitUncheckedCreateNestedManyWithoutDocumentInput
    quizzes?: QuizUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type UploadedFileCreateOrConnectWithoutQuestionsInput = {
    where: UploadedFileWhereUniqueInput
    create: XOR<UploadedFileCreateWithoutQuestionsInput, UploadedFileUncheckedCreateWithoutQuestionsInput>
  }

  export type UnitCreateWithoutQuestionsInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutUnitsInput
    quizzes?: QuizCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    documentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    quizzes?: QuizUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutQuestionsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutQuestionsInput, UnitUncheckedCreateWithoutQuestionsInput>
  }

  export type QuizCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    document: UploadedFileCreateNestedOneWithoutQuizzesInput
    unit?: UnitCreateNestedOneWithoutQuizzesInput
  }

  export type QuizUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    documentId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateOrConnectWithoutQuestionsInput = {
    where: QuizWhereUniqueInput
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
  }

  export type UploadedFileUpsertWithoutQuestionsInput = {
    update: XOR<UploadedFileUpdateWithoutQuestionsInput, UploadedFileUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UploadedFileCreateWithoutQuestionsInput, UploadedFileUncheckedCreateWithoutQuestionsInput>
    where?: UploadedFileWhereInput
  }

  export type UploadedFileUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UploadedFileWhereInput
    data: XOR<UploadedFileUpdateWithoutQuestionsInput, UploadedFileUncheckedUpdateWithoutQuestionsInput>
  }

  export type UploadedFileUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUpdateManyWithoutDocumentNestedInput
    quizzes?: QuizUpdateManyWithoutDocumentNestedInput
  }

  export type UploadedFileUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileSlug?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    pdfType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    extractedContent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    processingTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    units?: UnitUncheckedUpdateManyWithoutDocumentNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type UnitUpsertWithoutQuestionsInput = {
    update: XOR<UnitUpdateWithoutQuestionsInput, UnitUncheckedUpdateWithoutQuestionsInput>
    create: XOR<UnitCreateWithoutQuestionsInput, UnitUncheckedCreateWithoutQuestionsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutQuestionsInput, UnitUncheckedUpdateWithoutQuestionsInput>
  }

  export type UnitUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutUnitsNestedInput
    quizzes?: QuizUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quizzes?: QuizUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type QuizUpsertWithoutQuestionsInput = {
    update: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
    create: XOR<QuizCreateWithoutQuestionsInput, QuizUncheckedCreateWithoutQuestionsInput>
    where?: QuizWhereInput
  }

  export type QuizUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: QuizWhereInput
    data: XOR<QuizUpdateWithoutQuestionsInput, QuizUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuizUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutQuizzesNestedInput
    unit?: UnitUpdateOneWithoutQuizzesNestedInput
  }

  export type QuizUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyDocumentInput = {
    id?: string
    title: string
    pageRange: string
    wordCount: number
    keyTopics?: UnitCreatekeyTopicsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateManyDocumentInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    unitId?: string | null
    quizId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateManyDocumentInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UnitUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutUnitNestedInput
    quizzes?: QuizUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutUnitNestedInput
    quizzes?: QuizUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    wordCount?: IntFieldUpdateOperationsInput | number
    keyTopics?: UnitUpdatekeyTopicsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutQuestionsNestedInput
    quiz?: QuizUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyUnitInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    quizId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuizCreateManyUnitInput = {
    id?: string
    title: string
    description?: string | null
    difficulty: string
    documentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutQuestionsNestedInput
    quiz?: QuizUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    quizId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuizUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutQuizzesNestedInput
    questions?: QuestionUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutQuizNestedInput
  }

  export type QuizUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    difficulty?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyQuizInput = {
    id?: string
    type: string
    question: string
    options?: QuestionCreateoptionsInput | string[]
    correctAnswer: number
    reasoning: string
    documentId: string
    unitId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: UploadedFileUpdateOneRequiredWithoutQuestionsNestedInput
    unit?: UnitUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutQuizInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    options?: QuestionUpdateoptionsInput | string[]
    correctAnswer?: IntFieldUpdateOperationsInput | number
    reasoning?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}