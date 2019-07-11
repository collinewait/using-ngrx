import { IUser } from '../app.model';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export class LoadUsersAction {
  readonly type = LOAD_USERS;
  constructor() {}
}

export class LoadUsersSuccessAction {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: IUser[]) {}
}

export type Action
  = LoadUsersAction
  | LoadUsersSuccessAction;
