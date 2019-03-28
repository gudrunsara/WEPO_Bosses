
import { GETBOSSES } from '../constants/Constants';

function getAllBossesServer(dispatch) {
  let url = 'http://localhost:4500/api/bosses';
  return fetch(url, { method: 'GET' })
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      else {
        dispatch(getAllBossesFailed(response.status));
      }
    }).then(bosses => {
      dispatch(getAllBossesSuccess(bosses));
    });
}

function getAllBossesSuccess(bosses) {
  return {
    type: GETBOSSES,
    payload: bosses
  }
}

function getAllBossesFailed(status) {
  return {
    //TODO: CHAGNE GETBOSSES TO ERROR
    type: GETBOSSES,
    payload: status
  }
}

export const getAllBosses = () => {
  return getAllBossesServer;
};