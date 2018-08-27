const createToday = timeString => {
  const today = new Date().toString();
  const modifiedTimeToday = today.replace(/[0-9]{2}:[0-9]{2}:[0-9]{2}/g, timeString);
  return new Date(modifiedTimeToday);
}

module.exports = {
  createToday
}