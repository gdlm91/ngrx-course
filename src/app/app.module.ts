import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule, Action, combineReducers } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './user-selection/user-selection.component';
import { ThreadSectionComponent } from './thread-section/thread-section.component';
import { MessageSectionComponent } from './message-section/message-section.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { ThreadsService } from './services/threads.service';
import { INITIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';
import { USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction } from './store/actions';
import { LoadThreadsEffectService } from './store/effects/load-threads-effect.service';
import { uiStateReducer } from './store/reducers/uiStateReducer';
import { storeDataReducer } from './store/reducers/storeDataReducer';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    ThreadSectionComponent,
    MessageSectionComponent,
    ThreadListComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(combineReducers({
      uiState: uiStateReducer,
      storeData: storeDataReducer
    }), INITIAL_APPLICATION_STATE),
    EffectsModule.run(LoadThreadsEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
