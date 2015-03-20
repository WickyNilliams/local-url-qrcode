var qrcode = require("qrcode-terminal");
var ip = require("ip");

module.exports = {
  print : function(port) {
    var url = "http://" + ip.address();

    if(port) {
      url += ":" + port;
    }

    qrcode.generate(url);
  }
};