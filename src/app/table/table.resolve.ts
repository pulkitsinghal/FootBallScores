import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import {CompetitionService} from "../shared/competition.service";
import {Observable} from "rxjs";


@Injectable()
export class TableResolve implements Resolve<any> {

  constructor(private competitionService:CompetitionService) {}

  resolve(route: ActivatedRouteSnapshot):Observable<any> {
    return this.competitionService.getTeams(route.params['id']);
  }
}