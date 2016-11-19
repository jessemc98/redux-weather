import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import WeatherDateIcon from '../icon/WeatherDateIcon'
import DailyWeather from './DailyWeather'

describe("DailyWeather", function () {
  it("renders a h2 with text of props.date", function () {
    const wrapper = shallow(<DailyWeather date="Monday 16th" />)
    const title = wrapper.find('h2')

    expect(title.text()).toEqual('Monday 16th')
  });
  it("renders a WeatherDateIcon for each object passed to the props.icons array", function () {
    const icons = [
      {src: '/test', time:'2 am', alt:'clear' },
      {src: '/test', time:'3 am', alt:'clear' },
      {src: '/test', time:'4 am', alt:'clear' },
    ]
    const wrapper = shallow(<DailyWeather icons={icons} />)

    expect(wrapper.find(WeatherDateIcon).length).toEqual(3)
  });
  it("renders WeatherDateIcons with correct props", function () {
    const icons = [
      {src: '/test', time: '2am', alt: 'clear'},
      {src: '/test2', time:'3 am', alt:'clearer' }
    ]
    const wrapper = shallow(<DailyWeather icons={icons} />)
    const iconElements = wrapper.find(WeatherDateIcon)

    expect(iconElements.at(0).props()).toEqual(icons[0])
    expect(iconElements.at(1).props()).toEqual(icons[1])
  });
});
