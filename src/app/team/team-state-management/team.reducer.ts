import { SUCCESS_FIXTURES } from './team.action';
import { ActionReducerMap } from '@ngrx/store';

import {TeamActions} from '../team-state-management/team.action';

export interface State{
    fixtures:any
}


export function FixtureReducer(state = [],action: TeamActions):any[] {
  switch (action.type) {
    case SUCCESS_FIXTURES:
      return action.payload;
    default:
      return state;
  }
}

export const team_reducers: ActionReducerMap<State> = {
     fixtures: FixtureReducer
};
