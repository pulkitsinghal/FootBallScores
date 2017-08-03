import { RouterModule } from '@angular/router';
import { CompetitionService } from './shared/competition.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { Routing } from './app.routing';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { TableComponent } from './table/table.component';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import { firebaseConfig, firebaseConfigDev } from './shared/firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    Routing,
    AngularFireModule.initializeApp(firebaseConfigDev),
    AngularFireDatabaseModule
  ],
  providers: [CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
