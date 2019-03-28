
import { GETBOSSES } from '../constants/Constants';

const initialState = {
  bosses: []
};


export default function(state = initialState, action){
  console.log(action);
  switch(action.type){
    case GETBOSSES:
      return {
        bosses: action.payload
      }
    default: return state;
  }
}