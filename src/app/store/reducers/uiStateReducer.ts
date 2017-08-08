import { UiState, INITIAL_UI_STATE } from '../ui-state';
import { Action } from '@ngrx/store';
import { THREAD_SELECTED_ACTION, SELECT_USER_ACTION } from '../actions';


export function uiState(state: UiState = INITIAL_UI_STATE, action: Action): UiState {

  switch (action.type) {

    case THREAD_SELECTED_ACTION:
      return handleThreadSelectedAction(state, action);

    case SELECT_USER_ACTION:
      return handleSelectUserAction(state, action);

    default:
      return state;
  }

}

function handleThreadSelectedAction(state: UiState, action: Action): UiState {
  const newState = Object.assign({}, state);
  newState.currentThreadId = action.payload;
  return newState;
}

function handleSelectUserAction(state: UiState, action: Action): UiState {
  const newState = Object.assign({}, state);
  newState.userId = action.payload;
  newState.currentThreadId = undefined;
  return newState;
}
