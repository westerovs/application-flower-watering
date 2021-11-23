import { getNextDate, getCurrentDay, render, getIsToday } from './utils/utils.js';
import { templateRowPlants } from './view/view.js'
import { plants } from './utils/const.js';

const table = document.querySelector('.table')
const tableBody = table.querySelector('.table__tbody')
const currentDayField = table.querySelector('.table__current-day')
currentDayField.innerHTML  = `${ getCurrentDay() }`

let a = 666
localStorage.getItem(a);


const caption = document.querySelector('caption');
let isStorageSupport = true;
let lastDay = '';

try {
  console.log(1)
  lastDay = localStorage.getItem('adult');
} catch (err) {
  console.log(2)
  isStorageSupport = false;
}

tableBody.addEventListener('change', function(event) {
  if (lastDay) {
    // caption.value = lastDay;
    caption.innerHTML = lastDay;
  }
  
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
})


const renderRowPlants = () => {
  plants.forEach(item => {
    const nextDate = getNextDate(item.lastDate, item.interval)
    item.nextDate = nextDate
    item.dayWeek = nextDate.dayWeek
    item.nextDayWeek = nextDate.nextDayWeek
    
    getIsToday(nextDate.inputFormat)
    
    render(tableBody, templateRowPlants(item, getIsToday(nextDate.inputFormat)))
  })
}
renderRowPlants()

