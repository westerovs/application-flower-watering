const templateRowPlants = (flower, isToday) => {
  const {name, dayWeek, nameEng, interval, lastDate, nextDate} = flower

  const viewFormatDate = isToday ? 'Сегодня' : `${ nextDate.peopleFormat() }`
  
  return `
    <tr class="table__row" data-name="${ nameEng }">
      <td class="table__data">${ name }</td>
      <td class="table__data table__data--interval">
        <label>
          <input type="number" data-interval="interval" value="${ interval }" min="1" max="99" maxlength="2">
        </label>
      </td>
      <td class="table__data">${ dayWeek }</td>
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
