const render = (container, template, place = 'beforeend') => {
  if (container instanceof Element) {
    container.insertAdjacentHTML(place, template)
  }
}

const getNextDate = (oldData, interval) => {
  const nextInterval = new Date(oldData)
  nextInterval.setDate(nextInterval.getDate() + interval)
  
  return nextInterval.toISOString().split('T')[0]
}

export {
  render,
  getNextDate
}
