import { SUCCESS_TABLE, STORE_TEAMCREST, SUCCESS_MATCHDAY } from './table.action';
import { ActionReducerMap } from '@ngrx/store';

import {TableActions} from '../table-state-management/table.action';
import { FixtureReducer } from './../../team/team-state-management/team.reducer';

export interface AppState{
    table:any;
    teamCrest:string;
    matchDayArray:any;
}


export function TableReducer(state = [],action: TableActions):any[] {
  switch (action.type) {
    case SUCCESS_TABLE:
      return action.payload;
    default:
      return state;
  }
}

export function teamCrestReducer(state = "",action: TableActions):string {
  switch (action.type) {
    case STORE_TEAMCREST:
      return action.payload;
    default:
      return state;
  }
}

export function matchDayReducer(state = "",action: TableActions):string {
  switch (action.type) {
    case SUCCESS_MATCHDAY:
      return action.payload;
    default:
      return state;
  }
}


export const table_reducers: ActionReducerMap<AppState> = {
     table: TableReducer,
     teamCrest : teamCrestReducer,
     matchDayArray : matchDayReducer  
};
