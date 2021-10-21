var request = require("request");
let CONFIG = {
  btn1:1,
  btn2:1,
  btn3:1,
  btn4:1,
  btn5:1,
  btn6:1,
  btn7:1,
  btn8:1,
  btn9:1,
  btn10:1,
  btn11:1,
  btn12:1,
  btn13:1,
  btn14:1,
  btn15:1,
  btn16:1,
  light_hangar_gates:1,
  gate_door:0,
  is_open_door:1,
  needUsers:1


};
setInterval(() => {
  request.post(
    "http://localhost/api/set_status",
    {
      json: CONFIG
    },
    function(error, response, body) {
      if (!error) {
        CONFIG=body

      } else {

      }
    }
  );
}, 5000);
