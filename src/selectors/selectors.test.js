import expect from 'expect'
import * as selectors from './selectors'

describe("dateStrToObject", function () {
  const { dateStrToObject } = selectors
  it("does not throw any errors", function () {
    expect(dateStrToObject).toNotThrow('error')
  });
  describe("parses a given string and returns a javascript Date object", function () {
    it("with the correct date", function () {
      const str = '2016-11-24 10:10:10'
      const parsedDate = dateStrToObject(str)

      expect(parsedDate.getDate()).toEqual(24)
      expect(parsedDate.getFullYear()).toEqual(2016)
      expect(parsedDate.getMonth()).toEqual(10)
    });
    it("with the correct time", function () {
      const str = '2016-11-24 10:10:10'
      const parsedDate = dateStrToObject(str)

      expect(parsedDate.getSeconds()).toEqual(10)
      expect(parsedDate.getMinutes()).toEqual(10)
      expect(parsedDate.getHours()).toEqual(10)
    });
  });
});
describe("dayWithSuffix", function () {
  const { dayWithSuffix } = selectors
  it("returns number with 'st' suffix when number at end is a 1", function () {
    expect(dayWithSuffix(1)).toEqual('1st')
    expect(dayWithSuffix(21)).toEqual('21st')
  });
  it("returns number with 'nd' suffix when number at end is a 2", function () {
    expect(dayWithSuffix(2)).toEqual('2nd')
    expect(dayWithSuffix(22)).toEqual('22nd')
  });
  it("returns number with 'rd' suffix when number at end is a 3", function () {
    expect(dayWithSuffix(3)).toEqual('3rd')
    expect(dayWithSuffix(23)).toEqual('23rd')
  });
  it("returns 'th' suffix when number at end is neither 1, 2 or 3", function () {
    expect(dayWithSuffix(4)).toEqual('4th')
    expect(dayWithSuffix(26)).toEqual('26th')
  });
  it("returns correct suffix for 11th", function () {
    expect(dayWithSuffix(11)).toEqual('11th')
  });
  it("returns correct suffix for 12th", function () {
    expect(dayWithSuffix(12)).toEqual('12th')
  });
  it("returns correct suffix for 13th", function () {
    expect(dayWithSuffix(13)).toEqual('13th')
  });
});
describe("kelvinToCelsius", function () {
  const { kelvinToCelsius } = selectors
  it("returns temperature in celcius as an integer when given temp in kelvin", function () {
    const inputs = [273.15, 300, 400, 500]
    const expected = [0, 27, 127, 227]

    inputs.forEach((input, i) => {
      expect(kelvinToCelsius(inputs[i])).toEqual(expected[i])
    })
  });
});
describe("seperateUniqueDays", function () {
  const { seperateUniqueDays } = selectors
  it(`returns an array of arrays containing weather info for
    each unique day when given an array of weather info`, function () {
    const input = [
      {dt_txt: "2016-11-21 21:00:00"},
      {dt_txt: "2016-11-22 03:00:00"},
      {dt_txt: "2016-11-23 03:00:00"}
    ]
    const expected = [
      [{dt_txt: "2016-11-21 21:00:00"}],
      [{dt_txt: "2016-11-22 03:00:00"}],
      [{dt_txt: "2016-11-23 03:00:00"}]
    ]
    expect(seperateUniqueDays(input)).toEqual(expected)
  });
  it("returns expected result when given more than one value for any unique day", function () {
    const input = [
      {dt_txt: "2016-11-21 21:00:00"},
      {dt_txt: "2016-11-21 03:00:00"},
      {dt_txt: "2016-11-22 03:00:00"}
    ]
    const expected = [
      [
        {dt_txt: "2016-11-21 21:00:00"},
        {dt_txt: "2016-11-21 03:00:00"}
      ],
      [
        {dt_txt: "2016-11-22 03:00:00"}
      ]
    ]
    expect(seperateUniqueDays(input)).toEqual(expected)
  });
});
describe("uppercaseFirst", function () {
  const { uppercaseFirst } = selectors
  it("returns a string with the first character uppercased", function () {
    const input = "hello im a string"
    const expected = "Hello im a string"

    expect(uppercaseFirst(input)).toEqual(expected)
  });
  it("returns same string when first char is already uppercase", function () {
    const str = "Hello im a string"

    expect(uppercaseFirst(str)).toEqual(str)
  });
});
describe("weekdayNumToWord", function () {
  const { weekdayNumToWord } = selectors
  it("returns the day of the week (e.g. Monday) when given date.getDay()", function () {
    let date = new Date("2016-11-21")
    expect(weekdayNumToWord(date.getDay())).toEqual("Monday")
    date = new Date("2016-11-22")
    expect(weekdayNumToWord(date.getDay())).toEqual("Tuesday")
    date = new Date("2016-11-23")
    expect(weekdayNumToWord(date.getDay())).toEqual("Wednesday")
    date = new Date("2016-11-24")
    expect(weekdayNumToWord(date.getDay())).toEqual("Thursday")
    date = new Date("2016-11-25")
    expect(weekdayNumToWord(date.getDay())).toEqual("Friday")
    date = new Date("2016-11-26")
    expect(weekdayNumToWord(date.getDay())).toEqual("Saturday")
    date = new Date("2016-11-27")
    expect(weekdayNumToWord(date.getDay())).toEqual("Sunday")

  });
});
describe("hourFormattedForWeather", function () {
  const { hourFormattedForWeather } = selectors
  it("returns hour with pm prefix if hour is > 12", function () {
    const inputs = [13, 14, 15, 16]
    const expected = ['1pm', '2pm', '3pm', '4pm']

    inputs.forEach((input, i) => {
      expect(hourFormattedForWeather(inputs[i])).toEqual(expected[i])
    })
  });
  it("returns hour with am prefix if hour < 12", function () {
    const inputs = [1, 2, 4, 11]
    const expected = ['1am', '2am', '4am', '11am']

    inputs.forEach((input, i) => {
      expect(hourFormattedForWeather(inputs[i])).toEqual(expected[i])
    })
  });
  it("returns 12am when input === 0", function () {
    const input = 0
    const expected = '12am'

    expect(hourFormattedForWeather(input)).toEqual(expected)
  });
  it("returns 12pm when input === 12", function () {
    const input = 12
    const expected = '12pm'

    expect(hourFormattedForWeather(input)).toEqual(expected)
  });
});
