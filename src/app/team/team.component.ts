import { matchDay } from './../competition/state-management/competition.actions';
import { GET_FIXTURES } from './team-state-management/team.action';
import { Store } from '@ngrx/store';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';

import {CompetitionService} from "../shared/competition.service";
import * as fromRoot from '../table/table-state-management/table.reducer';
import * as myRoot from './team-state-management/team.reducer';

@Component({
  selector:'team',
  styleUrls:['./team.component.css'],
  templateUrl:'./team.component.html' //or use absoulte path with templateUrl:'app/competition/competition.component.html' require('./team.component.html')
})

export class TeamComponent implements OnInit{

  teamId:string;
  players:any[];
  schedule:any[];
  previous:any[];
  prevFix:boolean = true;
  isFixtureActive:boolean=true;
  isPlayerActive:boolean=false;
  fixture:boolean = false;
  player:boolean = true;
  teamCrest:string;
  nodata:boolean = false;
  currentMatchDay:number;
  totalMatchDay:number;

  text: any = { "Weeks": "Weeks", "Days": "Days", "Hours": "Hours", Minutes: "Minutes", "Seconds": "Seconds", "MilliSeconds":"MilliSeconds" };


  constructor(private competitionService:CompetitionService,private route:ActivatedRoute,
              private store : Store<fromRoot.AppState>, private myStore : Store<myRoot.State>){}


  ngOnInit(){
    this.teamId = this.route.snapshot.params['id'];
    //this.teamCrest = this.competitionService.teamCrest;
    this.store.select(state => state).subscribe(data => {      
      if(data.table){
        localStorage.setItem('state',JSON.stringify(data));  
      }
      this.teamCrest = JSON.parse(localStorage.getItem('state')).table.teamCrest;
    });
    this.myStore.dispatch({ type: GET_FIXTURES ,payload : this.teamId});
    this.players = this.route.snapshot.data['team'];

  }

  getClosestFixtures(){
    this.store.select(state => state['matchDay']).subscribe(data => {
                if(data){
                  localStorage.setItem('CMD',data);
                }
    this.currentMatchDay = +localStorage.getItem('CMD');
      });
    this.myStore.select(state => state['team'].fixtures.fixtures).subscribe((data) => {
        let value = data;
        this.schedule = value.filter((data) => data.matchday >= this.currentMatchDay);
        this.previous = value.filter((data) => data.matchday < this.currentMatchDay);
    }); 
  }

  fixtureActive(){
    this.getClosestFixtures();
    this.isFixtureActive = false;
    this.isPlayerActive = true;
    this.fixture = true;
    this.player = false;  
    this.prevFix = true;
  }

  playerActive(){
    this.isPlayerActive = false;
    this.isFixtureActive = true;
    this.fixture = false;
    this.player = true;
    this.prevFix = true;
  }

  previousFixture(){
    this.getClosestFixtures();
    this.prevFix = false;
    this.isPlayerActive = true;
    this.fixture = true;
    this.player = false;    
  }



}
