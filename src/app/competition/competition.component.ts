import { CompetitionService } from './../shared/competition.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

constructor(private competitionService:CompetitionService,private router:Router){}

    competitions:any[];

    ngOnInit(){
        this.competitionService.getCompetitions().subscribe(competition => (this.competitions = competition));
    }

    onSubmit(competition:any){
        this.competitionService.storeMatchDay(competition.currentMatchday,competition.numberOfMatchdays);
        this.router.navigate(['table', {id: competition.id}]);
    }
}
