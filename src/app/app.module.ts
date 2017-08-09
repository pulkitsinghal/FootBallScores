import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { Routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from "angularfire2/database/database.module";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LocalStorageModule } from 'angular-2-local-storage';

import { CompetitionFilterPipe } from './competition/competition-filter.pipe';
import { CompetitionService } from './shared/competition.service';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { TableComponent } from './table/table.component';
import { firebaseConfig, firebaseConfigDev } from './shared/firebase.config';
import * as fromRoot from "./competition/state-management/competition.reducer";
import { CompetitionEffects } from './competition/state-management/competition.effects';



@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    CompetitionFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    Routing,
    AngularFireModule.initializeApp(firebaseConfigDev),
    AngularFireDatabaseModule,
    StoreModule.forRoot(fromRoot.reducers),
    EffectsModule.forRoot([CompetitionEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    LocalStorageModule.withConfig({
            prefix: 'footballStorage',
            storageType: 'localStorage'
    })
  ],
  providers: [CompetitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
