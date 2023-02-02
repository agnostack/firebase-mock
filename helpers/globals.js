;(function (globalThis) {
  'use strict';
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  if (commonjsGlobal.firebasemock) {
    commonjsGlobal.MockFirebase = commonjsGlobal.firebasemock.MockFirebase;
    commonjsGlobal.MockFirebaseSdk = commonjsGlobal.firebasemock.MockFirebaseSdk;

    var originals = false;
    commonjsGlobal.MockFirebase.override = function () {
      originals = {
        firebasesdk: commonjsGlobal.firebase,
        firebase: commonjsGlobal.Firebase,
      };
      commonjsGlobal.firebase = commonjsGlobal.firebasemock.MockFirebaseSdk();
      commonjsGlobal.Firebase = commonjsGlobal.firebasemock.MockFirebase;
    };
    commonjsGlobal.MockFirebase.restore = function () {
      if (!originals) return;
      commonjsGlobal.firebase = originals.firebasesdk;
      commonjsGlobal.Firebase = originals.firebase;
    };
  }
})(this);
