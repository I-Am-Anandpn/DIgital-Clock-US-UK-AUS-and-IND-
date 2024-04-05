function updateClock(timezone) {
  const now = new Date();
  const options = {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: timezone
  };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const timeString = formatter.format(now);
  document.getElementById('clock').textContent = timeString;
}

document.getElementById('us').addEventListener('click', () => updateClock('America/New_York'));
document.getElementById('uk').addEventListener('click', () => updateClock('Europe/London'));
document.getElementById('aus').addEventListener('click', () => updateClock('Australia/Sydney'));
document.getElementById('ind').addEventListener('click', () => updateClock('Asia/Kolkata'));

updateClock('Asia/Kolkata');


setInterval(() => updateClock('Asia/Kolkata'), 1000);
