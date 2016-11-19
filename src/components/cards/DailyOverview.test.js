import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import DailyOverview from './DailyOverview'

function setup(props) {
  return shallow(<DailyOverview {...props}/>)
}

describe("DailyOverview", function () {
  it("contains an img with src===props.icon and alt===props.weather+' icon'", function () {
    const wrapper = setup({icon: '/test/icon.png', weather: 'clear skies'})
    const img = wrapper.find("img")

    expect(img.prop('src')).toEqual('/test/icon.png')
    expect(img.prop('alt')).toEqual('clear skies icon')
  });
});
