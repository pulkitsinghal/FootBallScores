import { CompetitionService } from './../shared/competition.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";

import { GET_COMP, MATCH_DAY } from './state-management/competition.actions';
import * as fromRoot from './state-management/competition.reducer';


@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

constructor(private competitionService:CompetitionService,private router:Router,
     private store: Store<fromRoot.AppState>){
    }

    competitions:any[];
    pageCount:number;
    subscription:Subscription;

    ngOnInit(){
        this.store.dispatch({ type: GET_COMP });
        this.store.select('comp').subscribe(competition => {
            let value = competition;
            this.competitions = value.map(element => {
            if((element.caption) === "Primeira Liga 2017/18"){
                element.caption = "Portuguese Liga 2017-18";
                return element;     
            } else if((element.caption) === "Eredivisie 2017/18"){
                element.caption = "Dutch League 2017-18";
                return element;     
            } else if((element.caption) === "Ligue 1 2017/18"){
                element.caption = "France Ligue 1 2017/18";
                return element;     
            } else if((element.caption) === "Primera Division 2017"){
                element.caption = "Spanish La Liga 2017/18";
                return element;     
            } else{
                return element;
            }
        });
        });

        this.store.select('pageCount').subscribe(item => this.pageCount = item);
        //this.subscription = this.competitionService.count$.subscribe(item => this.pageCount = item);
    }

    onSubmit(competition:any){
        this.store.dispatch({ type: MATCH_DAY , payload : competition.currentMatchday});
        this.router.navigate(['table', {id: competition.id}]);
    }



}
