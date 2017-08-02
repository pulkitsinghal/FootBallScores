import { Routes,RouterModule } from '@angular/router';

import { TableComponent } from './table.component';
import { TableResolve } from "./table.resolve";


const routes: Routes = [
  { path: '', component: TableComponent,resolve: {table: TableResolve} }
];

export const tableRouting = RouterModule.forChild(routes);