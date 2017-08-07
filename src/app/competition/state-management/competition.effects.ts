import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload} from "@ngrx/effects";
import { Injectable} from "@angular/core";
import { Observable} from "rxjs";

import { CompetitionService } from '../../shared/competition.service';
import { GET_COMP, SUCCESS, PAGE_COUNT_SUCCESS, PAGE_COUNT } from './competition.actions';

@Injectable()
export class CompetitionEffects {
  
  constructor(private action$: Actions, private service$ :CompetitionService ) { }

  @Effect() load$:Observable<Action> = this.action$
      // Listen for the 'LOGIN' action
      .ofType(GET_COMP)
      .switchMap(action => this.service$.getCompetitions()
        // If successful, dispatch success action with result
        .map(res => ({ type: SUCCESS, payload: res})) 
        // If request fails, dispatch failed action
        .catch((err) => Observable.of({ type: 'FAILED' ,payload :err}))  
      );

  @Effect() pageCount$:Observable<Action> = this.action$
      // Listen for the 'LOGIN' action
      .ofType(PAGE_COUNT)
      .switchMap(() => Observable.fromPromise(this.service$.incrementPageCount())
      .map(res => ({type : PAGE_COUNT_SUCCESS, payload :res}))
      .catch((err) => Observable.of({ type: 'FAIL' ,payload :err}))
      );

}