import Codes from './Codes';
import Mesgs from './Mesgs';
import Proxy0 from './Proxy0';

export default class RespMesg {
  static TYPE = {
    ERROR: 'Error', //Unknown Exception(done == false), UI will prompt details; Business Stop(done == true), process by component,
    INFO: 'Info', //Just prompt
    SUCCESS: 'Success', //Just prompt
    WARNING: 'Warning', //Business continue, but must prompt
  };

  constructor(mesg) {
    this.args = mesg.args;//Message Arguments, Array or Object, format by skFmtArr or skFmt
    this.code = mesg.code;//Message Code or Message Content
    this.type = mesg.type;//Message Type
  }

  getMessage() {
    const msg = Mesgs.get(this.code);
    let rtn = this.code;
    if (Array.isArray(this.args)) {
      rtn = msg.skFmtArr(this.args.map(arg => {
        let tmpRtn = null;
        if (Proxy0._.isPlainObject(arg) && arg.code && arg.id) {
          tmpRtn = Codes.get(arg.code).find(item => {
            return item.id === arg.id;
          });
          tmpRtn = tmpRtn ? tmpRtn.text : arg;
        } else {
          tmpRtn = arg;
        }
        return tmpRtn;
      }));
    } else if (Proxy0._.isPlainObject(this.args) && !Proxy0._.isEmpty(this.args)) {
      rtn = msg.skFmt(this.args);
    } else if (msg !== this.code) {
      rtn = msg;
    }
    return rtn;
  }

  getType() {
    return this.type;
  }
}
