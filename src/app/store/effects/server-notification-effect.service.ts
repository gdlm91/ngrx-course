import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { NewMessageReceivedAction } from 'app/store/actions';
import { ApplicationState } from 'app/store/application-state';
import { UiState } from 'app/store/ui-state';

@Injectable()
export class ServerNotificationEffectService {

  @Effect()
  newMessage$: Observable<Action> = Observable.interval(3000)
    .withLatestFrom(this.store.select('uiState'))
    .map(([any, uiState]) => uiState as UiState)
    .filter(uiState => uiState.userId !== undefined)
    .switchMap((uiState) =>
      this.threadsService.loadNewMessagesForUser((<UiState>uiState).userId))
    .map(messages => new NewMessageReceivedAction(messages));

  constructor(
    private threadsService: ThreadsService,
    private store: Store<ApplicationState>
  ) { }

}
