import expect from 'expect'
import * as actions from './overviewActions'
import * as types from './actionTypes'

describe("weatherLoaded action", function () {
  const { weatherLoaded } = actions
  it("returns an object with type: OVERVIEW_LOADED and the passed payload", function () {
    const payload = {weather: 'Raining'}
    const action = weatherLoaded(payload)

    expect(action.type).toEqual(types.OVERVIEW_LOADED)
    expect(action.payload).toEqual(payload)
  });
});
