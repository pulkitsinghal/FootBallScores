import { Router, ActivatedRoute } from '@angular/router';
import { CompetitionService } from './../shared/competition.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private competitionService: CompetitionService, private route: ActivatedRoute, private router: Router) {

  }
  competitionId: string;
  competitionTeams: any;
  teamId: string;
  //groupComptetitionTeams:any;
  visibleLeague: boolean;
  visibleTournament: boolean;

  ngOnInit() {
    this.competitionId = this.route.snapshot.params['id'];
    this.getTeams();
  }

  getTeams() {
    this.competitionService.getTeams(this.competitionId).subscribe(teams => {
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

  }

  onSubmit(team: any) {
    this.teamId = team._links.team.href.split('/').pop(-1);
    this.competitionService.storeTeamCrest(team.crestURI);
    this.router.navigate(['team', { id: this.teamId }]);
  }

  submit(text:string){
    this.competitionTeams = this.competitionTeams.filter(value => value.teamName.toLowerCase().includes(text.toLowerCase()));
  }


}
