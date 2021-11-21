const render = (container, template, place = 'beforeend') => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template)
  }
}

const getWeekDay = (date, short = true) => {
  let days = null

  if (short) {
    days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  } else {
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  }
  
  return days[date.getDay()];
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
  nextInterval.setDate(nextInterval.getDate() + interval)
  
  return {
    inputFormat: nextInterval.toISOString().split('T')[0],
    day: nextInterval.getDate(),
    dayWeek: getWeekDay(nextInterval),
    month: nextInterval.getMonth() + 1,
    year: nextInterval.getFullYear(),
    peopleFormat() {
      return `${ this.day }.${ this.month }.${ this.year }`
    }
  
  }
}

export {
  render,
  getNextDate,
  getCurrentDay,
  getIsToday
}
