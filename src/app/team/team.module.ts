import { TeamFilterPipe } from './team-filter.pipe';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CountDown} from "../../../node_modules/angular2-simple-countdown/countdown";
import {TeamComponent} from "./team.component";
import {TeamResolve} from "./team.resolve";
import {teamRouting} from "./team.routing";

@NgModule({
  declarations: [
    TeamComponent,CountDown,TeamFilterPipe
  ],
  imports:[CommonModule,teamRouting],
  providers:[TeamResolve]
})

export class TeamModule{

}
