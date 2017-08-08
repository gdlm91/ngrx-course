import { StoreData } from '../store-data';
import { Action } from '@ngrx/store';
import * as _ from 'lodash';
import {
  USER_THREADS_LOADED_ACTION,
  SEND_NEW_MESSAGE_ACTION,
  UserThreadsLoadedAction,
  SendNewMessageAction
} from '../actions';
import { Message } from '../../../../shared/model/message';

const uuid = require('uuid/v4');

export function storeData(state: StoreData, action: Action): StoreData {
  switch (action.type) {

    case USER_THREADS_LOADED_ACTION:
      return handleLoadUserThreadsAction(state, <any>action);

    case SEND_NEW_MESSAGE_ACTION:
      return handleSendNewMessageAction(state, <any>action);


    default:
      return state;
  }
}


function handleLoadUserThreadsAction(state: StoreData, action: UserThreadsLoadedAction): StoreData {
  return {
    participants: _.keyBy(action.payload.participants, 'id'),
    messages: _.keyBy(action.payload.messages, 'id'),
    threads: _.keyBy(action.payload.threads, 'id')
  };
}

function handleSendNewMessageAction(state: StoreData, action: SendNewMessageAction): StoreData {
  const newState = _.cloneDeep(state);

  const currentThread = newState.threads[action.payload.threadId];

  const newMessage: Message = {
    text: action.payload.text,
    threadId: action.payload.threadId,
    participantId: action.payload.userId,
    timestamp: (new Date()).getDate(),
    id: uuid()
  };

  currentThread.messageIds.push(newMessage.id);

  newState.messages[newMessage.id] = newMessage;

  return newState;
}
