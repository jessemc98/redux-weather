import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import WeatherIcon from './WeatherIcon'

describe("WeatherIcon", function () {
  it("returns an img with src === props.src", function () {
    const wrapper = shallow(<WeatherIcon src="/test" />)
    const img = wrapper.find('img')

    expect(img.prop('src')).toEqual('/test')
  });
  it("returns img with alt === props.alt + ' icon'", function () {
    const wrapper = shallow(<WeatherIcon alt="clear skies" />)
    const img = wrapper.find('img')

    expect(img.prop('alt')).toEqual('clear skies icon')
  });
});
