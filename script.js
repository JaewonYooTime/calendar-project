document.addEventListener('DOMContentLoaded', function () {
  const yearSelect = document.getElementById('year-select');
  const monthSelect = document.getElementById('month-select');
  const calendarBody = document.getElementById('calendar-body');

  // 연도와 월 옵션 채우기
  function fillYearOptions() {
    for (let i = 1900; i <= 2100; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
  }

  function fillMonthOptions() {
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      monthSelect.appendChild(option);
    }
  }

  fillYearOptions();
  fillMonthOptions();

  yearSelect.addEventListener('change', updateCalendar);
  monthSelect.addEventListener('change', updateCalendar);

  function updateCalendar() {
    const year = yearSelect.value;
    const month = monthSelect.value;

    if (!year || !month) return;

    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();

    calendarBody.innerHTML = '';

    // 빈 칸 채우기
    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('calendar-day', 'empty-day');
      calendarBody.appendChild(emptyCell);
    }

    // 날짜 채우기
    for (let i = 1; i <= daysInMonth; i++) {
      const dayCell = document.createElement('div');
      dayCell.classList.add('calendar-day');
      dayCell.textContent = i;
      calendarBody.appendChild(dayCell);
    }
  }

  // 초기 달력 설정 (2024년 7월)
  yearSelect.value = 2024;
  monthSelect.value = 7;
  updateCalendar();
});
