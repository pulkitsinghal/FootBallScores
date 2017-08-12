import { SUCCESS } from './../../competition/state-management/competition.actions';
import { Action } from '@ngrx/store';

export const GET_TABLE = 'GET_TABLE';
export const SUCCESS_TABLE = 'SUCCESS_TABLE';
export const STORE_TEAMCREST = 'STORE_TEAMCREST';
export const GET_MATCHDAY = 'GET_MATCHDAY';
export const SUCCESS_MATCHDAY = 'SUCCESS_MATCHDAY';



export class GetTable implements Action {
  readonly type = GET_TABLE;

  constructor(public payload: any) {}
}

export class SuccessTable implements Action {
  readonly type = SUCCESS_TABLE;

  constructor(public payload: any) {}
}

export class storeCrest implements Action {
  readonly type = STORE_TEAMCREST;
  constructor(public payload: any) {}
}

export class getMatchDay implements Action {
  readonly type = GET_MATCHDAY;
  constructor(public payload: any) {}
}

export class successMatchDay implements Action {
  readonly type = SUCCESS_MATCHDAY;
  constructor(public payload: any) {}
}





export type TableActions =
  | GetTable
  | SuccessTable
  | storeCrest
  | getMatchDay
  | successMatchDay
;