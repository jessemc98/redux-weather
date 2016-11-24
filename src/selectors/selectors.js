export function dateStrToObject(str){
  //expects date str with format: YYYY-MM-DD hh:mm:ss
  //returns javascript Date object
  const parsed = new Date
  parsed.setFullYear(parseInt(str.slice(0, 4), 10))
  parsed.setDate(parseInt(str.slice(8, 10), 10))
  parsed.setMonth(parseInt(str.slice(5, 7), 10) - 1)
  parsed.setHours(parseInt(str.slice(11, 13), 10))
  parsed.setMinutes(parseInt(str.slice(14, 16), 10))
  parsed.setSeconds(parseInt(str.slice(17, 19), 10))
  return parsed
}
export function dayWithSuffix(day){
  const strDay = day.toString()
  const lastDigit = strDay.charAt(strDay.length - 1)
  if(strDay.charAt(strDay.length - 2) !== '1'){
    switch (lastDigit) {
      case '1':
        return day + 'st';
      case '2':
        return day + 'nd';
      case '3':
        return day + 'rd';
    }
  }
  return strDay + 'th'
}
export function hourFormattedForWeather(hour){
  const isMorning = hour < 12
  if(hour === 12 || hour === 0){
    return isMorning?'12am':'12pm'
  }
  return isMorning?hour + 'am':hour - 12 + 'pm'
}
export function kelvinToCelsius(temp) {
  return Math.round(temp - 273.15)
}
export function seperateUniqueDays(days){
  const uniqueDays = []
  days.forEach(day => {
    if(uniqueDays.length === 0) return uniqueDays.push([day])
    for(let j = uniqueDays.length-1; j >= 0; j--){
      if(uniqueDays[j][0].dt_txt.slice(0, 10) === day.dt_txt.slice(0, 10)){
        return uniqueDays[j].push(day)
      }
    }
    return uniqueDays.push([day])
  })
  return uniqueDays
}
export function uppercaseFirst(str){
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}
export function weekdayNumToWord(int){
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  return days[int]
}
