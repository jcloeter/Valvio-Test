// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hDMVF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "b732b4266ba49e6c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["hDMVF"], null, "parcelRequire7f56")
const valves = document.querySelectorAll(".btn-valve");
const imgPitch = document.querySelector(".img-pitch");
const btnSubmit = document.getElementById("submit");
const btnStart = document.querySelector(".start");
const btnContainer = document.querySelector(".btn-container");
const instructions = document.querySelector(".instructions");
const quizPitchSummary = document.querySelector(".quiz-pitch-summary");
const score = document.querySelector(".score");
const notesRemaining = document.querySelector(".notes-remaining");
const summary = document.querySelector(".summary");
const ctnrCorrectWrong = document.querySelector(".container-correct-wrong");
///////////////////////////////////////////////////
class Game {
    _score = 0;
    _valveArr = [
        ...valves
    ];
    _randArr;
    _gameLength;
    _pitches = [
        {
            name: "an4",
            fingering: 12
        },
        {
            name: "bn4",
            fingering: 2
        },
        {
            name: "cn4",
            fingering: 0
        },
        {
            name: "cn5",
            fingering: 0
        },
        {
            name: "dn4",
            fingering: 13
        },
        {
            name: "en4",
            fingering: 12
        },
        {
            name: "gn4",
            fingering: 0
        },
        {
            name: "fn5",
            fingering: 1
        }, 
    ];
    constructor(){
        this._addListeners();
    }
    //////////////////////////////////////////
    //Valve Functionality
    _toggleCheck = function(ch, valveEl) {
        valveEl.checked = ch ? false : true;
    };
    _loopOverValves = function(e, bool, numValves = [
        7,
        8,
        9
    ]) {
        numValves.forEach((v, i)=>{
            e.key == v && this._toggleCheck(bool, this._valveArr[i]);
        });
    };
    _resetValves = function() {
        this._valveArr.forEach((v)=>{
            v.checked = false;
        });
    };
    //Called in constructor. Initializes valve fucntionality, submit click and shortcut keypress, and the start button which launches game
    _addListeners = function() {
        const helper = this;
        document.addEventListener("keydown", function(e) {
            helper._loopOverValves(e, false);
        });
        document.addEventListener("keyup", function(e) {
            helper._loopOverValves(e, true);
        });
        document.addEventListener("keypress", function(e) {
            if (e.key != "a") return;
            helper._checkAnswer(helper._randArr);
        });
        btnSubmit.addEventListener("click", function() {
            helper._checkAnswer(helper._randArr);
        });
        //Hides start button after called and relaces with submit. Hides instruction box and replaces with box containing game summary. Resets valves from opening page. Then takes our array of pitches and generates a random order.
        btnStart.addEventListener("click", function() {
            btnStart.classList.add("hide-btn");
            btnSubmit.classList.remove("hide-btn");
            instructions.classList.add("hidden");
            quizPitchSummary.classList.remove("hidden");
            helper._resetValves();
            helper._generateRandomNoteArr(helper._pitches);
        });
    };
    _getAnswer = function() {
        const result = this._valveArr.map((v)=>v.checked
        );
        return result;
    };
    _checkAnswer = function(arr) {
        const correctFing = arr[0].fingering;
        const boolArr = this._getAnswer();
        let fingArr = boolArr.map((x, i)=>{
            return x == true ? i + 1 : "";
        }).join("");
        if (!fingArr) fingArr = "0";
        this._resetValves();
        fingArr == correctFing ? this._answeredCorrect(this._randArr) : this._answeredWrong(this._randArr, fingArr);
    };
    //Correct message is displayed, checks to see if game should be over, updates score and removes first element from _randArr. Adds 'next' button along with event listener to initialize the next round. 'next' Button is then removed until a correct answer is guessed again
    _answeredCorrect = function(arr) {
        ctnrCorrectWrong.textContent = "";
        ctnrCorrectWrong.insertAdjacentHTML("afterbegin", `<p class="text-instruction correct">\n    <span class="emoji">✅</span>Correct! ${arr[0].letter}${arr[0].accidental} is ${arr[0].fingering}\n  </p>`);
        this._score++;
        this._randArr.shift();
        this._updateSummaryInfo(this._randArr);
        if (this._randArr.length === 0) return this._gameOver();
        btnContainer.insertAdjacentHTML("beforeend", ` <button class="btn-next btn-start">🎶 Next</button>`);
        const helper = this;
        const btnNext = document.querySelector(".btn-next");
        btnNext.addEventListener("click", function() {
            helper._newRoundInit();
            btnNext.remove();
            ctnrCorrectWrong.textContent = "";
            ctnrCorrectWrong.insertAdjacentHTML("afterbegin", `<p class="text-instruction">\n      <span class="emoji">🎺</span>Press valves below\n    </p>`);
        });
    };
    _answeredWrong = function(arr, fingArr) {
        ctnrCorrectWrong.textContent = "";
        ctnrCorrectWrong.insertAdjacentHTML("afterbegin", `<p class="text-instruction incorrect">\n<span class="emoji">❌</span>Try Again! ${arr[0].letter}${arr[0].accidental} is not ${fingArr}\n</p>`);
        this._score--;
    };
    //Only called when the game is started, updates _randArr of class. This value is used to display the next note and calculate number of rounds left.
    _generateRandomNoteArr = function(pitchArr) {
        const mixedUp = pitchArr.map((x, i)=>{
            x.rand = Math.random();
            return x;
        }).sort((x, y)=>{
            return x.rand > y.rand ? -1 : 1;
        });
        this._randArr = mixedUp;
        this._gameLength = this._randArr.length;
        this._formatPitchName(this._randArr);
        this._newRoundInit();
    };
    _formatPitchName = function(arr) {
        arr.forEach((p)=>{
            p.letter = p.name[0].toUpperCase();
            if (p.name[1] === "n") p.accidental = `♮`;
            if (p.name[1] === "f") p.accidental = `♭`;
            if (p.name[1] === "s") p.accidental = `♯`;
        });
    };
    //Is called for first round and all other rounds
    _newRoundInit = function() {
        this._displayImg(this._randArr);
        this._updateSummaryInfo(this._randArr);
    };
    _displayImg = function(arr) {
        imgPitch.src = `/img/${arr[0].name}.avif`;
    };
    //A reusable function that updates the game summary section with stats
    _updateSummaryInfo = function(arr, scoreNum = this._score, lengthNum = this._gameLength) {
        score.textContent = "";
        notesRemaining.textContent = "";
        score.insertAdjacentHTML("afterbegin", `<span class="emoji">🎼</span>Score: ${scoreNum}/${lengthNum - arr.length}`);
        notesRemaining.insertAdjacentHTML("afterbegin", `<span class="emoji">🎵</span>Notes left: ${arr.length}`);
    };
    _gameOver = function() {
        ctnrCorrectWrong.textContent = "";
        ctnrCorrectWrong.insertAdjacentHTML("afterbegin", `<p class="text-instruction"><span class="emoji">📈</span>Keep practicing until you know them all </p> `);
        ctnrCorrectWrong.insertAdjacentHTML("afterbegin", `<p class="text-instruction"><span class="emoji">🥇</span>Congrats on finishing! </p> `);
        ctnrCorrectWrong.insertAdjacentHTML("afterend", `<p class="text-instruction"><span class="emoji">🔁</span>Refresh page to play again</p> `);
        imgPitch.remove();
        notesRemaining.remove();
    };
}
const init = new Game();

//# sourceMappingURL=index.6ba49e6c.js.map
