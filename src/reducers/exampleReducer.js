import * as types from '../actions/actionTypes'
import initial from './initialState'

export default function exampleReducer(state = initial.example, action) {
  if(action.type === types.EXAMPLE_START) {
    return state.slice().push('example')
  }
  if(action.type === types.EXAMPLE_END) {
    return state.slice().unshift()
  }
  return state
}
