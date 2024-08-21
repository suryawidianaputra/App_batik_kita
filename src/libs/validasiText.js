function trimmed(value) {
  const trim = value.trim();
  return trim.length === 0 ? false : true;
}

function emailValidation(value) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value);
}

export {trimmed, emailValidation};
