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
  Date: { input: any; output: any; }
};

export type BankAccount = {
  __typename?: 'BankAccount';
  accountNumber: Scalars['String']['output'];
  accountType: Scalars['String']['output'];
  bankAccountId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sportCenterId: Scalars['ID']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  comment: Scalars['String']['output'];
  commentId: Scalars['ID']['output'];
  serviceId?: Maybe<Scalars['ID']['output']>;
  sportCenterId?: Maybe<Scalars['ID']['output']>;
  userId: Scalars['ID']['output'];
};

export type CreateBankAccountInput = {
  accountNumber: Scalars['String']['input'];
  accountType: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  sportCenterId: Scalars['ID']['input'];
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
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  ranking?: InputMaybe<Scalars['Int']['input']>;
  schedule?: InputMaybe<Scalars['String']['input']>;
  sportCenterId: Scalars['ID']['input'];
  ubication: Scalars['String']['input'];
};

export type CreateUserInput = {
  birthDate: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Disponibility = {
  __typename?: 'Disponibility';
  Friday?: Maybe<Array<Maybe<RangeHour>>>;
  Monday?: Maybe<Array<Maybe<RangeHour>>>;
  Saturday?: Maybe<Array<Maybe<RangeHour>>>;
  Sunday?: Maybe<Array<Maybe<RangeHour>>>;
  Thursday?: Maybe<Array<Maybe<RangeHour>>>;
  Tuesday?: Maybe<Array<Maybe<RangeHour>>>;
  Wednesday?: Maybe<Array<Maybe<RangeHour>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBankAccount?: Maybe<BankAccount>;
  createComment?: Maybe<Comment>;
  createReservation?: Maybe<Reservation>;
  createService?: Maybe<Service>;
  createSportCenter?: Maybe<SportCenter>;
  createUser?: Maybe<User>;
  deleteBankAccount?: Maybe<OperationResponse>;
  deleteComment?: Maybe<OperationResponse>;
  deleteReservation?: Maybe<OperationResponse>;
  deleteService?: Maybe<OperationResponse>;
  deleteSportCenter?: Maybe<OperationResponse>;
  deleteUser?: Maybe<OperationResponse>;
  giveAccess?: Maybe<OperationResponse>;
  updateBankAccount?: Maybe<OperationResponse>;
  updateComment?: Maybe<Comment>;
  updateService?: Maybe<OperationResponse>;
  updateSportCenter?: Maybe<OperationResponse>;
  updateUser?: Maybe<OperationResponse>;
};


export type MutationCreateBankAccountArgs = {
  input: CreateBankAccountInput;
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


export type MutationDeleteBankAccountArgs = {
  bankAccountId: Scalars['ID']['input'];
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


export type MutationUpdateBankAccountArgs = {
  input: UpdateBankAccountInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceArgs = {
  input?: InputMaybe<UpdateServiceInput>;
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
  getAccess: Scalars['Boolean']['output'];
  getSportCenter?: Maybe<SportCenter>;
  getSportCenterWithServices?: Maybe<SportCenter>;
  listBankAccountsBySportCenterId?: Maybe<Array<Maybe<BankAccount>>>;
  listCommentsByService?: Maybe<Array<Comment>>;
  listCommentsBySportCenter?: Maybe<Array<Comment>>;
  listServices?: Maybe<Array<Maybe<Service>>>;
  listServicesBySportCenterId?: Maybe<Array<Maybe<Service>>>;
  listSportCenters?: Maybe<Array<SportCenter>>;
  reservationCount: Scalars['Int']['output'];
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


export type QueryGetSportCenterWithServicesArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListBankAccountsBySportCenterIdArgs = {
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
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
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
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  ranking: Scalars['Int']['output'];
  schedule: Scalars['String']['output'];
  services?: Maybe<Array<Maybe<Service>>>;
  sportCenterId: Scalars['ID']['output'];
  ubication: Scalars['String']['output'];
};

export enum Status {
  Failed = 'Failed',
  Ok = 'Ok'
}

export type UpdateBankAccountInput = {
  accountNumber?: InputMaybe<Scalars['String']['input']>;
  accountType?: InputMaybe<Scalars['String']['input']>;
  bankAccountId: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

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
  serviceId: Scalars['ID']['input'];
  sport?: InputMaybe<Sport>;
  sportCenterId: Scalars['ID']['input'];
};

export type UpdateSportCenterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<Scalars['String']['input']>;
  sportCenterId: Scalars['ID']['input'];
  ubication?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  birthDate: Scalars['Date']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  birthDate: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
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

export type ListBankAccountsBySportCenterIdQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListBankAccountsBySportCenterIdQuery = { __typename?: 'Query', listBankAccountsBySportCenterId?: Array<{ __typename?: 'BankAccount', bankAccountId: string, name: string, id: string, accountType: string, accountNumber: string, email: string } | null> | null };

export type CreateBankAccountMutationVariables = Exact<{
  input: CreateBankAccountInput;
}>;


export type CreateBankAccountMutation = { __typename?: 'Mutation', createBankAccount?: { __typename?: 'BankAccount', sportCenterId: string } | null };

export type UpdateBankAccountMutationVariables = Exact<{
  input: UpdateBankAccountInput;
}>;


export type UpdateBankAccountMutation = { __typename?: 'Mutation', updateBankAccount?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type DeleteBankAccountMutationVariables = Exact<{
  bankAccountId: Scalars['ID']['input'];
}>;


export type DeleteBankAccountMutation = { __typename?: 'Mutation', deleteBankAccount?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type CreateReservationInputMutationVariables = Exact<{
  input: CreateReservationInput;
}>;


export type CreateReservationInputMutation = { __typename?: 'Mutation', createReservation?: { __typename?: 'Reservation', reservationId: string, state: boolean, paymentId?: string | null, reservationPrice: number, userId: string, serviceId: string, paymentPhoto?: string | null, date: string, rangeHour: string } | null };

export type ListServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListServicesQuery = { __typename?: 'Query', listServices?: Array<{ __typename?: 'Service', serviceId: string, sportCenterId: string, name: string, description: string, sport: Sport, image: string } | null> | null };

export type ListServicesBySportCenterIdQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListServicesBySportCenterIdQuery = { __typename?: 'Query', listServicesBySportCenterId?: Array<{ __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string } | null> | null };

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;


export type CreateServiceMutation = { __typename?: 'Mutation', createService?: { __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string, sportCenterId: string } | null };

export type UpdateServiceMutationVariables = Exact<{
  input?: InputMaybe<UpdateServiceInput>;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutation', updateService?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type DeleteServiceMutationVariables = Exact<{
  serviceId: Scalars['ID']['input'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', deleteService?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type GetAccessQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetAccessQuery = { __typename?: 'Query', getAccess: boolean };

export type ListSportCentersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListSportCentersQuery = { __typename?: 'Query', listSportCenters?: Array<{ __typename?: 'SportCenter', sportCenterId: string, name: string, phone: string, ubication: string, schedule: string, image: string, ranking: number }> | null };

export type GetNameSportCenterQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetNameSportCenterQuery = { __typename?: 'Query', getSportCenter?: { __typename?: 'SportCenter', name: string } | null };

export type GetSportCenterQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetSportCenterQuery = { __typename?: 'Query', getSportCenter?: { __typename?: 'SportCenter', name: string, email: string, description: string, phone: string, ubication: string, schedule: string, ranking: number, image: string } | null };

export type GetSportCenterWithServicesQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetSportCenterWithServicesQuery = { __typename?: 'Query', getSportCenterWithServices?: { __typename?: 'SportCenter', name: string, email: string, description: string, phone: string, ubication: string, schedule: string, ranking: number, image: string, services?: Array<{ __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string } | null> | null } | null };

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

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', userId: string, name: string, id: string, birthDate: any, email: string, phone: string } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', userId: string } | null };


export const ListBankAccountsBySportCenterIdDocument = gql`
    query ListBankAccountsBySportCenterId($sportCenterId: ID!) {
  listBankAccountsBySportCenterId(sportCenterId: $sportCenterId) {
    bankAccountId
    name
    id
    accountType
    accountNumber
    email
  }
}
    `;

/**
 * __useListBankAccountsBySportCenterIdQuery__
 *
 * To run a query within a React component, call `useListBankAccountsBySportCenterIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBankAccountsBySportCenterIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBankAccountsBySportCenterIdQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useListBankAccountsBySportCenterIdQuery(baseOptions: Apollo.QueryHookOptions<ListBankAccountsBySportCenterIdQuery, ListBankAccountsBySportCenterIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBankAccountsBySportCenterIdQuery, ListBankAccountsBySportCenterIdQueryVariables>(ListBankAccountsBySportCenterIdDocument, options);
      }
export function useListBankAccountsBySportCenterIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBankAccountsBySportCenterIdQuery, ListBankAccountsBySportCenterIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBankAccountsBySportCenterIdQuery, ListBankAccountsBySportCenterIdQueryVariables>(ListBankAccountsBySportCenterIdDocument, options);
        }
export type ListBankAccountsBySportCenterIdQueryHookResult = ReturnType<typeof useListBankAccountsBySportCenterIdQuery>;
export type ListBankAccountsBySportCenterIdLazyQueryHookResult = ReturnType<typeof useListBankAccountsBySportCenterIdLazyQuery>;
export type ListBankAccountsBySportCenterIdQueryResult = Apollo.QueryResult<ListBankAccountsBySportCenterIdQuery, ListBankAccountsBySportCenterIdQueryVariables>;
export const CreateBankAccountDocument = gql`
    mutation CreateBankAccount($input: CreateBankAccountInput!) {
  createBankAccount(input: $input) {
    sportCenterId
  }
}
    `;
export type CreateBankAccountMutationFn = Apollo.MutationFunction<CreateBankAccountMutation, CreateBankAccountMutationVariables>;

/**
 * __useCreateBankAccountMutation__
 *
 * To run a mutation, you first call `useCreateBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBankAccountMutation, { data, loading, error }] = useCreateBankAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBankAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateBankAccountMutation, CreateBankAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBankAccountMutation, CreateBankAccountMutationVariables>(CreateBankAccountDocument, options);
      }
export type CreateBankAccountMutationHookResult = ReturnType<typeof useCreateBankAccountMutation>;
export type CreateBankAccountMutationResult = Apollo.MutationResult<CreateBankAccountMutation>;
export type CreateBankAccountMutationOptions = Apollo.BaseMutationOptions<CreateBankAccountMutation, CreateBankAccountMutationVariables>;
export const UpdateBankAccountDocument = gql`
    mutation UpdateBankAccount($input: UpdateBankAccountInput!) {
  updateBankAccount(input: $input) {
    status
    message
  }
}
    `;
export type UpdateBankAccountMutationFn = Apollo.MutationFunction<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>;

/**
 * __useUpdateBankAccountMutation__
 *
 * To run a mutation, you first call `useUpdateBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBankAccountMutation, { data, loading, error }] = useUpdateBankAccountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateBankAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>(UpdateBankAccountDocument, options);
      }
export type UpdateBankAccountMutationHookResult = ReturnType<typeof useUpdateBankAccountMutation>;
export type UpdateBankAccountMutationResult = Apollo.MutationResult<UpdateBankAccountMutation>;
export type UpdateBankAccountMutationOptions = Apollo.BaseMutationOptions<UpdateBankAccountMutation, UpdateBankAccountMutationVariables>;
export const DeleteBankAccountDocument = gql`
    mutation DeleteBankAccount($bankAccountId: ID!) {
  deleteBankAccount(bankAccountId: $bankAccountId) {
    status
    message
  }
}
    `;
export type DeleteBankAccountMutationFn = Apollo.MutationFunction<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>;

/**
 * __useDeleteBankAccountMutation__
 *
 * To run a mutation, you first call `useDeleteBankAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBankAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBankAccountMutation, { data, loading, error }] = useDeleteBankAccountMutation({
 *   variables: {
 *      bankAccountId: // value for 'bankAccountId'
 *   },
 * });
 */
export function useDeleteBankAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>(DeleteBankAccountDocument, options);
      }
export type DeleteBankAccountMutationHookResult = ReturnType<typeof useDeleteBankAccountMutation>;
export type DeleteBankAccountMutationResult = Apollo.MutationResult<DeleteBankAccountMutation>;
export type DeleteBankAccountMutationOptions = Apollo.BaseMutationOptions<DeleteBankAccountMutation, DeleteBankAccountMutationVariables>;
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
export const ListServicesDocument = gql`
    query ListServices {
  listServices {
    serviceId
    sportCenterId
    name
    description
    sport
    image
  }
}
    `;

/**
 * __useListServicesQuery__
 *
 * To run a query within a React component, call `useListServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListServicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useListServicesQuery(baseOptions?: Apollo.QueryHookOptions<ListServicesQuery, ListServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListServicesQuery, ListServicesQueryVariables>(ListServicesDocument, options);
      }
export function useListServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListServicesQuery, ListServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListServicesQuery, ListServicesQueryVariables>(ListServicesDocument, options);
        }
export type ListServicesQueryHookResult = ReturnType<typeof useListServicesQuery>;
export type ListServicesLazyQueryHookResult = ReturnType<typeof useListServicesLazyQuery>;
export type ListServicesQueryResult = Apollo.QueryResult<ListServicesQuery, ListServicesQueryVariables>;
export const ListServicesBySportCenterIdDocument = gql`
    query ListServicesBySportCenterId($sportCenterId: ID!) {
  listServicesBySportCenterId(sportCenterId: $sportCenterId) {
    serviceId
    name
    sport
    description
    image
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
export const UpdateServiceDocument = gql`
    mutation UpdateService($input: UpdateServiceInput) {
  updateService(input: $input) {
    status
    message
  }
}
    `;
export type UpdateServiceMutationFn = Apollo.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateServiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(UpdateServiceDocument, options);
      }
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;
export const DeleteServiceDocument = gql`
    mutation DeleteService($serviceId: ID!) {
  deleteService(serviceId: $serviceId) {
    status
    message
  }
}
    `;
export type DeleteServiceMutationFn = Apollo.MutationFunction<DeleteServiceMutation, DeleteServiceMutationVariables>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useDeleteServiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(DeleteServiceDocument, options);
      }
export type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export type DeleteServiceMutationResult = Apollo.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = Apollo.BaseMutationOptions<DeleteServiceMutation, DeleteServiceMutationVariables>;
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
export const ListSportCentersDocument = gql`
    query ListSportCenters {
  listSportCenters {
    sportCenterId
    name
    phone
    ubication
    schedule
    image
    ranking
  }
}
    `;

/**
 * __useListSportCentersQuery__
 *
 * To run a query within a React component, call `useListSportCentersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSportCentersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListSportCentersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListSportCentersQuery(baseOptions?: Apollo.QueryHookOptions<ListSportCentersQuery, ListSportCentersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListSportCentersQuery, ListSportCentersQueryVariables>(ListSportCentersDocument, options);
      }
export function useListSportCentersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListSportCentersQuery, ListSportCentersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListSportCentersQuery, ListSportCentersQueryVariables>(ListSportCentersDocument, options);
        }
export type ListSportCentersQueryHookResult = ReturnType<typeof useListSportCentersQuery>;
export type ListSportCentersLazyQueryHookResult = ReturnType<typeof useListSportCentersLazyQuery>;
export type ListSportCentersQueryResult = Apollo.QueryResult<ListSportCentersQuery, ListSportCentersQueryVariables>;
export const GetNameSportCenterDocument = gql`
    query GetNameSportCenter($sportCenterId: ID!) {
  getSportCenter(sportCenterId: $sportCenterId) {
    name
  }
}
    `;

/**
 * __useGetNameSportCenterQuery__
 *
 * To run a query within a React component, call `useGetNameSportCenterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNameSportCenterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNameSportCenterQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useGetNameSportCenterQuery(baseOptions: Apollo.QueryHookOptions<GetNameSportCenterQuery, GetNameSportCenterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNameSportCenterQuery, GetNameSportCenterQueryVariables>(GetNameSportCenterDocument, options);
      }
export function useGetNameSportCenterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNameSportCenterQuery, GetNameSportCenterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNameSportCenterQuery, GetNameSportCenterQueryVariables>(GetNameSportCenterDocument, options);
        }
export type GetNameSportCenterQueryHookResult = ReturnType<typeof useGetNameSportCenterQuery>;
export type GetNameSportCenterLazyQueryHookResult = ReturnType<typeof useGetNameSportCenterLazyQuery>;
export type GetNameSportCenterQueryResult = Apollo.QueryResult<GetNameSportCenterQuery, GetNameSportCenterQueryVariables>;
export const GetSportCenterDocument = gql`
    query GetSportCenter($sportCenterId: ID!) {
  getSportCenter(sportCenterId: $sportCenterId) {
    name
    email
    description
    phone
    ubication
    schedule
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
export const GetSportCenterWithServicesDocument = gql`
    query GetSportCenterWithServices($sportCenterId: ID!) {
  getSportCenterWithServices(sportCenterId: $sportCenterId) {
    name
    email
    description
    phone
    ubication
    schedule
    ranking
    image
    services {
      serviceId
      name
      sport
      description
      image
    }
  }
}
    `;

/**
 * __useGetSportCenterWithServicesQuery__
 *
 * To run a query within a React component, call `useGetSportCenterWithServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSportCenterWithServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSportCenterWithServicesQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useGetSportCenterWithServicesQuery(baseOptions: Apollo.QueryHookOptions<GetSportCenterWithServicesQuery, GetSportCenterWithServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSportCenterWithServicesQuery, GetSportCenterWithServicesQueryVariables>(GetSportCenterWithServicesDocument, options);
      }
export function useGetSportCenterWithServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSportCenterWithServicesQuery, GetSportCenterWithServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSportCenterWithServicesQuery, GetSportCenterWithServicesQueryVariables>(GetSportCenterWithServicesDocument, options);
        }
export type GetSportCenterWithServicesQueryHookResult = ReturnType<typeof useGetSportCenterWithServicesQuery>;
export type GetSportCenterWithServicesLazyQueryHookResult = ReturnType<typeof useGetSportCenterWithServicesLazyQuery>;
export type GetSportCenterWithServicesQueryResult = Apollo.QueryResult<GetSportCenterWithServicesQuery, GetSportCenterWithServicesQueryVariables>;
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
export const GetUserDocument = gql`
    query GetUser($userId: ID!) {
  findUser(userId: $userId) {
    userId
    name
    id
    birthDate
    email
    phone
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CreateUserDocument = gql`
    mutation createUser($input: CreateUserInput!) {
  createUser(input: $input) {
    userId
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;