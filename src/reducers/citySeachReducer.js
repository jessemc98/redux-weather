import { CITIES_FOUND } from '../actions/actionTypes'
import initial from './initialState'

export default function citySearchReducer(state = initial.citySearch, action) {
  if (action.type === CITIES_FOUND) {
    console.log('cities found', action.payload.list || state);
    return action.payload.list || state
  }
  return state
}
