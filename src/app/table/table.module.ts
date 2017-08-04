import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";


import { TableComponent } from './table.component';
import { KeysPipe } from "../shared/KeysPipe";
import { TableResolve } from "./table.resolve";
import { tableRouting } from "./table.routing";
import { FilterTablePipe } from './filter-table.pipe';

@NgModule({
  declarations: [
    TableComponent,KeysPipe, FilterTablePipe
  ],
  imports:[CommonModule,tableRouting],
  providers:[TableResolve]
})

export class TableModule{

}