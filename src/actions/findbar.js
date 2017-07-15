import history from '../routing/history';
import { SEARCH } from '../components/FindBar/FindBar';
import { getCollectionUrl, getNewEntryUrl } from '../lib/urlHelper';

export const RUN_COMMAND = 'RUN_COMMAND';
export const SHOW_COLLECTION = 'SHOW_COLLECTION';
export const CREATE_COLLECTION = 'CREATE_COLLECTION';
export const HELP = 'HELP';

export function runCommand(command, payload) {
  return (dispatch) => {
    switch (command) {
      case SHOW_COLLECTION:
        history.push(getCollectionUrl(payload.collectionName));
        break;
      case CREATE_COLLECTION:
        history.push(getNewEntryUrl(payload.collectionName));
        break;
      case HELP:
        window.alert('Find Bar Help (PLACEHOLDER)\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.');
        break;
      case SEARCH:
        history.push(`/search/${ payload.searchTerm }`);
        break;
      default:
        break;
    }
    dispatch({ type: RUN_COMMAND, command, payload });
  };
}

export function navigateToCollection(collectionName) {
  return runCommand(SHOW_COLLECTION, { collectionName });
}

export function createNewEntryInCollection(collectionName) {
  return runCommand(CREATE_COLLECTION, { collectionName });
}
