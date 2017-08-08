import { StoreData } from 'app/store/store-data';
import { UiState } from 'app/store/ui-state';
import { INITIAL_UI_STATE } from './ui-state';
import { INITIAL_STORE_DATA } from './store-data';

export interface ApplicationState {
  uiState: UiState;
  storeData: StoreData;
}

export const INITIAL_APPLICATION_STATE: ApplicationState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STORE_DATA
}
