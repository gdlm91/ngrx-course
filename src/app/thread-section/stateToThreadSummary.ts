import { ApplicationState } from 'app/store/application-state';
import * as _ from 'lodash';
import { ThreadSummaryVM } from 'app/thread-section/thread-summary.vm';
import { Thread } from '../../../shared/model/thread';

export function stateToThreadSummary(state: ApplicationState) {
  return _.values(state.storeData.threads).map(_.partial(mapThreadToThreadSummary, state));
}

function mapThreadToThreadSummary(state: ApplicationState,
  thread: Thread): ThreadSummaryVM {

  const participantNames = _.keys(thread.participants)
    .map(participantId => state.storeData.participants[participantId].name);

  const lastMessageId = _.last(thread.messageIds);
  const lastMessage = state.storeData.messages[lastMessageId];

  return {
    id: thread.id,
    participants: participantNames.join(','),
    lastMessage: lastMessage.text,
    timestamp: lastMessage.timestamp
  } as ThreadSummaryVM;
}
