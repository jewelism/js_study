const insertString = (str, index, value) => {
  return str.substr(0, index) + value + str.substr(index);
}

module.exports = {
  insertString
}