function updateClocks() {
  const clocks = document.querySelectorAll('.clock');
  const now = new Date();

  clocks.forEach(clock => {
    const timezone = clock.getAttribute('data-timezone');
    const timeElement = clock.querySelector('.time');
    const options = {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone
    };
    try {
      const timeString = now.toLocaleTimeString('en-US', options);
      timeElement.textContent = timeString;
    } catch (e) {
      timeElement.textContent = "Err";
    }
  });
}
setInterval(updateClocks, 1000);
updateClocks();
