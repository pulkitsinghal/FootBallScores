import { Routes,RouterModule } from '@angular/router';

import { CompetitionComponent } from './competition/competition.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  CompetitionComponent}
];

export const Routing = RouterModule.forRoot(routes);