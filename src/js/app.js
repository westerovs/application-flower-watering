import { getNextDate, getCurrentDay, render } from './utils/utils.js';
import { templateRowPlants } from './view/view.js'
import { plants } from './utils/const.js';

const table = document.querySelector('.table')
const tableBody = table.querySelector('.table__tbody')
const currentDayField = table.querySelector('.table__current-day')

currentDayField.innerHTML  = `${ getCurrentDay() }`

const changeDate = () => {
  tableBody.addEventListener('change', function(event) {
    const currentRow = event.target.closest('.table__row')
    const nextDateField = currentRow.querySelector('.table__data--next')
    const interval = +currentRow.querySelector('.table__data--interval input').value
  
    const lastDate = event.target.value
    const nextDate = getNextDate(lastDate, interval)
    
    nextDateField.innerHTML = nextDate.peopleFormat()
  })
}

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
changeDate()

