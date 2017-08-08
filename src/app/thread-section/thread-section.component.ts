import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ThreadsService } from '../services/threads.service';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';
import { LoadUserThreadsAction, ThreadSelectedAtion } from '../store/actions';
import { Thread } from '../../../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import { usernameSelector } from './usernameSelector';
import { stateToUnreadMessagesCount } from './stateToUnreadMessagesCount';
import { stateToThreadSummary } from './stateToThreadSummary';


@Component({
  selector: 'thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  username$: Observable<string>;
  unreadMessages$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>;

  constructor(
    private store: Store<ApplicationState>
  ) {
    this.username$ = this.store.select(usernameSelector);

    this.unreadMessages$ = this.store.map(stateToUnreadMessagesCount);

    this.threadSummaries$ = this.store.map(stateToThreadSummary);
  }

  ngOnInit() {
    this.store.dispatch(new LoadUserThreadsAction());
  }

  onThreadSelected(selectedThreadId) {
    this.store.dispatch(new ThreadSelectedAtion(selectedThreadId));
    console.log(selectedThreadId);
  }

}
