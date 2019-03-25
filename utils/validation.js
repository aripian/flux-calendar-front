import moment from 'moment';

class Validation {
  static required(value) {
    return value ? undefined : 'This field is required';
  }

  static nric(value) {
    if (!value) {
      return undefined;
    }
    const regex = /\d{6}-\d{2}-\d{4}/;
    let validDate = false;
    if (value.length >= 6) {
      validDate = moment(value.substr(0, 6), 'YYMMDD', true).isValid();
    }

    return regex.test(value) ?
      (validDate ? undefined : 'Invalid NRIC') : 'Invalid NRIC format';
  }
}

export default Validation;
