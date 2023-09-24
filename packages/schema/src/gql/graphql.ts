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
  rangeHour?: InputMaybe<Array<Scalars['String']['input']>>;
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
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sport: Sport;
  sportCenterId: Scalars['ID']['input'];
};

export type CreateSportCenterInput = {
  access: Scalars['Boolean']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  hoursOperation?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  ranking?: InputMaybe<Scalars['Int']['input']>;
  sportCenterId: Scalars['ID']['input'];
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
  giveAccess?: Maybe<OperationResponse>;
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


export type MutationGiveAccessArgs = {
  sportCenterId: Scalars['String']['input'];
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
  findUser?: Maybe<User>;
  getAccess?: Maybe<Scalars['Boolean']['output']>;
  getSportCenter?: Maybe<SportCenter>;
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


export type QueryFindUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetAccessArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryGetSportCenterArgs = {
  sportCenterId: Scalars['ID']['input'];
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
  access: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hoursOperation: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  ranking: Scalars['Int']['output'];
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
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hoursOperation?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
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

export type ListServicesBySportCenterIdQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListServicesBySportCenterIdQuery = { __typename?: 'Query', listServicesBySportCenterId?: Array<{ __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image?: string | null, disponibility?: { __typename?: 'Disponibility', Monday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null, Tuesday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null, Wednesday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null, Thursday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null, Friday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null, Saturday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null, Sunday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number }> | null } | null } | null> | null };

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;


export type CreateServiceMutation = { __typename?: 'Mutation', createService?: { __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image?: string | null, sportCenterId: string } | null };

export type GetAccessQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetAccessQuery = { __typename?: 'Query', getAccess?: boolean | null };

export type GetSportCenterQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetSportCenterQuery = { __typename?: 'Query', getSportCenter?: { __typename?: 'SportCenter', name: string, email: string, description: string, phone: string, ubication: string, hoursOperation: string, ranking: number, image?: string | null } | null };

export type CreateSportCenterMutationVariables = Exact<{
  input: CreateSportCenterInput;
}>;


export type CreateSportCenterMutation = { __typename?: 'Mutation', createSportCenter?: { __typename?: 'SportCenter', sportCenterId: string } | null };

export type UpdateSportCenterMutationVariables = Exact<{
  input: UpdateSportCenterInput;
}>;


export type UpdateSportCenterMutation = { __typename?: 'Mutation', updateSportCenter?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

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
export const ListServicesBySportCenterIdDocument = gql`
    query ListServicesBySportCenterId($sportCenterId: ID!) {
  listServicesBySportCenterId(sportCenterId: $sportCenterId) {
    serviceId
    name
    sport
    description
    image
    disponibility {
      Monday {
        startHour
        endHour
        price
      }
      Tuesday {
        startHour
        endHour
        price
      }
      Wednesday {
        startHour
        endHour
        price
      }
      Thursday {
        startHour
        endHour
        price
      }
      Friday {
        startHour
        endHour
        price
      }
      Saturday {
        startHour
        endHour
        price
      }
      Sunday {
        startHour
        endHour
        price
      }
    }
  }
}
    `;

/**
 * __useListServicesBySportCenterIdQuery__
 *
 * To run a query within a React component, call `useListServicesBySportCenterIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListServicesBySportCenterIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListServicesBySportCenterIdQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useListServicesBySportCenterIdQuery(baseOptions: Apollo.QueryHookOptions<ListServicesBySportCenterIdQuery, ListServicesBySportCenterIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListServicesBySportCenterIdQuery, ListServicesBySportCenterIdQueryVariables>(ListServicesBySportCenterIdDocument, options);
      }
export function useListServicesBySportCenterIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListServicesBySportCenterIdQuery, ListServicesBySportCenterIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListServicesBySportCenterIdQuery, ListServicesBySportCenterIdQueryVariables>(ListServicesBySportCenterIdDocument, options);
        }
export type ListServicesBySportCenterIdQueryHookResult = ReturnType<typeof useListServicesBySportCenterIdQuery>;
export type ListServicesBySportCenterIdLazyQueryHookResult = ReturnType<typeof useListServicesBySportCenterIdLazyQuery>;
export type ListServicesBySportCenterIdQueryResult = Apollo.QueryResult<ListServicesBySportCenterIdQuery, ListServicesBySportCenterIdQueryVariables>;
export const CreateServiceDocument = gql`
    mutation createService($input: CreateServiceInput!) {
  createService(input: $input) {
    serviceId
    name
    sport
    description
    image
    sportCenterId
  }
}
    `;
export type CreateServiceMutationFn = Apollo.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateServiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(CreateServiceDocument, options);
      }
export type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export type CreateServiceMutationResult = Apollo.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = Apollo.BaseMutationOptions<CreateServiceMutation, CreateServiceMutationVariables>;
export const GetAccessDocument = gql`
    query GetAccess($sportCenterId: ID!) {
  getAccess(sportCenterId: $sportCenterId)
}
    `;

/**
 * __useGetAccessQuery__
 *
 * To run a query within a React component, call `useGetAccessQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccessQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useGetAccessQuery(baseOptions: Apollo.QueryHookOptions<GetAccessQuery, GetAccessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccessQuery, GetAccessQueryVariables>(GetAccessDocument, options);
      }
export function useGetAccessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccessQuery, GetAccessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccessQuery, GetAccessQueryVariables>(GetAccessDocument, options);
        }
export type GetAccessQueryHookResult = ReturnType<typeof useGetAccessQuery>;
export type GetAccessLazyQueryHookResult = ReturnType<typeof useGetAccessLazyQuery>;
export type GetAccessQueryResult = Apollo.QueryResult<GetAccessQuery, GetAccessQueryVariables>;
export const GetSportCenterDocument = gql`
    query GetSportCenter($sportCenterId: ID!) {
  getSportCenter(sportCenterId: $sportCenterId) {
    name
    email
    description
    phone
    ubication
    hoursOperation
    ranking
    image
  }
}
    `;

/**
 * __useGetSportCenterQuery__
 *
 * To run a query within a React component, call `useGetSportCenterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSportCenterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSportCenterQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useGetSportCenterQuery(baseOptions: Apollo.QueryHookOptions<GetSportCenterQuery, GetSportCenterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSportCenterQuery, GetSportCenterQueryVariables>(GetSportCenterDocument, options);
      }
export function useGetSportCenterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSportCenterQuery, GetSportCenterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSportCenterQuery, GetSportCenterQueryVariables>(GetSportCenterDocument, options);
        }
export type GetSportCenterQueryHookResult = ReturnType<typeof useGetSportCenterQuery>;
export type GetSportCenterLazyQueryHookResult = ReturnType<typeof useGetSportCenterLazyQuery>;
export type GetSportCenterQueryResult = Apollo.QueryResult<GetSportCenterQuery, GetSportCenterQueryVariables>;
export const CreateSportCenterDocument = gql`
    mutation CreateSportCenter($input: CreateSportCenterInput!) {
  createSportCenter(input: $input) {
    sportCenterId
  }
}
    `;
export type CreateSportCenterMutationFn = Apollo.MutationFunction<CreateSportCenterMutation, CreateSportCenterMutationVariables>;

/**
 * __useCreateSportCenterMutation__
 *
 * To run a mutation, you first call `useCreateSportCenterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSportCenterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSportCenterMutation, { data, loading, error }] = useCreateSportCenterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSportCenterMutation(baseOptions?: Apollo.MutationHookOptions<CreateSportCenterMutation, CreateSportCenterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSportCenterMutation, CreateSportCenterMutationVariables>(CreateSportCenterDocument, options);
      }
export type CreateSportCenterMutationHookResult = ReturnType<typeof useCreateSportCenterMutation>;
export type CreateSportCenterMutationResult = Apollo.MutationResult<CreateSportCenterMutation>;
export type CreateSportCenterMutationOptions = Apollo.BaseMutationOptions<CreateSportCenterMutation, CreateSportCenterMutationVariables>;
export const UpdateSportCenterDocument = gql`
    mutation UpdateSportCenter($input: UpdateSportCenterInput!) {
  updateSportCenter(input: $input) {
    status
    message
  }
}
    `;
export type UpdateSportCenterMutationFn = Apollo.MutationFunction<UpdateSportCenterMutation, UpdateSportCenterMutationVariables>;

/**
 * __useUpdateSportCenterMutation__
 *
 * To run a mutation, you first call `useUpdateSportCenterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSportCenterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSportCenterMutation, { data, loading, error }] = useUpdateSportCenterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateSportCenterMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSportCenterMutation, UpdateSportCenterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSportCenterMutation, UpdateSportCenterMutationVariables>(UpdateSportCenterDocument, options);
      }
export type UpdateSportCenterMutationHookResult = ReturnType<typeof useUpdateSportCenterMutation>;
export type UpdateSportCenterMutationResult = Apollo.MutationResult<UpdateSportCenterMutation>;
export type UpdateSportCenterMutationOptions = Apollo.BaseMutationOptions<UpdateSportCenterMutation, UpdateSportCenterMutationVariables>;
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