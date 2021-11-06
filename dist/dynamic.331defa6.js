// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "\nbody {\n    background-color: #e1e7d3;\n}\n.wrap {\n    position: relative;\n    margin-top: 20px;\n}\n.base {\n    position: absolute;\n    background: #a4978e;\n}\n.nameWrapper {\n    position: relative;\n}\n.to {\n    position: absolute;\n    background: #5f5852;\n    width: 18px;\n    height: 66px;\n    z-index: 6;\n    top: 420px;\n    left: 50%;\n    margin-left: -9px;\n    border-radius: 50% / 60% 60% 40% 40%;\n}\n.to::before {\n    content: \"\";\n    position: absolute;\n    width: 18px;\n    height: 33px;\n    background: #5f5852;\n    transform: rotate(90deg);\n    border-radius: 50% / 60% 60% 40% 40%;\n    margin-left: 10px;\n    margin-top: 22px;\n}\n.nameWrapper > .char1 {\n    transform: translateX(-40px) skewX(-5deg);\n    animation: wave1 6s alternate linear infinite;\n}\n.nameWrapper > .char2 {\n    transform: translateX(0) skewX(-5deg);\n    animation: wave2 6s alternate linear infinite;\n}\n.nameWrapper > .ro {\n    position: absolute;\n    background: #5f5852;\n    width: 43px;\n    height: 43px;\n    z-index: 6;\n    border-radius: 12px;\n    top: 440px;\n    left: 50%;\n    margin-left: 36px;\n    transform: skewX(-5deg);\n    animation: wave3 6s alternate linear infinite;\n}\n.nameWrapper > .ro::after {\n    content: \"\";\n    position: absolute;\n    width: 22px;\n    height: 17px;\n    background: #e1e7d3;\n    border-radius: 5px;\n    top: 13px;\n    left: 50%;\n    margin-left: -11px;\n    transform: skewX(-5deg);\n}\n\n.head {\n    z-index: 1;\n    width: 126px;\n    height: 75px;\n    left: 50%;\n    top: 59px;\n    margin-left: -63px;\n    border-radius: 100px / 60px;\n}\n.bodyFillingUp {\n    width: 130px;\n    height: 56px;\n    left: 50%;\n    top: 107px;\n    margin-left: -65px;\n}\n.bodyFillingMiddle {\n    width: 194px;\n    height: 63px;\n    left: 50%;\n    top: 163px;\n    margin-left: -97px;\n}\n.bodyMain {\n    width: 220px;\n    height: 225px;\n    top: 172px;\n    left: 50%;\n    margin-left: -110px;\n    border-radius: 110px;\n}\n.belly {\n    position: absolute;\n    background: #efdccb;\n    width: 200px;\n    height: 214px;\n    left: 50%;\n    top: 157px;\n    margin-left: -100px;\n    border-radius: 100px / 107px;\n    z-index: 5;\n}\n.upperArm {\n    width: 35px;\n    height: 131px;\n    top: 83px;\n}\n.upperArm.left {\n    left: 50%;\n    margin-left: -90.4px;\n    transform: rotate(27deg);\n}\n.upperArm.right {\n    right: 50%;\n    margin-right: -90.4px;\n    transform: rotate(-27deg);\n}\n.foreArm {\n    width: 38px;\n    height: 104px;\n    top: 192px;\n    border-radius: 40px / 100px;\n}\n.foreArm.left {\n    left: 50%;\n    margin-left: -127.6px;\n}\n.foreArm.right {\n    right: 50%;\n    margin-right: -127.6px;\n}\n.feet {\n    position: absolute;\n    background: #e1e7d3;\n    width: 124px;\n    height: 20px;\n    top: 381px;\n    left: 50%;\n    margin-left: -62px;\n    z-index: 5;\n}\n.feet::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    border: 5px solid;\n    border-color: transparent transparent #e1e7d3;\n    border-top: none;\n    left: 50%;\n    margin-left: -5px;\n    bottom: 20px;\n    z-index: 6;\n}\n.ear {\n    width: 12px;\n    height: 25px;\n    top: -10px;\n    left: 50%;\n    margin-left: -6px;\n}\n.ear.left {\n    transform: translateX(-36px) rotate(-6deg);\n}\n.ear.right {\n    transform: translateX(36px) rotate(6deg);\n}\n.ear::before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    border: 15px solid;\n    border-color: #a4978e transparent transparent;\n    border-bottom: none;\n    left: -8px;\n    top: -2px;\n}\n.ear::after {\n    content: \"\";\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-bottom: #a4978e 45px solid;\n    border-left: transparent 15px solid;\n    border-right: transparent 15px solid;\n    left: -8px;\n    top: -46px;\n}\n.eye {\n    position: absolute;\n    background: #fcfcfc;\n    width: 24px;\n    height: 24px;\n    z-index: 5;\n    left: 50%;\n    top: 30px;\n    margin-left: -12px;\n    border-radius: 50%;\n}\n.eye::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: #5a534e;\n    left: 50%;\n    margin-left: -5px;\n    top: 8px;\n    border-radius: 50%;\n    animation: pupil 5s ease 2s infinite;\n}\n.eye.left {\n    transform: translateX(-38px);\n}\n.eye.right {\n    transform: translateX(38px);\n}\n.nose {\n    position: absolute;\n    background: #5f5852;\n    width: 30px;\n    height: 10px;\n    top: 40px;\n    left: 50%;\n    margin-left: -15px;\n    border-radius: 20px / 7px;\n}\n.belly > .marking {\n    position: absolute;\n    width: 30px;\n    height: 14px;\n    background: #89775a;\n    left: 50%;\n    top: 22px;\n    margin-left: -15px;\n    border-radius: 100px / 50px;\n}\n.belly > .marking::before {\n    content: \"\";\n    position: absolute;\n    background: #efdccb;\n    width: 44px;\n    height: 30px;\n    left: 50%;\n    top: 4px;\n    margin-left: -22px;\n    border-radius: 100px / 80px;\n}\n.belly > .mark1 {\n    transform: translate(-40px, 5px) rotate(-10deg);\n}\n.belly > .mark2 {\n    transform: translate(0) rotate(0);\n}\n.belly > .mark3 {\n    transform: translate(40px, 5px) rotate(10deg);\n}\n.belly > .mark4 {\n    transform: translate(-60px, 34px) rotate(-15deg);\n}\n.belly > .mark5 {\n    transform: translate(60px, 34px) rotate(15deg);\n}\n.belly > .mark6 {\n    transform: translate(-20px, 28px);\n    z-index: 10;\n}\n.belly > .mark7 {\n    transform: translate(20px, 28px);\n    z-index: 10;\n}";
exports.default = string;
},{}],"dynamic.js":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 50,
  n: 1,
  ui: {
    output1: document.querySelector('#output1'),
    output2: document.querySelector('#output2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.output1.innerText = _css2.default.substr(0, player.n);
    player.ui.output2.innerHTML = _css2.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // value = pause / play / slow ...
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.output1.innerText = _css2.default.substr(0, player.n);
    player.ui.output2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.output1.scrollTop = player.ui.output1.scrollHeight;
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  play: function play() {
    player.pause();
    player.id = setInterval(player.run, player.time);
  },
  slow: function slow() {
    player.pause();
    player.time = 200;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};

player.init();
},{"./css.js":"css.js"}],"..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '60652' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["..\\..\\..\\..\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","dynamic.js"], null)
//# sourceMappingURL=/dynamic.331defa6.map