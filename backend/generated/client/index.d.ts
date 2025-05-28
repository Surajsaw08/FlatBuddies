
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Flat
 * 
 */
export type Flat = $Result.DefaultSelection<Prisma.$FlatPayload>
/**
 * Model FlatmatePost
 * 
 */
export type FlatmatePost = $Result.DefaultSelection<Prisma.$FlatmatePostPayload>
/**
 * Model Preference
 * 
 */
export type Preference = $Result.DefaultSelection<Prisma.$PreferencePayload>
/**
 * Model Bookmark
 * 
 */
export type Bookmark = $Result.DefaultSelection<Prisma.$BookmarkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  ANY: 'ANY'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flat`: Exposes CRUD operations for the **Flat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flats
    * const flats = await prisma.flat.findMany()
    * ```
    */
  get flat(): Prisma.FlatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flatmatePost`: Exposes CRUD operations for the **FlatmatePost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlatmatePosts
    * const flatmatePosts = await prisma.flatmatePost.findMany()
    * ```
    */
  get flatmatePost(): Prisma.FlatmatePostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preference`: Exposes CRUD operations for the **Preference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preference.findMany()
    * ```
    */
  get preference(): Prisma.PreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookmark`: Exposes CRUD operations for the **Bookmark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookmarks
    * const bookmarks = await prisma.bookmark.findMany()
    * ```
    */
  get bookmark(): Prisma.BookmarkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Flat: 'Flat',
    FlatmatePost: 'FlatmatePost',
    Preference: 'Preference',
    Bookmark: 'Bookmark'
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
      modelProps: "user" | "flat" | "flatmatePost" | "preference" | "bookmark"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Flat: {
        payload: Prisma.$FlatPayload<ExtArgs>
        fields: Prisma.FlatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          findFirst: {
            args: Prisma.FlatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          findMany: {
            args: Prisma.FlatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          create: {
            args: Prisma.FlatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          createMany: {
            args: Prisma.FlatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          delete: {
            args: Prisma.FlatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          update: {
            args: Prisma.FlatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          deleteMany: {
            args: Prisma.FlatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>[]
          }
          upsert: {
            args: Prisma.FlatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatPayload>
          }
          aggregate: {
            args: Prisma.FlatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlat>
          }
          groupBy: {
            args: Prisma.FlatGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlatGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlatCountArgs<ExtArgs>
            result: $Utils.Optional<FlatCountAggregateOutputType> | number
          }
        }
      }
      FlatmatePost: {
        payload: Prisma.$FlatmatePostPayload<ExtArgs>
        fields: Prisma.FlatmatePostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlatmatePostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlatmatePostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>
          }
          findFirst: {
            args: Prisma.FlatmatePostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlatmatePostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>
          }
          findMany: {
            args: Prisma.FlatmatePostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>[]
          }
          create: {
            args: Prisma.FlatmatePostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>
          }
          createMany: {
            args: Prisma.FlatmatePostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlatmatePostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>[]
          }
          delete: {
            args: Prisma.FlatmatePostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>
          }
          update: {
            args: Prisma.FlatmatePostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>
          }
          deleteMany: {
            args: Prisma.FlatmatePostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlatmatePostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlatmatePostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>[]
          }
          upsert: {
            args: Prisma.FlatmatePostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlatmatePostPayload>
          }
          aggregate: {
            args: Prisma.FlatmatePostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlatmatePost>
          }
          groupBy: {
            args: Prisma.FlatmatePostGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlatmatePostGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlatmatePostCountArgs<ExtArgs>
            result: $Utils.Optional<FlatmatePostCountAggregateOutputType> | number
          }
        }
      }
      Preference: {
        payload: Prisma.$PreferencePayload<ExtArgs>
        fields: Prisma.PreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          findFirst: {
            args: Prisma.PreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          findMany: {
            args: Prisma.PreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          create: {
            args: Prisma.PreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          createMany: {
            args: Prisma.PreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          delete: {
            args: Prisma.PreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          update: {
            args: Prisma.PreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          deleteMany: {
            args: Prisma.PreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>[]
          }
          upsert: {
            args: Prisma.PreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencePayload>
          }
          aggregate: {
            args: Prisma.PreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreference>
          }
          groupBy: {
            args: Prisma.PreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<PreferenceCountAggregateOutputType> | number
          }
        }
      }
      Bookmark: {
        payload: Prisma.$BookmarkPayload<ExtArgs>
        fields: Prisma.BookmarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookmarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookmarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findFirst: {
            args: Prisma.BookmarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookmarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          findMany: {
            args: Prisma.BookmarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          create: {
            args: Prisma.BookmarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          createMany: {
            args: Prisma.BookmarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookmarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          delete: {
            args: Prisma.BookmarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          update: {
            args: Prisma.BookmarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          deleteMany: {
            args: Prisma.BookmarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookmarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookmarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>[]
          }
          upsert: {
            args: Prisma.BookmarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookmarkPayload>
          }
          aggregate: {
            args: Prisma.BookmarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookmark>
          }
          groupBy: {
            args: Prisma.BookmarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookmarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookmarkCountArgs<ExtArgs>
            result: $Utils.Optional<BookmarkCountAggregateOutputType> | number
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
    user?: UserOmit
    flat?: FlatOmit
    flatmatePost?: FlatmatePostOmit
    preference?: PreferenceOmit
    bookmark?: BookmarkOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    listings: number
    flatmatePosts: number
    bookmarks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listings?: boolean | UserCountOutputTypeCountListingsArgs
    flatmatePosts?: boolean | UserCountOutputTypeCountFlatmatePostsArgs
    bookmarks?: boolean | UserCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlatmatePostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatmatePostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type FlatCountOutputType
   */

  export type FlatCountOutputType = {
    bookmarks: number
  }

  export type FlatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | FlatCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatCountOutputType
     */
    select?: FlatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlatCountOutputType without action
   */
  export type FlatCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Count Type FlatmatePostCountOutputType
   */

  export type FlatmatePostCountOutputType = {
    bookmarks: number
  }

  export type FlatmatePostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookmarks?: boolean | FlatmatePostCountOutputTypeCountBookmarksArgs
  }

  // Custom InputTypes
  /**
   * FlatmatePostCountOutputType without action
   */
  export type FlatmatePostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePostCountOutputType
     */
    select?: FlatmatePostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlatmatePostCountOutputType without action
   */
  export type FlatmatePostCountOutputTypeCountBookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    age: number | null
  }

  export type UserSumAggregateOutputType = {
    age: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    phone: string | null
    password: string | null
    gender: $Enums.Gender | null
    age: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    phone: string | null
    password: string | null
    gender: $Enums.Gender | null
    age: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    phone: number
    password: number
    gender: number
    age: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    age?: true
  }

  export type UserSumAggregateInputType = {
    age?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    gender?: true
    age?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    gender?: true
    age?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    phone?: true
    password?: true
    gender?: true
    age?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    phone: string | null
    password: string
    gender: $Enums.Gender | null
    age: number | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    createdAt?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    listings?: boolean | User$listingsArgs<ExtArgs>
    flatmatePosts?: boolean | User$flatmatePostsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    gender?: boolean
    age?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "phone" | "password" | "gender" | "age" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    listings?: boolean | User$listingsArgs<ExtArgs>
    flatmatePosts?: boolean | User$flatmatePostsArgs<ExtArgs>
    bookmarks?: boolean | User$bookmarksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$PreferencePayload<ExtArgs> | null
      listings: Prisma.$FlatPayload<ExtArgs>[]
      flatmatePosts: Prisma.$FlatmatePostPayload<ExtArgs>[]
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      phone: string | null
      password: string
      gender: $Enums.Gender | null
      age: number | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    listings<T extends User$listingsArgs<ExtArgs> = {}>(args?: Subset<T, User$listingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flatmatePosts<T extends User$flatmatePostsArgs<ExtArgs> = {}>(args?: Subset<T, User$flatmatePostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookmarks<T extends User$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, User$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'Gender'>
    readonly age: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    where?: PreferenceWhereInput
  }

  /**
   * User.listings
   */
  export type User$listingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    cursor?: FlatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * User.flatmatePosts
   */
  export type User$flatmatePostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    where?: FlatmatePostWhereInput
    orderBy?: FlatmatePostOrderByWithRelationInput | FlatmatePostOrderByWithRelationInput[]
    cursor?: FlatmatePostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlatmatePostScalarFieldEnum | FlatmatePostScalarFieldEnum[]
  }

  /**
   * User.bookmarks
   */
  export type User$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Flat
   */

  export type AggregateFlat = {
    _count: FlatCountAggregateOutputType | null
    _avg: FlatAvgAggregateOutputType | null
    _sum: FlatSumAggregateOutputType | null
    _min: FlatMinAggregateOutputType | null
    _max: FlatMaxAggregateOutputType | null
  }

  export type FlatAvgAggregateOutputType = {
    rent: number | null
    roommates: number | null
  }

  export type FlatSumAggregateOutputType = {
    rent: number | null
    roommates: number | null
  }

  export type FlatMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    city: string | null
    address: string | null
    verified: boolean | null
    rent: number | null
    availableFrom: Date | null
    postedById: string | null
    roommates: number | null
    preferredGender: $Enums.Gender | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type FlatMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    city: string | null
    address: string | null
    verified: boolean | null
    rent: number | null
    availableFrom: Date | null
    postedById: string | null
    roommates: number | null
    preferredGender: $Enums.Gender | null
    isAvailable: boolean | null
    createdAt: Date | null
  }

  export type FlatCountAggregateOutputType = {
    id: number
    title: number
    description: number
    city: number
    address: number
    verified: number
    rent: number
    availableFrom: number
    postedById: number
    roommates: number
    preferredGender: number
    isAvailable: number
    createdAt: number
    _all: number
  }


  export type FlatAvgAggregateInputType = {
    rent?: true
    roommates?: true
  }

  export type FlatSumAggregateInputType = {
    rent?: true
    roommates?: true
  }

  export type FlatMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    city?: true
    address?: true
    verified?: true
    rent?: true
    availableFrom?: true
    postedById?: true
    roommates?: true
    preferredGender?: true
    isAvailable?: true
    createdAt?: true
  }

  export type FlatMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    city?: true
    address?: true
    verified?: true
    rent?: true
    availableFrom?: true
    postedById?: true
    roommates?: true
    preferredGender?: true
    isAvailable?: true
    createdAt?: true
  }

  export type FlatCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    city?: true
    address?: true
    verified?: true
    rent?: true
    availableFrom?: true
    postedById?: true
    roommates?: true
    preferredGender?: true
    isAvailable?: true
    createdAt?: true
    _all?: true
  }

  export type FlatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flat to aggregate.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flats
    **/
    _count?: true | FlatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlatMaxAggregateInputType
  }

  export type GetFlatAggregateType<T extends FlatAggregateArgs> = {
        [P in keyof T & keyof AggregateFlat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlat[P]>
      : GetScalarType<T[P], AggregateFlat[P]>
  }




  export type FlatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatWhereInput
    orderBy?: FlatOrderByWithAggregationInput | FlatOrderByWithAggregationInput[]
    by: FlatScalarFieldEnum[] | FlatScalarFieldEnum
    having?: FlatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlatCountAggregateInputType | true
    _avg?: FlatAvgAggregateInputType
    _sum?: FlatSumAggregateInputType
    _min?: FlatMinAggregateInputType
    _max?: FlatMaxAggregateInputType
  }

  export type FlatGroupByOutputType = {
    id: string
    title: string
    description: string
    city: string
    address: string
    verified: boolean
    rent: number
    availableFrom: Date
    postedById: string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable: boolean
    createdAt: Date
    _count: FlatCountAggregateOutputType | null
    _avg: FlatAvgAggregateOutputType | null
    _sum: FlatSumAggregateOutputType | null
    _min: FlatMinAggregateOutputType | null
    _max: FlatMaxAggregateOutputType | null
  }

  type GetFlatGroupByPayload<T extends FlatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlatGroupByOutputType[P]>
            : GetScalarType<T[P], FlatGroupByOutputType[P]>
        }
      >
    >


  export type FlatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    verified?: boolean
    rent?: boolean
    availableFrom?: boolean
    postedById?: boolean
    roommates?: boolean
    preferredGender?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    bookmarks?: boolean | Flat$bookmarksArgs<ExtArgs>
    _count?: boolean | FlatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>

  export type FlatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    verified?: boolean
    rent?: boolean
    availableFrom?: boolean
    postedById?: boolean
    roommates?: boolean
    preferredGender?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>

  export type FlatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    verified?: boolean
    rent?: boolean
    availableFrom?: boolean
    postedById?: boolean
    roommates?: boolean
    preferredGender?: boolean
    isAvailable?: boolean
    createdAt?: boolean
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flat"]>

  export type FlatSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    city?: boolean
    address?: boolean
    verified?: boolean
    rent?: boolean
    availableFrom?: boolean
    postedById?: boolean
    roommates?: boolean
    preferredGender?: boolean
    isAvailable?: boolean
    createdAt?: boolean
  }

  export type FlatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "city" | "address" | "verified" | "rent" | "availableFrom" | "postedById" | "roommates" | "preferredGender" | "isAvailable" | "createdAt", ExtArgs["result"]["flat"]>
  export type FlatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
    bookmarks?: boolean | Flat$bookmarksArgs<ExtArgs>
    _count?: boolean | FlatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flat"
    objects: {
      postedBy: Prisma.$UserPayload<ExtArgs>
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      city: string
      address: string
      verified: boolean
      rent: number
      availableFrom: Date
      postedById: string
      roommates: number
      preferredGender: $Enums.Gender
      isAvailable: boolean
      createdAt: Date
    }, ExtArgs["result"]["flat"]>
    composites: {}
  }

  type FlatGetPayload<S extends boolean | null | undefined | FlatDefaultArgs> = $Result.GetResult<Prisma.$FlatPayload, S>

  type FlatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlatCountAggregateInputType | true
    }

  export interface FlatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flat'], meta: { name: 'Flat' } }
    /**
     * Find zero or one Flat that matches the filter.
     * @param {FlatFindUniqueArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlatFindUniqueArgs>(args: SelectSubset<T, FlatFindUniqueArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlatFindUniqueOrThrowArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlatFindUniqueOrThrowArgs>(args: SelectSubset<T, FlatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindFirstArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlatFindFirstArgs>(args?: SelectSubset<T, FlatFindFirstArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindFirstOrThrowArgs} args - Arguments to find a Flat
     * @example
     * // Get one Flat
     * const flat = await prisma.flat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlatFindFirstOrThrowArgs>(args?: SelectSubset<T, FlatFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flats
     * const flats = await prisma.flat.findMany()
     * 
     * // Get first 10 Flats
     * const flats = await prisma.flat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flatWithIdOnly = await prisma.flat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlatFindManyArgs>(args?: SelectSubset<T, FlatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flat.
     * @param {FlatCreateArgs} args - Arguments to create a Flat.
     * @example
     * // Create one Flat
     * const Flat = await prisma.flat.create({
     *   data: {
     *     // ... data to create a Flat
     *   }
     * })
     * 
     */
    create<T extends FlatCreateArgs>(args: SelectSubset<T, FlatCreateArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flats.
     * @param {FlatCreateManyArgs} args - Arguments to create many Flats.
     * @example
     * // Create many Flats
     * const flat = await prisma.flat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlatCreateManyArgs>(args?: SelectSubset<T, FlatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flats and returns the data saved in the database.
     * @param {FlatCreateManyAndReturnArgs} args - Arguments to create many Flats.
     * @example
     * // Create many Flats
     * const flat = await prisma.flat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flats and only return the `id`
     * const flatWithIdOnly = await prisma.flat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlatCreateManyAndReturnArgs>(args?: SelectSubset<T, FlatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flat.
     * @param {FlatDeleteArgs} args - Arguments to delete one Flat.
     * @example
     * // Delete one Flat
     * const Flat = await prisma.flat.delete({
     *   where: {
     *     // ... filter to delete one Flat
     *   }
     * })
     * 
     */
    delete<T extends FlatDeleteArgs>(args: SelectSubset<T, FlatDeleteArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flat.
     * @param {FlatUpdateArgs} args - Arguments to update one Flat.
     * @example
     * // Update one Flat
     * const flat = await prisma.flat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlatUpdateArgs>(args: SelectSubset<T, FlatUpdateArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flats.
     * @param {FlatDeleteManyArgs} args - Arguments to filter Flats to delete.
     * @example
     * // Delete a few Flats
     * const { count } = await prisma.flat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlatDeleteManyArgs>(args?: SelectSubset<T, FlatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flats
     * const flat = await prisma.flat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlatUpdateManyArgs>(args: SelectSubset<T, FlatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flats and returns the data updated in the database.
     * @param {FlatUpdateManyAndReturnArgs} args - Arguments to update many Flats.
     * @example
     * // Update many Flats
     * const flat = await prisma.flat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flats and only return the `id`
     * const flatWithIdOnly = await prisma.flat.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlatUpdateManyAndReturnArgs>(args: SelectSubset<T, FlatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flat.
     * @param {FlatUpsertArgs} args - Arguments to update or create a Flat.
     * @example
     * // Update or create a Flat
     * const flat = await prisma.flat.upsert({
     *   create: {
     *     // ... data to create a Flat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flat we want to update
     *   }
     * })
     */
    upsert<T extends FlatUpsertArgs>(args: SelectSubset<T, FlatUpsertArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatCountArgs} args - Arguments to filter Flats to count.
     * @example
     * // Count the number of Flats
     * const count = await prisma.flat.count({
     *   where: {
     *     // ... the filter for the Flats we want to count
     *   }
     * })
    **/
    count<T extends FlatCountArgs>(
      args?: Subset<T, FlatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlatAggregateArgs>(args: Subset<T, FlatAggregateArgs>): Prisma.PrismaPromise<GetFlatAggregateType<T>>

    /**
     * Group by Flat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatGroupByArgs} args - Group by arguments.
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
      T extends FlatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlatGroupByArgs['orderBy'] }
        : { orderBy?: FlatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flat model
   */
  readonly fields: FlatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookmarks<T extends Flat$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, Flat$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Flat model
   */
  interface FlatFieldRefs {
    readonly id: FieldRef<"Flat", 'String'>
    readonly title: FieldRef<"Flat", 'String'>
    readonly description: FieldRef<"Flat", 'String'>
    readonly city: FieldRef<"Flat", 'String'>
    readonly address: FieldRef<"Flat", 'String'>
    readonly verified: FieldRef<"Flat", 'Boolean'>
    readonly rent: FieldRef<"Flat", 'Int'>
    readonly availableFrom: FieldRef<"Flat", 'DateTime'>
    readonly postedById: FieldRef<"Flat", 'String'>
    readonly roommates: FieldRef<"Flat", 'Int'>
    readonly preferredGender: FieldRef<"Flat", 'Gender'>
    readonly isAvailable: FieldRef<"Flat", 'Boolean'>
    readonly createdAt: FieldRef<"Flat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flat findUnique
   */
  export type FlatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat findUniqueOrThrow
   */
  export type FlatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat findFirst
   */
  export type FlatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat findFirstOrThrow
   */
  export type FlatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flat to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flats.
     */
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat findMany
   */
  export type FlatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter, which Flats to fetch.
     */
    where?: FlatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flats to fetch.
     */
    orderBy?: FlatOrderByWithRelationInput | FlatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flats.
     */
    cursor?: FlatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flats.
     */
    skip?: number
    distinct?: FlatScalarFieldEnum | FlatScalarFieldEnum[]
  }

  /**
   * Flat create
   */
  export type FlatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The data needed to create a Flat.
     */
    data: XOR<FlatCreateInput, FlatUncheckedCreateInput>
  }

  /**
   * Flat createMany
   */
  export type FlatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flats.
     */
    data: FlatCreateManyInput | FlatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flat createManyAndReturn
   */
  export type FlatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * The data used to create many Flats.
     */
    data: FlatCreateManyInput | FlatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flat update
   */
  export type FlatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The data needed to update a Flat.
     */
    data: XOR<FlatUpdateInput, FlatUncheckedUpdateInput>
    /**
     * Choose, which Flat to update.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat updateMany
   */
  export type FlatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flats.
     */
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyInput>
    /**
     * Filter which Flats to update
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to update.
     */
    limit?: number
  }

  /**
   * Flat updateManyAndReturn
   */
  export type FlatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * The data used to update Flats.
     */
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyInput>
    /**
     * Filter which Flats to update
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flat upsert
   */
  export type FlatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * The filter to search for the Flat to update in case it exists.
     */
    where: FlatWhereUniqueInput
    /**
     * In case the Flat found by the `where` argument doesn't exist, create a new Flat with this data.
     */
    create: XOR<FlatCreateInput, FlatUncheckedCreateInput>
    /**
     * In case the Flat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlatUpdateInput, FlatUncheckedUpdateInput>
  }

  /**
   * Flat delete
   */
  export type FlatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    /**
     * Filter which Flat to delete.
     */
    where: FlatWhereUniqueInput
  }

  /**
   * Flat deleteMany
   */
  export type FlatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flats to delete
     */
    where?: FlatWhereInput
    /**
     * Limit how many Flats to delete.
     */
    limit?: number
  }

  /**
   * Flat.bookmarks
   */
  export type Flat$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Flat without action
   */
  export type FlatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
  }


  /**
   * Model FlatmatePost
   */

  export type AggregateFlatmatePost = {
    _count: FlatmatePostCountAggregateOutputType | null
    _avg: FlatmatePostAvgAggregateOutputType | null
    _sum: FlatmatePostSumAggregateOutputType | null
    _min: FlatmatePostMinAggregateOutputType | null
    _max: FlatmatePostMaxAggregateOutputType | null
  }

  export type FlatmatePostAvgAggregateOutputType = {
    budgetMin: number | null
    budgetMax: number | null
    ageMin: number | null
    ageMax: number | null
  }

  export type FlatmatePostSumAggregateOutputType = {
    budgetMin: number | null
    budgetMax: number | null
    ageMin: number | null
    ageMax: number | null
  }

  export type FlatmatePostMinAggregateOutputType = {
    id: string | null
    userId: string | null
    city: string | null
    budgetMin: number | null
    budgetMax: number | null
    ageMin: number | null
    ageMax: number | null
    preferredGender: $Enums.Gender | null
    moveInDate: Date | null
    occupation: string | null
    habits: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FlatmatePostMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    city: string | null
    budgetMin: number | null
    budgetMax: number | null
    ageMin: number | null
    ageMax: number | null
    preferredGender: $Enums.Gender | null
    moveInDate: Date | null
    occupation: string | null
    habits: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FlatmatePostCountAggregateOutputType = {
    id: number
    userId: number
    city: number
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: number
    moveInDate: number
    occupation: number
    habits: number
    description: number
    createdAt: number
    _all: number
  }


  export type FlatmatePostAvgAggregateInputType = {
    budgetMin?: true
    budgetMax?: true
    ageMin?: true
    ageMax?: true
  }

  export type FlatmatePostSumAggregateInputType = {
    budgetMin?: true
    budgetMax?: true
    ageMin?: true
    ageMax?: true
  }

  export type FlatmatePostMinAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    budgetMin?: true
    budgetMax?: true
    ageMin?: true
    ageMax?: true
    preferredGender?: true
    moveInDate?: true
    occupation?: true
    habits?: true
    description?: true
    createdAt?: true
  }

  export type FlatmatePostMaxAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    budgetMin?: true
    budgetMax?: true
    ageMin?: true
    ageMax?: true
    preferredGender?: true
    moveInDate?: true
    occupation?: true
    habits?: true
    description?: true
    createdAt?: true
  }

  export type FlatmatePostCountAggregateInputType = {
    id?: true
    userId?: true
    city?: true
    budgetMin?: true
    budgetMax?: true
    ageMin?: true
    ageMax?: true
    preferredGender?: true
    moveInDate?: true
    occupation?: true
    habits?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type FlatmatePostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlatmatePost to aggregate.
     */
    where?: FlatmatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlatmatePosts to fetch.
     */
    orderBy?: FlatmatePostOrderByWithRelationInput | FlatmatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlatmatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlatmatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlatmatePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlatmatePosts
    **/
    _count?: true | FlatmatePostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlatmatePostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlatmatePostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlatmatePostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlatmatePostMaxAggregateInputType
  }

  export type GetFlatmatePostAggregateType<T extends FlatmatePostAggregateArgs> = {
        [P in keyof T & keyof AggregateFlatmatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlatmatePost[P]>
      : GetScalarType<T[P], AggregateFlatmatePost[P]>
  }




  export type FlatmatePostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlatmatePostWhereInput
    orderBy?: FlatmatePostOrderByWithAggregationInput | FlatmatePostOrderByWithAggregationInput[]
    by: FlatmatePostScalarFieldEnum[] | FlatmatePostScalarFieldEnum
    having?: FlatmatePostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlatmatePostCountAggregateInputType | true
    _avg?: FlatmatePostAvgAggregateInputType
    _sum?: FlatmatePostSumAggregateInputType
    _min?: FlatmatePostMinAggregateInputType
    _max?: FlatmatePostMaxAggregateInputType
  }

  export type FlatmatePostGroupByOutputType = {
    id: string
    userId: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date
    occupation: string | null
    habits: string | null
    description: string | null
    createdAt: Date
    _count: FlatmatePostCountAggregateOutputType | null
    _avg: FlatmatePostAvgAggregateOutputType | null
    _sum: FlatmatePostSumAggregateOutputType | null
    _min: FlatmatePostMinAggregateOutputType | null
    _max: FlatmatePostMaxAggregateOutputType | null
  }

  type GetFlatmatePostGroupByPayload<T extends FlatmatePostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlatmatePostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlatmatePostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlatmatePostGroupByOutputType[P]>
            : GetScalarType<T[P], FlatmatePostGroupByOutputType[P]>
        }
      >
    >


  export type FlatmatePostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    ageMin?: boolean
    ageMax?: boolean
    preferredGender?: boolean
    moveInDate?: boolean
    occupation?: boolean
    habits?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookmarks?: boolean | FlatmatePost$bookmarksArgs<ExtArgs>
    _count?: boolean | FlatmatePostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flatmatePost"]>

  export type FlatmatePostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    ageMin?: boolean
    ageMax?: boolean
    preferredGender?: boolean
    moveInDate?: boolean
    occupation?: boolean
    habits?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flatmatePost"]>

  export type FlatmatePostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    ageMin?: boolean
    ageMax?: boolean
    preferredGender?: boolean
    moveInDate?: boolean
    occupation?: boolean
    habits?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flatmatePost"]>

  export type FlatmatePostSelectScalar = {
    id?: boolean
    userId?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    ageMin?: boolean
    ageMax?: boolean
    preferredGender?: boolean
    moveInDate?: boolean
    occupation?: boolean
    habits?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type FlatmatePostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "city" | "budgetMin" | "budgetMax" | "ageMin" | "ageMax" | "preferredGender" | "moveInDate" | "occupation" | "habits" | "description" | "createdAt", ExtArgs["result"]["flatmatePost"]>
  export type FlatmatePostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookmarks?: boolean | FlatmatePost$bookmarksArgs<ExtArgs>
    _count?: boolean | FlatmatePostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlatmatePostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FlatmatePostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlatmatePostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlatmatePost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bookmarks: Prisma.$BookmarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      city: string
      budgetMin: number
      budgetMax: number
      ageMin: number
      ageMax: number
      preferredGender: $Enums.Gender
      moveInDate: Date
      occupation: string | null
      habits: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["flatmatePost"]>
    composites: {}
  }

  type FlatmatePostGetPayload<S extends boolean | null | undefined | FlatmatePostDefaultArgs> = $Result.GetResult<Prisma.$FlatmatePostPayload, S>

  type FlatmatePostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlatmatePostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlatmatePostCountAggregateInputType | true
    }

  export interface FlatmatePostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlatmatePost'], meta: { name: 'FlatmatePost' } }
    /**
     * Find zero or one FlatmatePost that matches the filter.
     * @param {FlatmatePostFindUniqueArgs} args - Arguments to find a FlatmatePost
     * @example
     * // Get one FlatmatePost
     * const flatmatePost = await prisma.flatmatePost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlatmatePostFindUniqueArgs>(args: SelectSubset<T, FlatmatePostFindUniqueArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlatmatePost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlatmatePostFindUniqueOrThrowArgs} args - Arguments to find a FlatmatePost
     * @example
     * // Get one FlatmatePost
     * const flatmatePost = await prisma.flatmatePost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlatmatePostFindUniqueOrThrowArgs>(args: SelectSubset<T, FlatmatePostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlatmatePost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostFindFirstArgs} args - Arguments to find a FlatmatePost
     * @example
     * // Get one FlatmatePost
     * const flatmatePost = await prisma.flatmatePost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlatmatePostFindFirstArgs>(args?: SelectSubset<T, FlatmatePostFindFirstArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlatmatePost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostFindFirstOrThrowArgs} args - Arguments to find a FlatmatePost
     * @example
     * // Get one FlatmatePost
     * const flatmatePost = await prisma.flatmatePost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlatmatePostFindFirstOrThrowArgs>(args?: SelectSubset<T, FlatmatePostFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlatmatePosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlatmatePosts
     * const flatmatePosts = await prisma.flatmatePost.findMany()
     * 
     * // Get first 10 FlatmatePosts
     * const flatmatePosts = await prisma.flatmatePost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flatmatePostWithIdOnly = await prisma.flatmatePost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlatmatePostFindManyArgs>(args?: SelectSubset<T, FlatmatePostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlatmatePost.
     * @param {FlatmatePostCreateArgs} args - Arguments to create a FlatmatePost.
     * @example
     * // Create one FlatmatePost
     * const FlatmatePost = await prisma.flatmatePost.create({
     *   data: {
     *     // ... data to create a FlatmatePost
     *   }
     * })
     * 
     */
    create<T extends FlatmatePostCreateArgs>(args: SelectSubset<T, FlatmatePostCreateArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlatmatePosts.
     * @param {FlatmatePostCreateManyArgs} args - Arguments to create many FlatmatePosts.
     * @example
     * // Create many FlatmatePosts
     * const flatmatePost = await prisma.flatmatePost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlatmatePostCreateManyArgs>(args?: SelectSubset<T, FlatmatePostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlatmatePosts and returns the data saved in the database.
     * @param {FlatmatePostCreateManyAndReturnArgs} args - Arguments to create many FlatmatePosts.
     * @example
     * // Create many FlatmatePosts
     * const flatmatePost = await prisma.flatmatePost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlatmatePosts and only return the `id`
     * const flatmatePostWithIdOnly = await prisma.flatmatePost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlatmatePostCreateManyAndReturnArgs>(args?: SelectSubset<T, FlatmatePostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlatmatePost.
     * @param {FlatmatePostDeleteArgs} args - Arguments to delete one FlatmatePost.
     * @example
     * // Delete one FlatmatePost
     * const FlatmatePost = await prisma.flatmatePost.delete({
     *   where: {
     *     // ... filter to delete one FlatmatePost
     *   }
     * })
     * 
     */
    delete<T extends FlatmatePostDeleteArgs>(args: SelectSubset<T, FlatmatePostDeleteArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlatmatePost.
     * @param {FlatmatePostUpdateArgs} args - Arguments to update one FlatmatePost.
     * @example
     * // Update one FlatmatePost
     * const flatmatePost = await prisma.flatmatePost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlatmatePostUpdateArgs>(args: SelectSubset<T, FlatmatePostUpdateArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlatmatePosts.
     * @param {FlatmatePostDeleteManyArgs} args - Arguments to filter FlatmatePosts to delete.
     * @example
     * // Delete a few FlatmatePosts
     * const { count } = await prisma.flatmatePost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlatmatePostDeleteManyArgs>(args?: SelectSubset<T, FlatmatePostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlatmatePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlatmatePosts
     * const flatmatePost = await prisma.flatmatePost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlatmatePostUpdateManyArgs>(args: SelectSubset<T, FlatmatePostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlatmatePosts and returns the data updated in the database.
     * @param {FlatmatePostUpdateManyAndReturnArgs} args - Arguments to update many FlatmatePosts.
     * @example
     * // Update many FlatmatePosts
     * const flatmatePost = await prisma.flatmatePost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlatmatePosts and only return the `id`
     * const flatmatePostWithIdOnly = await prisma.flatmatePost.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlatmatePostUpdateManyAndReturnArgs>(args: SelectSubset<T, FlatmatePostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlatmatePost.
     * @param {FlatmatePostUpsertArgs} args - Arguments to update or create a FlatmatePost.
     * @example
     * // Update or create a FlatmatePost
     * const flatmatePost = await prisma.flatmatePost.upsert({
     *   create: {
     *     // ... data to create a FlatmatePost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlatmatePost we want to update
     *   }
     * })
     */
    upsert<T extends FlatmatePostUpsertArgs>(args: SelectSubset<T, FlatmatePostUpsertArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlatmatePosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostCountArgs} args - Arguments to filter FlatmatePosts to count.
     * @example
     * // Count the number of FlatmatePosts
     * const count = await prisma.flatmatePost.count({
     *   where: {
     *     // ... the filter for the FlatmatePosts we want to count
     *   }
     * })
    **/
    count<T extends FlatmatePostCountArgs>(
      args?: Subset<T, FlatmatePostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlatmatePostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlatmatePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlatmatePostAggregateArgs>(args: Subset<T, FlatmatePostAggregateArgs>): Prisma.PrismaPromise<GetFlatmatePostAggregateType<T>>

    /**
     * Group by FlatmatePost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlatmatePostGroupByArgs} args - Group by arguments.
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
      T extends FlatmatePostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlatmatePostGroupByArgs['orderBy'] }
        : { orderBy?: FlatmatePostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlatmatePostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlatmatePostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlatmatePost model
   */
  readonly fields: FlatmatePostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlatmatePost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlatmatePostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookmarks<T extends FlatmatePost$bookmarksArgs<ExtArgs> = {}>(args?: Subset<T, FlatmatePost$bookmarksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the FlatmatePost model
   */
  interface FlatmatePostFieldRefs {
    readonly id: FieldRef<"FlatmatePost", 'String'>
    readonly userId: FieldRef<"FlatmatePost", 'String'>
    readonly city: FieldRef<"FlatmatePost", 'String'>
    readonly budgetMin: FieldRef<"FlatmatePost", 'Int'>
    readonly budgetMax: FieldRef<"FlatmatePost", 'Int'>
    readonly ageMin: FieldRef<"FlatmatePost", 'Int'>
    readonly ageMax: FieldRef<"FlatmatePost", 'Int'>
    readonly preferredGender: FieldRef<"FlatmatePost", 'Gender'>
    readonly moveInDate: FieldRef<"FlatmatePost", 'DateTime'>
    readonly occupation: FieldRef<"FlatmatePost", 'String'>
    readonly habits: FieldRef<"FlatmatePost", 'String'>
    readonly description: FieldRef<"FlatmatePost", 'String'>
    readonly createdAt: FieldRef<"FlatmatePost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlatmatePost findUnique
   */
  export type FlatmatePostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * Filter, which FlatmatePost to fetch.
     */
    where: FlatmatePostWhereUniqueInput
  }

  /**
   * FlatmatePost findUniqueOrThrow
   */
  export type FlatmatePostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * Filter, which FlatmatePost to fetch.
     */
    where: FlatmatePostWhereUniqueInput
  }

  /**
   * FlatmatePost findFirst
   */
  export type FlatmatePostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * Filter, which FlatmatePost to fetch.
     */
    where?: FlatmatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlatmatePosts to fetch.
     */
    orderBy?: FlatmatePostOrderByWithRelationInput | FlatmatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlatmatePosts.
     */
    cursor?: FlatmatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlatmatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlatmatePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlatmatePosts.
     */
    distinct?: FlatmatePostScalarFieldEnum | FlatmatePostScalarFieldEnum[]
  }

  /**
   * FlatmatePost findFirstOrThrow
   */
  export type FlatmatePostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * Filter, which FlatmatePost to fetch.
     */
    where?: FlatmatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlatmatePosts to fetch.
     */
    orderBy?: FlatmatePostOrderByWithRelationInput | FlatmatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlatmatePosts.
     */
    cursor?: FlatmatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlatmatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlatmatePosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlatmatePosts.
     */
    distinct?: FlatmatePostScalarFieldEnum | FlatmatePostScalarFieldEnum[]
  }

  /**
   * FlatmatePost findMany
   */
  export type FlatmatePostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * Filter, which FlatmatePosts to fetch.
     */
    where?: FlatmatePostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlatmatePosts to fetch.
     */
    orderBy?: FlatmatePostOrderByWithRelationInput | FlatmatePostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlatmatePosts.
     */
    cursor?: FlatmatePostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlatmatePosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlatmatePosts.
     */
    skip?: number
    distinct?: FlatmatePostScalarFieldEnum | FlatmatePostScalarFieldEnum[]
  }

  /**
   * FlatmatePost create
   */
  export type FlatmatePostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * The data needed to create a FlatmatePost.
     */
    data: XOR<FlatmatePostCreateInput, FlatmatePostUncheckedCreateInput>
  }

  /**
   * FlatmatePost createMany
   */
  export type FlatmatePostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlatmatePosts.
     */
    data: FlatmatePostCreateManyInput | FlatmatePostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlatmatePost createManyAndReturn
   */
  export type FlatmatePostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * The data used to create many FlatmatePosts.
     */
    data: FlatmatePostCreateManyInput | FlatmatePostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlatmatePost update
   */
  export type FlatmatePostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * The data needed to update a FlatmatePost.
     */
    data: XOR<FlatmatePostUpdateInput, FlatmatePostUncheckedUpdateInput>
    /**
     * Choose, which FlatmatePost to update.
     */
    where: FlatmatePostWhereUniqueInput
  }

  /**
   * FlatmatePost updateMany
   */
  export type FlatmatePostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlatmatePosts.
     */
    data: XOR<FlatmatePostUpdateManyMutationInput, FlatmatePostUncheckedUpdateManyInput>
    /**
     * Filter which FlatmatePosts to update
     */
    where?: FlatmatePostWhereInput
    /**
     * Limit how many FlatmatePosts to update.
     */
    limit?: number
  }

  /**
   * FlatmatePost updateManyAndReturn
   */
  export type FlatmatePostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * The data used to update FlatmatePosts.
     */
    data: XOR<FlatmatePostUpdateManyMutationInput, FlatmatePostUncheckedUpdateManyInput>
    /**
     * Filter which FlatmatePosts to update
     */
    where?: FlatmatePostWhereInput
    /**
     * Limit how many FlatmatePosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlatmatePost upsert
   */
  export type FlatmatePostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * The filter to search for the FlatmatePost to update in case it exists.
     */
    where: FlatmatePostWhereUniqueInput
    /**
     * In case the FlatmatePost found by the `where` argument doesn't exist, create a new FlatmatePost with this data.
     */
    create: XOR<FlatmatePostCreateInput, FlatmatePostUncheckedCreateInput>
    /**
     * In case the FlatmatePost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlatmatePostUpdateInput, FlatmatePostUncheckedUpdateInput>
  }

  /**
   * FlatmatePost delete
   */
  export type FlatmatePostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    /**
     * Filter which FlatmatePost to delete.
     */
    where: FlatmatePostWhereUniqueInput
  }

  /**
   * FlatmatePost deleteMany
   */
  export type FlatmatePostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlatmatePosts to delete
     */
    where?: FlatmatePostWhereInput
    /**
     * Limit how many FlatmatePosts to delete.
     */
    limit?: number
  }

  /**
   * FlatmatePost.bookmarks
   */
  export type FlatmatePost$bookmarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    cursor?: BookmarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * FlatmatePost without action
   */
  export type FlatmatePostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
  }


  /**
   * Model Preference
   */

  export type AggregatePreference = {
    _count: PreferenceCountAggregateOutputType | null
    _avg: PreferenceAvgAggregateOutputType | null
    _sum: PreferenceSumAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  export type PreferenceAvgAggregateOutputType = {
    budgetMin: number | null
    budgetMax: number | null
  }

  export type PreferenceSumAggregateOutputType = {
    budgetMin: number | null
    budgetMax: number | null
  }

  export type PreferenceMinAggregateOutputType = {
    id: string | null
    city: string | null
    budgetMin: number | null
    budgetMax: number | null
    preferredGender: $Enums.Gender | null
    userId: string | null
  }

  export type PreferenceMaxAggregateOutputType = {
    id: string | null
    city: string | null
    budgetMin: number | null
    budgetMax: number | null
    preferredGender: $Enums.Gender | null
    userId: string | null
  }

  export type PreferenceCountAggregateOutputType = {
    id: number
    city: number
    budgetMin: number
    budgetMax: number
    preferredGender: number
    userId: number
    _all: number
  }


  export type PreferenceAvgAggregateInputType = {
    budgetMin?: true
    budgetMax?: true
  }

  export type PreferenceSumAggregateInputType = {
    budgetMin?: true
    budgetMax?: true
  }

  export type PreferenceMinAggregateInputType = {
    id?: true
    city?: true
    budgetMin?: true
    budgetMax?: true
    preferredGender?: true
    userId?: true
  }

  export type PreferenceMaxAggregateInputType = {
    id?: true
    city?: true
    budgetMin?: true
    budgetMax?: true
    preferredGender?: true
    userId?: true
  }

  export type PreferenceCountAggregateInputType = {
    id?: true
    city?: true
    budgetMin?: true
    budgetMax?: true
    preferredGender?: true
    userId?: true
    _all?: true
  }

  export type PreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preference to aggregate.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferenceMaxAggregateInputType
  }

  export type GetPreferenceAggregateType<T extends PreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreference[P]>
      : GetScalarType<T[P], AggregatePreference[P]>
  }




  export type PreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferenceWhereInput
    orderBy?: PreferenceOrderByWithAggregationInput | PreferenceOrderByWithAggregationInput[]
    by: PreferenceScalarFieldEnum[] | PreferenceScalarFieldEnum
    having?: PreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferenceCountAggregateInputType | true
    _avg?: PreferenceAvgAggregateInputType
    _sum?: PreferenceSumAggregateInputType
    _min?: PreferenceMinAggregateInputType
    _max?: PreferenceMaxAggregateInputType
  }

  export type PreferenceGroupByOutputType = {
    id: string
    city: string | null
    budgetMin: number | null
    budgetMax: number | null
    preferredGender: $Enums.Gender | null
    userId: string
    _count: PreferenceCountAggregateOutputType | null
    _avg: PreferenceAvgAggregateOutputType | null
    _sum: PreferenceSumAggregateOutputType | null
    _min: PreferenceMinAggregateOutputType | null
    _max: PreferenceMaxAggregateOutputType | null
  }

  type GetPreferenceGroupByPayload<T extends PreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], PreferenceGroupByOutputType[P]>
        }
      >
    >


  export type PreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredGender?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredGender?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredGender?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preference"]>

  export type PreferenceSelectScalar = {
    id?: boolean
    city?: boolean
    budgetMin?: boolean
    budgetMax?: boolean
    preferredGender?: boolean
    userId?: boolean
  }

  export type PreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "budgetMin" | "budgetMax" | "preferredGender" | "userId", ExtArgs["result"]["preference"]>
  export type PreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preference"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      city: string | null
      budgetMin: number | null
      budgetMax: number | null
      preferredGender: $Enums.Gender | null
      userId: string
    }, ExtArgs["result"]["preference"]>
    composites: {}
  }

  type PreferenceGetPayload<S extends boolean | null | undefined | PreferenceDefaultArgs> = $Result.GetResult<Prisma.$PreferencePayload, S>

  type PreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferenceCountAggregateInputType | true
    }

  export interface PreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preference'], meta: { name: 'Preference' } }
    /**
     * Find zero or one Preference that matches the filter.
     * @param {PreferenceFindUniqueArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferenceFindUniqueArgs>(args: SelectSubset<T, PreferenceFindUniqueArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferenceFindUniqueOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindFirstArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferenceFindFirstArgs>(args?: SelectSubset<T, PreferenceFindFirstArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindFirstOrThrowArgs} args - Arguments to find a Preference
     * @example
     * // Get one Preference
     * const preference = await prisma.preference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preference.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preferenceWithIdOnly = await prisma.preference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreferenceFindManyArgs>(args?: SelectSubset<T, PreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preference.
     * @param {PreferenceCreateArgs} args - Arguments to create a Preference.
     * @example
     * // Create one Preference
     * const Preference = await prisma.preference.create({
     *   data: {
     *     // ... data to create a Preference
     *   }
     * })
     * 
     */
    create<T extends PreferenceCreateArgs>(args: SelectSubset<T, PreferenceCreateArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferenceCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferenceCreateManyArgs>(args?: SelectSubset<T, PreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferenceCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preference = await prisma.preference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preference.
     * @param {PreferenceDeleteArgs} args - Arguments to delete one Preference.
     * @example
     * // Delete one Preference
     * const Preference = await prisma.preference.delete({
     *   where: {
     *     // ... filter to delete one Preference
     *   }
     * })
     * 
     */
    delete<T extends PreferenceDeleteArgs>(args: SelectSubset<T, PreferenceDeleteArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preference.
     * @param {PreferenceUpdateArgs} args - Arguments to update one Preference.
     * @example
     * // Update one Preference
     * const preference = await prisma.preference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferenceUpdateArgs>(args: SelectSubset<T, PreferenceUpdateArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferenceDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferenceDeleteManyArgs>(args?: SelectSubset<T, PreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferenceUpdateManyArgs>(args: SelectSubset<T, PreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferenceUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preference = await prisma.preference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `id`
     * const preferenceWithIdOnly = await prisma.preference.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preference.
     * @param {PreferenceUpsertArgs} args - Arguments to update or create a Preference.
     * @example
     * // Update or create a Preference
     * const preference = await prisma.preference.upsert({
     *   create: {
     *     // ... data to create a Preference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preference we want to update
     *   }
     * })
     */
    upsert<T extends PreferenceUpsertArgs>(args: SelectSubset<T, PreferenceUpsertArgs<ExtArgs>>): Prisma__PreferenceClient<$Result.GetResult<Prisma.$PreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preference.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferenceCountArgs>(
      args?: Subset<T, PreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferenceAggregateArgs>(args: Subset<T, PreferenceAggregateArgs>): Prisma.PrismaPromise<GetPreferenceAggregateType<T>>

    /**
     * Group by Preference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferenceGroupByArgs} args - Group by arguments.
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
      T extends PreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferenceGroupByArgs['orderBy'] }
        : { orderBy?: PreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preference model
   */
  readonly fields: PreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Preference model
   */
  interface PreferenceFieldRefs {
    readonly id: FieldRef<"Preference", 'String'>
    readonly city: FieldRef<"Preference", 'String'>
    readonly budgetMin: FieldRef<"Preference", 'Int'>
    readonly budgetMax: FieldRef<"Preference", 'Int'>
    readonly preferredGender: FieldRef<"Preference", 'Gender'>
    readonly userId: FieldRef<"Preference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Preference findUnique
   */
  export type PreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference findUniqueOrThrow
   */
  export type PreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference findFirst
   */
  export type PreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference findFirstOrThrow
   */
  export type PreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preference to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference findMany
   */
  export type PreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferenceOrderByWithRelationInput | PreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferenceScalarFieldEnum | PreferenceScalarFieldEnum[]
  }

  /**
   * Preference create
   */
  export type PreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a Preference.
     */
    data: XOR<PreferenceCreateInput, PreferenceUncheckedCreateInput>
  }

  /**
   * Preference createMany
   */
  export type PreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferenceCreateManyInput | PreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preference createManyAndReturn
   */
  export type PreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferenceCreateManyInput | PreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preference update
   */
  export type PreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a Preference.
     */
    data: XOR<PreferenceUpdateInput, PreferenceUncheckedUpdateInput>
    /**
     * Choose, which Preference to update.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference updateMany
   */
  export type PreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferenceUpdateManyMutationInput, PreferenceUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preference updateManyAndReturn
   */
  export type PreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferenceUpdateManyMutationInput, PreferenceUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preference upsert
   */
  export type PreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the Preference to update in case it exists.
     */
    where: PreferenceWhereUniqueInput
    /**
     * In case the Preference found by the `where` argument doesn't exist, create a new Preference with this data.
     */
    create: XOR<PreferenceCreateInput, PreferenceUncheckedCreateInput>
    /**
     * In case the Preference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferenceUpdateInput, PreferenceUncheckedUpdateInput>
  }

  /**
   * Preference delete
   */
  export type PreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
    /**
     * Filter which Preference to delete.
     */
    where: PreferenceWhereUniqueInput
  }

  /**
   * Preference deleteMany
   */
  export type PreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferenceWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preference without action
   */
  export type PreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preference
     */
    select?: PreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preference
     */
    omit?: PreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Bookmark
   */

  export type AggregateBookmark = {
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  export type BookmarkMinAggregateOutputType = {
    id: string | null
    userId: string | null
    flatId: string | null
    flatmatePostId: string | null
    createdAt: Date | null
  }

  export type BookmarkMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    flatId: string | null
    flatmatePostId: string | null
    createdAt: Date | null
  }

  export type BookmarkCountAggregateOutputType = {
    id: number
    userId: number
    flatId: number
    flatmatePostId: number
    createdAt: number
    _all: number
  }


  export type BookmarkMinAggregateInputType = {
    id?: true
    userId?: true
    flatId?: true
    flatmatePostId?: true
    createdAt?: true
  }

  export type BookmarkMaxAggregateInputType = {
    id?: true
    userId?: true
    flatId?: true
    flatmatePostId?: true
    createdAt?: true
  }

  export type BookmarkCountAggregateInputType = {
    id?: true
    userId?: true
    flatId?: true
    flatmatePostId?: true
    createdAt?: true
    _all?: true
  }

  export type BookmarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmark to aggregate.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookmarks
    **/
    _count?: true | BookmarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookmarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookmarkMaxAggregateInputType
  }

  export type GetBookmarkAggregateType<T extends BookmarkAggregateArgs> = {
        [P in keyof T & keyof AggregateBookmark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookmark[P]>
      : GetScalarType<T[P], AggregateBookmark[P]>
  }




  export type BookmarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookmarkWhereInput
    orderBy?: BookmarkOrderByWithAggregationInput | BookmarkOrderByWithAggregationInput[]
    by: BookmarkScalarFieldEnum[] | BookmarkScalarFieldEnum
    having?: BookmarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookmarkCountAggregateInputType | true
    _min?: BookmarkMinAggregateInputType
    _max?: BookmarkMaxAggregateInputType
  }

  export type BookmarkGroupByOutputType = {
    id: string
    userId: string
    flatId: string | null
    flatmatePostId: string | null
    createdAt: Date
    _count: BookmarkCountAggregateOutputType | null
    _min: BookmarkMinAggregateOutputType | null
    _max: BookmarkMaxAggregateOutputType | null
  }

  type GetBookmarkGroupByPayload<T extends BookmarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookmarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookmarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
            : GetScalarType<T[P], BookmarkGroupByOutputType[P]>
        }
      >
    >


  export type BookmarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flatId?: boolean
    flatmatePostId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flat?: boolean | Bookmark$flatArgs<ExtArgs>
    flatmatePost?: boolean | Bookmark$flatmatePostArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flatId?: boolean
    flatmatePostId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flat?: boolean | Bookmark$flatArgs<ExtArgs>
    flatmatePost?: boolean | Bookmark$flatmatePostArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flatId?: boolean
    flatmatePostId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flat?: boolean | Bookmark$flatArgs<ExtArgs>
    flatmatePost?: boolean | Bookmark$flatmatePostArgs<ExtArgs>
  }, ExtArgs["result"]["bookmark"]>

  export type BookmarkSelectScalar = {
    id?: boolean
    userId?: boolean
    flatId?: boolean
    flatmatePostId?: boolean
    createdAt?: boolean
  }

  export type BookmarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "flatId" | "flatmatePostId" | "createdAt", ExtArgs["result"]["bookmark"]>
  export type BookmarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flat?: boolean | Bookmark$flatArgs<ExtArgs>
    flatmatePost?: boolean | Bookmark$flatmatePostArgs<ExtArgs>
  }
  export type BookmarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flat?: boolean | Bookmark$flatArgs<ExtArgs>
    flatmatePost?: boolean | Bookmark$flatmatePostArgs<ExtArgs>
  }
  export type BookmarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flat?: boolean | Bookmark$flatArgs<ExtArgs>
    flatmatePost?: boolean | Bookmark$flatmatePostArgs<ExtArgs>
  }

  export type $BookmarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookmark"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      flat: Prisma.$FlatPayload<ExtArgs> | null
      flatmatePost: Prisma.$FlatmatePostPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      flatId: string | null
      flatmatePostId: string | null
      createdAt: Date
    }, ExtArgs["result"]["bookmark"]>
    composites: {}
  }

  type BookmarkGetPayload<S extends boolean | null | undefined | BookmarkDefaultArgs> = $Result.GetResult<Prisma.$BookmarkPayload, S>

  type BookmarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookmarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookmarkCountAggregateInputType | true
    }

  export interface BookmarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookmark'], meta: { name: 'Bookmark' } }
    /**
     * Find zero or one Bookmark that matches the filter.
     * @param {BookmarkFindUniqueArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookmarkFindUniqueArgs>(args: SelectSubset<T, BookmarkFindUniqueArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bookmark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookmarkFindUniqueOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookmarkFindUniqueOrThrowArgs>(args: SelectSubset<T, BookmarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookmarkFindFirstArgs>(args?: SelectSubset<T, BookmarkFindFirstArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bookmark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindFirstOrThrowArgs} args - Arguments to find a Bookmark
     * @example
     * // Get one Bookmark
     * const bookmark = await prisma.bookmark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookmarkFindFirstOrThrowArgs>(args?: SelectSubset<T, BookmarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookmarks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookmarks
     * const bookmarks = await prisma.bookmark.findMany()
     * 
     * // Get first 10 Bookmarks
     * const bookmarks = await prisma.bookmark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookmarkFindManyArgs>(args?: SelectSubset<T, BookmarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bookmark.
     * @param {BookmarkCreateArgs} args - Arguments to create a Bookmark.
     * @example
     * // Create one Bookmark
     * const Bookmark = await prisma.bookmark.create({
     *   data: {
     *     // ... data to create a Bookmark
     *   }
     * })
     * 
     */
    create<T extends BookmarkCreateArgs>(args: SelectSubset<T, BookmarkCreateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookmarks.
     * @param {BookmarkCreateManyArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookmarkCreateManyArgs>(args?: SelectSubset<T, BookmarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookmarks and returns the data saved in the database.
     * @param {BookmarkCreateManyAndReturnArgs} args - Arguments to create many Bookmarks.
     * @example
     * // Create many Bookmarks
     * const bookmark = await prisma.bookmark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookmarkCreateManyAndReturnArgs>(args?: SelectSubset<T, BookmarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bookmark.
     * @param {BookmarkDeleteArgs} args - Arguments to delete one Bookmark.
     * @example
     * // Delete one Bookmark
     * const Bookmark = await prisma.bookmark.delete({
     *   where: {
     *     // ... filter to delete one Bookmark
     *   }
     * })
     * 
     */
    delete<T extends BookmarkDeleteArgs>(args: SelectSubset<T, BookmarkDeleteArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bookmark.
     * @param {BookmarkUpdateArgs} args - Arguments to update one Bookmark.
     * @example
     * // Update one Bookmark
     * const bookmark = await prisma.bookmark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookmarkUpdateArgs>(args: SelectSubset<T, BookmarkUpdateArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookmarks.
     * @param {BookmarkDeleteManyArgs} args - Arguments to filter Bookmarks to delete.
     * @example
     * // Delete a few Bookmarks
     * const { count } = await prisma.bookmark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookmarkDeleteManyArgs>(args?: SelectSubset<T, BookmarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookmarkUpdateManyArgs>(args: SelectSubset<T, BookmarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookmarks and returns the data updated in the database.
     * @param {BookmarkUpdateManyAndReturnArgs} args - Arguments to update many Bookmarks.
     * @example
     * // Update many Bookmarks
     * const bookmark = await prisma.bookmark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookmarks and only return the `id`
     * const bookmarkWithIdOnly = await prisma.bookmark.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookmarkUpdateManyAndReturnArgs>(args: SelectSubset<T, BookmarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bookmark.
     * @param {BookmarkUpsertArgs} args - Arguments to update or create a Bookmark.
     * @example
     * // Update or create a Bookmark
     * const bookmark = await prisma.bookmark.upsert({
     *   create: {
     *     // ... data to create a Bookmark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookmark we want to update
     *   }
     * })
     */
    upsert<T extends BookmarkUpsertArgs>(args: SelectSubset<T, BookmarkUpsertArgs<ExtArgs>>): Prisma__BookmarkClient<$Result.GetResult<Prisma.$BookmarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookmarks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkCountArgs} args - Arguments to filter Bookmarks to count.
     * @example
     * // Count the number of Bookmarks
     * const count = await prisma.bookmark.count({
     *   where: {
     *     // ... the filter for the Bookmarks we want to count
     *   }
     * })
    **/
    count<T extends BookmarkCountArgs>(
      args?: Subset<T, BookmarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookmarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookmarkAggregateArgs>(args: Subset<T, BookmarkAggregateArgs>): Prisma.PrismaPromise<GetBookmarkAggregateType<T>>

    /**
     * Group by Bookmark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookmarkGroupByArgs} args - Group by arguments.
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
      T extends BookmarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookmarkGroupByArgs['orderBy'] }
        : { orderBy?: BookmarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookmarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookmarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookmark model
   */
  readonly fields: BookmarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookmark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookmarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flat<T extends Bookmark$flatArgs<ExtArgs> = {}>(args?: Subset<T, Bookmark$flatArgs<ExtArgs>>): Prisma__FlatClient<$Result.GetResult<Prisma.$FlatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flatmatePost<T extends Bookmark$flatmatePostArgs<ExtArgs> = {}>(args?: Subset<T, Bookmark$flatmatePostArgs<ExtArgs>>): Prisma__FlatmatePostClient<$Result.GetResult<Prisma.$FlatmatePostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Bookmark model
   */
  interface BookmarkFieldRefs {
    readonly id: FieldRef<"Bookmark", 'String'>
    readonly userId: FieldRef<"Bookmark", 'String'>
    readonly flatId: FieldRef<"Bookmark", 'String'>
    readonly flatmatePostId: FieldRef<"Bookmark", 'String'>
    readonly createdAt: FieldRef<"Bookmark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bookmark findUnique
   */
  export type BookmarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findUniqueOrThrow
   */
  export type BookmarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark findFirst
   */
  export type BookmarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findFirstOrThrow
   */
  export type BookmarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmark to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookmarks.
     */
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark findMany
   */
  export type BookmarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter, which Bookmarks to fetch.
     */
    where?: BookmarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookmarks to fetch.
     */
    orderBy?: BookmarkOrderByWithRelationInput | BookmarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookmarks.
     */
    cursor?: BookmarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookmarks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookmarks.
     */
    skip?: number
    distinct?: BookmarkScalarFieldEnum | BookmarkScalarFieldEnum[]
  }

  /**
   * Bookmark create
   */
  export type BookmarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookmark.
     */
    data: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
  }

  /**
   * Bookmark createMany
   */
  export type BookmarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bookmark createManyAndReturn
   */
  export type BookmarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to create many Bookmarks.
     */
    data: BookmarkCreateManyInput | BookmarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark update
   */
  export type BookmarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookmark.
     */
    data: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
    /**
     * Choose, which Bookmark to update.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark updateMany
   */
  export type BookmarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
  }

  /**
   * Bookmark updateManyAndReturn
   */
  export type BookmarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * The data used to update Bookmarks.
     */
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyInput>
    /**
     * Filter which Bookmarks to update
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bookmark upsert
   */
  export type BookmarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookmark to update in case it exists.
     */
    where: BookmarkWhereUniqueInput
    /**
     * In case the Bookmark found by the `where` argument doesn't exist, create a new Bookmark with this data.
     */
    create: XOR<BookmarkCreateInput, BookmarkUncheckedCreateInput>
    /**
     * In case the Bookmark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookmarkUpdateInput, BookmarkUncheckedUpdateInput>
  }

  /**
   * Bookmark delete
   */
  export type BookmarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
    /**
     * Filter which Bookmark to delete.
     */
    where: BookmarkWhereUniqueInput
  }

  /**
   * Bookmark deleteMany
   */
  export type BookmarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookmarks to delete
     */
    where?: BookmarkWhereInput
    /**
     * Limit how many Bookmarks to delete.
     */
    limit?: number
  }

  /**
   * Bookmark.flat
   */
  export type Bookmark$flatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flat
     */
    select?: FlatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flat
     */
    omit?: FlatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatInclude<ExtArgs> | null
    where?: FlatWhereInput
  }

  /**
   * Bookmark.flatmatePost
   */
  export type Bookmark$flatmatePostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlatmatePost
     */
    select?: FlatmatePostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlatmatePost
     */
    omit?: FlatmatePostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlatmatePostInclude<ExtArgs> | null
    where?: FlatmatePostWhereInput
  }

  /**
   * Bookmark without action
   */
  export type BookmarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookmark
     */
    select?: BookmarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bookmark
     */
    omit?: BookmarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookmarkInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    phone: 'phone',
    password: 'password',
    gender: 'gender',
    age: 'age',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FlatScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    city: 'city',
    address: 'address',
    verified: 'verified',
    rent: 'rent',
    availableFrom: 'availableFrom',
    postedById: 'postedById',
    roommates: 'roommates',
    preferredGender: 'preferredGender',
    isAvailable: 'isAvailable',
    createdAt: 'createdAt'
  };

  export type FlatScalarFieldEnum = (typeof FlatScalarFieldEnum)[keyof typeof FlatScalarFieldEnum]


  export const FlatmatePostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    city: 'city',
    budgetMin: 'budgetMin',
    budgetMax: 'budgetMax',
    ageMin: 'ageMin',
    ageMax: 'ageMax',
    preferredGender: 'preferredGender',
    moveInDate: 'moveInDate',
    occupation: 'occupation',
    habits: 'habits',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type FlatmatePostScalarFieldEnum = (typeof FlatmatePostScalarFieldEnum)[keyof typeof FlatmatePostScalarFieldEnum]


  export const PreferenceScalarFieldEnum: {
    id: 'id',
    city: 'city',
    budgetMin: 'budgetMin',
    budgetMax: 'budgetMax',
    preferredGender: 'preferredGender',
    userId: 'userId'
  };

  export type PreferenceScalarFieldEnum = (typeof PreferenceScalarFieldEnum)[keyof typeof PreferenceScalarFieldEnum]


  export const BookmarkScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    flatId: 'flatId',
    flatmatePostId: 'flatmatePostId',
    createdAt: 'createdAt'
  };

  export type BookmarkScalarFieldEnum = (typeof BookmarkScalarFieldEnum)[keyof typeof BookmarkScalarFieldEnum]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    age?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    preferences?: XOR<PreferenceNullableScalarRelationFilter, PreferenceWhereInput> | null
    listings?: FlatListRelationFilter
    flatmatePosts?: FlatmatePostListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    preferences?: PreferenceOrderByWithRelationInput
    listings?: FlatOrderByRelationAggregateInput
    flatmatePosts?: FlatmatePostOrderByRelationAggregateInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    gender?: EnumGenderNullableFilter<"User"> | $Enums.Gender | null
    age?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    preferences?: XOR<PreferenceNullableScalarRelationFilter, PreferenceWhereInput> | null
    listings?: FlatListRelationFilter
    flatmatePosts?: FlatmatePostListRelationFilter
    bookmarks?: BookmarkListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    gender?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    gender?: EnumGenderNullableWithAggregatesFilter<"User"> | $Enums.Gender | null
    age?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FlatWhereInput = {
    AND?: FlatWhereInput | FlatWhereInput[]
    OR?: FlatWhereInput[]
    NOT?: FlatWhereInput | FlatWhereInput[]
    id?: StringFilter<"Flat"> | string
    title?: StringFilter<"Flat"> | string
    description?: StringFilter<"Flat"> | string
    city?: StringFilter<"Flat"> | string
    address?: StringFilter<"Flat"> | string
    verified?: BoolFilter<"Flat"> | boolean
    rent?: IntFilter<"Flat"> | number
    availableFrom?: DateTimeFilter<"Flat"> | Date | string
    postedById?: StringFilter<"Flat"> | string
    roommates?: IntFilter<"Flat"> | number
    preferredGender?: EnumGenderFilter<"Flat"> | $Enums.Gender
    isAvailable?: BoolFilter<"Flat"> | boolean
    createdAt?: DateTimeFilter<"Flat"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookmarks?: BookmarkListRelationFilter
  }

  export type FlatOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    verified?: SortOrder
    rent?: SortOrder
    availableFrom?: SortOrder
    postedById?: SortOrder
    roommates?: SortOrder
    preferredGender?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    postedBy?: UserOrderByWithRelationInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
  }

  export type FlatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlatWhereInput | FlatWhereInput[]
    OR?: FlatWhereInput[]
    NOT?: FlatWhereInput | FlatWhereInput[]
    title?: StringFilter<"Flat"> | string
    description?: StringFilter<"Flat"> | string
    city?: StringFilter<"Flat"> | string
    address?: StringFilter<"Flat"> | string
    verified?: BoolFilter<"Flat"> | boolean
    rent?: IntFilter<"Flat"> | number
    availableFrom?: DateTimeFilter<"Flat"> | Date | string
    postedById?: StringFilter<"Flat"> | string
    roommates?: IntFilter<"Flat"> | number
    preferredGender?: EnumGenderFilter<"Flat"> | $Enums.Gender
    isAvailable?: BoolFilter<"Flat"> | boolean
    createdAt?: DateTimeFilter<"Flat"> | Date | string
    postedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookmarks?: BookmarkListRelationFilter
  }, "id">

  export type FlatOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    verified?: SortOrder
    rent?: SortOrder
    availableFrom?: SortOrder
    postedById?: SortOrder
    roommates?: SortOrder
    preferredGender?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    _count?: FlatCountOrderByAggregateInput
    _avg?: FlatAvgOrderByAggregateInput
    _max?: FlatMaxOrderByAggregateInput
    _min?: FlatMinOrderByAggregateInput
    _sum?: FlatSumOrderByAggregateInput
  }

  export type FlatScalarWhereWithAggregatesInput = {
    AND?: FlatScalarWhereWithAggregatesInput | FlatScalarWhereWithAggregatesInput[]
    OR?: FlatScalarWhereWithAggregatesInput[]
    NOT?: FlatScalarWhereWithAggregatesInput | FlatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flat"> | string
    title?: StringWithAggregatesFilter<"Flat"> | string
    description?: StringWithAggregatesFilter<"Flat"> | string
    city?: StringWithAggregatesFilter<"Flat"> | string
    address?: StringWithAggregatesFilter<"Flat"> | string
    verified?: BoolWithAggregatesFilter<"Flat"> | boolean
    rent?: IntWithAggregatesFilter<"Flat"> | number
    availableFrom?: DateTimeWithAggregatesFilter<"Flat"> | Date | string
    postedById?: StringWithAggregatesFilter<"Flat"> | string
    roommates?: IntWithAggregatesFilter<"Flat"> | number
    preferredGender?: EnumGenderWithAggregatesFilter<"Flat"> | $Enums.Gender
    isAvailable?: BoolWithAggregatesFilter<"Flat"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Flat"> | Date | string
  }

  export type FlatmatePostWhereInput = {
    AND?: FlatmatePostWhereInput | FlatmatePostWhereInput[]
    OR?: FlatmatePostWhereInput[]
    NOT?: FlatmatePostWhereInput | FlatmatePostWhereInput[]
    id?: StringFilter<"FlatmatePost"> | string
    userId?: StringFilter<"FlatmatePost"> | string
    city?: StringFilter<"FlatmatePost"> | string
    budgetMin?: IntFilter<"FlatmatePost"> | number
    budgetMax?: IntFilter<"FlatmatePost"> | number
    ageMin?: IntFilter<"FlatmatePost"> | number
    ageMax?: IntFilter<"FlatmatePost"> | number
    preferredGender?: EnumGenderFilter<"FlatmatePost"> | $Enums.Gender
    moveInDate?: DateTimeFilter<"FlatmatePost"> | Date | string
    occupation?: StringNullableFilter<"FlatmatePost"> | string | null
    habits?: StringNullableFilter<"FlatmatePost"> | string | null
    description?: StringNullableFilter<"FlatmatePost"> | string | null
    createdAt?: DateTimeFilter<"FlatmatePost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookmarks?: BookmarkListRelationFilter
  }

  export type FlatmatePostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    preferredGender?: SortOrder
    moveInDate?: SortOrder
    occupation?: SortOrderInput | SortOrder
    habits?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bookmarks?: BookmarkOrderByRelationAggregateInput
  }

  export type FlatmatePostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlatmatePostWhereInput | FlatmatePostWhereInput[]
    OR?: FlatmatePostWhereInput[]
    NOT?: FlatmatePostWhereInput | FlatmatePostWhereInput[]
    userId?: StringFilter<"FlatmatePost"> | string
    city?: StringFilter<"FlatmatePost"> | string
    budgetMin?: IntFilter<"FlatmatePost"> | number
    budgetMax?: IntFilter<"FlatmatePost"> | number
    ageMin?: IntFilter<"FlatmatePost"> | number
    ageMax?: IntFilter<"FlatmatePost"> | number
    preferredGender?: EnumGenderFilter<"FlatmatePost"> | $Enums.Gender
    moveInDate?: DateTimeFilter<"FlatmatePost"> | Date | string
    occupation?: StringNullableFilter<"FlatmatePost"> | string | null
    habits?: StringNullableFilter<"FlatmatePost"> | string | null
    description?: StringNullableFilter<"FlatmatePost"> | string | null
    createdAt?: DateTimeFilter<"FlatmatePost"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookmarks?: BookmarkListRelationFilter
  }, "id">

  export type FlatmatePostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    preferredGender?: SortOrder
    moveInDate?: SortOrder
    occupation?: SortOrderInput | SortOrder
    habits?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FlatmatePostCountOrderByAggregateInput
    _avg?: FlatmatePostAvgOrderByAggregateInput
    _max?: FlatmatePostMaxOrderByAggregateInput
    _min?: FlatmatePostMinOrderByAggregateInput
    _sum?: FlatmatePostSumOrderByAggregateInput
  }

  export type FlatmatePostScalarWhereWithAggregatesInput = {
    AND?: FlatmatePostScalarWhereWithAggregatesInput | FlatmatePostScalarWhereWithAggregatesInput[]
    OR?: FlatmatePostScalarWhereWithAggregatesInput[]
    NOT?: FlatmatePostScalarWhereWithAggregatesInput | FlatmatePostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlatmatePost"> | string
    userId?: StringWithAggregatesFilter<"FlatmatePost"> | string
    city?: StringWithAggregatesFilter<"FlatmatePost"> | string
    budgetMin?: IntWithAggregatesFilter<"FlatmatePost"> | number
    budgetMax?: IntWithAggregatesFilter<"FlatmatePost"> | number
    ageMin?: IntWithAggregatesFilter<"FlatmatePost"> | number
    ageMax?: IntWithAggregatesFilter<"FlatmatePost"> | number
    preferredGender?: EnumGenderWithAggregatesFilter<"FlatmatePost"> | $Enums.Gender
    moveInDate?: DateTimeWithAggregatesFilter<"FlatmatePost"> | Date | string
    occupation?: StringNullableWithAggregatesFilter<"FlatmatePost"> | string | null
    habits?: StringNullableWithAggregatesFilter<"FlatmatePost"> | string | null
    description?: StringNullableWithAggregatesFilter<"FlatmatePost"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FlatmatePost"> | Date | string
  }

  export type PreferenceWhereInput = {
    AND?: PreferenceWhereInput | PreferenceWhereInput[]
    OR?: PreferenceWhereInput[]
    NOT?: PreferenceWhereInput | PreferenceWhereInput[]
    id?: StringFilter<"Preference"> | string
    city?: StringNullableFilter<"Preference"> | string | null
    budgetMin?: IntNullableFilter<"Preference"> | number | null
    budgetMax?: IntNullableFilter<"Preference"> | number | null
    preferredGender?: EnumGenderNullableFilter<"Preference"> | $Enums.Gender | null
    userId?: StringFilter<"Preference"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PreferenceOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrderInput | SortOrder
    budgetMin?: SortOrderInput | SortOrder
    budgetMax?: SortOrderInput | SortOrder
    preferredGender?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PreferenceWhereInput | PreferenceWhereInput[]
    OR?: PreferenceWhereInput[]
    NOT?: PreferenceWhereInput | PreferenceWhereInput[]
    city?: StringNullableFilter<"Preference"> | string | null
    budgetMin?: IntNullableFilter<"Preference"> | number | null
    budgetMax?: IntNullableFilter<"Preference"> | number | null
    preferredGender?: EnumGenderNullableFilter<"Preference"> | $Enums.Gender | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type PreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrderInput | SortOrder
    budgetMin?: SortOrderInput | SortOrder
    budgetMax?: SortOrderInput | SortOrder
    preferredGender?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PreferenceCountOrderByAggregateInput
    _avg?: PreferenceAvgOrderByAggregateInput
    _max?: PreferenceMaxOrderByAggregateInput
    _min?: PreferenceMinOrderByAggregateInput
    _sum?: PreferenceSumOrderByAggregateInput
  }

  export type PreferenceScalarWhereWithAggregatesInput = {
    AND?: PreferenceScalarWhereWithAggregatesInput | PreferenceScalarWhereWithAggregatesInput[]
    OR?: PreferenceScalarWhereWithAggregatesInput[]
    NOT?: PreferenceScalarWhereWithAggregatesInput | PreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preference"> | string
    city?: StringNullableWithAggregatesFilter<"Preference"> | string | null
    budgetMin?: IntNullableWithAggregatesFilter<"Preference"> | number | null
    budgetMax?: IntNullableWithAggregatesFilter<"Preference"> | number | null
    preferredGender?: EnumGenderNullableWithAggregatesFilter<"Preference"> | $Enums.Gender | null
    userId?: StringWithAggregatesFilter<"Preference"> | string
  }

  export type BookmarkWhereInput = {
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    flatId?: StringNullableFilter<"Bookmark"> | string | null
    flatmatePostId?: StringNullableFilter<"Bookmark"> | string | null
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flat?: XOR<FlatNullableScalarRelationFilter, FlatWhereInput> | null
    flatmatePost?: XOR<FlatmatePostNullableScalarRelationFilter, FlatmatePostWhereInput> | null
  }

  export type BookmarkOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    flatId?: SortOrderInput | SortOrder
    flatmatePostId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    flat?: FlatOrderByWithRelationInput
    flatmatePost?: FlatmatePostOrderByWithRelationInput
  }

  export type BookmarkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookmarkWhereInput | BookmarkWhereInput[]
    OR?: BookmarkWhereInput[]
    NOT?: BookmarkWhereInput | BookmarkWhereInput[]
    userId?: StringFilter<"Bookmark"> | string
    flatId?: StringNullableFilter<"Bookmark"> | string | null
    flatmatePostId?: StringNullableFilter<"Bookmark"> | string | null
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flat?: XOR<FlatNullableScalarRelationFilter, FlatWhereInput> | null
    flatmatePost?: XOR<FlatmatePostNullableScalarRelationFilter, FlatmatePostWhereInput> | null
  }, "id">

  export type BookmarkOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    flatId?: SortOrderInput | SortOrder
    flatmatePostId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookmarkCountOrderByAggregateInput
    _max?: BookmarkMaxOrderByAggregateInput
    _min?: BookmarkMinOrderByAggregateInput
  }

  export type BookmarkScalarWhereWithAggregatesInput = {
    AND?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    OR?: BookmarkScalarWhereWithAggregatesInput[]
    NOT?: BookmarkScalarWhereWithAggregatesInput | BookmarkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bookmark"> | string
    userId?: StringWithAggregatesFilter<"Bookmark"> | string
    flatId?: StringNullableWithAggregatesFilter<"Bookmark"> | string | null
    flatmatePostId?: StringNullableWithAggregatesFilter<"Bookmark"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bookmark"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    listings?: FlatCreateNestedManyWithoutPostedByInput
    flatmatePosts?: FlatmatePostCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    listings?: FlatUncheckedCreateNestedManyWithoutPostedByInput
    flatmatePosts?: FlatmatePostUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    listings?: FlatUpdateManyWithoutPostedByNestedInput
    flatmatePosts?: FlatmatePostUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    listings?: FlatUncheckedUpdateManyWithoutPostedByNestedInput
    flatmatePosts?: FlatmatePostUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatCreateInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
    postedBy: UserCreateNestedOneWithoutListingsInput
    bookmarks?: BookmarkCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    postedById: string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutListingsNestedInput
    bookmarks?: BookmarkUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatCreateManyInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    postedById: string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type FlatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatmatePostCreateInput = {
    id?: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFlatmatePostsInput
    bookmarks?: BookmarkCreateNestedManyWithoutFlatmatePostInput
  }

  export type FlatmatePostUncheckedCreateInput = {
    id?: string
    userId: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutFlatmatePostInput
  }

  export type FlatmatePostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlatmatePostsNestedInput
    bookmarks?: BookmarkUpdateManyWithoutFlatmatePostNestedInput
  }

  export type FlatmatePostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutFlatmatePostNestedInput
  }

  export type FlatmatePostCreateManyInput = {
    id?: string
    userId: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type FlatmatePostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatmatePostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferenceCreateInput = {
    id?: string
    city?: string | null
    budgetMin?: number | null
    budgetMax?: number | null
    preferredGender?: $Enums.Gender | null
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type PreferenceUncheckedCreateInput = {
    id?: string
    city?: string | null
    budgetMin?: number | null
    budgetMax?: number | null
    preferredGender?: $Enums.Gender | null
    userId: string
  }

  export type PreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredGender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredGender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PreferenceCreateManyInput = {
    id?: string
    city?: string | null
    budgetMin?: number | null
    budgetMax?: number | null
    preferredGender?: $Enums.Gender | null
    userId: string
  }

  export type PreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredGender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
  }

  export type PreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredGender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BookmarkCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    flat?: FlatCreateNestedOneWithoutBookmarksInput
    flatmatePost?: FlatmatePostCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateInput = {
    id?: string
    userId: string
    flatId?: string | null
    flatmatePostId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    flat?: FlatUpdateOneWithoutBookmarksNestedInput
    flatmatePost?: FlatmatePostUpdateOneWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flatId?: NullableStringFieldUpdateOperationsInput | string | null
    flatmatePostId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyInput = {
    id?: string
    userId: string
    flatId?: string | null
    flatmatePostId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flatId?: NullableStringFieldUpdateOperationsInput | string | null
    flatmatePostId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
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

  export type PreferenceNullableScalarRelationFilter = {
    is?: PreferenceWhereInput | null
    isNot?: PreferenceWhereInput | null
  }

  export type FlatListRelationFilter = {
    every?: FlatWhereInput
    some?: FlatWhereInput
    none?: FlatWhereInput
  }

  export type FlatmatePostListRelationFilter = {
    every?: FlatmatePostWhereInput
    some?: FlatmatePostWhereInput
    none?: FlatmatePostWhereInput
  }

  export type BookmarkListRelationFilter = {
    every?: BookmarkWhereInput
    some?: BookmarkWhereInput
    none?: BookmarkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FlatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlatmatePostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookmarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    gender?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FlatCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    verified?: SortOrder
    rent?: SortOrder
    availableFrom?: SortOrder
    postedById?: SortOrder
    roommates?: SortOrder
    preferredGender?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type FlatAvgOrderByAggregateInput = {
    rent?: SortOrder
    roommates?: SortOrder
  }

  export type FlatMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    verified?: SortOrder
    rent?: SortOrder
    availableFrom?: SortOrder
    postedById?: SortOrder
    roommates?: SortOrder
    preferredGender?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type FlatMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    city?: SortOrder
    address?: SortOrder
    verified?: SortOrder
    rent?: SortOrder
    availableFrom?: SortOrder
    postedById?: SortOrder
    roommates?: SortOrder
    preferredGender?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
  }

  export type FlatSumOrderByAggregateInput = {
    rent?: SortOrder
    roommates?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type FlatmatePostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    preferredGender?: SortOrder
    moveInDate?: SortOrder
    occupation?: SortOrder
    habits?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FlatmatePostAvgOrderByAggregateInput = {
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
  }

  export type FlatmatePostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    preferredGender?: SortOrder
    moveInDate?: SortOrder
    occupation?: SortOrder
    habits?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FlatmatePostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
    preferredGender?: SortOrder
    moveInDate?: SortOrder
    occupation?: SortOrder
    habits?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FlatmatePostSumOrderByAggregateInput = {
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    ageMin?: SortOrder
    ageMax?: SortOrder
  }

  export type PreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    preferredGender?: SortOrder
    userId?: SortOrder
  }

  export type PreferenceAvgOrderByAggregateInput = {
    budgetMin?: SortOrder
    budgetMax?: SortOrder
  }

  export type PreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    preferredGender?: SortOrder
    userId?: SortOrder
  }

  export type PreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    budgetMin?: SortOrder
    budgetMax?: SortOrder
    preferredGender?: SortOrder
    userId?: SortOrder
  }

  export type PreferenceSumOrderByAggregateInput = {
    budgetMin?: SortOrder
    budgetMax?: SortOrder
  }

  export type FlatNullableScalarRelationFilter = {
    is?: FlatWhereInput | null
    isNot?: FlatWhereInput | null
  }

  export type FlatmatePostNullableScalarRelationFilter = {
    is?: FlatmatePostWhereInput | null
    isNot?: FlatmatePostWhereInput | null
  }

  export type BookmarkCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flatId?: SortOrder
    flatmatePostId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flatId?: SortOrder
    flatmatePostId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookmarkMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flatId?: SortOrder
    flatmatePostId?: SortOrder
    createdAt?: SortOrder
  }

  export type PreferenceCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    connect?: PreferenceWhereUniqueInput
  }

  export type FlatCreateNestedManyWithoutPostedByInput = {
    create?: XOR<FlatCreateWithoutPostedByInput, FlatUncheckedCreateWithoutPostedByInput> | FlatCreateWithoutPostedByInput[] | FlatUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutPostedByInput | FlatCreateOrConnectWithoutPostedByInput[]
    createMany?: FlatCreateManyPostedByInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type FlatmatePostCreateNestedManyWithoutUserInput = {
    create?: XOR<FlatmatePostCreateWithoutUserInput, FlatmatePostUncheckedCreateWithoutUserInput> | FlatmatePostCreateWithoutUserInput[] | FlatmatePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlatmatePostCreateOrConnectWithoutUserInput | FlatmatePostCreateOrConnectWithoutUserInput[]
    createMany?: FlatmatePostCreateManyUserInputEnvelope
    connect?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
  }

  export type BookmarkCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type PreferenceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    connect?: PreferenceWhereUniqueInput
  }

  export type FlatUncheckedCreateNestedManyWithoutPostedByInput = {
    create?: XOR<FlatCreateWithoutPostedByInput, FlatUncheckedCreateWithoutPostedByInput> | FlatCreateWithoutPostedByInput[] | FlatUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutPostedByInput | FlatCreateOrConnectWithoutPostedByInput[]
    createMany?: FlatCreateManyPostedByInputEnvelope
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
  }

  export type FlatmatePostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlatmatePostCreateWithoutUserInput, FlatmatePostUncheckedCreateWithoutUserInput> | FlatmatePostCreateWithoutUserInput[] | FlatmatePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlatmatePostCreateOrConnectWithoutUserInput | FlatmatePostCreateOrConnectWithoutUserInput[]
    createMany?: FlatmatePostCreateManyUserInputEnvelope
    connect?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PreferenceUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    upsert?: PreferenceUpsertWithoutUserInput
    disconnect?: PreferenceWhereInput | boolean
    delete?: PreferenceWhereInput | boolean
    connect?: PreferenceWhereUniqueInput
    update?: XOR<XOR<PreferenceUpdateToOneWithWhereWithoutUserInput, PreferenceUpdateWithoutUserInput>, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type FlatUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<FlatCreateWithoutPostedByInput, FlatUncheckedCreateWithoutPostedByInput> | FlatCreateWithoutPostedByInput[] | FlatUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutPostedByInput | FlatCreateOrConnectWithoutPostedByInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutPostedByInput | FlatUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: FlatCreateManyPostedByInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutPostedByInput | FlatUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutPostedByInput | FlatUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type FlatmatePostUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlatmatePostCreateWithoutUserInput, FlatmatePostUncheckedCreateWithoutUserInput> | FlatmatePostCreateWithoutUserInput[] | FlatmatePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlatmatePostCreateOrConnectWithoutUserInput | FlatmatePostCreateOrConnectWithoutUserInput[]
    upsert?: FlatmatePostUpsertWithWhereUniqueWithoutUserInput | FlatmatePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlatmatePostCreateManyUserInputEnvelope
    set?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    disconnect?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    delete?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    connect?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    update?: FlatmatePostUpdateWithWhereUniqueWithoutUserInput | FlatmatePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlatmatePostUpdateManyWithWhereWithoutUserInput | FlatmatePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlatmatePostScalarWhereInput | FlatmatePostScalarWhereInput[]
  }

  export type BookmarkUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type PreferenceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    connectOrCreate?: PreferenceCreateOrConnectWithoutUserInput
    upsert?: PreferenceUpsertWithoutUserInput
    disconnect?: PreferenceWhereInput | boolean
    delete?: PreferenceWhereInput | boolean
    connect?: PreferenceWhereUniqueInput
    update?: XOR<XOR<PreferenceUpdateToOneWithWhereWithoutUserInput, PreferenceUpdateWithoutUserInput>, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type FlatUncheckedUpdateManyWithoutPostedByNestedInput = {
    create?: XOR<FlatCreateWithoutPostedByInput, FlatUncheckedCreateWithoutPostedByInput> | FlatCreateWithoutPostedByInput[] | FlatUncheckedCreateWithoutPostedByInput[]
    connectOrCreate?: FlatCreateOrConnectWithoutPostedByInput | FlatCreateOrConnectWithoutPostedByInput[]
    upsert?: FlatUpsertWithWhereUniqueWithoutPostedByInput | FlatUpsertWithWhereUniqueWithoutPostedByInput[]
    createMany?: FlatCreateManyPostedByInputEnvelope
    set?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    disconnect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    delete?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    connect?: FlatWhereUniqueInput | FlatWhereUniqueInput[]
    update?: FlatUpdateWithWhereUniqueWithoutPostedByInput | FlatUpdateWithWhereUniqueWithoutPostedByInput[]
    updateMany?: FlatUpdateManyWithWhereWithoutPostedByInput | FlatUpdateManyWithWhereWithoutPostedByInput[]
    deleteMany?: FlatScalarWhereInput | FlatScalarWhereInput[]
  }

  export type FlatmatePostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlatmatePostCreateWithoutUserInput, FlatmatePostUncheckedCreateWithoutUserInput> | FlatmatePostCreateWithoutUserInput[] | FlatmatePostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlatmatePostCreateOrConnectWithoutUserInput | FlatmatePostCreateOrConnectWithoutUserInput[]
    upsert?: FlatmatePostUpsertWithWhereUniqueWithoutUserInput | FlatmatePostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlatmatePostCreateManyUserInputEnvelope
    set?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    disconnect?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    delete?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    connect?: FlatmatePostWhereUniqueInput | FlatmatePostWhereUniqueInput[]
    update?: FlatmatePostUpdateWithWhereUniqueWithoutUserInput | FlatmatePostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlatmatePostUpdateManyWithWhereWithoutUserInput | FlatmatePostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlatmatePostScalarWhereInput | FlatmatePostScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput> | BookmarkCreateWithoutUserInput[] | BookmarkUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutUserInput | BookmarkCreateOrConnectWithoutUserInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutUserInput | BookmarkUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookmarkCreateManyUserInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutUserInput | BookmarkUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutUserInput | BookmarkUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutListingsInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    connect?: UserWhereUniqueInput
  }

  export type BookmarkCreateNestedManyWithoutFlatInput = {
    create?: XOR<BookmarkCreateWithoutFlatInput, BookmarkUncheckedCreateWithoutFlatInput> | BookmarkCreateWithoutFlatInput[] | BookmarkUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatInput | BookmarkCreateOrConnectWithoutFlatInput[]
    createMany?: BookmarkCreateManyFlatInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutFlatInput = {
    create?: XOR<BookmarkCreateWithoutFlatInput, BookmarkUncheckedCreateWithoutFlatInput> | BookmarkCreateWithoutFlatInput[] | BookmarkUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatInput | BookmarkCreateOrConnectWithoutFlatInput[]
    createMany?: BookmarkCreateManyFlatInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneRequiredWithoutListingsNestedInput = {
    create?: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListingsInput
    upsert?: UserUpsertWithoutListingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListingsInput, UserUpdateWithoutListingsInput>, UserUncheckedUpdateWithoutListingsInput>
  }

  export type BookmarkUpdateManyWithoutFlatNestedInput = {
    create?: XOR<BookmarkCreateWithoutFlatInput, BookmarkUncheckedCreateWithoutFlatInput> | BookmarkCreateWithoutFlatInput[] | BookmarkUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatInput | BookmarkCreateOrConnectWithoutFlatInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutFlatInput | BookmarkUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: BookmarkCreateManyFlatInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutFlatInput | BookmarkUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutFlatInput | BookmarkUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutFlatNestedInput = {
    create?: XOR<BookmarkCreateWithoutFlatInput, BookmarkUncheckedCreateWithoutFlatInput> | BookmarkCreateWithoutFlatInput[] | BookmarkUncheckedCreateWithoutFlatInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatInput | BookmarkCreateOrConnectWithoutFlatInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutFlatInput | BookmarkUpsertWithWhereUniqueWithoutFlatInput[]
    createMany?: BookmarkCreateManyFlatInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutFlatInput | BookmarkUpdateWithWhereUniqueWithoutFlatInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutFlatInput | BookmarkUpdateManyWithWhereWithoutFlatInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFlatmatePostsInput = {
    create?: XOR<UserCreateWithoutFlatmatePostsInput, UserUncheckedCreateWithoutFlatmatePostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlatmatePostsInput
    connect?: UserWhereUniqueInput
  }

  export type BookmarkCreateNestedManyWithoutFlatmatePostInput = {
    create?: XOR<BookmarkCreateWithoutFlatmatePostInput, BookmarkUncheckedCreateWithoutFlatmatePostInput> | BookmarkCreateWithoutFlatmatePostInput[] | BookmarkUncheckedCreateWithoutFlatmatePostInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatmatePostInput | BookmarkCreateOrConnectWithoutFlatmatePostInput[]
    createMany?: BookmarkCreateManyFlatmatePostInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type BookmarkUncheckedCreateNestedManyWithoutFlatmatePostInput = {
    create?: XOR<BookmarkCreateWithoutFlatmatePostInput, BookmarkUncheckedCreateWithoutFlatmatePostInput> | BookmarkCreateWithoutFlatmatePostInput[] | BookmarkUncheckedCreateWithoutFlatmatePostInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatmatePostInput | BookmarkCreateOrConnectWithoutFlatmatePostInput[]
    createMany?: BookmarkCreateManyFlatmatePostInputEnvelope
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFlatmatePostsNestedInput = {
    create?: XOR<UserCreateWithoutFlatmatePostsInput, UserUncheckedCreateWithoutFlatmatePostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlatmatePostsInput
    upsert?: UserUpsertWithoutFlatmatePostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlatmatePostsInput, UserUpdateWithoutFlatmatePostsInput>, UserUncheckedUpdateWithoutFlatmatePostsInput>
  }

  export type BookmarkUpdateManyWithoutFlatmatePostNestedInput = {
    create?: XOR<BookmarkCreateWithoutFlatmatePostInput, BookmarkUncheckedCreateWithoutFlatmatePostInput> | BookmarkCreateWithoutFlatmatePostInput[] | BookmarkUncheckedCreateWithoutFlatmatePostInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatmatePostInput | BookmarkCreateOrConnectWithoutFlatmatePostInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutFlatmatePostInput | BookmarkUpsertWithWhereUniqueWithoutFlatmatePostInput[]
    createMany?: BookmarkCreateManyFlatmatePostInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutFlatmatePostInput | BookmarkUpdateWithWhereUniqueWithoutFlatmatePostInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutFlatmatePostInput | BookmarkUpdateManyWithWhereWithoutFlatmatePostInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type BookmarkUncheckedUpdateManyWithoutFlatmatePostNestedInput = {
    create?: XOR<BookmarkCreateWithoutFlatmatePostInput, BookmarkUncheckedCreateWithoutFlatmatePostInput> | BookmarkCreateWithoutFlatmatePostInput[] | BookmarkUncheckedCreateWithoutFlatmatePostInput[]
    connectOrCreate?: BookmarkCreateOrConnectWithoutFlatmatePostInput | BookmarkCreateOrConnectWithoutFlatmatePostInput[]
    upsert?: BookmarkUpsertWithWhereUniqueWithoutFlatmatePostInput | BookmarkUpsertWithWhereUniqueWithoutFlatmatePostInput[]
    createMany?: BookmarkCreateManyFlatmatePostInputEnvelope
    set?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    disconnect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    delete?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    connect?: BookmarkWhereUniqueInput | BookmarkWhereUniqueInput[]
    update?: BookmarkUpdateWithWhereUniqueWithoutFlatmatePostInput | BookmarkUpdateWithWhereUniqueWithoutFlatmatePostInput[]
    updateMany?: BookmarkUpdateManyWithWhereWithoutFlatmatePostInput | BookmarkUpdateManyWithWhereWithoutFlatmatePostInput[]
    deleteMany?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    connect?: UserWhereUniqueInput
  }

  export type FlatCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<FlatCreateWithoutBookmarksInput, FlatUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: FlatCreateOrConnectWithoutBookmarksInput
    connect?: FlatWhereUniqueInput
  }

  export type FlatmatePostCreateNestedOneWithoutBookmarksInput = {
    create?: XOR<FlatmatePostCreateWithoutBookmarksInput, FlatmatePostUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: FlatmatePostCreateOrConnectWithoutBookmarksInput
    connect?: FlatmatePostWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBookmarksNestedInput = {
    create?: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookmarksInput
    upsert?: UserUpsertWithoutBookmarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookmarksInput, UserUpdateWithoutBookmarksInput>, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type FlatUpdateOneWithoutBookmarksNestedInput = {
    create?: XOR<FlatCreateWithoutBookmarksInput, FlatUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: FlatCreateOrConnectWithoutBookmarksInput
    upsert?: FlatUpsertWithoutBookmarksInput
    disconnect?: FlatWhereInput | boolean
    delete?: FlatWhereInput | boolean
    connect?: FlatWhereUniqueInput
    update?: XOR<XOR<FlatUpdateToOneWithWhereWithoutBookmarksInput, FlatUpdateWithoutBookmarksInput>, FlatUncheckedUpdateWithoutBookmarksInput>
  }

  export type FlatmatePostUpdateOneWithoutBookmarksNestedInput = {
    create?: XOR<FlatmatePostCreateWithoutBookmarksInput, FlatmatePostUncheckedCreateWithoutBookmarksInput>
    connectOrCreate?: FlatmatePostCreateOrConnectWithoutBookmarksInput
    upsert?: FlatmatePostUpsertWithoutBookmarksInput
    disconnect?: FlatmatePostWhereInput | boolean
    delete?: FlatmatePostWhereInput | boolean
    connect?: FlatmatePostWhereUniqueInput
    update?: XOR<XOR<FlatmatePostUpdateToOneWithWhereWithoutBookmarksInput, FlatmatePostUpdateWithoutBookmarksInput>, FlatmatePostUncheckedUpdateWithoutBookmarksInput>
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

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
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

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type PreferenceCreateWithoutUserInput = {
    id?: string
    city?: string | null
    budgetMin?: number | null
    budgetMax?: number | null
    preferredGender?: $Enums.Gender | null
  }

  export type PreferenceUncheckedCreateWithoutUserInput = {
    id?: string
    city?: string | null
    budgetMin?: number | null
    budgetMax?: number | null
    preferredGender?: $Enums.Gender | null
  }

  export type PreferenceCreateOrConnectWithoutUserInput = {
    where: PreferenceWhereUniqueInput
    create: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
  }

  export type FlatCreateWithoutPostedByInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutFlatInput
  }

  export type FlatUncheckedCreateWithoutPostedByInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutFlatInput
  }

  export type FlatCreateOrConnectWithoutPostedByInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutPostedByInput, FlatUncheckedCreateWithoutPostedByInput>
  }

  export type FlatCreateManyPostedByInputEnvelope = {
    data: FlatCreateManyPostedByInput | FlatCreateManyPostedByInput[]
    skipDuplicates?: boolean
  }

  export type FlatmatePostCreateWithoutUserInput = {
    id?: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
    bookmarks?: BookmarkCreateNestedManyWithoutFlatmatePostInput
  }

  export type FlatmatePostUncheckedCreateWithoutUserInput = {
    id?: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutFlatmatePostInput
  }

  export type FlatmatePostCreateOrConnectWithoutUserInput = {
    where: FlatmatePostWhereUniqueInput
    create: XOR<FlatmatePostCreateWithoutUserInput, FlatmatePostUncheckedCreateWithoutUserInput>
  }

  export type FlatmatePostCreateManyUserInputEnvelope = {
    data: FlatmatePostCreateManyUserInput | FlatmatePostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookmarkCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    flat?: FlatCreateNestedOneWithoutBookmarksInput
    flatmatePost?: FlatmatePostCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutUserInput = {
    id?: string
    flatId?: string | null
    flatmatePostId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkCreateManyUserInputEnvelope = {
    data: BookmarkCreateManyUserInput | BookmarkCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PreferenceUpsertWithoutUserInput = {
    update: XOR<PreferenceUpdateWithoutUserInput, PreferenceUncheckedUpdateWithoutUserInput>
    create: XOR<PreferenceCreateWithoutUserInput, PreferenceUncheckedCreateWithoutUserInput>
    where?: PreferenceWhereInput
  }

  export type PreferenceUpdateToOneWithWhereWithoutUserInput = {
    where?: PreferenceWhereInput
    data: XOR<PreferenceUpdateWithoutUserInput, PreferenceUncheckedUpdateWithoutUserInput>
  }

  export type PreferenceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredGender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
  }

  export type PreferenceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    budgetMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableIntFieldUpdateOperationsInput | number | null
    preferredGender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
  }

  export type FlatUpsertWithWhereUniqueWithoutPostedByInput = {
    where: FlatWhereUniqueInput
    update: XOR<FlatUpdateWithoutPostedByInput, FlatUncheckedUpdateWithoutPostedByInput>
    create: XOR<FlatCreateWithoutPostedByInput, FlatUncheckedCreateWithoutPostedByInput>
  }

  export type FlatUpdateWithWhereUniqueWithoutPostedByInput = {
    where: FlatWhereUniqueInput
    data: XOR<FlatUpdateWithoutPostedByInput, FlatUncheckedUpdateWithoutPostedByInput>
  }

  export type FlatUpdateManyWithWhereWithoutPostedByInput = {
    where: FlatScalarWhereInput
    data: XOR<FlatUpdateManyMutationInput, FlatUncheckedUpdateManyWithoutPostedByInput>
  }

  export type FlatScalarWhereInput = {
    AND?: FlatScalarWhereInput | FlatScalarWhereInput[]
    OR?: FlatScalarWhereInput[]
    NOT?: FlatScalarWhereInput | FlatScalarWhereInput[]
    id?: StringFilter<"Flat"> | string
    title?: StringFilter<"Flat"> | string
    description?: StringFilter<"Flat"> | string
    city?: StringFilter<"Flat"> | string
    address?: StringFilter<"Flat"> | string
    verified?: BoolFilter<"Flat"> | boolean
    rent?: IntFilter<"Flat"> | number
    availableFrom?: DateTimeFilter<"Flat"> | Date | string
    postedById?: StringFilter<"Flat"> | string
    roommates?: IntFilter<"Flat"> | number
    preferredGender?: EnumGenderFilter<"Flat"> | $Enums.Gender
    isAvailable?: BoolFilter<"Flat"> | boolean
    createdAt?: DateTimeFilter<"Flat"> | Date | string
  }

  export type FlatmatePostUpsertWithWhereUniqueWithoutUserInput = {
    where: FlatmatePostWhereUniqueInput
    update: XOR<FlatmatePostUpdateWithoutUserInput, FlatmatePostUncheckedUpdateWithoutUserInput>
    create: XOR<FlatmatePostCreateWithoutUserInput, FlatmatePostUncheckedCreateWithoutUserInput>
  }

  export type FlatmatePostUpdateWithWhereUniqueWithoutUserInput = {
    where: FlatmatePostWhereUniqueInput
    data: XOR<FlatmatePostUpdateWithoutUserInput, FlatmatePostUncheckedUpdateWithoutUserInput>
  }

  export type FlatmatePostUpdateManyWithWhereWithoutUserInput = {
    where: FlatmatePostScalarWhereInput
    data: XOR<FlatmatePostUpdateManyMutationInput, FlatmatePostUncheckedUpdateManyWithoutUserInput>
  }

  export type FlatmatePostScalarWhereInput = {
    AND?: FlatmatePostScalarWhereInput | FlatmatePostScalarWhereInput[]
    OR?: FlatmatePostScalarWhereInput[]
    NOT?: FlatmatePostScalarWhereInput | FlatmatePostScalarWhereInput[]
    id?: StringFilter<"FlatmatePost"> | string
    userId?: StringFilter<"FlatmatePost"> | string
    city?: StringFilter<"FlatmatePost"> | string
    budgetMin?: IntFilter<"FlatmatePost"> | number
    budgetMax?: IntFilter<"FlatmatePost"> | number
    ageMin?: IntFilter<"FlatmatePost"> | number
    ageMax?: IntFilter<"FlatmatePost"> | number
    preferredGender?: EnumGenderFilter<"FlatmatePost"> | $Enums.Gender
    moveInDate?: DateTimeFilter<"FlatmatePost"> | Date | string
    occupation?: StringNullableFilter<"FlatmatePost"> | string | null
    habits?: StringNullableFilter<"FlatmatePost"> | string | null
    description?: StringNullableFilter<"FlatmatePost"> | string | null
    createdAt?: DateTimeFilter<"FlatmatePost"> | Date | string
  }

  export type BookmarkUpsertWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
    create: XOR<BookmarkCreateWithoutUserInput, BookmarkUncheckedCreateWithoutUserInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutUserInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutUserInput, BookmarkUncheckedUpdateWithoutUserInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutUserInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutUserInput>
  }

  export type BookmarkScalarWhereInput = {
    AND?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    OR?: BookmarkScalarWhereInput[]
    NOT?: BookmarkScalarWhereInput | BookmarkScalarWhereInput[]
    id?: StringFilter<"Bookmark"> | string
    userId?: StringFilter<"Bookmark"> | string
    flatId?: StringNullableFilter<"Bookmark"> | string | null
    flatmatePostId?: StringNullableFilter<"Bookmark"> | string | null
    createdAt?: DateTimeFilter<"Bookmark"> | Date | string
  }

  export type UserCreateWithoutListingsInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    flatmatePosts?: FlatmatePostCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListingsInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    flatmatePosts?: FlatmatePostUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
  }

  export type BookmarkCreateWithoutFlatInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    flatmatePost?: FlatmatePostCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutFlatInput = {
    id?: string
    userId: string
    flatmatePostId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutFlatInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutFlatInput, BookmarkUncheckedCreateWithoutFlatInput>
  }

  export type BookmarkCreateManyFlatInputEnvelope = {
    data: BookmarkCreateManyFlatInput | BookmarkCreateManyFlatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutListingsInput = {
    update: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
    create: XOR<UserCreateWithoutListingsInput, UserUncheckedCreateWithoutListingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListingsInput, UserUncheckedUpdateWithoutListingsInput>
  }

  export type UserUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    flatmatePosts?: FlatmatePostUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    flatmatePosts?: FlatmatePostUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookmarkUpsertWithWhereUniqueWithoutFlatInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutFlatInput, BookmarkUncheckedUpdateWithoutFlatInput>
    create: XOR<BookmarkCreateWithoutFlatInput, BookmarkUncheckedCreateWithoutFlatInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutFlatInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutFlatInput, BookmarkUncheckedUpdateWithoutFlatInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutFlatInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutFlatInput>
  }

  export type UserCreateWithoutFlatmatePostsInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    listings?: FlatCreateNestedManyWithoutPostedByInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlatmatePostsInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    listings?: FlatUncheckedCreateNestedManyWithoutPostedByInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlatmatePostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlatmatePostsInput, UserUncheckedCreateWithoutFlatmatePostsInput>
  }

  export type BookmarkCreateWithoutFlatmatePostInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBookmarksInput
    flat?: FlatCreateNestedOneWithoutBookmarksInput
  }

  export type BookmarkUncheckedCreateWithoutFlatmatePostInput = {
    id?: string
    userId: string
    flatId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkCreateOrConnectWithoutFlatmatePostInput = {
    where: BookmarkWhereUniqueInput
    create: XOR<BookmarkCreateWithoutFlatmatePostInput, BookmarkUncheckedCreateWithoutFlatmatePostInput>
  }

  export type BookmarkCreateManyFlatmatePostInputEnvelope = {
    data: BookmarkCreateManyFlatmatePostInput | BookmarkCreateManyFlatmatePostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFlatmatePostsInput = {
    update: XOR<UserUpdateWithoutFlatmatePostsInput, UserUncheckedUpdateWithoutFlatmatePostsInput>
    create: XOR<UserCreateWithoutFlatmatePostsInput, UserUncheckedCreateWithoutFlatmatePostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlatmatePostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlatmatePostsInput, UserUncheckedUpdateWithoutFlatmatePostsInput>
  }

  export type UserUpdateWithoutFlatmatePostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    listings?: FlatUpdateManyWithoutPostedByNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlatmatePostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    listings?: FlatUncheckedUpdateManyWithoutPostedByNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookmarkUpsertWithWhereUniqueWithoutFlatmatePostInput = {
    where: BookmarkWhereUniqueInput
    update: XOR<BookmarkUpdateWithoutFlatmatePostInput, BookmarkUncheckedUpdateWithoutFlatmatePostInput>
    create: XOR<BookmarkCreateWithoutFlatmatePostInput, BookmarkUncheckedCreateWithoutFlatmatePostInput>
  }

  export type BookmarkUpdateWithWhereUniqueWithoutFlatmatePostInput = {
    where: BookmarkWhereUniqueInput
    data: XOR<BookmarkUpdateWithoutFlatmatePostInput, BookmarkUncheckedUpdateWithoutFlatmatePostInput>
  }

  export type BookmarkUpdateManyWithWhereWithoutFlatmatePostInput = {
    where: BookmarkScalarWhereInput
    data: XOR<BookmarkUpdateManyMutationInput, BookmarkUncheckedUpdateManyWithoutFlatmatePostInput>
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    listings?: FlatCreateNestedManyWithoutPostedByInput
    flatmatePosts?: FlatmatePostCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    listings?: FlatUncheckedCreateNestedManyWithoutPostedByInput
    flatmatePosts?: FlatmatePostUncheckedCreateNestedManyWithoutUserInput
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FlatUpdateManyWithoutPostedByNestedInput
    flatmatePosts?: FlatmatePostUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listings?: FlatUncheckedUpdateManyWithoutPostedByNestedInput
    flatmatePosts?: FlatmatePostUncheckedUpdateManyWithoutUserNestedInput
    bookmarks?: BookmarkUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBookmarksInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceCreateNestedOneWithoutUserInput
    listings?: FlatCreateNestedManyWithoutPostedByInput
    flatmatePosts?: FlatmatePostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookmarksInput = {
    id?: string
    username: string
    email?: string
    phone?: string | null
    password: string
    gender?: $Enums.Gender | null
    age?: number | null
    createdAt?: Date | string
    preferences?: PreferenceUncheckedCreateNestedOneWithoutUserInput
    listings?: FlatUncheckedCreateNestedManyWithoutPostedByInput
    flatmatePosts?: FlatmatePostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookmarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
  }

  export type FlatCreateWithoutBookmarksInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
    postedBy: UserCreateNestedOneWithoutListingsInput
  }

  export type FlatUncheckedCreateWithoutBookmarksInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    postedById: string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type FlatCreateOrConnectWithoutBookmarksInput = {
    where: FlatWhereUniqueInput
    create: XOR<FlatCreateWithoutBookmarksInput, FlatUncheckedCreateWithoutBookmarksInput>
  }

  export type FlatmatePostCreateWithoutBookmarksInput = {
    id?: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFlatmatePostsInput
  }

  export type FlatmatePostUncheckedCreateWithoutBookmarksInput = {
    id?: string
    userId: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type FlatmatePostCreateOrConnectWithoutBookmarksInput = {
    where: FlatmatePostWhereUniqueInput
    create: XOR<FlatmatePostCreateWithoutBookmarksInput, FlatmatePostUncheckedCreateWithoutBookmarksInput>
  }

  export type UserUpsertWithoutBookmarksInput = {
    update: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
    create: XOR<UserCreateWithoutBookmarksInput, UserUncheckedCreateWithoutBookmarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookmarksInput, UserUncheckedUpdateWithoutBookmarksInput>
  }

  export type UserUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUpdateOneWithoutUserNestedInput
    listings?: FlatUpdateManyWithoutPostedByNestedInput
    flatmatePosts?: FlatmatePostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: PreferenceUncheckedUpdateOneWithoutUserNestedInput
    listings?: FlatUncheckedUpdateManyWithoutPostedByNestedInput
    flatmatePosts?: FlatmatePostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlatUpsertWithoutBookmarksInput = {
    update: XOR<FlatUpdateWithoutBookmarksInput, FlatUncheckedUpdateWithoutBookmarksInput>
    create: XOR<FlatCreateWithoutBookmarksInput, FlatUncheckedCreateWithoutBookmarksInput>
    where?: FlatWhereInput
  }

  export type FlatUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: FlatWhereInput
    data: XOR<FlatUpdateWithoutBookmarksInput, FlatUncheckedUpdateWithoutBookmarksInput>
  }

  export type FlatUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedBy?: UserUpdateOneRequiredWithoutListingsNestedInput
  }

  export type FlatUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    postedById?: StringFieldUpdateOperationsInput | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatmatePostUpsertWithoutBookmarksInput = {
    update: XOR<FlatmatePostUpdateWithoutBookmarksInput, FlatmatePostUncheckedUpdateWithoutBookmarksInput>
    create: XOR<FlatmatePostCreateWithoutBookmarksInput, FlatmatePostUncheckedCreateWithoutBookmarksInput>
    where?: FlatmatePostWhereInput
  }

  export type FlatmatePostUpdateToOneWithWhereWithoutBookmarksInput = {
    where?: FlatmatePostWhereInput
    data: XOR<FlatmatePostUpdateWithoutBookmarksInput, FlatmatePostUncheckedUpdateWithoutBookmarksInput>
  }

  export type FlatmatePostUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlatmatePostsNestedInput
  }

  export type FlatmatePostUncheckedUpdateWithoutBookmarksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatCreateManyPostedByInput = {
    id?: string
    title: string
    description: string
    city: string
    address: string
    verified?: boolean
    rent: number
    availableFrom: Date | string
    roommates: number
    preferredGender: $Enums.Gender
    isAvailable?: boolean
    createdAt?: Date | string
  }

  export type FlatmatePostCreateManyUserInput = {
    id?: string
    city: string
    budgetMin: number
    budgetMax: number
    ageMin: number
    ageMax: number
    preferredGender: $Enums.Gender
    moveInDate: Date | string
    occupation?: string | null
    habits?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type BookmarkCreateManyUserInput = {
    id?: string
    flatId?: string | null
    flatmatePostId?: string | null
    createdAt?: Date | string
  }

  export type FlatUpdateWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutFlatNestedInput
  }

  export type FlatUncheckedUpdateManyWithoutPostedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    rent?: IntFieldUpdateOperationsInput | number
    availableFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    roommates?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlatmatePostUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUpdateManyWithoutFlatmatePostNestedInput
  }

  export type FlatmatePostUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookmarks?: BookmarkUncheckedUpdateManyWithoutFlatmatePostNestedInput
  }

  export type FlatmatePostUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    budgetMin?: IntFieldUpdateOperationsInput | number
    budgetMax?: IntFieldUpdateOperationsInput | number
    ageMin?: IntFieldUpdateOperationsInput | number
    ageMax?: IntFieldUpdateOperationsInput | number
    preferredGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    moveInDate?: DateTimeFieldUpdateOperationsInput | Date | string
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    habits?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flat?: FlatUpdateOneWithoutBookmarksNestedInput
    flatmatePost?: FlatmatePostUpdateOneWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flatId?: NullableStringFieldUpdateOperationsInput | string | null
    flatmatePostId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flatId?: NullableStringFieldUpdateOperationsInput | string | null
    flatmatePostId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyFlatInput = {
    id?: string
    userId: string
    flatmatePostId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkUpdateWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    flatmatePost?: FlatmatePostUpdateOneWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flatmatePostId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutFlatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flatmatePostId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkCreateManyFlatmatePostInput = {
    id?: string
    userId: string
    flatId?: string | null
    createdAt?: Date | string
  }

  export type BookmarkUpdateWithoutFlatmatePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookmarksNestedInput
    flat?: FlatUpdateOneWithoutBookmarksNestedInput
  }

  export type BookmarkUncheckedUpdateWithoutFlatmatePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookmarkUncheckedUpdateManyWithoutFlatmatePostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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