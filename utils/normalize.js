const nric = value => {
  if (!value) {
    return value;
  }

  const onlyNums = value.replace(/[^\d]/g, '');

  return value.replace(/-/g, '').length >= 12 ? `${onlyNums.slice(0, 6)}-${onlyNums.slice(6, 8)}-${onlyNums.slice(8, 12)}` : value;
};

const upper = value => value && value.toUpperCase();

const noOnly = value => {
  if (!value) {
    return value;
  }

  return value.replace(/[^\d]/g, '');
};

const business = value => {
  if (!value) {
    return value;
  }

  return value.replace(/-/g, '').length >= 8 ? `${value.slice(0, 7)}-${value.slice(7, 8)}` : value;
};

export default {nric, upper, noOnly, business};
