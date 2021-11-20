const templateRowPlants = (flower, isToday) => {
  const {name, interval, lastDate, nextDate} = flower

  const viewFormatDate = isToday ? 'Сегодня' : `${ nextDate.day }.${ nextDate.month }.${ nextDate.year }`
  
  return `
    <tr class="table__row">
      <td class="table__data">${ name }</td>
      <td class="table__data">${ interval }</td>
      <td class="table__data table__data-input">
        <label>
          <input type="date" class="last-date" value="${ lastDate }">
        </label>
      </td>
      <td class="table__data ${isToday ? 'watering-is-today' : ''}">
         ${ viewFormatDate }
      </td>
    </tr>`
}

export {
  templateRowPlants
}
