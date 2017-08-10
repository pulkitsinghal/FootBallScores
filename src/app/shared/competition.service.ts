import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs";

import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()

export class CompetitionService{

  currentMatchDay:string;
  totalMatchDay:string;

  constructor(private http:Http, private af: AngularFireDatabase){

  }

  getCompetitions(){
    let headers = new Headers();
    headers.append('X-Auth-Token', '7c94f28bddf34648bd9a6f5c2e2da0f0');
    return this.http.get('https://api.football-data.org/v1/competitions',{headers:headers}).map(response => response.json())
  }

  getTeams(id:string){
    let headers = new Headers();
    headers.append('X-Auth-Token', '7c94f28bddf34648bd9a6f5c2e2da0f0');
    return this.http.get('https://api.football-data.org/v1/competitions/'+id+'/leagueTable',{headers:headers}).map(response => response.json())
  }

  getPlayers(id:string){
    let headers = new Headers();
    headers.append('X-Auth-Token', '7c94f28bddf34648bd9a6f5c2e2da0f0');
    return this.http.get('https://api.football-data.org/v1/teams/'+id+'/players',{headers:headers}).map(response => response.json())
  }

  getFixtures(id:string){
    let headers = new Headers();
    headers.append('X-Auth-Token', '7c94f28bddf34648bd9a6f5c2e2da0f0');
    return this.http.get('https://api.football-data.org/v1/teams/'+id+'/fixtures',{headers:headers}).map(response => response.json())
  }


  incrementPageCount(){
    const pageCount = this.af.object('/pageCountFA/').$ref
      .ref.transaction(count => {
        return count + 1;
      }).then((data) => {return data.snapshot.node_.value_;});

    return pageCount;
  }

}