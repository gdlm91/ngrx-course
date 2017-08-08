import { ApplicationState } from 'app/store/application-state';

export function usernameSelector(state: ApplicationState): string {
  const userId = state.uiState.userId,
    currentParticipant = state.storeData.participants[userId];

  if (!currentParticipant) {
    return '';
  }

  return currentParticipant.name;
}
