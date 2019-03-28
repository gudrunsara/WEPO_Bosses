
import { GETBOSSES } from '../constants/Constants';
import { ADDBOSS } from '../constants/Constants'
import { GETBOSS } from '../constants/Constants'


//-------------------- GET BOSSES FROM SERVER: ------------------

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
  console.log("This is bosses: " + bosses);
  return {
    type: GETBOSSES,
    payload: bosses
  }
}

function getAllBossesFailed(status) {
  return {
    //TODO: CHANGE GETBOSSES TO ERROR
    type: GETBOSSES,
    payload: status
  }
}

export const getAllBosses = () => {
  return getAllBossesServer;
};

//-------------------- GET BOSS BY ID: ----------------------

function getBossServer(id, dispatch) {
  console.log("inside getBossServer");
  let url = 'http://localhost:4500/api/bosses/';
  return fetch(url + id, { method: 'GET' })
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
    else {
      dispatch(getBossFailed(response.status));
    }
  }).then(boss => {
    console.log("Boss inside bossServer: " + boss);
    dispatch(getBossSuccess(boss));
  });
}

function getBossSuccess(boss) {
  console.log("inside getBossSuccess");
  console.log("boss: " + boss);
  return {
    type: GETBOSS,
    payload: boss
  }
}

function getBossFailed(status) {
  console.log("inside getBossFailed");

  return {
    //TODO: CHANGE GETBOSSES TO ERROR
    type: GETBOSS,
    payload: status
  }
}

export const getBoss = id => {
  console.log("inside getBoss");
  return ((dispatch) => { getBossServer(id, dispatch)});
}

//-------------------- ADD BOSS TO SERVER: ----------------------


function addBossToServer(dispatch){
  let url = 'http://localhost:4500/api/bosses';
  return fetch(url, { method: 'POST', })
  .then((response) => {
    if(response.ok) {
      return response.json();
    }
    else {
      dispatch(addBossFailed(response.status));
    }
  }).then(bosses => {
    dispatch(addBossSuccess(bosses));
  });
}

function addBossSuccess(bosses) {
  return {
    type: ADDBOSS,
    payload: bosses
  }
}

function addBossFailed(status) {
  return {
    //TODO: CHAGNE GETBOSSES TO ERROR
    type: ADDBOSS,
    payload: status
  }
}

export const addBoss = () => {
  return addBossToServer;
}

