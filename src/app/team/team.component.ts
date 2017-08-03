import { Component,OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import {CompetitionService} from "../shared/competition.service";


@Component({
  selector:'team',
  styleUrls:['team.component.css'],
  templateUrl:'team.component.html' //or use absoulte path with templateUrl:'app/competition/competition.component.html' require('./team.component.html')
})

export class TeamComponent implements OnInit{

  teamId:string;
  players:any[];
  schedule:any[];
  isFixtureActive:boolean=true;
  isPlayerActive:boolean=false;
  fixture:boolean = false;
  player:boolean = true;
  teamCrest:string;
  nodata:boolean = false;
  currentMatchDay:number;
  totalMatchDay:number;

  text: any = { "Weeks": "Weeks", "Days": "Days", "Hours": "Hours", Minutes: "Minutes", "Seconds": "Seconds", "MilliSeconds":"MilliSeconds" };


  constructor(private competitionService:CompetitionService,private route:ActivatedRoute){}


  ngOnInit(){
    this.teamId = this.route.snapshot.params['id'];
    this.teamCrest = this.competitionService.teamCrest;
    this.players = this.route.snapshot.data['team'];
    //this.getPlayers();
  }

  getPlayers(){
    this.competitionService.getPlayers(this.teamId).subscribe(player => this.players = player.players);
  }

  getClosestFixtures(){
    this.totalMatchDay = +this.competitionService.totalMatchDay;
    this.currentMatchDay = +this.competitionService.currentMatchDay;

    console.log("Team ID"+this.teamId);
    this.competitionService.getFixtures(this.teamId).subscribe(matches => this.schedule = matches.fixtures);
  }

  fixtureActive(){
    this.isFixtureActive = false;
    this.isPlayerActive = true;
    this.fixture = true;
    this.player = false;
    this.getClosestFixtures();
  }

  playerActive(){
    this.isPlayerActive = false;
    this.isFixtureActive = true;
    this.fixture = false;
    this.player = true;

  }


}
