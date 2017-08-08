import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from 'app/store/application-state';

@Component({
  selector: 'message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  constructor(
    private store: Store<ApplicationState>
  ) {
    this.store.subscribe(applicationState => console.log('Messages Section: ', applicationState));
  }

  ngOnInit() {
  }

}
