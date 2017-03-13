import * as fetchApi from './fetchApi'
import nock from 'nock'
import expect from 'expect'
describe("getWeather", function () {
  const { getWeather } = fetchApi
  beforeEach(function () {
    // nock('http://api.openweathermap.org/data/2.5')
    //   .get('/weather')
    //   .query({appid: 'd5fa9909b8944d603b81a6a7dbec6b13', q: 'gibraltar'})
    //   .reply(200, {weather: 'clear'});
  })
  afterEach(function () {
    nock.cleanAll()
  })
  it("fetches from the correct address", function (done) {
    nock('https://api.openweathermap.org/data/2.5')
      .get('/weather')
      .query(true)
      .reply(200, {weather: 'clear'});
    getWeather('gibraltar')
      .then(response => {
        expect(response)
        done()
      })
      .catch(err => {
        done(err)
      })
  });
});
