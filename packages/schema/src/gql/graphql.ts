import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  commentId: Scalars['ID']['output'];
  serviceId?: Maybe<Scalars['ID']['output']>;
  sportCenterId?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type CreateCommentInput = {
  comment: Scalars['String']['input'];
  serviceId?: InputMaybe<Scalars['ID']['input']>;
  sportCenterId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateReservationInput = {
  date: Scalars['String']['input'];
  paymentId: Scalars['String']['input'];
  paymentPhoto?: InputMaybe<Scalars['String']['input']>;
  rangeHour: Scalars['String']['input'];
  reservationPrice: Scalars['Float']['input'];
  serviceId: Scalars['ID']['input'];
  state: Scalars['Boolean']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateScheduleInput = {
  endHour: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  startHour: Scalars['String']['input'];
  weekday: Weekday;
};

export type CreateServiceInput = {
  description: Scalars['String']['input'];
  disponibility?: InputMaybe<Array<CreateScheduleInput>>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ranking?: InputMaybe<Scalars['Int']['input']>;
  sport: Sport;
  sportCenterId: Scalars['ID']['input'];
};

export type CreateSportCenterInput = {
  hoursOperarion: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  ranking?: InputMaybe<Scalars['Int']['input']>;
  ubication: Scalars['String']['input'];
};

export type CreateUserInput = {
  age: Scalars['Int']['input'];
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Disponibility = {
  __typename?: 'Disponibility';
  Friday?: Maybe<Array<RangeHour>>;
  Monday?: Maybe<Array<RangeHour>>;
  Saturday?: Maybe<Array<RangeHour>>;
  Sunday?: Maybe<Array<RangeHour>>;
  Thursday?: Maybe<Array<RangeHour>>;
  Tuesday?: Maybe<Array<RangeHour>>;
  Wednesday?: Maybe<Array<RangeHour>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createReservation?: Maybe<Reservation>;
  createService?: Maybe<Service>;
  createSportCenter?: Maybe<SportCenter>;
  createUser?: Maybe<User>;
  deleteComment?: Maybe<OperationResponse>;
  deleteReservation?: Maybe<OperationResponse>;
  deleteService?: Maybe<OperationResponse>;
  deleteSportCenter?: Maybe<OperationResponse>;
  deleteUser?: Maybe<Scalars['Boolean']['output']>;
  updateComment?: Maybe<Comment>;
  updateService?: Maybe<OperationResponse>;
  updateSportCenter?: Maybe<OperationResponse>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationCreateReservationArgs = {
  input: CreateReservationInput;
};


export type MutationCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationCreateSportCenterArgs = {
  input: CreateSportCenterInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteReservationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  serviceId: Scalars['ID']['input'];
};


export type MutationDeleteSportCenterArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceArgs = {
  input: UpdateServiceInput;
};


export type MutationUpdateSportCenterArgs = {
  input: UpdateSportCenterInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type OperationResponse = {
  __typename?: 'OperationResponse';
  message: Scalars['String']['output'];
  status: Status;
};

export type Query = {
  __typename?: 'Query';
  allComments?: Maybe<Array<Comment>>;
  allReservations?: Maybe<Array<Reservation>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  findReservation?: Maybe<Reservation>;
  findSportCenter?: Maybe<SportCenter>;
  findUser?: Maybe<User>;
  listCommentsByService?: Maybe<Array<Comment>>;
  listCommentsBySportCenter?: Maybe<Array<Comment>>;
  listServices?: Maybe<Array<Maybe<Service>>>;
  listServicesBySportCenterId?: Maybe<Array<Maybe<Service>>>;
  listSportCenters?: Maybe<Array<SportCenter>>;
  reservationCount: Scalars['Int']['output'];
  usersCount: Scalars['Int']['output'];
};


export type QueryFindReservationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFindSportCenterArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryFindUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryListCommentsByServiceArgs = {
  serviceId: Scalars['ID']['input'];
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListCommentsBySportCenterArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListServicesBySportCenterIdArgs = {
  sportCenterId: Scalars['ID']['input'];
};

export type RangeHour = {
  __typename?: 'RangeHour';
  endHour: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  startHour: Scalars['String']['output'];
};

export type Reservation = {
  __typename?: 'Reservation';
  date: Scalars['String']['output'];
  paymentId?: Maybe<Scalars['String']['output']>;
  paymentPhoto?: Maybe<Scalars['String']['output']>;
  rangeHour: Scalars['String']['output'];
  reservationId: Scalars['ID']['output'];
  reservationPrice: Scalars['Float']['output'];
  serviceId: Scalars['ID']['output'];
  state: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type Service = {
  __typename?: 'Service';
  description: Scalars['String']['output'];
  disponibility?: Maybe<Disponibility>;
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  ranking?: Maybe<Scalars['Int']['output']>;
  reservations?: Maybe<Array<Reservation>>;
  serviceId: Scalars['ID']['output'];
  sport: Sport;
  sportCenterId: Scalars['ID']['output'];
};

export enum Sport {
  Baloncesto = 'Baloncesto',
  Futbol = 'Futbol',
  Tenis = 'Tenis',
  Voley = 'Voley'
}

export type SportCenter = {
  __typename?: 'SportCenter';
  hoursOperarion: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  ranking?: Maybe<Scalars['Int']['output']>;
  services?: Maybe<Array<Maybe<Service>>>;
  sportCenterId: Scalars['ID']['output'];
  ubication: Scalars['String']['output'];
};

export enum Status {
  Failed = 'Failed',
  Ok = 'Ok'
}

export type UpdateDisponibilityInput = {
  Friday?: InputMaybe<Array<UpdateRangeHourInput>>;
  Monday?: InputMaybe<Array<UpdateRangeHourInput>>;
  Saturday?: InputMaybe<Array<UpdateRangeHourInput>>;
  Sunday?: InputMaybe<Array<UpdateRangeHourInput>>;
  Thursday?: InputMaybe<Array<UpdateRangeHourInput>>;
  Tuesday?: InputMaybe<Array<UpdateRangeHourInput>>;
  Wednesday?: InputMaybe<Array<UpdateRangeHourInput>>;
};

export type UpdateRangeHourInput = {
  endHour: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  startHour: Scalars['String']['input'];
};

export type UpdateServiceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  disponibility?: InputMaybe<UpdateDisponibilityInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  serviceId: Scalars['ID']['input'];
  sport?: InputMaybe<Sport>;
};

export type UpdateSportCenterInput = {
  hoursOperarion?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  sportCenterId: Scalars['ID']['input'];
  ubication?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  age: Scalars['Int']['input'];
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export enum Weekday {
  Friday = 'Friday',
  Monday = 'Monday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type CreateReservationInputMutationVariables = Exact<{
  input: CreateReservationInput;
}>;


export type CreateReservationInputMutation = { __typename?: 'Mutation', createReservation?: { __typename?: 'Reservation', reservationId: string, state: boolean, paymentId?: string | null, reservationPrice: number, userId: string, serviceId: string, paymentPhoto?: string | null, date: string, rangeHour: string } | null };

export type AllUSersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUSersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'User', email: string } | null> | null };


export const CreateReservationInputDocument = gql`
    mutation CreateReservationInput($input: CreateReservationInput!) {
  createReservation(input: $input) {
    reservationId
    state
    paymentId
    reservationPrice
    userId
    serviceId
    paymentPhoto
    date
    rangeHour
  }
}
    `;
export type CreateReservationInputMutationFn = Apollo.MutationFunction<CreateReservationInputMutation, CreateReservationInputMutationVariables>;

/**
 * __useCreateReservationInputMutation__
 *
 * To run a mutation, you first call `useCreateReservationInputMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationInputMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationInputMutation, { data, loading, error }] = useCreateReservationInputMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReservationInputMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationInputMutation, CreateReservationInputMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationInputMutation, CreateReservationInputMutationVariables>(CreateReservationInputDocument, options);
      }
export type CreateReservationInputMutationHookResult = ReturnType<typeof useCreateReservationInputMutation>;
export type CreateReservationInputMutationResult = Apollo.MutationResult<CreateReservationInputMutation>;
export type CreateReservationInputMutationOptions = Apollo.BaseMutationOptions<CreateReservationInputMutation, CreateReservationInputMutationVariables>;
export const AllUSersDocument = gql`
    query AllUSers {
  allUsers {
    email
  }
}
    `;

/**
 * __useAllUSersQuery__
 *
 * To run a query within a React component, call `useAllUSersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUSersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUSersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUSersQuery(baseOptions?: Apollo.QueryHookOptions<AllUSersQuery, AllUSersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUSersQuery, AllUSersQueryVariables>(AllUSersDocument, options);
      }
export function useAllUSersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUSersQuery, AllUSersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUSersQuery, AllUSersQueryVariables>(AllUSersDocument, options);
        }
export type AllUSersQueryHookResult = ReturnType<typeof useAllUSersQuery>;
export type AllUSersLazyQueryHookResult = ReturnType<typeof useAllUSersLazyQuery>;
export type AllUSersQueryResult = Apollo.QueryResult<AllUSersQuery, AllUSersQueryVariables>;