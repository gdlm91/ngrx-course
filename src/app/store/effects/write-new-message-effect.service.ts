import { Injectable } from '@angular/core';
import { ThreadsService } from '../../services/threads.service';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { SEND_NEW_MESSAGE_ACTION } from '../actions';


@Injectable()
export class WriteNewMessageEffectService {

  @Effect({ dispatch: false }) newMessages$: Observable<any> = this.actions$
    .ofType(SEND_NEW_MESSAGE_ACTION)
    .debug('sending new message to the server')
    .switchMap(action => this.threadsService.saveNewMessage(action.payload));

  constructor(private actions$: Actions, private threadsService: ThreadsService) {

  }

}



