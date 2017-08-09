import { Action } from '@ngrx/store';

export const GET_FIXTURES = 'GET_FIXTURES';
export const SUCCESS_FIXTURES = 'SUCCESS_FIXTURES';



export class GetFixtures implements Action {
  readonly type = GET_FIXTURES;

  constructor(public payload: any) {}
}

export class SuccessFixtures implements Action {
  readonly type = SUCCESS_FIXTURES;

  constructor(public payload: any) {}
}





export type TeamActions =
  | GetFixtures
  | SuccessFixtures
;