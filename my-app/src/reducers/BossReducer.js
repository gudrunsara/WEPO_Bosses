
import { GETBOSSES } from '../constants/Constants';
import { ADDBOSS } from '../constants/Constants';
import { GETBOSS } from '../constants/Constants';
 
const initialState = {
  bosses: [], 
  boss: undefined
};


export default function(state = initialState, action){
  switch(action.type){
    case GETBOSSES:
      return {
        bosses: action.payload
      }
    case ADDBOSS:
      return Object.assign({}, state,
      {
        bosses: [...state.bosses, action.payload]
      })
    case GETBOSS:
    return {
      boss: action.payload
    }
    default: return state;
  }
}
