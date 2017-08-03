/**
 * Created by SINGH on 2/15/2017.
 */

/**
 * Created by SINGH on 2/15/2017.
 */

import { Routes,RouterModule } from '@angular/router';

import {TeamComponent} from "./team.component";
import {TeamResolve} from "./team.resolve";




const routes: Routes = [
  { path: '', component: TeamComponent,resolve: {team: TeamResolve }}
];

export const teamRouting = RouterModule.forChild(routes);
