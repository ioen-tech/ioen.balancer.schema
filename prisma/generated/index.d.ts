
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Users
 */

export type Users = {
  user_id: number
  username: string
  password: string
  email_address: string
  rewards_points: number | null
  energy_consumption: number | null
  retailer: string
  meter_hardware: string
  is_group_admin: number | null
  group_id: number | null
}

/**
 * Model Groups
 */

export type Groups = {
  group_id: number
  group_name: string
  min_users: number
  max_users: number
  reward_start_balance: number
  group_logo: string | null
}

/**
 * Model GroupMembers
 */

export type GroupMembers = {
  group_member_id: number
  user_id: number
  group_id: number
}

/**
 * Model FroniusInfo
 */

export type FroniusInfo = {
  user_id: number
  fronius_userid: string
  fronius_password: string
  fronius_accesskey_id: string
  fronius_accesskey_value: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **Groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.GroupsDelegate<GlobalReject>;

  /**
   * `prisma.groupMembers`: Exposes CRUD operations for the **GroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMembers.findMany()
    * ```
    */
  get groupMembers(): Prisma.GroupMembersDelegate<GlobalReject>;

  /**
   * `prisma.froniusInfo`: Exposes CRUD operations for the **FroniusInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FroniusInfos
    * const froniusInfos = await prisma.froniusInfo.findMany()
    * ```
    */
  get froniusInfo(): Prisma.FroniusInfoDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.30.3
   * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Users: 'Users',
    Groups: 'Groups',
    GroupMembers: 'GroupMembers',
    FroniusInfo: 'FroniusInfo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
    max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    rewards_points: number | null
    energy_consumption: number | null
    is_group_admin: number | null
    group_id: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    rewards_points: number | null
    energy_consumption: number | null
    is_group_admin: number | null
    group_id: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    username: string | null
    password: string | null
    email_address: string | null
    rewards_points: number | null
    energy_consumption: number | null
    retailer: string | null
    meter_hardware: string | null
    is_group_admin: number | null
    group_id: number | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    username: string | null
    password: string | null
    email_address: string | null
    rewards_points: number | null
    energy_consumption: number | null
    retailer: string | null
    meter_hardware: string | null
    is_group_admin: number | null
    group_id: number | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    username: number
    password: number
    email_address: number
    rewards_points: number
    energy_consumption: number
    retailer: number
    meter_hardware: number
    is_group_admin: number
    group_id: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    rewards_points?: true
    energy_consumption?: true
    is_group_admin?: true
    group_id?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    rewards_points?: true
    energy_consumption?: true
    is_group_admin?: true
    group_id?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    email_address?: true
    rewards_points?: true
    energy_consumption?: true
    retailer?: true
    meter_hardware?: true
    is_group_admin?: true
    group_id?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    email_address?: true
    rewards_points?: true
    energy_consumption?: true
    retailer?: true
    meter_hardware?: true
    is_group_admin?: true
    group_id?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    username?: true
    password?: true
    email_address?: true
    rewards_points?: true
    energy_consumption?: true
    retailer?: true
    meter_hardware?: true
    is_group_admin?: true
    group_id?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    user_id: number
    username: string
    password: string
    email_address: string
    rewards_points: number | null
    energy_consumption: number | null
    retailer: string
    meter_hardware: string
    is_group_admin: number | null
    group_id: number | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      > 
    >


  export type UsersSelect = {
    user_id?: boolean
    username?: boolean
    password?: boolean
    email_address?: boolean
    rewards_points?: boolean
    energy_consumption?: boolean
    retailer?: boolean
    meter_hardware?: boolean
    is_group_admin?: boolean
    group_id?: boolean
    fronius_info?: boolean | FroniusInfoArgs
  }

  export type UsersInclude = {
    fronius_info?: boolean | FroniusInfoArgs
  }

  export type UsersGetPayload<
    S extends boolean | null | undefined | UsersArgs,
    U = keyof S
      > = S extends true
        ? Users
    : S extends undefined
    ? never
    : S extends UsersArgs | UsersFindManyArgs
    ?'include' extends U
    ? Users  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'fronius_info'
        ? FroniusInfoGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Users ?Users [P]
  : 
          P extends 'fronius_info'
        ? FroniusInfoGetPayload<S['select'][P]> | null : never
  } 
    : Users
  : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Users>>, PrismaPromise<Array<UsersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    fronius_info<T extends FroniusInfoArgs = {}>(args?: Subset<T, FroniusInfoArgs>): CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo | null >, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
  }



  /**
   * Model Groups
   */


  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
    max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsAvgAggregateOutputType = {
    group_id: number | null
    min_users: number | null
    max_users: number | null
    reward_start_balance: number | null
  }

  export type GroupsSumAggregateOutputType = {
    group_id: number | null
    min_users: number | null
    max_users: number | null
    reward_start_balance: number | null
  }

  export type GroupsMinAggregateOutputType = {
    group_id: number | null
    group_name: string | null
    min_users: number | null
    max_users: number | null
    reward_start_balance: number | null
    group_logo: string | null
  }

  export type GroupsMaxAggregateOutputType = {
    group_id: number | null
    group_name: string | null
    min_users: number | null
    max_users: number | null
    reward_start_balance: number | null
    group_logo: string | null
  }

  export type GroupsCountAggregateOutputType = {
    group_id: number
    group_name: number
    min_users: number
    max_users: number
    reward_start_balance: number
    group_logo: number
    _all: number
  }


  export type GroupsAvgAggregateInputType = {
    group_id?: true
    min_users?: true
    max_users?: true
    reward_start_balance?: true
  }

  export type GroupsSumAggregateInputType = {
    group_id?: true
    min_users?: true
    max_users?: true
    reward_start_balance?: true
  }

  export type GroupsMinAggregateInputType = {
    group_id?: true
    group_name?: true
    min_users?: true
    max_users?: true
    reward_start_balance?: true
    group_logo?: true
  }

  export type GroupsMaxAggregateInputType = {
    group_id?: true
    group_name?: true
    min_users?: true
    max_users?: true
    reward_start_balance?: true
    group_logo?: true
  }

  export type GroupsCountAggregateInputType = {
    group_id?: true
    group_name?: true
    min_users?: true
    max_users?: true
    reward_start_balance?: true
    group_logo?: true
    _all?: true
  }

  export type GroupsAggregateArgs = {
    /**
     * Filter which Groups to aggregate.
     * 
    **/
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: GroupsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: GroupsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }


    
    
  export type GroupsGroupByArgs = {
    where?: GroupsWhereInput
    orderBy?: Enumerable<GroupsOrderByInput>
    by: Array<GroupsScalarFieldEnum>
    having?: GroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _avg?: GroupsAvgAggregateInputType
    _sum?: GroupsSumAggregateInputType
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }


  export type GroupsGroupByOutputType = {
    group_id: number
    group_name: string
    min_users: number
    max_users: number
    reward_start_balance: number
    group_logo: string | null
    _count: GroupsCountAggregateOutputType | null
    _avg: GroupsAvgAggregateOutputType | null
    _sum: GroupsSumAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends GroupsGroupByArgs> = Promise<
    Array<
      PickArray<GroupsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GroupsGroupByOutputType[P]> 
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      > 
    >


  export type GroupsSelect = {
    group_id?: boolean
    group_name?: boolean
    min_users?: boolean
    max_users?: boolean
    reward_start_balance?: boolean
    group_logo?: boolean
  }

  export type GroupsGetPayload<
    S extends boolean | null | undefined | GroupsArgs,
    U = keyof S
      > = S extends true
        ? Groups
    : S extends undefined
    ? never
    : S extends GroupsArgs | GroupsFindManyArgs
    ?'include' extends U
    ? Groups 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Groups ?Groups [P]
  : 
     never
  } 
    : Groups
  : Groups


  type GroupsCountArgs = Merge<
    Omit<GroupsFindManyArgs, 'select' | 'include'> & {
      select?: GroupsCountAggregateInputType | true
    }
  >

  export interface GroupsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Groups that matches the filter.
     * @param {GroupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Groups'> extends True ? CheckSelect<T, Prisma__GroupsClient<Groups>, Prisma__GroupsClient<GroupsGetPayload<T>>> : CheckSelect<T, Prisma__GroupsClient<Groups | null >, Prisma__GroupsClient<GroupsGetPayload<T> | null >>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Groups'> extends True ? CheckSelect<T, Prisma__GroupsClient<Groups>, Prisma__GroupsClient<GroupsGetPayload<T>>> : CheckSelect<T, Prisma__GroupsClient<Groups | null >, Prisma__GroupsClient<GroupsGetPayload<T> | null >>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `group_id`
     * const groupsWithGroup_idOnly = await prisma.groups.findMany({ select: { group_id: true } })
     * 
    **/
    findMany<T extends GroupsFindManyArgs>(
      args?: SelectSubset<T, GroupsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Groups>>, PrismaPromise<Array<GroupsGetPayload<T>>>>

    /**
     * Create a Groups.
     * @param {GroupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
    **/
    create<T extends GroupsCreateArgs>(
      args: SelectSubset<T, GroupsCreateArgs>
    ): CheckSelect<T, Prisma__GroupsClient<Groups>, Prisma__GroupsClient<GroupsGetPayload<T>>>

    /**
     * Create many Groups.
     *     @param {GroupsCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const groups = await prisma.groups.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupsCreateManyArgs>(
      args?: SelectSubset<T, GroupsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Groups.
     * @param {GroupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
    **/
    delete<T extends GroupsDeleteArgs>(
      args: SelectSubset<T, GroupsDeleteArgs>
    ): CheckSelect<T, Prisma__GroupsClient<Groups>, Prisma__GroupsClient<GroupsGetPayload<T>>>

    /**
     * Update one Groups.
     * @param {GroupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupsUpdateArgs>(
      args: SelectSubset<T, GroupsUpdateArgs>
    ): CheckSelect<T, Prisma__GroupsClient<Groups>, Prisma__GroupsClient<GroupsGetPayload<T>>>

    /**
     * Delete zero or more Groups.
     * @param {GroupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupsDeleteManyArgs>(
      args?: SelectSubset<T, GroupsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupsUpdateManyArgs>(
      args: SelectSubset<T, GroupsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Groups.
     * @param {GroupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
    **/
    upsert<T extends GroupsUpsertArgs>(
      args: SelectSubset<T, GroupsUpsertArgs>
    ): CheckSelect<T, Prisma__GroupsClient<Groups>, Prisma__GroupsClient<GroupsGetPayload<T>>>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupsCountArgs>(
      args?: Subset<T, GroupsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsGroupByArgs} args - Group by arguments.
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
      T extends GroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupsGroupByArgs['orderBy'] }
        : { orderBy?: GroupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Groups findUnique
   */
  export type GroupsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * Throw an Error if a Groups can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Groups to fetch.
     * 
    **/
    where: GroupsWhereUniqueInput
  }


  /**
   * Groups findFirst
   */
  export type GroupsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * Throw an Error if a Groups can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Groups to fetch.
     * 
    **/
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     * 
    **/
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     * 
    **/
    distinct?: Enumerable<GroupsScalarFieldEnum>
  }


  /**
   * Groups findMany
   */
  export type GroupsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * Filter, which Groups to fetch.
     * 
    **/
    where?: GroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     * 
    **/
    cursor?: GroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GroupsScalarFieldEnum>
  }


  /**
   * Groups create
   */
  export type GroupsCreateArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * The data needed to create a Groups.
     * 
    **/
    data: XOR<GroupsCreateInput, GroupsUncheckedCreateInput>
  }


  /**
   * Groups createMany
   */
  export type GroupsCreateManyArgs = {
    data: Enumerable<GroupsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Groups update
   */
  export type GroupsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * The data needed to update a Groups.
     * 
    **/
    data: XOR<GroupsUpdateInput, GroupsUncheckedUpdateInput>
    /**
     * Choose, which Groups to update.
     * 
    **/
    where: GroupsWhereUniqueInput
  }


  /**
   * Groups updateMany
   */
  export type GroupsUpdateManyArgs = {
    data: XOR<GroupsUpdateManyMutationInput, GroupsUncheckedUpdateManyInput>
    where?: GroupsWhereInput
  }


  /**
   * Groups upsert
   */
  export type GroupsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * The filter to search for the Groups to update in case it exists.
     * 
    **/
    where: GroupsWhereUniqueInput
    /**
     * In case the Groups found by the `where` argument doesn't exist, create a new Groups with this data.
     * 
    **/
    create: XOR<GroupsCreateInput, GroupsUncheckedCreateInput>
    /**
     * In case the Groups was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GroupsUpdateInput, GroupsUncheckedUpdateInput>
  }


  /**
   * Groups delete
   */
  export type GroupsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
    /**
     * Filter which Groups to delete.
     * 
    **/
    where: GroupsWhereUniqueInput
  }


  /**
   * Groups deleteMany
   */
  export type GroupsDeleteManyArgs = {
    where?: GroupsWhereInput
  }


  /**
   * Groups without action
   */
  export type GroupsArgs = {
    /**
     * Select specific fields to fetch from the Groups
     * 
    **/
    select?: GroupsSelect | null
  }



  /**
   * Model GroupMembers
   */


  export type AggregateGroupMembers = {
    _count: GroupMembersCountAggregateOutputType | null
    count: GroupMembersCountAggregateOutputType | null
    _avg: GroupMembersAvgAggregateOutputType | null
    avg: GroupMembersAvgAggregateOutputType | null
    _sum: GroupMembersSumAggregateOutputType | null
    sum: GroupMembersSumAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
    max: GroupMembersMaxAggregateOutputType | null
  }

  export type GroupMembersAvgAggregateOutputType = {
    group_member_id: number | null
    user_id: number | null
    group_id: number | null
  }

  export type GroupMembersSumAggregateOutputType = {
    group_member_id: number | null
    user_id: number | null
    group_id: number | null
  }

  export type GroupMembersMinAggregateOutputType = {
    group_member_id: number | null
    user_id: number | null
    group_id: number | null
  }

  export type GroupMembersMaxAggregateOutputType = {
    group_member_id: number | null
    user_id: number | null
    group_id: number | null
  }

  export type GroupMembersCountAggregateOutputType = {
    group_member_id: number
    user_id: number
    group_id: number
    _all: number
  }


  export type GroupMembersAvgAggregateInputType = {
    group_member_id?: true
    user_id?: true
    group_id?: true
  }

  export type GroupMembersSumAggregateInputType = {
    group_member_id?: true
    user_id?: true
    group_id?: true
  }

  export type GroupMembersMinAggregateInputType = {
    group_member_id?: true
    user_id?: true
    group_id?: true
  }

  export type GroupMembersMaxAggregateInputType = {
    group_member_id?: true
    user_id?: true
    group_id?: true
  }

  export type GroupMembersCountAggregateInputType = {
    group_member_id?: true
    user_id?: true
    group_id?: true
    _all?: true
  }

  export type GroupMembersAggregateArgs = {
    /**
     * Filter which GroupMembers to aggregate.
     * 
    **/
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupMembersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMembersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | GroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMembersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: GroupMembersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMembersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: GroupMembersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMembersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: GroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMembersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: GroupMembersMaxAggregateInputType
  }

  export type GetGroupMembersAggregateType<T extends GroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembers[P]>
      : GetScalarType<T[P], AggregateGroupMembers[P]>
  }


    
    
  export type GroupMembersGroupByArgs = {
    where?: GroupMembersWhereInput
    orderBy?: Enumerable<GroupMembersOrderByInput>
    by: Array<GroupMembersScalarFieldEnum>
    having?: GroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMembersCountAggregateInputType | true
    _avg?: GroupMembersAvgAggregateInputType
    _sum?: GroupMembersSumAggregateInputType
    _min?: GroupMembersMinAggregateInputType
    _max?: GroupMembersMaxAggregateInputType
  }


  export type GroupMembersGroupByOutputType = {
    group_member_id: number
    user_id: number
    group_id: number
    _count: GroupMembersCountAggregateOutputType | null
    _avg: GroupMembersAvgAggregateOutputType | null
    _sum: GroupMembersSumAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  type GetGroupMembersGroupByPayload<T extends GroupMembersGroupByArgs> = Promise<
    Array<
      PickArray<GroupMembersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof GroupMembersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], GroupMembersGroupByOutputType[P]> 
            : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
        }
      > 
    >


  export type GroupMembersSelect = {
    group_member_id?: boolean
    user_id?: boolean
    group_id?: boolean
  }

  export type GroupMembersGetPayload<
    S extends boolean | null | undefined | GroupMembersArgs,
    U = keyof S
      > = S extends true
        ? GroupMembers
    : S extends undefined
    ? never
    : S extends GroupMembersArgs | GroupMembersFindManyArgs
    ?'include' extends U
    ? GroupMembers 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof GroupMembers ?GroupMembers [P]
  : 
     never
  } 
    : GroupMembers
  : GroupMembers


  type GroupMembersCountArgs = Merge<
    Omit<GroupMembersFindManyArgs, 'select' | 'include'> & {
      select?: GroupMembersCountAggregateInputType | true
    }
  >

  export interface GroupMembersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one GroupMembers that matches the filter.
     * @param {GroupMembersFindUniqueArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMembersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupMembersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GroupMembers'> extends True ? CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>> : CheckSelect<T, Prisma__GroupMembersClient<GroupMembers | null >, Prisma__GroupMembersClient<GroupMembersGetPayload<T> | null >>

    /**
     * Find the first GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindFirstArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMembersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupMembersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GroupMembers'> extends True ? CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>> : CheckSelect<T, Prisma__GroupMembersClient<GroupMembers | null >, Prisma__GroupMembersClient<GroupMembersGetPayload<T> | null >>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany({ take: 10 })
     * 
     * // Only select the `group_member_id`
     * const groupMembersWithGroup_member_idOnly = await prisma.groupMembers.findMany({ select: { group_member_id: true } })
     * 
    **/
    findMany<T extends GroupMembersFindManyArgs>(
      args?: SelectSubset<T, GroupMembersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<GroupMembers>>, PrismaPromise<Array<GroupMembersGetPayload<T>>>>

    /**
     * Create a GroupMembers.
     * @param {GroupMembersCreateArgs} args - Arguments to create a GroupMembers.
     * @example
     * // Create one GroupMembers
     * const GroupMembers = await prisma.groupMembers.create({
     *   data: {
     *     // ... data to create a GroupMembers
     *   }
     * })
     * 
    **/
    create<T extends GroupMembersCreateArgs>(
      args: SelectSubset<T, GroupMembersCreateArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Create many GroupMembers.
     *     @param {GroupMembersCreateManyArgs} args - Arguments to create many GroupMembers.
     *     @example
     *     // Create many GroupMembers
     *     const groupMembers = await prisma.groupMembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMembersCreateManyArgs>(
      args?: SelectSubset<T, GroupMembersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMembers.
     * @param {GroupMembersDeleteArgs} args - Arguments to delete one GroupMembers.
     * @example
     * // Delete one GroupMembers
     * const GroupMembers = await prisma.groupMembers.delete({
     *   where: {
     *     // ... filter to delete one GroupMembers
     *   }
     * })
     * 
    **/
    delete<T extends GroupMembersDeleteArgs>(
      args: SelectSubset<T, GroupMembersDeleteArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Update one GroupMembers.
     * @param {GroupMembersUpdateArgs} args - Arguments to update one GroupMembers.
     * @example
     * // Update one GroupMembers
     * const groupMembers = await prisma.groupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMembersUpdateArgs>(
      args: SelectSubset<T, GroupMembersUpdateArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMembersDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMembersDeleteManyArgs>(
      args?: SelectSubset<T, GroupMembersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMembers = await prisma.groupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMembersUpdateManyArgs>(
      args: SelectSubset<T, GroupMembersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMembers.
     * @param {GroupMembersUpsertArgs} args - Arguments to update or create a GroupMembers.
     * @example
     * // Update or create a GroupMembers
     * const groupMembers = await prisma.groupMembers.upsert({
     *   create: {
     *     // ... data to create a GroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembers we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMembersUpsertArgs>(
      args: SelectSubset<T, GroupMembersUpsertArgs>
    ): CheckSelect<T, Prisma__GroupMembersClient<GroupMembers>, Prisma__GroupMembersClient<GroupMembersGetPayload<T>>>

    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMembers.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMembersCountArgs>(
      args?: Subset<T, GroupMembersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMembersAggregateArgs>(args: Subset<T, GroupMembersAggregateArgs>): PrismaPromise<GetGroupMembersAggregateType<T>>

    /**
     * Group by GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersGroupByArgs} args - Group by arguments.
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
      T extends GroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: GroupMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMembersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupMembersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * GroupMembers findUnique
   */
  export type GroupMembersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Throw an Error if a GroupMembers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GroupMembers to fetch.
     * 
    **/
    where: GroupMembersWhereUniqueInput
  }


  /**
   * GroupMembers findFirst
   */
  export type GroupMembersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Throw an Error if a GroupMembers can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which GroupMembers to fetch.
     * 
    **/
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupMembersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     * 
    **/
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     * 
    **/
    distinct?: Enumerable<GroupMembersScalarFieldEnum>
  }


  /**
   * GroupMembers findMany
   */
  export type GroupMembersFindManyArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Filter, which GroupMembers to fetch.
     * 
    **/
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     * 
    **/
    orderBy?: Enumerable<GroupMembersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     * 
    **/
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GroupMembersScalarFieldEnum>
  }


  /**
   * GroupMembers create
   */
  export type GroupMembersCreateArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * The data needed to create a GroupMembers.
     * 
    **/
    data: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
  }


  /**
   * GroupMembers createMany
   */
  export type GroupMembersCreateManyArgs = {
    data: Enumerable<GroupMembersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GroupMembers update
   */
  export type GroupMembersUpdateArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * The data needed to update a GroupMembers.
     * 
    **/
    data: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
    /**
     * Choose, which GroupMembers to update.
     * 
    **/
    where: GroupMembersWhereUniqueInput
  }


  /**
   * GroupMembers updateMany
   */
  export type GroupMembersUpdateManyArgs = {
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyInput>
    where?: GroupMembersWhereInput
  }


  /**
   * GroupMembers upsert
   */
  export type GroupMembersUpsertArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * The filter to search for the GroupMembers to update in case it exists.
     * 
    **/
    where: GroupMembersWhereUniqueInput
    /**
     * In case the GroupMembers found by the `where` argument doesn't exist, create a new GroupMembers with this data.
     * 
    **/
    create: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
    /**
     * In case the GroupMembers was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
  }


  /**
   * GroupMembers delete
   */
  export type GroupMembersDeleteArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
    /**
     * Filter which GroupMembers to delete.
     * 
    **/
    where: GroupMembersWhereUniqueInput
  }


  /**
   * GroupMembers deleteMany
   */
  export type GroupMembersDeleteManyArgs = {
    where?: GroupMembersWhereInput
  }


  /**
   * GroupMembers without action
   */
  export type GroupMembersArgs = {
    /**
     * Select specific fields to fetch from the GroupMembers
     * 
    **/
    select?: GroupMembersSelect | null
  }



  /**
   * Model FroniusInfo
   */


  export type AggregateFroniusInfo = {
    _count: FroniusInfoCountAggregateOutputType | null
    count: FroniusInfoCountAggregateOutputType | null
    _avg: FroniusInfoAvgAggregateOutputType | null
    avg: FroniusInfoAvgAggregateOutputType | null
    _sum: FroniusInfoSumAggregateOutputType | null
    sum: FroniusInfoSumAggregateOutputType | null
    _min: FroniusInfoMinAggregateOutputType | null
    min: FroniusInfoMinAggregateOutputType | null
    _max: FroniusInfoMaxAggregateOutputType | null
    max: FroniusInfoMaxAggregateOutputType | null
  }

  export type FroniusInfoAvgAggregateOutputType = {
    user_id: number | null
  }

  export type FroniusInfoSumAggregateOutputType = {
    user_id: number | null
  }

  export type FroniusInfoMinAggregateOutputType = {
    user_id: number | null
    fronius_userid: string | null
    fronius_password: string | null
    fronius_accesskey_id: string | null
    fronius_accesskey_value: string | null
  }

  export type FroniusInfoMaxAggregateOutputType = {
    user_id: number | null
    fronius_userid: string | null
    fronius_password: string | null
    fronius_accesskey_id: string | null
    fronius_accesskey_value: string | null
  }

  export type FroniusInfoCountAggregateOutputType = {
    user_id: number
    fronius_userid: number
    fronius_password: number
    fronius_accesskey_id: number
    fronius_accesskey_value: number
    _all: number
  }


  export type FroniusInfoAvgAggregateInputType = {
    user_id?: true
  }

  export type FroniusInfoSumAggregateInputType = {
    user_id?: true
  }

  export type FroniusInfoMinAggregateInputType = {
    user_id?: true
    fronius_userid?: true
    fronius_password?: true
    fronius_accesskey_id?: true
    fronius_accesskey_value?: true
  }

  export type FroniusInfoMaxAggregateInputType = {
    user_id?: true
    fronius_userid?: true
    fronius_password?: true
    fronius_accesskey_id?: true
    fronius_accesskey_value?: true
  }

  export type FroniusInfoCountAggregateInputType = {
    user_id?: true
    fronius_userid?: true
    fronius_password?: true
    fronius_accesskey_id?: true
    fronius_accesskey_value?: true
    _all?: true
  }

  export type FroniusInfoAggregateArgs = {
    /**
     * Filter which FroniusInfo to aggregate.
     * 
    **/
    where?: FroniusInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FroniusInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<FroniusInfoOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FroniusInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FroniusInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FroniusInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FroniusInfos
    **/
    _count?: true | FroniusInfoCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FroniusInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FroniusInfoAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: FroniusInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FroniusInfoSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: FroniusInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FroniusInfoMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FroniusInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FroniusInfoMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FroniusInfoMaxAggregateInputType
  }

  export type GetFroniusInfoAggregateType<T extends FroniusInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateFroniusInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFroniusInfo[P]>
      : GetScalarType<T[P], AggregateFroniusInfo[P]>
  }


    
    
  export type FroniusInfoGroupByArgs = {
    where?: FroniusInfoWhereInput
    orderBy?: Enumerable<FroniusInfoOrderByInput>
    by: Array<FroniusInfoScalarFieldEnum>
    having?: FroniusInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FroniusInfoCountAggregateInputType | true
    _avg?: FroniusInfoAvgAggregateInputType
    _sum?: FroniusInfoSumAggregateInputType
    _min?: FroniusInfoMinAggregateInputType
    _max?: FroniusInfoMaxAggregateInputType
  }


  export type FroniusInfoGroupByOutputType = {
    user_id: number
    fronius_userid: string
    fronius_password: string
    fronius_accesskey_id: string
    fronius_accesskey_value: string
    _count: FroniusInfoCountAggregateOutputType | null
    _avg: FroniusInfoAvgAggregateOutputType | null
    _sum: FroniusInfoSumAggregateOutputType | null
    _min: FroniusInfoMinAggregateOutputType | null
    _max: FroniusInfoMaxAggregateOutputType | null
  }

  type GetFroniusInfoGroupByPayload<T extends FroniusInfoGroupByArgs> = Promise<
    Array<
      PickArray<FroniusInfoGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FroniusInfoGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FroniusInfoGroupByOutputType[P]> 
            : GetScalarType<T[P], FroniusInfoGroupByOutputType[P]>
        }
      > 
    >


  export type FroniusInfoSelect = {
    user_id?: boolean
    fronius_userid?: boolean
    fronius_password?: boolean
    fronius_accesskey_id?: boolean
    fronius_accesskey_value?: boolean
    users?: boolean | UsersArgs
  }

  export type FroniusInfoInclude = {
    users?: boolean | UsersArgs
  }

  export type FroniusInfoGetPayload<
    S extends boolean | null | undefined | FroniusInfoArgs,
    U = keyof S
      > = S extends true
        ? FroniusInfo
    : S extends undefined
    ? never
    : S extends FroniusInfoArgs | FroniusInfoFindManyArgs
    ?'include' extends U
    ? FroniusInfo  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? UsersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof FroniusInfo ?FroniusInfo [P]
  : 
          P extends 'users'
        ? UsersGetPayload<S['select'][P]> : never
  } 
    : FroniusInfo
  : FroniusInfo


  type FroniusInfoCountArgs = Merge<
    Omit<FroniusInfoFindManyArgs, 'select' | 'include'> & {
      select?: FroniusInfoCountAggregateInputType | true
    }
  >

  export interface FroniusInfoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FroniusInfo that matches the filter.
     * @param {FroniusInfoFindUniqueArgs} args - Arguments to find a FroniusInfo
     * @example
     * // Get one FroniusInfo
     * const froniusInfo = await prisma.froniusInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FroniusInfoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FroniusInfoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FroniusInfo'> extends True ? CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo>, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T>>> : CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo | null >, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T> | null >>

    /**
     * Find the first FroniusInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FroniusInfoFindFirstArgs} args - Arguments to find a FroniusInfo
     * @example
     * // Get one FroniusInfo
     * const froniusInfo = await prisma.froniusInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FroniusInfoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FroniusInfoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FroniusInfo'> extends True ? CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo>, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T>>> : CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo | null >, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T> | null >>

    /**
     * Find zero or more FroniusInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FroniusInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FroniusInfos
     * const froniusInfos = await prisma.froniusInfo.findMany()
     * 
     * // Get first 10 FroniusInfos
     * const froniusInfos = await prisma.froniusInfo.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const froniusInfoWithUser_idOnly = await prisma.froniusInfo.findMany({ select: { user_id: true } })
     * 
    **/
    findMany<T extends FroniusInfoFindManyArgs>(
      args?: SelectSubset<T, FroniusInfoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FroniusInfo>>, PrismaPromise<Array<FroniusInfoGetPayload<T>>>>

    /**
     * Create a FroniusInfo.
     * @param {FroniusInfoCreateArgs} args - Arguments to create a FroniusInfo.
     * @example
     * // Create one FroniusInfo
     * const FroniusInfo = await prisma.froniusInfo.create({
     *   data: {
     *     // ... data to create a FroniusInfo
     *   }
     * })
     * 
    **/
    create<T extends FroniusInfoCreateArgs>(
      args: SelectSubset<T, FroniusInfoCreateArgs>
    ): CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo>, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T>>>

    /**
     * Create many FroniusInfos.
     *     @param {FroniusInfoCreateManyArgs} args - Arguments to create many FroniusInfos.
     *     @example
     *     // Create many FroniusInfos
     *     const froniusInfo = await prisma.froniusInfo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FroniusInfoCreateManyArgs>(
      args?: SelectSubset<T, FroniusInfoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FroniusInfo.
     * @param {FroniusInfoDeleteArgs} args - Arguments to delete one FroniusInfo.
     * @example
     * // Delete one FroniusInfo
     * const FroniusInfo = await prisma.froniusInfo.delete({
     *   where: {
     *     // ... filter to delete one FroniusInfo
     *   }
     * })
     * 
    **/
    delete<T extends FroniusInfoDeleteArgs>(
      args: SelectSubset<T, FroniusInfoDeleteArgs>
    ): CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo>, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T>>>

    /**
     * Update one FroniusInfo.
     * @param {FroniusInfoUpdateArgs} args - Arguments to update one FroniusInfo.
     * @example
     * // Update one FroniusInfo
     * const froniusInfo = await prisma.froniusInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FroniusInfoUpdateArgs>(
      args: SelectSubset<T, FroniusInfoUpdateArgs>
    ): CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo>, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T>>>

    /**
     * Delete zero or more FroniusInfos.
     * @param {FroniusInfoDeleteManyArgs} args - Arguments to filter FroniusInfos to delete.
     * @example
     * // Delete a few FroniusInfos
     * const { count } = await prisma.froniusInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FroniusInfoDeleteManyArgs>(
      args?: SelectSubset<T, FroniusInfoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FroniusInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FroniusInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FroniusInfos
     * const froniusInfo = await prisma.froniusInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FroniusInfoUpdateManyArgs>(
      args: SelectSubset<T, FroniusInfoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FroniusInfo.
     * @param {FroniusInfoUpsertArgs} args - Arguments to update or create a FroniusInfo.
     * @example
     * // Update or create a FroniusInfo
     * const froniusInfo = await prisma.froniusInfo.upsert({
     *   create: {
     *     // ... data to create a FroniusInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FroniusInfo we want to update
     *   }
     * })
    **/
    upsert<T extends FroniusInfoUpsertArgs>(
      args: SelectSubset<T, FroniusInfoUpsertArgs>
    ): CheckSelect<T, Prisma__FroniusInfoClient<FroniusInfo>, Prisma__FroniusInfoClient<FroniusInfoGetPayload<T>>>

    /**
     * Count the number of FroniusInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FroniusInfoCountArgs} args - Arguments to filter FroniusInfos to count.
     * @example
     * // Count the number of FroniusInfos
     * const count = await prisma.froniusInfo.count({
     *   where: {
     *     // ... the filter for the FroniusInfos we want to count
     *   }
     * })
    **/
    count<T extends FroniusInfoCountArgs>(
      args?: Subset<T, FroniusInfoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FroniusInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FroniusInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FroniusInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FroniusInfoAggregateArgs>(args: Subset<T, FroniusInfoAggregateArgs>): PrismaPromise<GetFroniusInfoAggregateType<T>>

    /**
     * Group by FroniusInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FroniusInfoGroupByArgs} args - Group by arguments.
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
      T extends FroniusInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FroniusInfoGroupByArgs['orderBy'] }
        : { orderBy?: FroniusInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FroniusInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFroniusInfoGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FroniusInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FroniusInfoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FroniusInfo findUnique
   */
  export type FroniusInfoFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * Throw an Error if a FroniusInfo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FroniusInfo to fetch.
     * 
    **/
    where: FroniusInfoWhereUniqueInput
  }


  /**
   * FroniusInfo findFirst
   */
  export type FroniusInfoFindFirstArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * Throw an Error if a FroniusInfo can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which FroniusInfo to fetch.
     * 
    **/
    where?: FroniusInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FroniusInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<FroniusInfoOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FroniusInfos.
     * 
    **/
    cursor?: FroniusInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FroniusInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FroniusInfos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FroniusInfos.
     * 
    **/
    distinct?: Enumerable<FroniusInfoScalarFieldEnum>
  }


  /**
   * FroniusInfo findMany
   */
  export type FroniusInfoFindManyArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * Filter, which FroniusInfos to fetch.
     * 
    **/
    where?: FroniusInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FroniusInfos to fetch.
     * 
    **/
    orderBy?: Enumerable<FroniusInfoOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FroniusInfos.
     * 
    **/
    cursor?: FroniusInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FroniusInfos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FroniusInfos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FroniusInfoScalarFieldEnum>
  }


  /**
   * FroniusInfo create
   */
  export type FroniusInfoCreateArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * The data needed to create a FroniusInfo.
     * 
    **/
    data: XOR<FroniusInfoCreateInput, FroniusInfoUncheckedCreateInput>
  }


  /**
   * FroniusInfo createMany
   */
  export type FroniusInfoCreateManyArgs = {
    data: Enumerable<FroniusInfoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FroniusInfo update
   */
  export type FroniusInfoUpdateArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * The data needed to update a FroniusInfo.
     * 
    **/
    data: XOR<FroniusInfoUpdateInput, FroniusInfoUncheckedUpdateInput>
    /**
     * Choose, which FroniusInfo to update.
     * 
    **/
    where: FroniusInfoWhereUniqueInput
  }


  /**
   * FroniusInfo updateMany
   */
  export type FroniusInfoUpdateManyArgs = {
    data: XOR<FroniusInfoUpdateManyMutationInput, FroniusInfoUncheckedUpdateManyInput>
    where?: FroniusInfoWhereInput
  }


  /**
   * FroniusInfo upsert
   */
  export type FroniusInfoUpsertArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * The filter to search for the FroniusInfo to update in case it exists.
     * 
    **/
    where: FroniusInfoWhereUniqueInput
    /**
     * In case the FroniusInfo found by the `where` argument doesn't exist, create a new FroniusInfo with this data.
     * 
    **/
    create: XOR<FroniusInfoCreateInput, FroniusInfoUncheckedCreateInput>
    /**
     * In case the FroniusInfo was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FroniusInfoUpdateInput, FroniusInfoUncheckedUpdateInput>
  }


  /**
   * FroniusInfo delete
   */
  export type FroniusInfoDeleteArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
    /**
     * Filter which FroniusInfo to delete.
     * 
    **/
    where: FroniusInfoWhereUniqueInput
  }


  /**
   * FroniusInfo deleteMany
   */
  export type FroniusInfoDeleteManyArgs = {
    where?: FroniusInfoWhereInput
  }


  /**
   * FroniusInfo without action
   */
  export type FroniusInfoArgs = {
    /**
     * Select specific fields to fetch from the FroniusInfo
     * 
    **/
    select?: FroniusInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FroniusInfoInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    username: 'username',
    password: 'password',
    email_address: 'email_address',
    rewards_points: 'rewards_points',
    energy_consumption: 'energy_consumption',
    retailer: 'retailer',
    meter_hardware: 'meter_hardware',
    is_group_admin: 'is_group_admin',
    group_id: 'group_id'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    group_id: 'group_id',
    group_name: 'group_name',
    min_users: 'min_users',
    max_users: 'max_users',
    reward_start_balance: 'reward_start_balance',
    group_logo: 'group_logo'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const GroupMembersScalarFieldEnum: {
    group_member_id: 'group_member_id',
    user_id: 'user_id',
    group_id: 'group_id'
  };

  export type GroupMembersScalarFieldEnum = (typeof GroupMembersScalarFieldEnum)[keyof typeof GroupMembersScalarFieldEnum]


  export const FroniusInfoScalarFieldEnum: {
    user_id: 'user_id',
    fronius_userid: 'fronius_userid',
    fronius_password: 'fronius_password',
    fronius_accesskey_id: 'fronius_accesskey_id',
    fronius_accesskey_value: 'fronius_accesskey_value'
  };

  export type FroniusInfoScalarFieldEnum = (typeof FroniusInfoScalarFieldEnum)[keyof typeof FroniusInfoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    user_id?: IntFilter | number
    username?: StringFilter | string
    password?: StringFilter | string
    email_address?: StringFilter | string
    rewards_points?: IntNullableFilter | number | null
    energy_consumption?: IntNullableFilter | number | null
    retailer?: StringFilter | string
    meter_hardware?: StringFilter | string
    is_group_admin?: IntNullableFilter | number | null
    group_id?: IntNullableFilter | number | null
    fronius_info?: XOR<FroniusInfoRelationFilter, FroniusInfoWhereInput> | null
  }

  export type UsersOrderByInput = {
    user_id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email_address?: SortOrder
    rewards_points?: SortOrder
    energy_consumption?: SortOrder
    retailer?: SortOrder
    meter_hardware?: SortOrder
    is_group_admin?: SortOrder
    group_id?: SortOrder
  }

  export type UsersWhereUniqueInput = {
    user_id?: number
    username?: string
    email_address?: string
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    email_address?: StringWithAggregatesFilter | string
    rewards_points?: IntNullableWithAggregatesFilter | number | null
    energy_consumption?: IntNullableWithAggregatesFilter | number | null
    retailer?: StringWithAggregatesFilter | string
    meter_hardware?: StringWithAggregatesFilter | string
    is_group_admin?: IntNullableWithAggregatesFilter | number | null
    group_id?: IntNullableWithAggregatesFilter | number | null
  }

  export type GroupsWhereInput = {
    AND?: Enumerable<GroupsWhereInput>
    OR?: Enumerable<GroupsWhereInput>
    NOT?: Enumerable<GroupsWhereInput>
    group_id?: IntFilter | number
    group_name?: StringFilter | string
    min_users?: IntFilter | number
    max_users?: IntFilter | number
    reward_start_balance?: IntFilter | number
    group_logo?: StringNullableFilter | string | null
  }

  export type GroupsOrderByInput = {
    group_id?: SortOrder
    group_name?: SortOrder
    min_users?: SortOrder
    max_users?: SortOrder
    reward_start_balance?: SortOrder
    group_logo?: SortOrder
  }

  export type GroupsWhereUniqueInput = {
    group_id?: number
  }

  export type GroupsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupsScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupsScalarWhereWithAggregatesInput>
    group_id?: IntWithAggregatesFilter | number
    group_name?: StringWithAggregatesFilter | string
    min_users?: IntWithAggregatesFilter | number
    max_users?: IntWithAggregatesFilter | number
    reward_start_balance?: IntWithAggregatesFilter | number
    group_logo?: StringNullableWithAggregatesFilter | string | null
  }

  export type GroupMembersWhereInput = {
    AND?: Enumerable<GroupMembersWhereInput>
    OR?: Enumerable<GroupMembersWhereInput>
    NOT?: Enumerable<GroupMembersWhereInput>
    group_member_id?: IntFilter | number
    user_id?: IntFilter | number
    group_id?: IntFilter | number
  }

  export type GroupMembersOrderByInput = {
    group_member_id?: SortOrder
    user_id?: SortOrder
    group_id?: SortOrder
  }

  export type GroupMembersWhereUniqueInput = {
    group_member_id?: number
  }

  export type GroupMembersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupMembersScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupMembersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupMembersScalarWhereWithAggregatesInput>
    group_member_id?: IntWithAggregatesFilter | number
    user_id?: IntWithAggregatesFilter | number
    group_id?: IntWithAggregatesFilter | number
  }

  export type FroniusInfoWhereInput = {
    AND?: Enumerable<FroniusInfoWhereInput>
    OR?: Enumerable<FroniusInfoWhereInput>
    NOT?: Enumerable<FroniusInfoWhereInput>
    user_id?: IntFilter | number
    fronius_userid?: StringFilter | string
    fronius_password?: StringFilter | string
    fronius_accesskey_id?: StringFilter | string
    fronius_accesskey_value?: StringFilter | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type FroniusInfoOrderByInput = {
    user_id?: SortOrder
    fronius_userid?: SortOrder
    fronius_password?: SortOrder
    fronius_accesskey_id?: SortOrder
    fronius_accesskey_value?: SortOrder
  }

  export type FroniusInfoWhereUniqueInput = {
    user_id?: number
  }

  export type FroniusInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FroniusInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<FroniusInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FroniusInfoScalarWhereWithAggregatesInput>
    user_id?: IntWithAggregatesFilter | number
    fronius_userid?: StringWithAggregatesFilter | string
    fronius_password?: StringWithAggregatesFilter | string
    fronius_accesskey_id?: StringWithAggregatesFilter | string
    fronius_accesskey_value?: StringWithAggregatesFilter | string
  }

  export type UsersCreateInput = {
    username: string
    password: string
    email_address: string
    rewards_points?: number | null
    energy_consumption?: number | null
    retailer: string
    meter_hardware: string
    is_group_admin?: number | null
    group_id?: number | null
    fronius_info?: FroniusInfoCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    user_id?: number
    username: string
    password: string
    email_address: string
    rewards_points?: number | null
    energy_consumption?: number | null
    retailer: string
    meter_hardware: string
    is_group_admin?: number | null
    group_id?: number | null
    fronius_info?: FroniusInfoUncheckedCreateNestedOneWithoutUsersInput
  }

  export type UsersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    rewards_points?: NullableIntFieldUpdateOperationsInput | number | null
    energy_consumption?: NullableIntFieldUpdateOperationsInput | number | null
    retailer?: StringFieldUpdateOperationsInput | string
    meter_hardware?: StringFieldUpdateOperationsInput | string
    is_group_admin?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    fronius_info?: FroniusInfoUpdateOneWithoutUsersInput
  }

  export type UsersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    rewards_points?: NullableIntFieldUpdateOperationsInput | number | null
    energy_consumption?: NullableIntFieldUpdateOperationsInput | number | null
    retailer?: StringFieldUpdateOperationsInput | string
    meter_hardware?: StringFieldUpdateOperationsInput | string
    is_group_admin?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
    fronius_info?: FroniusInfoUncheckedUpdateOneWithoutUsersInput
  }

  export type UsersCreateManyInput = {
    user_id?: number
    username: string
    password: string
    email_address: string
    rewards_points?: number | null
    energy_consumption?: number | null
    retailer: string
    meter_hardware: string
    is_group_admin?: number | null
    group_id?: number | null
  }

  export type UsersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    rewards_points?: NullableIntFieldUpdateOperationsInput | number | null
    energy_consumption?: NullableIntFieldUpdateOperationsInput | number | null
    retailer?: StringFieldUpdateOperationsInput | string
    meter_hardware?: StringFieldUpdateOperationsInput | string
    is_group_admin?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    rewards_points?: NullableIntFieldUpdateOperationsInput | number | null
    energy_consumption?: NullableIntFieldUpdateOperationsInput | number | null
    retailer?: StringFieldUpdateOperationsInput | string
    meter_hardware?: StringFieldUpdateOperationsInput | string
    is_group_admin?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GroupsCreateInput = {
    group_name: string
    min_users: number
    max_users: number
    reward_start_balance: number
    group_logo?: string | null
  }

  export type GroupsUncheckedCreateInput = {
    group_id?: number
    group_name: string
    min_users: number
    max_users: number
    reward_start_balance: number
    group_logo?: string | null
  }

  export type GroupsUpdateInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    min_users?: IntFieldUpdateOperationsInput | number
    max_users?: IntFieldUpdateOperationsInput | number
    reward_start_balance?: IntFieldUpdateOperationsInput | number
    group_logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupsUncheckedUpdateInput = {
    group_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    min_users?: IntFieldUpdateOperationsInput | number
    max_users?: IntFieldUpdateOperationsInput | number
    reward_start_balance?: IntFieldUpdateOperationsInput | number
    group_logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupsCreateManyInput = {
    group_id?: number
    group_name: string
    min_users: number
    max_users: number
    reward_start_balance: number
    group_logo?: string | null
  }

  export type GroupsUpdateManyMutationInput = {
    group_name?: StringFieldUpdateOperationsInput | string
    min_users?: IntFieldUpdateOperationsInput | number
    max_users?: IntFieldUpdateOperationsInput | number
    reward_start_balance?: IntFieldUpdateOperationsInput | number
    group_logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupsUncheckedUpdateManyInput = {
    group_id?: IntFieldUpdateOperationsInput | number
    group_name?: StringFieldUpdateOperationsInput | string
    min_users?: IntFieldUpdateOperationsInput | number
    max_users?: IntFieldUpdateOperationsInput | number
    reward_start_balance?: IntFieldUpdateOperationsInput | number
    group_logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupMembersCreateInput = {
    user_id: number
    group_id: number
  }

  export type GroupMembersUncheckedCreateInput = {
    group_member_id?: number
    user_id: number
    group_id: number
  }

  export type GroupMembersUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembersUncheckedUpdateInput = {
    group_member_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembersCreateManyInput = {
    group_member_id?: number
    user_id: number
    group_id: number
  }

  export type GroupMembersUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMembersUncheckedUpdateManyInput = {
    group_member_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    group_id?: IntFieldUpdateOperationsInput | number
  }

  export type FroniusInfoCreateInput = {
    fronius_userid: string
    fronius_password: string
    fronius_accesskey_id: string
    fronius_accesskey_value: string
    users: UsersCreateNestedOneWithoutFronius_infoInput
  }

  export type FroniusInfoUncheckedCreateInput = {
    user_id: number
    fronius_userid: string
    fronius_password: string
    fronius_accesskey_id: string
    fronius_accesskey_value: string
  }

  export type FroniusInfoUpdateInput = {
    fronius_userid?: StringFieldUpdateOperationsInput | string
    fronius_password?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_id?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_value?: StringFieldUpdateOperationsInput | string
    users?: UsersUpdateOneRequiredWithoutFronius_infoInput
  }

  export type FroniusInfoUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    fronius_userid?: StringFieldUpdateOperationsInput | string
    fronius_password?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_id?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_value?: StringFieldUpdateOperationsInput | string
  }

  export type FroniusInfoCreateManyInput = {
    user_id: number
    fronius_userid: string
    fronius_password: string
    fronius_accesskey_id: string
    fronius_accesskey_value: string
  }

  export type FroniusInfoUpdateManyMutationInput = {
    fronius_userid?: StringFieldUpdateOperationsInput | string
    fronius_password?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_id?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_value?: StringFieldUpdateOperationsInput | string
  }

  export type FroniusInfoUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    fronius_userid?: StringFieldUpdateOperationsInput | string
    fronius_password?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_id?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_value?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type FroniusInfoRelationFilter = {
    is?: FroniusInfoWhereInput | null
    isNot?: FroniusInfoWhereInput | null
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type FroniusInfoCreateNestedOneWithoutUsersInput = {
    create?: XOR<FroniusInfoCreateWithoutUsersInput, FroniusInfoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FroniusInfoCreateOrConnectWithoutUsersInput
    connect?: FroniusInfoWhereUniqueInput
  }

  export type FroniusInfoUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<FroniusInfoCreateWithoutUsersInput, FroniusInfoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FroniusInfoCreateOrConnectWithoutUsersInput
    connect?: FroniusInfoWhereUniqueInput
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

  export type FroniusInfoUpdateOneWithoutUsersInput = {
    create?: XOR<FroniusInfoCreateWithoutUsersInput, FroniusInfoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FroniusInfoCreateOrConnectWithoutUsersInput
    upsert?: FroniusInfoUpsertWithoutUsersInput
    connect?: FroniusInfoWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<FroniusInfoUpdateWithoutUsersInput, FroniusInfoUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FroniusInfoUncheckedUpdateOneWithoutUsersInput = {
    create?: XOR<FroniusInfoCreateWithoutUsersInput, FroniusInfoUncheckedCreateWithoutUsersInput>
    connectOrCreate?: FroniusInfoCreateOrConnectWithoutUsersInput
    upsert?: FroniusInfoUpsertWithoutUsersInput
    connect?: FroniusInfoWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<FroniusInfoUpdateWithoutUsersInput, FroniusInfoUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersCreateNestedOneWithoutFronius_infoInput = {
    create?: XOR<UsersCreateWithoutFronius_infoInput, UsersUncheckedCreateWithoutFronius_infoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFronius_infoInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFronius_infoInput = {
    create?: XOR<UsersCreateWithoutFronius_infoInput, UsersUncheckedCreateWithoutFronius_infoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFronius_infoInput
    upsert?: UsersUpsertWithoutFronius_infoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<UsersUpdateWithoutFronius_infoInput, UsersUncheckedUpdateWithoutFronius_infoInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type FroniusInfoCreateWithoutUsersInput = {
    fronius_userid: string
    fronius_password: string
    fronius_accesskey_id: string
    fronius_accesskey_value: string
  }

  export type FroniusInfoUncheckedCreateWithoutUsersInput = {
    fronius_userid: string
    fronius_password: string
    fronius_accesskey_id: string
    fronius_accesskey_value: string
  }

  export type FroniusInfoCreateOrConnectWithoutUsersInput = {
    where: FroniusInfoWhereUniqueInput
    create: XOR<FroniusInfoCreateWithoutUsersInput, FroniusInfoUncheckedCreateWithoutUsersInput>
  }

  export type FroniusInfoUpsertWithoutUsersInput = {
    update: XOR<FroniusInfoUpdateWithoutUsersInput, FroniusInfoUncheckedUpdateWithoutUsersInput>
    create: XOR<FroniusInfoCreateWithoutUsersInput, FroniusInfoUncheckedCreateWithoutUsersInput>
  }

  export type FroniusInfoUpdateWithoutUsersInput = {
    fronius_userid?: StringFieldUpdateOperationsInput | string
    fronius_password?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_id?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_value?: StringFieldUpdateOperationsInput | string
  }

  export type FroniusInfoUncheckedUpdateWithoutUsersInput = {
    fronius_userid?: StringFieldUpdateOperationsInput | string
    fronius_password?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_id?: StringFieldUpdateOperationsInput | string
    fronius_accesskey_value?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateWithoutFronius_infoInput = {
    username: string
    password: string
    email_address: string
    rewards_points?: number | null
    energy_consumption?: number | null
    retailer: string
    meter_hardware: string
    is_group_admin?: number | null
    group_id?: number | null
  }

  export type UsersUncheckedCreateWithoutFronius_infoInput = {
    user_id?: number
    username: string
    password: string
    email_address: string
    rewards_points?: number | null
    energy_consumption?: number | null
    retailer: string
    meter_hardware: string
    is_group_admin?: number | null
    group_id?: number | null
  }

  export type UsersCreateOrConnectWithoutFronius_infoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFronius_infoInput, UsersUncheckedCreateWithoutFronius_infoInput>
  }

  export type UsersUpsertWithoutFronius_infoInput = {
    update: XOR<UsersUpdateWithoutFronius_infoInput, UsersUncheckedUpdateWithoutFronius_infoInput>
    create: XOR<UsersCreateWithoutFronius_infoInput, UsersUncheckedCreateWithoutFronius_infoInput>
  }

  export type UsersUpdateWithoutFronius_infoInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    rewards_points?: NullableIntFieldUpdateOperationsInput | number | null
    energy_consumption?: NullableIntFieldUpdateOperationsInput | number | null
    retailer?: StringFieldUpdateOperationsInput | string
    meter_hardware?: StringFieldUpdateOperationsInput | string
    is_group_admin?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UsersUncheckedUpdateWithoutFronius_infoInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email_address?: StringFieldUpdateOperationsInput | string
    rewards_points?: NullableIntFieldUpdateOperationsInput | number | null
    energy_consumption?: NullableIntFieldUpdateOperationsInput | number | null
    retailer?: StringFieldUpdateOperationsInput | string
    meter_hardware?: StringFieldUpdateOperationsInput | string
    is_group_admin?: NullableIntFieldUpdateOperationsInput | number | null
    group_id?: NullableIntFieldUpdateOperationsInput | number | null
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
  export const dmmf: runtime.DMMF.Document;
}