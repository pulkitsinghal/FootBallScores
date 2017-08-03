import { CompetitionService } from './../shared/competition.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

constructor(private competitionService:CompetitionService,private router:Router){}

    competitions:any[];
    pageCount:number;
    subscription:Subscription;

    ngOnInit(){
        this.competitionService.getCompetitions().subscribe(competition => (this.competitions = competition));
        this.subscription = this.competitionService.count$.subscribe(item => this.pageCount = item);
    }

    onSubmit(competition:any){
        this.competitionService.storeMatchDay(competition.currentMatchday,competition.numberOfMatchdays);
        this.router.navigate(['table', {id: competition.id}]);
    }

    ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }


}
