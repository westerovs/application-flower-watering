import {render} from './utils/utils.js'
import {getNextDate, getCurrentDay, getIsToday, getDaysAgo} from './utils/days.js'
import {templateRowPlants} from './view/view.js'
import {config} from './utils/config.js'

class App {
  constructor() {
    this.table = document.querySelector('.table')
    this.tableBody = this.table.querySelector('.table__tbody')
    this.tableBody.addEventListener('change', this.updateNextDate)
  }

  init() {
    this.renderRowPlants()
  }

  updateNextDate = (event) => {
    const currentRow = event.target.closest('.table__row')
    const currentName = currentRow.dataset.name
    const nextDateField = currentRow.querySelector('.table__data--next')
    const interval = +currentRow.querySelector('.table__data--interval').innerText

    if (event.target.closest('.table__data--next')) {
      config.find(plant => {
        if (plant.nameEng === currentName) {
          plant.interval = interval
        }
      })
    }

    const lastDate = currentRow.querySelector('.last-date').value
    const nextDate = getNextDate(lastDate, interval)

    nextDateField.innerHTML = nextDate.peopleFormat()
  }

  renderRowPlants = () => {
    config.forEach(flower => {
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
