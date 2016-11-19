import React from 'react'
import expect from 'expect'
import { mount, shallow } from 'enzyme'
import WeatherIcon from './WeatherIcon'
import WeatherDateIcon from './WeatherDateIcon'

describe("WeatherIcon", function () {
  it("returns WeatherIcon with src === props.src", function () {
    const wrapper = shallow(<WeatherDateIcon src="/test" />)
    const img = wrapper.find(WeatherIcon)

    expect(img.prop('src')).toEqual('/test')
  });
  it("returns WeatherIcon with alt === props.alt", function () {
    const wrapper = shallow(<WeatherDateIcon alt="clear skies" />)
    const img = wrapper.find(WeatherIcon)

    expect(img.prop('alt')).toEqual('clear skies')
  });
  it("should render a h4 with text === props.time", function () {
    const wrapper = shallow(<WeatherDateIcon time="12 pm" />)
    const time = wrapper.find('h4')

    expect(time.text()).toEqual('12 pm')
  });
});
