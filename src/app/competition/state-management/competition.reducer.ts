import { ActionReducerMap } from '@ngrx/store';

import { Actions, SUCCESS, PAGE_COUNT, PAGE_COUNT_SUCCESS } from './competition.actions';


export interface AppState{
    comp:any;
    pageCount:number;
}


export function CompetitionReducer(state = [],action: Actions):any[] {
  switch (action.type) {
    case SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export function PageReducer(state = 0,action: Actions):number {
  switch (action.type) {
    case PAGE_COUNT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}



export const reducers: ActionReducerMap<AppState> = {
     comp: CompetitionReducer,
     pageCount:PageReducer
};
