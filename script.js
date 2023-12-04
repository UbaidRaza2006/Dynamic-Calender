function createCalendar() {
    const monthSelect = document.getElementById('month');
    const yearSelect = document.getElementById('year');
    const calendarDiv = document.getElementById('calendar');

    const monthIndex = parseInt(monthSelect.value);
    const selectedYear = parseInt(yearSelect.value);

    const currentDate = new Date(selectedYear, monthIndex, 1);
    const firstDayIndex = currentDate.getDay();
    const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let calendarHTML = '<table>';
    calendarHTML += '<tr>';

    for (let i = 0; i < daysOfWeek.length; i++) {
        calendarHTML += `<th>${daysOfWeek[i]}</th>`;
    }

    calendarHTML += '</tr>';

    let date = 1;
    let dayCount = 0;

    while (dayCount < daysInMonth) {
        calendarHTML += '<tr>';

        for (let i = 0; i < 7; i++) {
            if (dayCount === 0 && i < firstDayIndex) {
                calendarHTML += '<td></td>';
            } else if (dayCount >= daysInMonth) {
                calendarHTML += '<td></td>';
            } else {
                calendarHTML += `<td>${date}</td>`;
                date++;
                dayCount++;
            }
        }

        calendarHTML += '</tr>';
    }

    calendarHTML += '</table>';
    calendarDiv.innerHTML = calendarHTML;
}