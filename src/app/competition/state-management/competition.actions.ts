import { Action } from '@ngrx/store';

export const GET_COMP = 'GET_COMP';
export const SUCCESS = 'SUCCESS';
export const PAGE_COUNT = 'PAGE_COUNT';
export const PAGE_COUNT_SUCCESS = 'PAGE_COUNT_SUCCESS';


export class GetAction implements Action {
  readonly type = GET_COMP;

  constructor(public payload: any) {}
}

export class SuccessAction implements Action {
  readonly type = SUCCESS;

  constructor(public payload: any) {}
}

export class GetPageCount implements Action {
  readonly type = PAGE_COUNT;

  constructor(public payload: any) {}
}

export class PageCountSuccess implements Action {
  readonly type = PAGE_COUNT_SUCCESS;

  constructor(public payload: any) {}
}




export type Actions =
  | GetAction
  | SuccessAction
  | GetPageCount
  | PageCountSuccess
;