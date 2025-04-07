document.addEventListener('DOMContentLoaded', () => {
  studySchedule();
  highlightCurrentSession();
  setInterval(highlightCurrentSession, 60000); // Check every minute
});

function setSession(start, end, activity) {
  const formatTime = time => new Date(`1970-01-01T${time}:00`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${activity}: ${formatTime(start)} - ${formatTime(end)}`;
}

function studySchedule() {
  const sessions = [
    { start: "06:00", end: "08:30", activity: "Study Session 1" },
    { start: "08:45", end: "13:45", activity: "Study Session 2" },
    { start: "14:30", end: "18:30", activity: "Study Session 3" },
    { start: "19:00", end: "20:30", activity: "Study Session 4" },
    { start: "21:00", end: "23:00", activity: "Study Session 5" }
  ];

  const studySessionsList = document.getElementById('study-sessions');
  
  sessions.forEach(session => {
    const listItem = document.createElement('li');
    listItem.textContent = setSession(session.start, session.end, session.activity);
    listItem.dataset.start = session.start;
    listItem.dataset.end = session.end;
    studySessionsList.appendChild(listItem);
  });
}

function highlightCurrentSession() {
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll('#study-sessions li').forEach(item => {
    const start = item.dataset.start.split(':').map(Number);
    const end = item.dataset.end.split(':').map(Number);
    const startTime = start[0] * 60 + start[1];
    const endTime = end[0] * 60 + end[1];

    if (currentTime >= startTime && currentTime < endTime) {
      item.classList.add('highlight');
    } else {
      item.classList.remove('highlight');
    }
  });
}
