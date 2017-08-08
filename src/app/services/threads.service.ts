import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllUserData } from '../../../shared/to/all-user-data';
import { Http } from '@angular/http';
import { SendNewMessageAction } from 'app/store/actions';
import { commonHttpHeaders } from 'app/shared/commonHttpHeaders';

@Injectable()
export class ThreadsService {

  constructor(private http: Http) { }

  loadUserThreads(userId: number): Observable<AllUserData> {
    return this.http.get('/api/threads', commonHttpHeaders(userId))
      .map(res => res.json());
  }

  saveNewMessage(action: SendNewMessageAction): Observable<any> {
    return this.http.post(`/api/threads/${action.payload.threadId}`, JSON.stringify({
      text: action.payload.text
    }), commonHttpHeaders(action.payload.userId));
  }

}
