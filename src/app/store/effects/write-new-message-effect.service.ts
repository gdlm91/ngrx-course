import { Injectable } from '@angular/core';
import { ThreadsService } from 'app/services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { SEND_NEW_MESSAGE_ACTION } from 'app/store/actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WriteNewMessageEffectService {

  @Effect({ dispatch: false })
  newMessages$: Observable<any> = this.actions$
    .ofType(SEND_NEW_MESSAGE_ACTION)
    .switchMap(action => this.threadsService.saveNewMessage(action.payload));

  constructor(
    private actions$: Actions,
    private threadsService: ThreadsService
  ) { }
}
