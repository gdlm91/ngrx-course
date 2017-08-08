import { UiState } from 'app/store/ui-state';
import { Action } from '@ngrx/store';
import { THREAD_SELECTED_ACTION } from 'app/store/actions';

export function uiStateReducer(state: UiState, action: Action): UiState {
  switch (action.type) {

    case THREAD_SELECTED_ACTION:
      return handleSelectThreadAction(state, action);

    default:
      return state;
  }
}

function handleSelectThreadAction(state: UiState, action: Action): UiState {
  const newState = { ...state };

  newState.currentThreadId = action.payload || newState.currentThreadId;

  return newState;
}
