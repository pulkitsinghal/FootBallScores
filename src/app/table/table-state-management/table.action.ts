import { Action } from '@ngrx/store';

export const GET_TABLE = 'GET_TABLE';
export const SUCCESS_TABLE = 'SUCCESS_TABLE';
export const STORE_TEAMCREST = 'STORE_TEAMCREST';


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





export type TableActions =
  | GetTable
  | SuccessTable
  | storeCrest
;