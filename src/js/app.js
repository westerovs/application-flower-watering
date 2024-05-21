import {render} from './utils/utils.js'
import {getNextDate, getCurrentDay, getIsToday, getDaysAgo} from './utils/days.js'
import {templateRowPlants} from './view/view.js'
import {plants} from './utils/plants.js'

class App {
  constructor() {
    this.table = document.querySelector('.table')
    this.tableBody = this.table.querySelector('.table__tbody')
  }

  init() {
    this.renderRowPlants()
  }

  renderRowPlants = () => {
    plants.forEach(flower => {
      if (!flower.available) return

      const nextDate = getNextDate(flower.lastDate, flower.interval)
      const daysAgo = getDaysAgo(flower.lastDate)

      flower.nextDate = nextDate
      flower.nextDayWeek = nextDate.nextDayWeek
      flower.daysAgo = daysAgo

      getIsToday(nextDate.inputFormat)

      render(this.tableBody, templateRowPlants(flower, getIsToday(nextDate.inputFormat)))
    })
  }
}

new App().init()
