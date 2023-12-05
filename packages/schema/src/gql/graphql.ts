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

export type Admin = {
  __typename?: 'Admin';
  adminId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
};

export type AvailableHour = {
  __typename?: 'AvailableHour';
  price: Scalars['Float']['output'];
  rangeHour: Scalars['String']['output'];
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

export type CreateBankAccountInput = {
  accountNumber: Scalars['String']['input'];
  accountType: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  sportCenterId: Scalars['ID']['input'];
};

export type CreateReservationInput = {
  date: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  rangeHour?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  reservationPrice: Scalars['Float']['input'];
  serviceId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateReviewInput = {
  ranking: Scalars['Int']['input'];
  reservationId: Scalars['ID']['input'];
  review: Scalars['String']['input'];
  sportCenterId: Scalars['ID']['input'];
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
  isSuscribed: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  schedule?: InputMaybe<Scalars['String']['input']>;
  sportCenterId: Scalars['ID']['input'];
  ubication: Scalars['String']['input'];
};

export type CreateUserInput = {
  access: Scalars['Boolean']['input'];
  birthDate: Scalars['String']['input'];
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
  createReservationSC?: Maybe<Reservation>;
  createReservationUser?: Maybe<Reservation>;
  createReview?: Maybe<Review>;
  createService?: Maybe<Service>;
  createSportCenter?: Maybe<SportCenter>;
  createUser?: Maybe<User>;
  deleteBankAccount?: Maybe<OperationResponse>;
  deleteReservation?: Maybe<OperationResponse>;
  deleteService?: Maybe<OperationResponse>;
  deleteSportCenter?: Maybe<OperationResponse>;
  deleteUser?: Maybe<OperationResponse>;
  giveAccess?: Maybe<OperationResponse>;
  giveUserAccess?: Maybe<OperationResponse>;
  removeAccess?: Maybe<OperationResponse>;
  removeUserAccess?: Maybe<OperationResponse>;
  setPaid?: Maybe<OperationResponse>;
  suscribed?: Maybe<OperationResponse>;
  unSuscribed?: Maybe<OperationResponse>;
  updateBankAccount?: Maybe<OperationResponse>;
  updateOnlyDisponibility?: Maybe<OperationResponse>;
  updateReservation?: Maybe<OperationResponse>;
  updateService?: Maybe<OperationResponse>;
  updateSportCenter?: Maybe<OperationResponse>;
  updateUser?: Maybe<OperationResponse>;
};


export type MutationCreateBankAccountArgs = {
  input: CreateBankAccountInput;
};


export type MutationCreateReservationScArgs = {
  input: CreateReservationInput;
};


export type MutationCreateReservationUserArgs = {
  input: CreateReservationInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
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


export type MutationDeleteReservationArgs = {
  reservationId: Scalars['ID']['input'];
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


export type MutationGiveUserAccessArgs = {
  userId: Scalars['String']['input'];
};


export type MutationRemoveAccessArgs = {
  sportCenterId: Scalars['String']['input'];
};


export type MutationRemoveUserAccessArgs = {
  userId: Scalars['String']['input'];
};


export type MutationSetPaidArgs = {
  reservationId: Scalars['ID']['input'];
};


export type MutationSuscribedArgs = {
  sportCenterId: Scalars['String']['input'];
};


export type MutationUnSuscribedArgs = {
  sportCenterId: Scalars['String']['input'];
};


export type MutationUpdateBankAccountArgs = {
  input: UpdateBankAccountInput;
};


export type MutationUpdateOnlyDisponibilityArgs = {
  input?: InputMaybe<UpdateOnlyDisponibilityInput>;
};


export type MutationUpdateReservationArgs = {
  input: UpdateReservationInput;
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
  allUsers?: Maybe<Array<User>>;
  exitsReservations: Scalars['Boolean']['output'];
  findUser?: Maybe<User>;
  getAccess: Scalars['Boolean']['output'];
  getDisponibility?: Maybe<Array<AvailableHour>>;
  getReservationsByDate?: Maybe<Array<Maybe<Reservation>>>;
  getSportCenter?: Maybe<SportCenter>;
  getSportCenterWithServices?: Maybe<SportCenter>;
  haveAccess?: Maybe<Scalars['Boolean']['output']>;
  isAdmin: Scalars['Boolean']['output'];
  listBankAccountsBySportCenterId?: Maybe<Array<Maybe<BankAccount>>>;
  listBankAccountsBySportCenterName?: Maybe<Array<Maybe<BankAccount>>>;
  listReviewsBySportCenter?: Maybe<Array<Review>>;
  listReviewsByUserId?: Maybe<Array<Review>>;
  listSCReservations?: Maybe<Array<Maybe<ReservationNames>>>;
  listServicesBySport?: Maybe<Array<Maybe<ServiceWithSportCenter>>>;
  listServicesBySportCenterId?: Maybe<Array<Maybe<Service>>>;
  listSportCenters?: Maybe<Array<SportCenter>>;
  listUserReservations?: Maybe<Array<Maybe<ReservationNames>>>;
  reservationCount: Scalars['Int']['output'];
  reservationReviewed: Scalars['Boolean']['output'];
};


export type QueryExitsReservationsArgs = {
  rangeHour: Scalars['String']['input'];
  serviceId: Scalars['ID']['input'];
  sportCenterId: Scalars['ID']['input'];
};


export type QueryFindUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetAccessArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryGetDisponibilityArgs = {
  date: Scalars['String']['input'];
  serviceId: Scalars['ID']['input'];
};


export type QueryGetReservationsByDateArgs = {
  date: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
};


export type QueryGetSportCenterArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryGetSportCenterWithServicesArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryHaveAccessArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryIsAdminArgs = {
  adminId: Scalars['ID']['input'];
};


export type QueryListBankAccountsBySportCenterIdArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListBankAccountsBySportCenterNameArgs = {
  sportCenterName: Scalars['String']['input'];
};


export type QueryListReviewsBySportCenterArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListReviewsByUserIdArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryListScReservationsArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListServicesBySportArgs = {
  sport: Sport;
};


export type QueryListServicesBySportCenterIdArgs = {
  sportCenterId: Scalars['ID']['input'];
};


export type QueryListUserReservationsArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryReservationReviewedArgs = {
  reservationId: Scalars['ID']['input'];
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
  image: Scalars['String']['output'];
  paymentId: Scalars['String']['output'];
  rangeHour: Array<Scalars['String']['output']>;
  reservationId: Scalars['ID']['output'];
  reservationPrice: Scalars['Float']['output'];
  serviceId: Scalars['ID']['output'];
  state: Scalars['Boolean']['output'];
  userId: Scalars['ID']['output'];
};

export type ReservationNames = {
  __typename?: 'ReservationNames';
  reservation?: Maybe<Reservation>;
  serviceName?: Maybe<Scalars['String']['output']>;
  sportCenterId?: Maybe<Scalars['String']['output']>;
  sportCenterName?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

export type Review = {
  __typename?: 'Review';
  ranking: Scalars['Int']['output'];
  reservationId: Scalars['ID']['output'];
  review: Scalars['String']['output'];
  reviewId: Scalars['ID']['output'];
  sportCenterId: Scalars['ID']['output'];
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
  sportCenterId?: Maybe<Scalars['ID']['output']>;
};

export type ServiceWithSportCenter = {
  __typename?: 'ServiceWithSportCenter';
  service?: Maybe<Service>;
  sportCenter?: Maybe<SportCenter>;
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
  isSuscribed: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
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

export type UpdateOnlyDisponibilityInput = {
  Friday: Scalars['Boolean']['input'];
  Monday: Scalars['Boolean']['input'];
  Saturday: Scalars['Boolean']['input'];
  Sunday: Scalars['Boolean']['input'];
  Thursday: Scalars['Boolean']['input'];
  Tuesday: Scalars['Boolean']['input'];
  Wednesday: Scalars['Boolean']['input'];
  endHour: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  serviceId: Scalars['String']['input'];
  startHour: Scalars['String']['input'];
};

export type UpdateRangeHourInput = {
  endHour: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  startHour: Scalars['String']['input'];
};

export type UpdateReservationInput = {
  image: Scalars['String']['input'];
  paymentId: Scalars['String']['input'];
  reservationId: Scalars['ID']['input'];
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
  isSuscribed?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<Scalars['String']['input']>;
  sportCenterId: Scalars['ID']['input'];
  ubication?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  access?: InputMaybe<Scalars['Boolean']['input']>;
  birthDate?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type User = {
  __typename?: 'User';
  access: Scalars['Boolean']['output'];
  birthDate: Scalars['String']['output'];
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

export type IsAdminQueryVariables = Exact<{
  adminId: Scalars['ID']['input'];
}>;


export type IsAdminQuery = { __typename?: 'Query', isAdmin: boolean };

export type ListBankAccountsBySportCenterIdQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListBankAccountsBySportCenterIdQuery = { __typename?: 'Query', listBankAccountsBySportCenterId?: Array<{ __typename?: 'BankAccount', bankAccountId: string, name: string, id: string, accountType: string, accountNumber: string, email: string } | null> | null };

export type ListBankAccountsBySportCenterNameQueryVariables = Exact<{
  sportCenterName: Scalars['String']['input'];
}>;


export type ListBankAccountsBySportCenterNameQuery = { __typename?: 'Query', listBankAccountsBySportCenterName?: Array<{ __typename?: 'BankAccount', bankAccountId: string, name: string, id: string, accountType: string, accountNumber: string, email: string, sportCenterId: string } | null> | null };

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

export type GetDisponibilityQueryVariables = Exact<{
  serviceId: Scalars['ID']['input'];
  date: Scalars['String']['input'];
}>;


export type GetDisponibilityQuery = { __typename?: 'Query', getDisponibility?: Array<{ __typename?: 'AvailableHour', rangeHour: string, price: number }> | null };

export type UpdateOnlyDisponibilityMutationVariables = Exact<{
  input?: InputMaybe<UpdateOnlyDisponibilityInput>;
}>;


export type UpdateOnlyDisponibilityMutation = { __typename?: 'Mutation', updateOnlyDisponibility?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type ExitsReservationsQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
  serviceId: Scalars['ID']['input'];
  rangeHour: Scalars['String']['input'];
}>;


export type ExitsReservationsQuery = { __typename?: 'Query', exitsReservations: boolean };

export type ListScReservationsQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListScReservationsQuery = { __typename?: 'Query', listSCReservations?: Array<{ __typename?: 'ReservationNames', userName?: string | null, serviceName?: string | null, reservation?: { __typename?: 'Reservation', reservationId: string, state: boolean, paymentId: string, reservationPrice: number, userId: string, serviceId: string, image: string, date: string, rangeHour: Array<string> } | null } | null> | null };

export type ListUserReservationsQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type ListUserReservationsQuery = { __typename?: 'Query', listUserReservations?: Array<{ __typename?: 'ReservationNames', serviceName?: string | null, sportCenterName?: string | null, sportCenterId?: string | null, reservation?: { __typename?: 'Reservation', reservationId: string, state: boolean, paymentId: string, reservationPrice: number, userId: string, serviceId: string, image: string, date: string, rangeHour: Array<string> } | null } | null> | null };

export type GetReservationsByDateQueryVariables = Exact<{
  date: Scalars['String']['input'];
  serviceId: Scalars['String']['input'];
}>;


export type GetReservationsByDateQuery = { __typename?: 'Query', getReservationsByDate?: Array<{ __typename?: 'Reservation', state: boolean, rangeHour: Array<string> } | null> | null };

export type CreateReservationScMutationVariables = Exact<{
  input: CreateReservationInput;
}>;


export type CreateReservationScMutation = { __typename?: 'Mutation', createReservationSC?: { __typename?: 'Reservation', reservationId: string, state: boolean, paymentId: string, reservationPrice: number, userId: string, serviceId: string, image: string, date: string, rangeHour: Array<string> } | null };

export type CreateReservationUserMutationVariables = Exact<{
  input: CreateReservationInput;
}>;


export type CreateReservationUserMutation = { __typename?: 'Mutation', createReservationUser?: { __typename?: 'Reservation', reservationId: string, state: boolean, paymentId: string, reservationPrice: number, userId: string, serviceId: string, image: string, date: string, rangeHour: Array<string> } | null };

export type DeleteReservationMutationVariables = Exact<{
  reservationId: Scalars['ID']['input'];
}>;


export type DeleteReservationMutation = { __typename?: 'Mutation', deleteReservation?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type SetPaidMutationVariables = Exact<{
  reservationId: Scalars['ID']['input'];
}>;


export type SetPaidMutation = { __typename?: 'Mutation', setPaid?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type UpdateReservationMutationVariables = Exact<{
  input: UpdateReservationInput;
}>;


export type UpdateReservationMutation = { __typename?: 'Mutation', updateReservation?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type ListReviewsByUserIdQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type ListReviewsByUserIdQuery = { __typename?: 'Query', listReviewsByUserId?: Array<{ __typename?: 'Review', reviewId: string, sportCenterId: string, reservationId: string, userId: string, review: string, ranking: number }> | null };

export type ListReviewsBySportCenterQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListReviewsBySportCenterQuery = { __typename?: 'Query', listReviewsBySportCenter?: Array<{ __typename?: 'Review', reviewId: string, sportCenterId: string, reservationId: string, userId: string, review: string, ranking: number }> | null };

export type ReservationReviewedQueryVariables = Exact<{
  reservationId: Scalars['ID']['input'];
}>;


export type ReservationReviewedQuery = { __typename?: 'Query', reservationReviewed: boolean };

export type CreateReviewMutationVariables = Exact<{
  input: CreateReviewInput;
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview?: { __typename?: 'Review', reviewId: string } | null };

export type ListServicesBySportCenterIdQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListServicesBySportCenterIdQuery = { __typename?: 'Query', listServicesBySportCenterId?: Array<{ __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string } | null> | null };

export type ListServicesBySportQueryVariables = Exact<{
  sport: Sport;
}>;


export type ListServicesBySportQuery = { __typename?: 'Query', listServicesBySport?: Array<{ __typename?: 'ServiceWithSportCenter', service?: { __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string } | null, sportCenter?: { __typename?: 'SportCenter', sportCenterId: string, name: string, phone: string, ubication: string, schedule: string, isSuscribed: boolean } | null } | null> | null };

export type CreateServiceMutationVariables = Exact<{
  input: CreateServiceInput;
}>;


export type CreateServiceMutation = { __typename?: 'Mutation', createService?: { __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string, sportCenterId?: string | null } | null };

export type UpdateServiceMutationVariables = Exact<{
  input?: InputMaybe<UpdateServiceInput>;
}>;


export type UpdateServiceMutation = { __typename?: 'Mutation', updateService?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type DeleteServiceMutationVariables = Exact<{
  serviceId: Scalars['ID']['input'];
}>;


export type DeleteServiceMutation = { __typename?: 'Mutation', deleteService?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type ListServicesBySportCenterIdWithDisponibilityQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type ListServicesBySportCenterIdWithDisponibilityQuery = { __typename?: 'Query', listServicesBySportCenterId?: Array<{ __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string, disponibility?: { __typename?: 'Disponibility', Monday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null, Saturday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null, Sunday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null, Tuesday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null, Thursday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null, Wednesday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null, Friday?: Array<{ __typename?: 'RangeHour', startHour: string, endHour: string, price: number } | null> | null } | null } | null> | null };

export type GetAccessQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetAccessQuery = { __typename?: 'Query', getAccess: boolean };

export type ListSportCentersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListSportCentersQuery = { __typename?: 'Query', listSportCenters?: Array<{ __typename?: 'SportCenter', sportCenterId: string, name: string, email: string, phone: string, ubication: string, schedule: string, image: string, access: boolean, isSuscribed: boolean }> | null };

export type GetNameSportCenterQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetNameSportCenterQuery = { __typename?: 'Query', getSportCenter?: { __typename?: 'SportCenter', name: string } | null };

export type GetSportCenterQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetSportCenterQuery = { __typename?: 'Query', getSportCenter?: { __typename?: 'SportCenter', name: string, email: string, description: string, phone: string, ubication: string, schedule: string, image: string } | null };

export type GetSportCenterWithServicesQueryVariables = Exact<{
  sportCenterId: Scalars['ID']['input'];
}>;


export type GetSportCenterWithServicesQuery = { __typename?: 'Query', getSportCenterWithServices?: { __typename?: 'SportCenter', name: string, email: string, description: string, phone: string, ubication: string, schedule: string, image: string, isSuscribed: boolean, services?: Array<{ __typename?: 'Service', serviceId: string, name: string, sport: Sport, description: string, image: string } | null> | null } | null };

export type CreateSportCenterMutationVariables = Exact<{
  input: CreateSportCenterInput;
}>;


export type CreateSportCenterMutation = { __typename?: 'Mutation', createSportCenter?: { __typename?: 'SportCenter', sportCenterId: string } | null };

export type UpdateSportCenterMutationVariables = Exact<{
  input: UpdateSportCenterInput;
}>;


export type UpdateSportCenterMutation = { __typename?: 'Mutation', updateSportCenter?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type GiveAccessMutationVariables = Exact<{
  sportCenterId: Scalars['String']['input'];
}>;


export type GiveAccessMutation = { __typename?: 'Mutation', giveAccess?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type RemoveAccessMutationVariables = Exact<{
  sportCenterId: Scalars['String']['input'];
}>;


export type RemoveAccessMutation = { __typename?: 'Mutation', removeAccess?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type SuscribedMutationVariables = Exact<{
  sportCenterId: Scalars['String']['input'];
}>;


export type SuscribedMutation = { __typename?: 'Mutation', suscribed?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type UnSuscribedMutationVariables = Exact<{
  sportCenterId: Scalars['String']['input'];
}>;


export type UnSuscribedMutation = { __typename?: 'Mutation', unSuscribed?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type AllUSersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUSersQuery = { __typename?: 'Query', allUsers?: Array<{ __typename?: 'User', userId: string, name: string, email: string, access: boolean }> | null };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', findUser?: { __typename?: 'User', userId: string, name: string, id: string, birthDate: string, email: string, phone: string, access: boolean } | null };

export type HaveAccessQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type HaveAccessQuery = { __typename?: 'Query', haveAccess?: boolean | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', userId: string } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type GiveUserAccessMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GiveUserAccessMutation = { __typename?: 'Mutation', giveUserAccess?: { __typename?: 'OperationResponse', status: Status, message: string } | null };

export type RemoveUserAccessMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type RemoveUserAccessMutation = { __typename?: 'Mutation', removeUserAccess?: { __typename?: 'OperationResponse', status: Status, message: string } | null };


export const IsAdminDocument = gql`
    query IsAdmin($adminId: ID!) {
  isAdmin(adminId: $adminId)
}
    `;

/**
 * __useIsAdminQuery__
 *
 * To run a query within a React component, call `useIsAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAdminQuery({
 *   variables: {
 *      adminId: // value for 'adminId'
 *   },
 * });
 */
export function useIsAdminQuery(baseOptions: Apollo.QueryHookOptions<IsAdminQuery, IsAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsAdminQuery, IsAdminQueryVariables>(IsAdminDocument, options);
      }
export function useIsAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsAdminQuery, IsAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsAdminQuery, IsAdminQueryVariables>(IsAdminDocument, options);
        }
export type IsAdminQueryHookResult = ReturnType<typeof useIsAdminQuery>;
export type IsAdminLazyQueryHookResult = ReturnType<typeof useIsAdminLazyQuery>;
export type IsAdminQueryResult = Apollo.QueryResult<IsAdminQuery, IsAdminQueryVariables>;
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
export const ListBankAccountsBySportCenterNameDocument = gql`
    query ListBankAccountsBySportCenterName($sportCenterName: String!) {
  listBankAccountsBySportCenterName(sportCenterName: $sportCenterName) {
    bankAccountId
    name
    id
    accountType
    accountNumber
    email
    sportCenterId
  }
}
    `;

/**
 * __useListBankAccountsBySportCenterNameQuery__
 *
 * To run a query within a React component, call `useListBankAccountsBySportCenterNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useListBankAccountsBySportCenterNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListBankAccountsBySportCenterNameQuery({
 *   variables: {
 *      sportCenterName: // value for 'sportCenterName'
 *   },
 * });
 */
export function useListBankAccountsBySportCenterNameQuery(baseOptions: Apollo.QueryHookOptions<ListBankAccountsBySportCenterNameQuery, ListBankAccountsBySportCenterNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListBankAccountsBySportCenterNameQuery, ListBankAccountsBySportCenterNameQueryVariables>(ListBankAccountsBySportCenterNameDocument, options);
      }
export function useListBankAccountsBySportCenterNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListBankAccountsBySportCenterNameQuery, ListBankAccountsBySportCenterNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListBankAccountsBySportCenterNameQuery, ListBankAccountsBySportCenterNameQueryVariables>(ListBankAccountsBySportCenterNameDocument, options);
        }
export type ListBankAccountsBySportCenterNameQueryHookResult = ReturnType<typeof useListBankAccountsBySportCenterNameQuery>;
export type ListBankAccountsBySportCenterNameLazyQueryHookResult = ReturnType<typeof useListBankAccountsBySportCenterNameLazyQuery>;
export type ListBankAccountsBySportCenterNameQueryResult = Apollo.QueryResult<ListBankAccountsBySportCenterNameQuery, ListBankAccountsBySportCenterNameQueryVariables>;
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
export const GetDisponibilityDocument = gql`
    query GetDisponibility($serviceId: ID!, $date: String!) {
  getDisponibility(serviceId: $serviceId, date: $date) {
    rangeHour
    price
  }
}
    `;

/**
 * __useGetDisponibilityQuery__
 *
 * To run a query within a React component, call `useGetDisponibilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDisponibilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDisponibilityQuery({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetDisponibilityQuery(baseOptions: Apollo.QueryHookOptions<GetDisponibilityQuery, GetDisponibilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDisponibilityQuery, GetDisponibilityQueryVariables>(GetDisponibilityDocument, options);
      }
export function useGetDisponibilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDisponibilityQuery, GetDisponibilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDisponibilityQuery, GetDisponibilityQueryVariables>(GetDisponibilityDocument, options);
        }
export type GetDisponibilityQueryHookResult = ReturnType<typeof useGetDisponibilityQuery>;
export type GetDisponibilityLazyQueryHookResult = ReturnType<typeof useGetDisponibilityLazyQuery>;
export type GetDisponibilityQueryResult = Apollo.QueryResult<GetDisponibilityQuery, GetDisponibilityQueryVariables>;
export const UpdateOnlyDisponibilityDocument = gql`
    mutation UpdateOnlyDisponibility($input: UpdateOnlyDisponibilityInput) {
  updateOnlyDisponibility(input: $input) {
    status
    message
  }
}
    `;
export type UpdateOnlyDisponibilityMutationFn = Apollo.MutationFunction<UpdateOnlyDisponibilityMutation, UpdateOnlyDisponibilityMutationVariables>;

/**
 * __useUpdateOnlyDisponibilityMutation__
 *
 * To run a mutation, you first call `useUpdateOnlyDisponibilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOnlyDisponibilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOnlyDisponibilityMutation, { data, loading, error }] = useUpdateOnlyDisponibilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOnlyDisponibilityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOnlyDisponibilityMutation, UpdateOnlyDisponibilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOnlyDisponibilityMutation, UpdateOnlyDisponibilityMutationVariables>(UpdateOnlyDisponibilityDocument, options);
      }
export type UpdateOnlyDisponibilityMutationHookResult = ReturnType<typeof useUpdateOnlyDisponibilityMutation>;
export type UpdateOnlyDisponibilityMutationResult = Apollo.MutationResult<UpdateOnlyDisponibilityMutation>;
export type UpdateOnlyDisponibilityMutationOptions = Apollo.BaseMutationOptions<UpdateOnlyDisponibilityMutation, UpdateOnlyDisponibilityMutationVariables>;
export const ExitsReservationsDocument = gql`
    query ExitsReservations($sportCenterId: ID!, $serviceId: ID!, $rangeHour: String!) {
  exitsReservations(
    sportCenterId: $sportCenterId
    serviceId: $serviceId
    rangeHour: $rangeHour
  )
}
    `;

/**
 * __useExitsReservationsQuery__
 *
 * To run a query within a React component, call `useExitsReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExitsReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExitsReservationsQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *      serviceId: // value for 'serviceId'
 *      rangeHour: // value for 'rangeHour'
 *   },
 * });
 */
export function useExitsReservationsQuery(baseOptions: Apollo.QueryHookOptions<ExitsReservationsQuery, ExitsReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExitsReservationsQuery, ExitsReservationsQueryVariables>(ExitsReservationsDocument, options);
      }
export function useExitsReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExitsReservationsQuery, ExitsReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExitsReservationsQuery, ExitsReservationsQueryVariables>(ExitsReservationsDocument, options);
        }
export type ExitsReservationsQueryHookResult = ReturnType<typeof useExitsReservationsQuery>;
export type ExitsReservationsLazyQueryHookResult = ReturnType<typeof useExitsReservationsLazyQuery>;
export type ExitsReservationsQueryResult = Apollo.QueryResult<ExitsReservationsQuery, ExitsReservationsQueryVariables>;
export const ListScReservationsDocument = gql`
    query ListSCReservations($sportCenterId: ID!) {
  listSCReservations(sportCenterId: $sportCenterId) {
    reservation {
      reservationId
      state
      paymentId
      reservationPrice
      userId
      serviceId
      image
      date
      rangeHour
    }
    userName
    serviceName
  }
}
    `;

/**
 * __useListScReservationsQuery__
 *
 * To run a query within a React component, call `useListScReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListScReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListScReservationsQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useListScReservationsQuery(baseOptions: Apollo.QueryHookOptions<ListScReservationsQuery, ListScReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListScReservationsQuery, ListScReservationsQueryVariables>(ListScReservationsDocument, options);
      }
export function useListScReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListScReservationsQuery, ListScReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListScReservationsQuery, ListScReservationsQueryVariables>(ListScReservationsDocument, options);
        }
export type ListScReservationsQueryHookResult = ReturnType<typeof useListScReservationsQuery>;
export type ListScReservationsLazyQueryHookResult = ReturnType<typeof useListScReservationsLazyQuery>;
export type ListScReservationsQueryResult = Apollo.QueryResult<ListScReservationsQuery, ListScReservationsQueryVariables>;
export const ListUserReservationsDocument = gql`
    query ListUserReservations($userId: ID!) {
  listUserReservations(userId: $userId) {
    reservation {
      reservationId
      state
      paymentId
      reservationPrice
      userId
      serviceId
      image
      date
      rangeHour
    }
    serviceName
    sportCenterName
    sportCenterId
  }
}
    `;

/**
 * __useListUserReservationsQuery__
 *
 * To run a query within a React component, call `useListUserReservationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUserReservationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUserReservationsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useListUserReservationsQuery(baseOptions: Apollo.QueryHookOptions<ListUserReservationsQuery, ListUserReservationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUserReservationsQuery, ListUserReservationsQueryVariables>(ListUserReservationsDocument, options);
      }
export function useListUserReservationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUserReservationsQuery, ListUserReservationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUserReservationsQuery, ListUserReservationsQueryVariables>(ListUserReservationsDocument, options);
        }
export type ListUserReservationsQueryHookResult = ReturnType<typeof useListUserReservationsQuery>;
export type ListUserReservationsLazyQueryHookResult = ReturnType<typeof useListUserReservationsLazyQuery>;
export type ListUserReservationsQueryResult = Apollo.QueryResult<ListUserReservationsQuery, ListUserReservationsQueryVariables>;
export const GetReservationsByDateDocument = gql`
    query GetReservationsByDate($date: String!, $serviceId: String!) {
  getReservationsByDate(date: $date, serviceId: $serviceId) {
    state
    rangeHour
  }
}
    `;

/**
 * __useGetReservationsByDateQuery__
 *
 * To run a query within a React component, call `useGetReservationsByDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReservationsByDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReservationsByDateQuery({
 *   variables: {
 *      date: // value for 'date'
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useGetReservationsByDateQuery(baseOptions: Apollo.QueryHookOptions<GetReservationsByDateQuery, GetReservationsByDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReservationsByDateQuery, GetReservationsByDateQueryVariables>(GetReservationsByDateDocument, options);
      }
export function useGetReservationsByDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReservationsByDateQuery, GetReservationsByDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReservationsByDateQuery, GetReservationsByDateQueryVariables>(GetReservationsByDateDocument, options);
        }
export type GetReservationsByDateQueryHookResult = ReturnType<typeof useGetReservationsByDateQuery>;
export type GetReservationsByDateLazyQueryHookResult = ReturnType<typeof useGetReservationsByDateLazyQuery>;
export type GetReservationsByDateQueryResult = Apollo.QueryResult<GetReservationsByDateQuery, GetReservationsByDateQueryVariables>;
export const CreateReservationScDocument = gql`
    mutation CreateReservationSC($input: CreateReservationInput!) {
  createReservationSC(input: $input) {
    reservationId
    state
    paymentId
    reservationPrice
    userId
    serviceId
    image
    date
    rangeHour
  }
}
    `;
export type CreateReservationScMutationFn = Apollo.MutationFunction<CreateReservationScMutation, CreateReservationScMutationVariables>;

/**
 * __useCreateReservationScMutation__
 *
 * To run a mutation, you first call `useCreateReservationScMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationScMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationScMutation, { data, loading, error }] = useCreateReservationScMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReservationScMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationScMutation, CreateReservationScMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationScMutation, CreateReservationScMutationVariables>(CreateReservationScDocument, options);
      }
export type CreateReservationScMutationHookResult = ReturnType<typeof useCreateReservationScMutation>;
export type CreateReservationScMutationResult = Apollo.MutationResult<CreateReservationScMutation>;
export type CreateReservationScMutationOptions = Apollo.BaseMutationOptions<CreateReservationScMutation, CreateReservationScMutationVariables>;
export const CreateReservationUserDocument = gql`
    mutation CreateReservationUser($input: CreateReservationInput!) {
  createReservationUser(input: $input) {
    reservationId
    state
    paymentId
    reservationPrice
    userId
    serviceId
    image
    date
    rangeHour
  }
}
    `;
export type CreateReservationUserMutationFn = Apollo.MutationFunction<CreateReservationUserMutation, CreateReservationUserMutationVariables>;

/**
 * __useCreateReservationUserMutation__
 *
 * To run a mutation, you first call `useCreateReservationUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReservationUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReservationUserMutation, { data, loading, error }] = useCreateReservationUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReservationUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateReservationUserMutation, CreateReservationUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReservationUserMutation, CreateReservationUserMutationVariables>(CreateReservationUserDocument, options);
      }
export type CreateReservationUserMutationHookResult = ReturnType<typeof useCreateReservationUserMutation>;
export type CreateReservationUserMutationResult = Apollo.MutationResult<CreateReservationUserMutation>;
export type CreateReservationUserMutationOptions = Apollo.BaseMutationOptions<CreateReservationUserMutation, CreateReservationUserMutationVariables>;
export const DeleteReservationDocument = gql`
    mutation DeleteReservation($reservationId: ID!) {
  deleteReservation(reservationId: $reservationId) {
    status
    message
  }
}
    `;
export type DeleteReservationMutationFn = Apollo.MutationFunction<DeleteReservationMutation, DeleteReservationMutationVariables>;

/**
 * __useDeleteReservationMutation__
 *
 * To run a mutation, you first call `useDeleteReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReservationMutation, { data, loading, error }] = useDeleteReservationMutation({
 *   variables: {
 *      reservationId: // value for 'reservationId'
 *   },
 * });
 */
export function useDeleteReservationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReservationMutation, DeleteReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReservationMutation, DeleteReservationMutationVariables>(DeleteReservationDocument, options);
      }
export type DeleteReservationMutationHookResult = ReturnType<typeof useDeleteReservationMutation>;
export type DeleteReservationMutationResult = Apollo.MutationResult<DeleteReservationMutation>;
export type DeleteReservationMutationOptions = Apollo.BaseMutationOptions<DeleteReservationMutation, DeleteReservationMutationVariables>;
export const SetPaidDocument = gql`
    mutation SetPaid($reservationId: ID!) {
  setPaid(reservationId: $reservationId) {
    status
    message
  }
}
    `;
export type SetPaidMutationFn = Apollo.MutationFunction<SetPaidMutation, SetPaidMutationVariables>;

/**
 * __useSetPaidMutation__
 *
 * To run a mutation, you first call `useSetPaidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetPaidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setPaidMutation, { data, loading, error }] = useSetPaidMutation({
 *   variables: {
 *      reservationId: // value for 'reservationId'
 *   },
 * });
 */
export function useSetPaidMutation(baseOptions?: Apollo.MutationHookOptions<SetPaidMutation, SetPaidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetPaidMutation, SetPaidMutationVariables>(SetPaidDocument, options);
      }
export type SetPaidMutationHookResult = ReturnType<typeof useSetPaidMutation>;
export type SetPaidMutationResult = Apollo.MutationResult<SetPaidMutation>;
export type SetPaidMutationOptions = Apollo.BaseMutationOptions<SetPaidMutation, SetPaidMutationVariables>;
export const UpdateReservationDocument = gql`
    mutation UpdateReservation($input: UpdateReservationInput!) {
  updateReservation(input: $input) {
    status
    message
  }
}
    `;
export type UpdateReservationMutationFn = Apollo.MutationFunction<UpdateReservationMutation, UpdateReservationMutationVariables>;

/**
 * __useUpdateReservationMutation__
 *
 * To run a mutation, you first call `useUpdateReservationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReservationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReservationMutation, { data, loading, error }] = useUpdateReservationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateReservationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReservationMutation, UpdateReservationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReservationMutation, UpdateReservationMutationVariables>(UpdateReservationDocument, options);
      }
export type UpdateReservationMutationHookResult = ReturnType<typeof useUpdateReservationMutation>;
export type UpdateReservationMutationResult = Apollo.MutationResult<UpdateReservationMutation>;
export type UpdateReservationMutationOptions = Apollo.BaseMutationOptions<UpdateReservationMutation, UpdateReservationMutationVariables>;
export const ListReviewsByUserIdDocument = gql`
    query ListReviewsByUserId($userId: ID!) {
  listReviewsByUserId(userId: $userId) {
    reviewId
    sportCenterId
    reservationId
    userId
    review
    ranking
  }
}
    `;

/**
 * __useListReviewsByUserIdQuery__
 *
 * To run a query within a React component, call `useListReviewsByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReviewsByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListReviewsByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useListReviewsByUserIdQuery(baseOptions: Apollo.QueryHookOptions<ListReviewsByUserIdQuery, ListReviewsByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListReviewsByUserIdQuery, ListReviewsByUserIdQueryVariables>(ListReviewsByUserIdDocument, options);
      }
export function useListReviewsByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListReviewsByUserIdQuery, ListReviewsByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListReviewsByUserIdQuery, ListReviewsByUserIdQueryVariables>(ListReviewsByUserIdDocument, options);
        }
export type ListReviewsByUserIdQueryHookResult = ReturnType<typeof useListReviewsByUserIdQuery>;
export type ListReviewsByUserIdLazyQueryHookResult = ReturnType<typeof useListReviewsByUserIdLazyQuery>;
export type ListReviewsByUserIdQueryResult = Apollo.QueryResult<ListReviewsByUserIdQuery, ListReviewsByUserIdQueryVariables>;
export const ListReviewsBySportCenterDocument = gql`
    query ListReviewsBySportCenter($sportCenterId: ID!) {
  listReviewsBySportCenter(sportCenterId: $sportCenterId) {
    reviewId
    sportCenterId
    reservationId
    userId
    review
    ranking
  }
}
    `;

/**
 * __useListReviewsBySportCenterQuery__
 *
 * To run a query within a React component, call `useListReviewsBySportCenterQuery` and pass it any options that fit your needs.
 * When your component renders, `useListReviewsBySportCenterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListReviewsBySportCenterQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useListReviewsBySportCenterQuery(baseOptions: Apollo.QueryHookOptions<ListReviewsBySportCenterQuery, ListReviewsBySportCenterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListReviewsBySportCenterQuery, ListReviewsBySportCenterQueryVariables>(ListReviewsBySportCenterDocument, options);
      }
export function useListReviewsBySportCenterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListReviewsBySportCenterQuery, ListReviewsBySportCenterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListReviewsBySportCenterQuery, ListReviewsBySportCenterQueryVariables>(ListReviewsBySportCenterDocument, options);
        }
export type ListReviewsBySportCenterQueryHookResult = ReturnType<typeof useListReviewsBySportCenterQuery>;
export type ListReviewsBySportCenterLazyQueryHookResult = ReturnType<typeof useListReviewsBySportCenterLazyQuery>;
export type ListReviewsBySportCenterQueryResult = Apollo.QueryResult<ListReviewsBySportCenterQuery, ListReviewsBySportCenterQueryVariables>;
export const ReservationReviewedDocument = gql`
    query ReservationReviewed($reservationId: ID!) {
  reservationReviewed(reservationId: $reservationId)
}
    `;

/**
 * __useReservationReviewedQuery__
 *
 * To run a query within a React component, call `useReservationReviewedQuery` and pass it any options that fit your needs.
 * When your component renders, `useReservationReviewedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReservationReviewedQuery({
 *   variables: {
 *      reservationId: // value for 'reservationId'
 *   },
 * });
 */
export function useReservationReviewedQuery(baseOptions: Apollo.QueryHookOptions<ReservationReviewedQuery, ReservationReviewedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReservationReviewedQuery, ReservationReviewedQueryVariables>(ReservationReviewedDocument, options);
      }
export function useReservationReviewedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReservationReviewedQuery, ReservationReviewedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReservationReviewedQuery, ReservationReviewedQueryVariables>(ReservationReviewedDocument, options);
        }
export type ReservationReviewedQueryHookResult = ReturnType<typeof useReservationReviewedQuery>;
export type ReservationReviewedLazyQueryHookResult = ReturnType<typeof useReservationReviewedLazyQuery>;
export type ReservationReviewedQueryResult = Apollo.QueryResult<ReservationReviewedQuery, ReservationReviewedQueryVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    reviewId
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
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
export const ListServicesBySportDocument = gql`
    query ListServicesBySport($sport: Sport!) {
  listServicesBySport(sport: $sport) {
    service {
      serviceId
      name
      sport
      description
      image
    }
    sportCenter {
      sportCenterId
      name
      phone
      ubication
      schedule
      isSuscribed
    }
  }
}
    `;

/**
 * __useListServicesBySportQuery__
 *
 * To run a query within a React component, call `useListServicesBySportQuery` and pass it any options that fit your needs.
 * When your component renders, `useListServicesBySportQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListServicesBySportQuery({
 *   variables: {
 *      sport: // value for 'sport'
 *   },
 * });
 */
export function useListServicesBySportQuery(baseOptions: Apollo.QueryHookOptions<ListServicesBySportQuery, ListServicesBySportQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListServicesBySportQuery, ListServicesBySportQueryVariables>(ListServicesBySportDocument, options);
      }
export function useListServicesBySportLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListServicesBySportQuery, ListServicesBySportQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListServicesBySportQuery, ListServicesBySportQueryVariables>(ListServicesBySportDocument, options);
        }
export type ListServicesBySportQueryHookResult = ReturnType<typeof useListServicesBySportQuery>;
export type ListServicesBySportLazyQueryHookResult = ReturnType<typeof useListServicesBySportLazyQuery>;
export type ListServicesBySportQueryResult = Apollo.QueryResult<ListServicesBySportQuery, ListServicesBySportQueryVariables>;
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
export const ListServicesBySportCenterIdWithDisponibilityDocument = gql`
    query ListServicesBySportCenterIdWithDisponibility($sportCenterId: ID!) {
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
      Tuesday {
        startHour
        endHour
        price
      }
      Thursday {
        startHour
        endHour
        price
      }
      Wednesday {
        startHour
        endHour
        price
      }
      Friday {
        startHour
        endHour
        price
      }
    }
  }
}
    `;

/**
 * __useListServicesBySportCenterIdWithDisponibilityQuery__
 *
 * To run a query within a React component, call `useListServicesBySportCenterIdWithDisponibilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useListServicesBySportCenterIdWithDisponibilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListServicesBySportCenterIdWithDisponibilityQuery({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useListServicesBySportCenterIdWithDisponibilityQuery(baseOptions: Apollo.QueryHookOptions<ListServicesBySportCenterIdWithDisponibilityQuery, ListServicesBySportCenterIdWithDisponibilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListServicesBySportCenterIdWithDisponibilityQuery, ListServicesBySportCenterIdWithDisponibilityQueryVariables>(ListServicesBySportCenterIdWithDisponibilityDocument, options);
      }
export function useListServicesBySportCenterIdWithDisponibilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListServicesBySportCenterIdWithDisponibilityQuery, ListServicesBySportCenterIdWithDisponibilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListServicesBySportCenterIdWithDisponibilityQuery, ListServicesBySportCenterIdWithDisponibilityQueryVariables>(ListServicesBySportCenterIdWithDisponibilityDocument, options);
        }
export type ListServicesBySportCenterIdWithDisponibilityQueryHookResult = ReturnType<typeof useListServicesBySportCenterIdWithDisponibilityQuery>;
export type ListServicesBySportCenterIdWithDisponibilityLazyQueryHookResult = ReturnType<typeof useListServicesBySportCenterIdWithDisponibilityLazyQuery>;
export type ListServicesBySportCenterIdWithDisponibilityQueryResult = Apollo.QueryResult<ListServicesBySportCenterIdWithDisponibilityQuery, ListServicesBySportCenterIdWithDisponibilityQueryVariables>;
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
    email
    phone
    ubication
    schedule
    image
    access
    isSuscribed
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
    image
    isSuscribed
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
export const GiveAccessDocument = gql`
    mutation GiveAccess($sportCenterId: String!) {
  giveAccess(sportCenterId: $sportCenterId) {
    status
    message
  }
}
    `;
export type GiveAccessMutationFn = Apollo.MutationFunction<GiveAccessMutation, GiveAccessMutationVariables>;

/**
 * __useGiveAccessMutation__
 *
 * To run a mutation, you first call `useGiveAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGiveAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [giveAccessMutation, { data, loading, error }] = useGiveAccessMutation({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useGiveAccessMutation(baseOptions?: Apollo.MutationHookOptions<GiveAccessMutation, GiveAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GiveAccessMutation, GiveAccessMutationVariables>(GiveAccessDocument, options);
      }
export type GiveAccessMutationHookResult = ReturnType<typeof useGiveAccessMutation>;
export type GiveAccessMutationResult = Apollo.MutationResult<GiveAccessMutation>;
export type GiveAccessMutationOptions = Apollo.BaseMutationOptions<GiveAccessMutation, GiveAccessMutationVariables>;
export const RemoveAccessDocument = gql`
    mutation RemoveAccess($sportCenterId: String!) {
  removeAccess(sportCenterId: $sportCenterId) {
    status
    message
  }
}
    `;
export type RemoveAccessMutationFn = Apollo.MutationFunction<RemoveAccessMutation, RemoveAccessMutationVariables>;

/**
 * __useRemoveAccessMutation__
 *
 * To run a mutation, you first call `useRemoveAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeAccessMutation, { data, loading, error }] = useRemoveAccessMutation({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useRemoveAccessMutation(baseOptions?: Apollo.MutationHookOptions<RemoveAccessMutation, RemoveAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveAccessMutation, RemoveAccessMutationVariables>(RemoveAccessDocument, options);
      }
export type RemoveAccessMutationHookResult = ReturnType<typeof useRemoveAccessMutation>;
export type RemoveAccessMutationResult = Apollo.MutationResult<RemoveAccessMutation>;
export type RemoveAccessMutationOptions = Apollo.BaseMutationOptions<RemoveAccessMutation, RemoveAccessMutationVariables>;
export const SuscribedDocument = gql`
    mutation Suscribed($sportCenterId: String!) {
  suscribed(sportCenterId: $sportCenterId) {
    status
    message
  }
}
    `;
export type SuscribedMutationFn = Apollo.MutationFunction<SuscribedMutation, SuscribedMutationVariables>;

/**
 * __useSuscribedMutation__
 *
 * To run a mutation, you first call `useSuscribedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSuscribedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [suscribedMutation, { data, loading, error }] = useSuscribedMutation({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useSuscribedMutation(baseOptions?: Apollo.MutationHookOptions<SuscribedMutation, SuscribedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SuscribedMutation, SuscribedMutationVariables>(SuscribedDocument, options);
      }
export type SuscribedMutationHookResult = ReturnType<typeof useSuscribedMutation>;
export type SuscribedMutationResult = Apollo.MutationResult<SuscribedMutation>;
export type SuscribedMutationOptions = Apollo.BaseMutationOptions<SuscribedMutation, SuscribedMutationVariables>;
export const UnSuscribedDocument = gql`
    mutation UnSuscribed($sportCenterId: String!) {
  unSuscribed(sportCenterId: $sportCenterId) {
    status
    message
  }
}
    `;
export type UnSuscribedMutationFn = Apollo.MutationFunction<UnSuscribedMutation, UnSuscribedMutationVariables>;

/**
 * __useUnSuscribedMutation__
 *
 * To run a mutation, you first call `useUnSuscribedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnSuscribedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unSuscribedMutation, { data, loading, error }] = useUnSuscribedMutation({
 *   variables: {
 *      sportCenterId: // value for 'sportCenterId'
 *   },
 * });
 */
export function useUnSuscribedMutation(baseOptions?: Apollo.MutationHookOptions<UnSuscribedMutation, UnSuscribedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnSuscribedMutation, UnSuscribedMutationVariables>(UnSuscribedDocument, options);
      }
export type UnSuscribedMutationHookResult = ReturnType<typeof useUnSuscribedMutation>;
export type UnSuscribedMutationResult = Apollo.MutationResult<UnSuscribedMutation>;
export type UnSuscribedMutationOptions = Apollo.BaseMutationOptions<UnSuscribedMutation, UnSuscribedMutationVariables>;
export const AllUSersDocument = gql`
    query AllUSers {
  allUsers {
    userId
    name
    email
    access
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
    access
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
export const HaveAccessDocument = gql`
    query HaveAccess($userId: ID!) {
  haveAccess(userId: $userId)
}
    `;

/**
 * __useHaveAccessQuery__
 *
 * To run a query within a React component, call `useHaveAccessQuery` and pass it any options that fit your needs.
 * When your component renders, `useHaveAccessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHaveAccessQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useHaveAccessQuery(baseOptions: Apollo.QueryHookOptions<HaveAccessQuery, HaveAccessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HaveAccessQuery, HaveAccessQueryVariables>(HaveAccessDocument, options);
      }
export function useHaveAccessLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HaveAccessQuery, HaveAccessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HaveAccessQuery, HaveAccessQueryVariables>(HaveAccessDocument, options);
        }
export type HaveAccessQueryHookResult = ReturnType<typeof useHaveAccessQuery>;
export type HaveAccessLazyQueryHookResult = ReturnType<typeof useHaveAccessLazyQuery>;
export type HaveAccessQueryResult = Apollo.QueryResult<HaveAccessQuery, HaveAccessQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
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
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    status
    message
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GiveUserAccessDocument = gql`
    mutation GiveUserAccess($userId: String!) {
  giveUserAccess(userId: $userId) {
    status
    message
  }
}
    `;
export type GiveUserAccessMutationFn = Apollo.MutationFunction<GiveUserAccessMutation, GiveUserAccessMutationVariables>;

/**
 * __useGiveUserAccessMutation__
 *
 * To run a mutation, you first call `useGiveUserAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGiveUserAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [giveUserAccessMutation, { data, loading, error }] = useGiveUserAccessMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGiveUserAccessMutation(baseOptions?: Apollo.MutationHookOptions<GiveUserAccessMutation, GiveUserAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GiveUserAccessMutation, GiveUserAccessMutationVariables>(GiveUserAccessDocument, options);
      }
export type GiveUserAccessMutationHookResult = ReturnType<typeof useGiveUserAccessMutation>;
export type GiveUserAccessMutationResult = Apollo.MutationResult<GiveUserAccessMutation>;
export type GiveUserAccessMutationOptions = Apollo.BaseMutationOptions<GiveUserAccessMutation, GiveUserAccessMutationVariables>;
export const RemoveUserAccessDocument = gql`
    mutation RemoveUserAccess($userId: String!) {
  removeUserAccess(userId: $userId) {
    status
    message
  }
}
    `;
export type RemoveUserAccessMutationFn = Apollo.MutationFunction<RemoveUserAccessMutation, RemoveUserAccessMutationVariables>;

/**
 * __useRemoveUserAccessMutation__
 *
 * To run a mutation, you first call `useRemoveUserAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserAccessMutation, { data, loading, error }] = useRemoveUserAccessMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useRemoveUserAccessMutation(baseOptions?: Apollo.MutationHookOptions<RemoveUserAccessMutation, RemoveUserAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveUserAccessMutation, RemoveUserAccessMutationVariables>(RemoveUserAccessDocument, options);
      }
export type RemoveUserAccessMutationHookResult = ReturnType<typeof useRemoveUserAccessMutation>;
export type RemoveUserAccessMutationResult = Apollo.MutationResult<RemoveUserAccessMutation>;
export type RemoveUserAccessMutationOptions = Apollo.BaseMutationOptions<RemoveUserAccessMutation, RemoveUserAccessMutationVariables>;