function solution(phone_number) {
  const len = phone_number.length;
  return '*'.repeat(len - 4) + phone_number.substring(len - 4, len);
  // return s.replace(/\d(?=\d{4})/g, "*");
}