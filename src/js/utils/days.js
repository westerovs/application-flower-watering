const getWeekDay = (date, short = true) => {
  let days = null
  
  if (short) {
    days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  } else {
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
  }
  
  return days[date.getDay()]
}

const getIsToday = (dateInputFormat) => {
  const todayInputFormat = new Date().toISOString().split('T')[0]
  let isToday = null
  
  if (todayInputFormat === dateInputFormat) {
    isToday = true
  } else {
    isToday = false
  }
  
  return isToday
}

const getCurrentDay = () => {
  const currentDay = new Date()
  const day = currentDay.getDate()
  const month = currentDay.getMonth() + 1
  const year = currentDay.getFullYear()
  const dayWeek = getWeekDay(currentDay, false)
  
  return `${ day }.${ month }.${ year }<br>${ dayWeek }`
}

const getNextDate = (lastDate, interval) => {
  const nextInterval = new Date(lastDate)
  const dayWeek = getWeekDay(nextInterval)
  
  nextInterval.setDate(nextInterval.getDate() + interval)
  const nextDayWeek = getWeekDay(nextInterval)
  
  return {
    inputFormat: nextInterval.toISOString().split('T')[0],
    day: nextInterval.getDate(),
    dayWeek,
    nextDayWeek,
    month: nextInterval.getMonth() + 1,
    year: nextInterval.getFullYear(),
    peopleFormat() {
      return `${ this.day }.${ this.month }.${ this.year }`
    }
    
  }
}

const getDaysAgo = (date) => {
  const lastDate = date // '2021-12-05'
  let currentDate = Date.parse(new Date());
  let days = (currentDate - Date.parse(date)) / 86400000;   //86400000 - ms в дне
  console.log(Math.floor(days))
  return Math.floor(days)
}

export {
  getNextDate,
  getCurrentDay,
  getIsToday,
  getDaysAgo
}