import { RouterModule } from '@angular/router';
import { CompetitionService } from './shared/competition.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    Routing
  ],
  providers: [CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
