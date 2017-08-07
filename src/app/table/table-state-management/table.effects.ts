import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload} from "@ngrx/effects";
import { Injectable} from "@angular/core";
import { Observable} from "rxjs";

import { CompetitionService } from '../../shared/competition.service';
import { GET_TABLE, SUCCESS_TABLE } from './table.action';

@Injectable()
export class TableEffects {
  
  constructor(private action$: Actions, private service$ :CompetitionService ) { }

  @Effect() load$:Observable<Action> = this.action$
      // Listen for the 'LOGIN' action
      .ofType(GET_TABLE)
      .map(toPayload)
      .switchMap(payload => this.service$.getTeams(payload)
        // If successful, dispatch success action with result
        .map(res => ({ type: SUCCESS_TABLE, payload: res})) 
        // If request fails, dispatch failed action
        .catch((err) => Observable.of({ type: 'FAILED' ,payload :err}))  
      );

 
}