cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-android-fingerprint-auth.FingerprintAuth",
      "file": "plugins/cordova-plugin-android-fingerprint-auth/www/FingerprintAuth.js",
      "pluginId": "cordova-plugin-android-fingerprint-auth",
      "clobbers": [
        "FingerprintAuth"
      ]
    },
    {
      "id": "cordova-plugin-tabrisjs-qrgen.TabrisJSQRCodeGenerator",
      "file": "plugins/cordova-plugin-tabrisjs-qrgen/www/tabrisjsqrcode.js",
      "pluginId": "cordova-plugin-tabrisjs-qrgen",
      "clobbers": [
        "window.tabrisJsPlugins.qrCode"
      ]
    },
    {
      "id": "cordova-plugin-qrscanner.QRScanner",
      "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
      "pluginId": "cordova-plugin-qrscanner",
      "clobbers": [
        "QRScanner"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-android-fingerprint-auth": "1.5.0",
    "cordova-plugin-tabrisjs-qrgen": "1.0.8",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-qrscanner": "3.0.1"
  };
});