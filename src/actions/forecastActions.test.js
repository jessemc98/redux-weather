import expect from 'expect'
import * as actions from './forecastActions'
import * as types from './actionTypes'

describe("forecastLoaded action", function () {
  const { forecastLoaded } = actions
  it("returns an object with type: FORECAST_LOADED and the passed payload", function () {
    const payload = {weather: 'Raining'}
    const action = forecastLoaded(payload)

    expect(action.type).toEqual(types.FORECAST_LOADED)
    expect(action.payload).toEqual(payload)
  });
});
