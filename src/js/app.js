import { getNextDate, render } from './utils/utils.js';
import { templateRowPlants } from './view/view.js'
import { plants } from './utils/const.js';

const table = document.querySelector('.table')

const renderRowPlants = () => {
  const today = new Date().toISOString().split('T')[0]
  
  plants.forEach(item => {
    let isToday = null
  
    item.nextDate = getNextDate(item.lastDate, item.interval)
    if (today === item.nextDate) {
      isToday = true
    }
    render(table, templateRowPlants(item, isToday))
  })
}

renderRowPlants()

