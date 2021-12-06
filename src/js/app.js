import { getNextDate, getCurrentDay, render, getIsToday } from './utils/utils.js';
import { templateRowPlants } from './view/view.js'
import { plants } from './utils/const.js';

// временно тут вся логика
class App {
  constructor() {
    this.table = document.querySelector('.table')
    this.tableBody = this.table.querySelector('.table__tbody')
    this.tableBody.addEventListener('change', this.tableBodyHandler)
  }
  
  init() {
    this.renderRowPlants()
  }
  
  tableBodyHandler = (event) => {
      const currentRow = event.target.closest('.table__row')
      const currentName = currentRow.dataset.name
      const nextDateField = currentRow.querySelector('.table__data--next')
      const interval = +currentRow.querySelector('.table__data--interval input').value

      if (event.target.closest('.table__data--interval')) {
        plants.find(item => {
          if (item.nameEng === currentName) {
            item.interval = interval
          }
        })
      }

      const lastDate = currentRow.querySelector('.last-date').value
      const nextDate = getNextDate(lastDate, interval)

      nextDateField.innerHTML = nextDate.peopleFormat()
  }
  
  renderRowPlants = () => {
    plants.forEach(item => {
      const nextDate = getNextDate(item.lastDate, item.interval)
      item.nextDate = nextDate
      item.dayWeek = nextDate.dayWeek
      item.nextDayWeek = nextDate.nextDayWeek

      getIsToday(nextDate.inputFormat)

      render(this.tableBody, templateRowPlants(item, getIsToday(nextDate.inputFormat)))
    })
  }
}

new App().init()