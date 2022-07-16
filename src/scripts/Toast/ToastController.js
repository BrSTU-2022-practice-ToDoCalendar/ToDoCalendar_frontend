import toastr from 'toastr';

export default class ToastController {
  static delete_all_messages() {
    toastr.remove();
  }

  static error(message, title = '', overrides = {}) {
    toastr.error(message, title, {
      timeOut: 20000,
      positionClass: 'toast-bottom-right',
      ...overrides,
    });
  }

  static info(message, title = '', overrides = {}) {
    toastr.info(message, title, {
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      ...overrides,
    });
  }

  static warning(message, title = '', overrides = {}) {
    toastr.warning(message, title, {
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      ...overrides,
    });
  }

  static success(message, title = '', overrides = {}) {
    toastr.success(message, title, {
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      ...overrides,
    });
  }
}
