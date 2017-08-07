import { TableEffects } from './table-state-management/table.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";


import { TableComponent } from './table.component';
import { KeysPipe } from "../shared/KeysPipe";
import { TableResolve } from "./table.resolve";
import { tableRouting } from "./table.routing";
import { FilterTablePipe } from './filter-table.pipe';
import * as fromRoot from './table-state-management/table.reducer';

@NgModule({
  declarations: [
    TableComponent,KeysPipe, FilterTablePipe
  ],
  imports:[CommonModule,
          tableRouting,
           StoreModule.forFeature('table',fromRoot.table_reducers ),
          EffectsModule.forFeature([TableEffects])
        ],
  providers:[TableResolve]
})

export class TableModule{

}