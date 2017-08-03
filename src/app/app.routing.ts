import { Routes,RouterModule } from '@angular/router';

import { CompetitionComponent } from './competition/competition.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  CompetitionComponent},
  { path: 'table', loadChildren:'app/table/table.module#TableModule'},
  { path: 'team', loadChildren:'app/team/team.module#TeamModule'}
];

export const Routing = RouterModule.forRoot(routes);