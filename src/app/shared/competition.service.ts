import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()

export class CompetitionService{

  constructor(private http:HttpClient, private af: AngularFireDatabase){

  }

  getCompetitions(){
    // let headers = new Headers();
    // headers.append('X-Auth-Token', '7c94f28bddf34648bd9a6f5c2e2da0f0');
    return this.http.get('https://api.football-data.org/v1/competitions');
  }

  getTeams(id:string){
    return this.http.get('https://api.football-data.org/v1/competitions/'+id+'/leagueTable');
  }

  getPlayers(id:string){
    return this.http.get('https://api.football-data.org/v1/teams/'+id+'/players');
  }

  getFixtures(id:string){
    return this.http.get('https://api.football-data.org/v1/teams/'+id+'/fixtures?timeFrameStart=2017-08-01&timeFrameEnd=2018-08-01');
  }

  allFixturesOnMatchDay(currentMatchDay: number,cId: string){
    return this.http.get('https://api.football-data.org/v1/competitions/'+cId+'/fixtures?matchday='+currentMatchDay);
  }

  incrementPageCount(){
    const pageCount = this.af.object('/pageCountFA/').$ref
      .ref.transaction(count => {
        return count + 1;
      }).then((data) => {return data.snapshot.node_.value_;});

    return pageCount;
  }

}