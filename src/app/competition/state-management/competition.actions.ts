import { Action } from '@ngrx/store';

export const GET_COMP = 'GET_COMP';
export const SUCCESS = 'SUCCESS';

export class GetAction implements Action {
  readonly type = GET_COMP;

  constructor(public payload: any) {}
}

export class SuccessAction implements Action {
  readonly type = SUCCESS;

  constructor(public payload: any) {}
}

export type Actions =
  | GetAction
  | SuccessAction
;