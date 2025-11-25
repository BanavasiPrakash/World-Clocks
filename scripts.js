function updateClocks() {
  const clocks = document.querySelectorAll('.clock');
  clocks.forEach(clock => {
    const timezone = clock.getAttribute('data-timezone');
    const timeElement = clock.querySelector('.time');
    const now = new Date();
    const timeOptions = {
      hour12: true,            // <-- 12-hour format!
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone
    };
    try {
      const timeString = now.toLocaleTimeString('en-US', timeOptions);
      timeElement.textContent = timeString;
    } catch (e) {
      timeElement.textContent = "Err";
    }
  });
}
setInterval(updateClocks, 1000);
updateClocks();
