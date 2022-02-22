function getNumber (min, max) {
  const randomNumber = Math.random();

  if (min > max  ) {
    const alertError = 'Ошибка';
    return alertError;
  }

  if (min <= max && min >= 0) {
    return Math.floor(randomNumber * (max - min + 1)) + min;
  }
}
getNumber(10, 10);

function getMaxLenghtString(string, maxLenghtString) {
  if (string.length <= maxLenghtString) {
    return true;
  }
  if (string.length > maxLenghtString) {
    return false;
  }
}
getMaxLenghtString('fdfdf', 1);
