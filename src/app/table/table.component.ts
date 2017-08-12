import { matchDay } from './../competition/state-management/competition.actions';
import { GET_TABLE, STORE_TEAMCREST, GET_MATCHDAY } from './table-state-management/table.action';
import { Store } from '@ngrx/store';
import { AppState } from './../competition/state-management/competition.reducer';
import { Router, ActivatedRoute } from '@angular/router';
import { CompetitionService } from './../shared/competition.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

import * as fromRoot from './table-state-management/table.reducer';

declare var $ : any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute, 
              private router: Router,private store : Store<fromRoot.AppState>) {

  }
  competitionId: string;
  competitionTeams: any;
  teamId: string;
  //groupComptetitionTeams:any;
  visibleLeague: boolean;
  visibleTournament: boolean;
  allFixturesArray:any[];
  @ViewChild('modal') modal:ElementRef;
   currentMatchDay:number;

  ngOnInit() {
    this.competitionId = this.route.snapshot.params['id'];
    this.getTeams();
    this.store.select(state => state['matchDay']).subscribe(data => {
                if(data){
                  localStorage.setItem('CMD',data);
                }
    this.currentMatchDay = +localStorage.getItem('CMD');
    });
  }

  getTeams() {
       this.store.dispatch({ type: GET_TABLE ,payload : this.competitionId});
       this.store.select(state => state.table.table).subscribe(teams => {
        if (teams.standing) {
          this.visibleLeague = true;
          this.visibleTournament = false;
          return this.competitionTeams = teams.standing;
        } else {
          this.visibleLeague = false;
          this.visibleTournament = true;
          return this.competitionTeams = teams.standings;
        }
      });
      //this.store.subscribe((state) => { console.log("called");localStorage.setItem('state',JSON.stringify(state))});  set localstorage
  }

  onSubmit(team: any) {
    this.teamId = team._links.team.href.split('/').pop(-1);
    this.store.dispatch({type : STORE_TEAMCREST , payload : team.crestURI});
    this.router.navigate(['team', { id: this.teamId }]);
  }

  allFixtures(){
    this.store.dispatch({ type: GET_MATCHDAY ,payload : [this.currentMatchDay,this.competitionId]});
    this.store.select(state => state.table.matchDayArray).subscribe(data => this.allFixturesArray = data.fixtures);
  }

  submit(text:string){
    this.competitionTeams = this.competitionTeams.filter(value => value.teamName.toLowerCase().includes(text.toLowerCase()));
  }

  ngAfterViewInit() {
      $(this.modal.nativeElement).modal();    
  }

}
