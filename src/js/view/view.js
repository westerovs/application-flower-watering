const templateRowPlants = (flower, isToday) => {
  const {name, interval, lastDate, nextDate} = flower

  const viewFormatDate = isToday ? 'Сегодня' : `${ nextDate.day }.${ nextDate.month }.${ nextDate.year }`
  
  return `
    <tr class="table__row">
      <td class="table__data">${ name }</td>
      <td class="table__data table__data--interval">
        <label>
          <input type="number" data-interval="interval" value="${ interval }" min="1" max="30" maxlength="2">
        </label>
      </td>
      <td class="table__data table__data--last">
        <label>
          <input type="date" class="last-date" value="${ lastDate }">
        </label>
      </td>
      <td class="table__data table__data--next ${isToday ? 'watering-is-today' : ''}">
         ${ viewFormatDate }
      </td>
    </tr>`
}

export {
  templateRowPlants
}
