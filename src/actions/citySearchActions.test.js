import expect from 'expect'
import * as actions from './citySearchActions'
import * as types from './actionTypes'

describe("foundCities action", function () {
  const { foundCities } = actions
  it("returns an object with type of types.CITIES_FOUND", function () {
    expect(foundCities()).toInclude({type: types.CITIES_FOUND})
  });
  it("returns an object with given payload", function () {
    const payload = ['array', 'of', 'matching', 'cities']

    expect(foundCities(payload)).toInclude({ payload })
  });
});
