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
        this.competitionService.getCompetitions().subscribe(competition => {
            let value = competition;
            this.competitions = value.map(element => {
                console.log(element.caption);
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
