import { getNextDate, render } from './utils/utils.js';
import { templateRowPlants } from './view/view.js'
import { plants } from './utils/const.js';

const tableBody = document.querySelector('.table__tbody')

const renderRowPlants = () => {
  const today = new Date().toISOString().split('T')[0]
  
  plants.forEach(item => {
    let isToday = null
    const nextDate = getNextDate(item.lastDate, item.interval)

    item.nextDate = nextDate
  
    if (today === nextDate.inputFormat) {
      isToday = true
    }
    render(tableBody, templateRowPlants(item, isToday))
  })
}

renderRowPlants()

