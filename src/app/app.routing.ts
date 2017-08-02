import { Routes,RouterModule } from '@angular/router';

import { CompetitionComponent } from './competition/competition.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  CompetitionComponent},
    { path: 'table', loadChildren:'app/table/table.module#TableModule'}
];

export const Routing = RouterModule.forRoot(routes);