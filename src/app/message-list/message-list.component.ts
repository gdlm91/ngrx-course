import {
  Component,
  OnChanges,
  Input,
  ElementRef,
  ViewChild,
  SimpleChanges
} from '@angular/core';
import * as _ from 'lodash';
import { MessageVM } from '../message-section/message.vm';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnChanges {

  @Input()
  messages: MessageVM[];

  @ViewChild('list')
  list: ElementRef;


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const messagesChange = changes['messages'];
    if (messagesChange) {
      const previousMessages = messagesChange.previousValue;
      const newMessages = messagesChange.currentValue;

      if (newMessages.length > previousMessages.length) {
        setTimeout(() => {
          this.scrollToLastMessage();
        })
      }
    }
  }

  scrollToLastMessage() {
    const items = this.list.nativeElement.querySelectorAll('li');
    const lastItem = _.last(items) as any;
    if (lastItem) {
      lastItem.scrollIntoView();
    }
  }

}
