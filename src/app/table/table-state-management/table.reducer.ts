import { SUCCESS_TABLE } from './table.action';
import { ActionReducerMap } from '@ngrx/store';

import {TableActions} from '../table-state-management/table.action';

export interface AppState{
    table:any;
}


export function TableReducer(state = [],action: TableActions):any[] {
  switch (action.type) {
    case SUCCESS_TABLE:
      return action.payload;
    default:
      return state;
  }
}




export const table_reducers: ActionReducerMap<AppState> = {
     table: TableReducer,
     
};
