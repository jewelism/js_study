const {insertString} = require('./insertString');

const modPhoneNumber = phoneNumber => {
  let newPhoneNum = phoneNumber.replace(/[^0-9]/g, '');
  if (newPhoneNum.length < 4) {
    return newPhoneNum;
  } else if(newPhoneNum.length < 7) {
    //nothing to do
  } else if (newPhoneNum.length < 11) {
    newPhoneNum = insertString(newPhoneNum, 6, '-');
  } else {
    newPhoneNum = insertString(newPhoneNum, 7, '-');
  }
    newPhoneNum = insertString(newPhoneNum, 3, '-');
  return newPhoneNum;
};

module.exports = {
  modPhoneNumber,
}
