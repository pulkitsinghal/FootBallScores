import { ActionReducerMap } from '@ngrx/store';

import { Actions, SUCCESS } from './competition.actions';


export interface AppState{
    comp:any;
}

export function CompetitionReducer(state = [],action: Actions):any[] {
  switch (action.type) {
    case SUCCESS:
      return action.payload;
        default:
      return state;
  }
}

export const reducers: ActionReducerMap<AppState> = {
     comp: CompetitionReducer
};
