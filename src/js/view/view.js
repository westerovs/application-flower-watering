const templateRowPlants = (flower, isToday) => {
  const {name, interval, lastDate, nextDate} = flower
  
  return `
    <tr class="table__row">
      <td class="table__data">${ name }</td>
      <td class="table__data">${ interval }</td>
      <td class="table__data table__data-input">
        <label>
          <input type="date" class="last-date" value="${ lastDate }">
        </label>
      </td>
      <td class="table__data table__data-input ${isToday ? 'watering-is-today' : ''}">
         <label>
          <input type="date" class="next-date" value="${ nextDate }">
        </label>
      </td>
    </tr>`
}

export {
  templateRowPlants
}
