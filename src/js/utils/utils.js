const render = (container, template, place = 'beforeend') => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template)
  }
}

const getCurrentDay = () => {
  const currentDay = new Date()
  const day = currentDay.getDate()
  const month = currentDay.getMonth() + 1
  const year = currentDay.getFullYear()
  
  return `${ day }.${ month }.${ year }`
}

const getNextDate = (lastDate, interval) => {
  const nextInterval = new Date(lastDate)
  nextInterval.setDate(nextInterval.getDate() + interval)
  
  return {
    inputFormat: nextInterval.toISOString().split('T')[0],
    day: nextInterval.getDate(),
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
  getCurrentDay
}
