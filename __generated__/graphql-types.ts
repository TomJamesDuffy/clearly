import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cargo = {
  __typename?: 'Cargo';
  createdDate: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
  trips: Array<Trip>;
  updatedDate: Scalars['String']['output'];
  weight: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject?: Maybe<Project>;
  deleteProject?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateProjectArgs = {
  country?: InputMaybe<Scalars['String']['input']>;
  status: Status;
  url: Scalars['String']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};

export type Project = {
  __typename?: 'Project';
  country?: Maybe<Scalars['String']['output']>;
  createdDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  status: Status;
  updatedDate: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cargo?: Maybe<Cargo>;
  cargos?: Maybe<Array<Maybe<Cargo>>>;
  getTripsByProject?: Maybe<Array<Maybe<TripsGroupedByProject>>>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  trip?: Maybe<Trip>;
  trips?: Maybe<Array<Maybe<Trip>>>;
};


export type QueryCargoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTripArgs = {
  id: Scalars['ID']['input'];
};

export enum Status {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type Trip = {
  __typename?: 'Trip';
  cargos: Array<Cargo>;
  createdDate: Scalars['String']['output'];
  distanceKm: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  project: Project;
  updatedDate: Scalars['String']['output'];
  vehicle: Vehicle;
};

export type TripCargo = {
  __typename?: 'TripCargo';
  cargo: Cargo;
  createdDate: Scalars['String']['output'];
  quantity: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  trip: Trip;
  updatedDate: Scalars['String']['output'];
};

export type TripsGroupedByProject = {
  __typename?: 'TripsGroupedByProject';
  project: Project;
  trips: Array<Maybe<Trip>>;
};

export type Vehicle = {
  __typename?: 'Vehicle';
  capacity: Scalars['Float']['output'];
  createdDate: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  licensePlate: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedDate: Scalars['String']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cargo: ResolverTypeWrapper<Cargo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Project: ResolverTypeWrapper<Project>;
  Query: ResolverTypeWrapper<{}>;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Trip: ResolverTypeWrapper<Trip>;
  TripCargo: ResolverTypeWrapper<TripCargo>;
  TripsGroupedByProject: ResolverTypeWrapper<TripsGroupedByProject>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  Cargo: Cargo;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Project: Project;
  Query: {};
  String: Scalars['String']['output'];
  Trip: Trip;
  TripCargo: TripCargo;
  TripsGroupedByProject: TripsGroupedByProject;
  Vehicle: Vehicle;
}>;

export type CargoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cargo'] = ResolversParentTypes['Cargo']> = ResolversObject<{
  createdDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trips?: Resolver<Array<ResolversTypes['Trip']>, ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  weight?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createProject?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<MutationCreateProjectArgs, 'status' | 'url'>>;
  deleteProject?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteProjectArgs, 'id'>>;
}>;

export type ProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Project'] = ResolversParentTypes['Project']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  cargo?: Resolver<Maybe<ResolversTypes['Cargo']>, ParentType, ContextType, RequireFields<QueryCargoArgs, 'id'>>;
  cargos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Cargo']>>>, ParentType, ContextType>;
  getTripsByProject?: Resolver<Maybe<Array<Maybe<ResolversTypes['TripsGroupedByProject']>>>, ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['Project']>, ParentType, ContextType, RequireFields<QueryProjectArgs, 'id'>>;
  projects?: Resolver<Maybe<Array<Maybe<ResolversTypes['Project']>>>, ParentType, ContextType>;
  trip?: Resolver<Maybe<ResolversTypes['Trip']>, ParentType, ContextType, RequireFields<QueryTripArgs, 'id'>>;
  trips?: Resolver<Maybe<Array<Maybe<ResolversTypes['Trip']>>>, ParentType, ContextType>;
}>;

export type TripResolvers<ContextType = any, ParentType extends ResolversParentTypes['Trip'] = ResolversParentTypes['Trip']> = ResolversObject<{
  cargos?: Resolver<Array<ResolversTypes['Cargo']>, ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  distanceKm?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicle?: Resolver<ResolversTypes['Vehicle'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TripCargoResolvers<ContextType = any, ParentType extends ResolversParentTypes['TripCargo'] = ResolversParentTypes['TripCargo']> = ResolversObject<{
  cargo?: Resolver<ResolversTypes['Cargo'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  trip?: Resolver<ResolversTypes['Trip'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TripsGroupedByProjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['TripsGroupedByProject'] = ResolversParentTypes['TripsGroupedByProject']> = ResolversObject<{
  project?: Resolver<ResolversTypes['Project'], ParentType, ContextType>;
  trips?: Resolver<Array<Maybe<ResolversTypes['Trip']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = ResolversObject<{
  capacity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  licensePlate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Cargo?: CargoResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Project?: ProjectResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Trip?: TripResolvers<ContextType>;
  TripCargo?: TripCargoResolvers<ContextType>;
  TripsGroupedByProject?: TripsGroupedByProjectResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
}>;

