import Proxy0 from './Proxy0';
import SK from './SK';

export default class Console0 {
  static log(message) {
    Console0.msg(message);
  }

  static warn(message) {
    Console0.msg(message, 'warn');
  }

  static error(message) {
    Console0.msg(message, 'error');
  }

  static msg(message, type = 'log') {
    if (console && console[type]) {
      console[type](`${Proxy0.moment().format(`${SK.DEFAULT_MOMENT_Y_M_D}T${SK.DEFAULT_MOMENT_H_MI_S}`)}: ${type}: ${JSON.stringify(message)}`);
    }
  }
}
