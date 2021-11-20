import { getNextDate, render } from './utils/utils.js';
import { templateRowPlants } from './view/view.js'
import { plants } from './utils/const.js';

const table = document.querySelector('.table')

const renderRowPlants = () => {
  plants.forEach(item => {
    item.nextDate = getNextDate(item.lastDate, item.interval)
    render(table, templateRowPlants(item))
  })
}

renderRowPlants()

