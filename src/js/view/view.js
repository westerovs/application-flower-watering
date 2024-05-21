const templateRowPlants = (flower, isToday) => {
  const {name, nextDayWeek, nameEng, interval, lastDate, nextDate, daysAgo, } = flower

  const viewFormatDate = isToday ? 'Сегодня' : `${ nextDate.peopleFormat() }`

  return `
    <tr class="table__row" data-name="${ nameEng }">
      <td class="table__data">
        <p>${ name }</p>
        <img width="150x150" height="150x150" src="./src/images/${nameEng}.jpg" alt="${nameEng}"/>
      </td>
      <td class="table__data table__data--interval">
          ${interval}
      </td>
      <td class="table__data">${(daysAgo === 0) ? 'сегодня' : daysAgo }</td>
      <td class="table__data table__data--last">
        <label>
          <input type="date" class="last-date" value="${ lastDate }">
        </label>
      </td>
      <td class="table__data table__data--next ${isToday ? 'watering-is-today' : ''}">
         ${ viewFormatDate } <span class="next-date-span">${nextDayWeek}</span>
      </td>
    </tr>`
}

export {
  templateRowPlants
}
