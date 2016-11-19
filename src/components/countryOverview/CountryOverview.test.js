import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import WeatherIcon from '../icon/WeatherIcon'
import CountryOverview from './CountryOverview'

const expectedProps = {
  editable: true,
  temp: {
    current: 12,
    high: 15,
    low: 8
  },
  onRemove: function(){return;},
  country: "Gibraltar",
  description: "Clear Sky",
  iconSrc: "/assets/icons/clearsky.png"
}
describe("CountryOverview", function () {
  describe(".CountryOverview_temp element", function () {
    it("renders if props.editable is false or undefined", function () {
      const wrapper = shallow(<CountryOverview {...expectedProps} editable={false} />)

      expect(wrapper.find('.CountryOverview_temp').length).toBeGreaterThan(0)
    });
    it("doesnt render if props.editable is true", function () {
      const wrapper = shallow(<CountryOverview editable={true} />)

      expect(wrapper.find('.CountryOverview_temp').length).toEqual(0)
    });
    it("renders the passed temp object correctly", function () {
      const temp = {
        current: 15,
        high: 18,
        low: 12
      }
      const wrapper = shallow(<CountryOverview temp={temp}/>)

      expect(wrapper.find('.CountryOverview_temp_current').text()).toEqual('15')
      expect(wrapper.find('.CountryOverview_temp_high').text()).toEqual('18')
      expect(wrapper.find('.CountryOverview_temp_low').text()).toEqual('12')
    })
  });
  describe(".CountryOverview_remove button", function () {
    it("renders if props.editable is true", function () {
      const wrapper = shallow(<CountryOverview editable={true} />)

      expect(wrapper.find('.CountryOverview_remove').length).toBeGreaterThan(0)
    });
    it("doesnt render if props.editable is false or undefined", function () {
      const wrapper = shallow(<CountryOverview {...expectedProps} editable={false} />)

      expect(wrapper.find('.CountryOverview_remove').length).toEqual(0)
    });
    it("calls props.onRemove when clicked", function () {
      const onRemove = expect.createSpy()
      const wrapper = shallow(<CountryOverview editable onRemove={onRemove}/>)
      const remButton = wrapper.find('.CountryOverview_remove')

      remButton.simulate('click')

      expect(onRemove).toHaveBeenCalled()
    });
  });
  it("renders title using props.country", function () {
    const wrapper = shallow(<CountryOverview {...expectedProps} country="Gibraltar" />)
    const title = wrapper.find('.CountryOverview_title')

    expect(title.text()).toEqual('Gibraltar')
  });
  it("renders description passed as props.description", function () {
    const wrapper = shallow(<CountryOverview {...expectedProps} description="Clear skies" />)
    const description = wrapper.find('.CountryOverview_description')

    expect(description.text()).toEqual('Clear skies')
  });
  it("renders a WeatherIcon with correct props", function () {
    const props = {
      iconSrc: "/test",
      description: "ClearSky"
    }
    const wrapper = shallow(<CountryOverview {...expectedProps} {...props} />)
    const expected = {src: props.iconSrc, alt: props.description}

    expect(wrapper.find(WeatherIcon).props()).toEqual(expected)
  });
});
