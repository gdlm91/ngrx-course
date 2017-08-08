import { StoreData } from 'app/store/store-data';
import { Action } from '@ngrx/store';
import { USER_THREADS_LOADED_ACTION, UserThreadsLoadedAction } from 'app/store/actions';
import * as _ from 'lodash';

export function storeDataReducer(state: StoreData, action: Action): StoreData {
  switch (action.type) {
    case USER_THREADS_LOADED_ACTION:
      return handleLoadUserThreadsAction(state, action);

    default:
      return state;
  }
}

function handleLoadUserThreadsAction(state: StoreData,
  action: UserThreadsLoadedAction): StoreData {

  return {
    participants: _.keyBy(action.payload.participants, 'id'),
    threads: _.keyBy(action.payload.threads, 'id'),
    messages: _.keyBy(action.payload.messages, 'id')
  };
}
