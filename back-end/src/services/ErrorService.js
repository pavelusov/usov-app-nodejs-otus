class ErrorService {
  constructor({ value = '', msg = '', param = '', location = '' }) {
    this._value = value;
    this._msg = msg;
    this._param = param;
    this._location = location;
  }

  get data() {
    return {
      value: this._value,
      msg: this._msg,
      param: this._param,
      location: this._location,
    }
  }
}

module.exports = ErrorService;
