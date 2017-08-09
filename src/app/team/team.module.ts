import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';


import { TeamEffects } from './team-state-management/team.effects';
import { TeamFilterPipe } from './team-filter.pipe';
import {CountDown} from "../../../node_modules/angular2-simple-countdown/countdown";
import {TeamComponent} from "./team.component";
import {TeamResolve} from "./team.resolve";
import {teamRouting} from "./team.routing";
import * as fromRoot from './team-state-management/team.reducer';

@NgModule({
  declarations: [
    TeamComponent,CountDown,TeamFilterPipe
  ],
  imports:[CommonModule,
            teamRouting,
            StoreModule.forFeature('team',fromRoot.team_reducers),
            EffectsModule.forFeature([TeamEffects])],
  providers:[TeamResolve]
})

export class TeamModule{

}
