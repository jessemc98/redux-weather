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
