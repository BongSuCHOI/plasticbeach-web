/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _module_CustomCursor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/CustomCursor.js */ "./src/js/module/CustomCursor.js");
/* harmony import */ var _module_Marquee_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/Marquee.js */ "./src/js/module/Marquee.js");
/* harmony import */ var _module_MouseOverTooltip_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/MouseOverTooltip.js */ "./src/js/module/MouseOverTooltip.js");
/* harmony import */ var _module_CircleLogo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module/CircleLogo.js */ "./src/js/module/CircleLogo.js");
/* harmony import */ var _module_Accordion_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module/Accordion.js */ "./src/js/module/Accordion.js");
/* harmony import */ var _module_Email_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./module/Email.js */ "./src/js/module/Email.js");
/* harmony import */ var _data_text_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/text.json */ "./src/js/data/text.json");
/* harmony import */ var _data_work_json__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/work.json */ "./src/js/data/work.json");
/* harmony import */ var _css_scss_style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/scss/style.scss */ "./src/css/scss/style.scss");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }


// module import





 // data


 // css import

 // DOM text bind

var DomTextBind = /*#__PURE__*/function () {
  function DomTextBind() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, DomTextBind);

    this.lang = "en";
    this.workData;
    this.textData;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(DomTextBind, [{
    key: "getJson",
    value: function () {
      var _getJson = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
        var _this = this;

        var workRes, textRes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                workRes = fetch(_data_work_json__WEBPACK_IMPORTED_MODULE_14__).then(function (workRes) {
                  return workRes.json();
                });
                _context.next = 3;
                return workRes.then(function (workData) {
                  return _this.workData = workData;
                });

              case 3:
                textRes = fetch(_data_text_json__WEBPACK_IMPORTED_MODULE_13__).then(function (textRes) {
                  return textRes.json();
                });
                _context.next = 6;
                return textRes.then(function (textData) {
                  return _this.textData = textData;
                });

              case 6:
                this.bindWorkList();
                this.bindText();
                _module_CustomCursor_js__WEBPACK_IMPORTED_MODULE_7__["default"].create(); // children class

                convert.parentData(this.workData, this.textData);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getJson() {
        return _getJson.apply(this, arguments);
      }

      return getJson;
    }()
  }, {
    key: "bindWorkList",
    value: function bindWorkList() {
      var data = this.workData;
      var parent = document.querySelector(".work_list");
      var embedData = [];

      for (var i = 0; i < data.length; i++) {
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");
        dt.setAttribute("class", "list hover ".concat(data[i].name));
        dt.setAttribute("category", "".concat(data[i].category));
        dt.innerHTML = "<a href=\"#\" class=\"Nefarious toggle_font\">".concat(data[i].title.en, "</a>");
        dd.setAttribute("class", "detail ".concat(data[i].name));
        dd.setAttribute("category", "".concat(data[i].category));
        parent.appendChild(dt);
        parent.appendChild(dd);
        embedData.push(data[i].url);
      }

      (0,_module_MouseOverTooltip_js__WEBPACK_IMPORTED_MODULE_9__["default"])(embedData);
    }
  }, {
    key: "bindText",
    value: function bindText() {
      var data = this.textData;
      var textArr = Object.entries(data[0]);
      var budgietArr = Object.entries(data[1]);
      var timelineArr = Object.entries(data[2]);
      var categoryArr = Object.entries(data[3]);

      function bindFuc(variable, name) {
        // 일반 content text 및 category select radio btn text
        if (name == 'content' || name == 'category') {
          for (var i = 0; i < variable.length; i++) {
            var target = document.querySelector("[data-name='".concat(variable[i][0], "']"));
            target.innerHTML = variable[i][1].en; // 일반 content text

            if (name == 'content') {
              // marquee text
              if (target.classList.contains("marquee_text")) {
                target.innerHTML = variable[i][1].en + variable[i][1].en;
              } // contact input placeholder


              if (target.hasAttribute('placeholder')) {
                target.innerHTML = '';
                target.setAttribute('placeholder', variable[i][1].en);
              }
            }
          }
        } // 예산/일정 select box option text
        else if (name == 'budgiet' || name == 'timeline') {
          for (var _i = 0; _i < variable.length; _i++) {
            var parent = document.querySelector("select.".concat(name));
            var html = document.createElement("option");
            html.setAttribute("class", variable[_i][0]);
            html.innerHTML = variable[_i][1].en;
            parent.appendChild(html);
          }
        }
      }

      bindFuc(textArr, 'content');
      bindFuc(budgietArr, 'budgiet');
      bindFuc(timelineArr, 'timeline');
      bindFuc(categoryArr, 'category');
      (0,_module_Marquee_js__WEBPACK_IMPORTED_MODULE_8__["default"])(".marquee", 0.2);
    }
  }, {
    key: "workCategory",
    value: function workCategory() {
      var list = document.querySelectorAll('.work_list .list');

      for (var i = 0; i < list.length; i++) {
        var listCategory = list[i].getAttribute('category');

        if (this.id == 'all') {
          list[i].style.display = 'flex';
        } else if (listCategory == this.id) {
          list[i].style.display = 'flex';
        } else {
          list[i].style.display = 'none';
        }
      }
    }
  }]);

  return DomTextBind;
}(); // convert color & text


var Convert = /*#__PURE__*/function (_DomTextBind) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(Convert, _DomTextBind);

  var _super = _createSuper(Convert);

  function Convert(lang) {
    var _this2;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Convert);

    _this2 = _super.call(this, lang);
    _this2.workData;
    _this2.textData;
    return _this2;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Convert, [{
    key: "parentData",
    value: function parentData(work, text) {
      this.workData = work;
      this.textData = text;
    }
  }, {
    key: "changeWork",
    value: function changeWork() {
      var data = this.workData;

      for (var i = 0; i < data.length; i++) {
        var target = document.querySelector(".".concat(data[i].name, " a"));

        if (this.lang === "en") {
          target.innerHTML = data[i].title.en;
        } else {
          target.innerHTML = data[i].title.ko;
        }
      }
    }
  }, {
    key: "changeText",
    value: function changeText() {
      var data = this.textData;
      var textArr = Object.entries(data[0]);
      var budgietArr = Object.entries(data[1]);
      var timelineArr = Object.entries(data[2]);
      var categoryArr = Object.entries(data[3]);
      var lang = this.lang;

      function changeFuc(variable, name) {
        // 일반 content text 및 category select radio btn text
        if (name == 'content' || name == 'category') {
          for (var i = 0; i < variable.length; i++) {
            var target = document.querySelector("[data-name='".concat(variable[i][0], "']"));

            if (lang === "en") {
              target.innerHTML = variable[i][1].en; // 일반 content text

              if (name == 'content') {
                // marquee text
                if (target.classList.contains("marquee_text")) {
                  target.innerHTML = textArr[i][1].en + textArr[i][1].en;
                } // contact input placeholder


                if (target.hasAttribute('placeholder')) {
                  target.setAttribute('placeholder', textArr[i][1].en);
                }
              }
            } else {
              target.innerHTML = variable[i][1].ko; // 일반 content text

              if (name == 'content') {
                // marquee text
                if (target.classList.contains("marquee_text")) {
                  target.innerHTML = textArr[i][1].ko + textArr[i][1].ko;
                } // contact input placeholder


                if (target.hasAttribute('placeholder')) {
                  target.setAttribute('placeholder', textArr[i][1].ko);
                }
              }
            }
          }
        } // 예산/일정 select box option text
        else if (name == 'budgiet' || name == 'timeline') {
          for (var _i2 = 0; _i2 < variable.length; _i2++) {
            var _target = document.querySelector(".".concat(variable[_i2][0]));

            if (lang === "en") {
              _target.innerHTML = variable[_i2][1].en;
            } else {
              _target.innerHTML = variable[_i2][1].ko;
            }
          }
        }
      }

      changeFuc(textArr, 'content');
      changeFuc(budgietArr, 'budgiet');
      changeFuc(timelineArr, 'timeline');
      changeFuc(categoryArr, 'category');
    }
  }, {
    key: "reverseColorTheme",
    value: function reverseColorTheme() {
      var state = document.documentElement.getAttribute("color-theme");

      if (state === "white") {
        document.documentElement.setAttribute("color-theme", "blue");
      } else {
        document.documentElement.setAttribute("color-theme", "white");
      }
    }
  }, {
    key: "change",
    value: function change() {
      var enFont = document.querySelectorAll(".toggle_font");
      convert.lang === "en" ? convert.lang = "ko" : convert.lang = "en";
      convert.changeWork();
      convert.changeText();
      convert.reverseColorTheme();

      for (var i = 0; i < enFont.length; i++) {
        if (enFont[i].classList.contains("Nefarious")) {
          enFont[i].classList.remove("Nefarious");
        } else {
          enFont[i].classList.add("Nefarious");
        }
      }
    }
  }]);

  return Convert;
}(DomTextBind); // instance


var domTextBind = new DomTextBind();
var convert = new Convert(); // run

domTextBind.getJson(); // reverse color

document.querySelector(".reverse_color").addEventListener("click", convert.change); // workListCategory

var radios = document.querySelectorAll('[type=radio]');
radios.forEach(function (elem) {
  return elem.addEventListener('click', domTextBind.workCategory);
}); // custom input[type="file"](file-name bind)

(function bindFileInput() {
  var elem = document.querySelector("#file");
  var bindTarget = document.querySelector(".file_name");
  elem.addEventListener("change", function () {
    var value = this.value;
    bindTarget.value = value;
  });
})();

/***/ }),

/***/ "./src/js/module/Accordion.js":
/*!************************************!*\
  !*** ./src/js/module/Accordion.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordion() {
  var accordionElem = document.getElementsByClassName('accro_btn'); // dt(.list)

  var action = function action() {
    for (var i = 0; i < accordionElem.length; i++) {
      accordionElem[i].addEventListener('click', change);
    }
  };

  var clear = function clear() {
    for (var i = 0; i < accordionElem.length; i++) {
      var accordionCon = accordionElem[i].nextElementSibling;
      accordionElem[i].classList.remove('open');
      accordionCon.style.maxHeight = null;
    }
  };

  var change = function change(e) {
    var clickDt = e.currentTarget;
    var accordionCon = clickDt.nextElementSibling;

    if (clickDt.classList.contains('open')) {
      clickDt.classList.remove('open');
      accordionCon.style.maxHeight = null;
      return;
    }

    clear();
    clickDt.classList.add('open');
    accordionCon.style.maxHeight = accordionCon.scrollHeight + "px";
  };

  action();
}

accordion();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/module/CircleLogo.js":
/*!*************************************!*\
  !*** ./src/js/module/CircleLogo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var circleLogoAnimation = {
  bindSGV: function bindSGV() {
    var parentBtn = document.querySelector(".reverse_color");

    if (!parentBtn) {
      return;
    }

    ;
    var circleLogo = "\n            <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                width=\"166.266\"\n                viewBox=\"0 0 166.266 160.462\"\n                class=\"circleLogo\"\n            >\n                <g transform=\"translate(-1099.01 -349.083)\">\n                    <g transform=\"translate(1099.01 349.083)\">\n                        <path\n                            d=\"M1423.986,486.061l22.157-4.9,1.034,4.671-1.827.4.021.09a6.553,6.553,0,0,1,3.548,4.68c1.047,4.731-2.074,8.94-7.254,10.085-4.731,1.048-9.448-1.4-10.5-6.155a6.607,6.607,0,0,1,.959-5.457l-7.036,1.557Zm16.729,10.024a4.263,4.263,0,1,0-5.143-3.228A4.28,4.28,0,0,0,1440.714,496.084Z\"\n                            transform=\"translate(-1289.309 -426.423)\"\n                        />\n                        <path\n                            d=\"M1445.274,533.36l22.69-.339.077,5.09-22.69.339Z\"\n                            transform=\"translate(-1301.775 -456.793)\"\n                        />\n                        <path\n                            d=\"M1439.518,562.324l1.806.353.011-.061c-1.334-1.01-1.848-3.173-1.419-5.37.965-4.936,5.519-7.608,10.574-6.62,4.936.965,8.209,5.323,7.273,10.108a5.765,5.765,0,0,1-3.306,4.446l-.012.061,1.776.347-.976,5-16.7-3.264Zm8.368,1.636a4.319,4.319,0,0,0,5.073-3.415,4.339,4.339,0,1,0-5.073,3.415Z\"\n                            transform=\"translate(-1297.833 -466.984)\"\n                        />\n                        <path\n                            d=\"M1439.266,605.919c.9.4,1.48-.1,1.84-.85a1.3,1.3,0,0,0-.383-1.819c-.83-.4-1.6.147-3.181,2.007-2.725,3.181-4.761,3.663-7,2.584-3.2-1.544-3.89-5.279-2.212-8.76,1.664-3.454,4.81-4.966,8.092-3.794l-2.2,4.559a1.755,1.755,0,0,0-2.248,1.061,1.61,1.61,0,0,0,.415,2.175c.857.412,1.552.1,3.375-1.845,3.052-3.3,5.064-3.585,6.86-2.72,3.039,1.464,3.628,5.256,2.137,8.349-1.6,3.315-4.553,4.784-7.671,3.554Z\"\n                            transform=\"translate(-1291.334 -493.026)\"\n                        />\n                        <path\n                            d=\"M1417.208,622.531l10.678,7.684,1.469-2.041,3.136,2.257-1.468,2.042,4.6,3.313-2.973,4.132-4.605-3.314-1.433,1.992-3.136-2.257,1.434-1.992-10.679-7.684Z\"\n                            transform=\"translate(-1283.599 -509.209)\"\n                        />\n                        <path\n                            d=\"M1405.555,637.1l12.457,11.6-3.469,3.726-12.457-11.6Zm13.782,12.829,2.828,2.633-3.469,3.726-2.828-2.632Z\"\n                            transform=\"translate(-1276.485 -517.743)\"\n                        />\n                        <path\n                            d=\"M1381.88,668.141a3.914,3.914,0,0,0,4.482-.281,4.338,4.338,0,0,0-5.152-6.945,3.885,3.885,0,0,0-1.66,3.992l-4.205,3.029a9.14,9.14,0,0,1,15.849-8.846,9.107,9.107,0,0,1-13.495,12.062Z\"\n                            transform=\"translate(-1260.409 -528.379)\"\n                        />\n                        <path\n                            d=\"M1328.066,680.158l4.833,22.174-4.974,1.084-1.5-6.862a6.331,6.331,0,0,1-4.322,2.92c-4.315.94-8.976-1.433-10.184-6.977-1.117-5.123,1.307-9.7,6.43-10.818,2.008-.438,4.218.053,5.274,1.3l.059-.013-.385-1.768Zm-11.189,11.165a4.2,4.2,0,1,0,8.217-1.76,4.165,4.165,0,0,0-4.979-3.4A4.255,4.255,0,0,0,1316.877,691.323Z\"\n                            transform=\"translate(-1223.531 -542.954)\"\n                        />\n                        <path\n                            d=\"M1278.581,694a3.809,3.809,0,0,0-3.73-3.513,3.579,3.579,0,0,0-3.209,1.354l-5.2-.4c1.9-3.576,5.157-5.511,8.734-5.238a9.078,9.078,0,1,1-9.541,8.16,6.543,6.543,0,0,1,.225-1.337Zm-8.027,2.832a4.018,4.018,0,0,0,7.7.588Z\"\n                            transform=\"translate(-1196.565 -546.479)\"\n                        />\n                        <path\n                            d=\"M1223.334,672.346l-.66,1.718.057.021c1.226-1.139,3.446-1.271,5.536-.467,4.695,1.8,6.538,6.752,4.69,11.562-1.8,4.695-6.665,7.164-11.216,5.414a5.771,5.771,0,0,1-3.808-4.027l-.057-.021-.649,1.688-4.751-1.827,6.108-15.888Zm-3.059,7.959a4.32,4.32,0,0,0,2.484,5.588,4.341,4.341,0,1,0-2.484-5.588Z\"\n                            transform=\"translate(-1165.453 -537.309)\"\n                        />\n                        <path\n                            d=\"M1180.364,659.752a3.918,3.918,0,0,0,1.54,4.22,4.339,4.339,0,0,0,5.2-6.909,3.885,3.885,0,0,0-4.3-.461l-4.095-3.176a9.14,9.14,0,0,1,12.972,12.7,9.107,9.107,0,0,1-15.391-9.527Z\"\n                            transform=\"translate(-1143.734 -526.103)\"\n                        />\n                        <path\n                            d=\"M1157.776,618.224l-7.5,5.59c-1.77,1.32-2.264,2.759-1.147,4.259,1.155,1.549,2.614,1.609,4.311.344l7.672-5.719,3.042,4.082-18.2,13.563-3.042-4.081,5.852-4.363a4.8,4.8,0,0,1-4.41-2.22c-2.327-3.124-1.772-6.482,1.793-9.14l8.582-6.4Z\"\n                            transform=\"translate(-1124.721 -504.296)\"\n                        />\n                        <path\n                            d=\"M1140.433,572.347l-22.071,5.276-1.112-4.653,1.819-.436-.021-.089a6.552,6.552,0,0,1-3.627-4.619c-1.126-4.712,1.923-8.972,7.082-10.206,4.713-1.127,9.471,1.236,10.6,5.978a6.607,6.607,0,0,1-.867,5.472l7.009-1.675Zm-16.9-9.74a4.263,4.263,0,1,0,5.2,3.141A4.28,4.28,0,0,0,1123.538,562.607Z\"\n                            transform=\"translate(-1108.484 -471.036)\"\n                        />\n                        <path\n                            d=\"M1121.854,545.873l-22.684.719-.161-5.089,22.684-.718Z\"\n                            transform=\"translate(-1099.01 -461.34)\"\n                        />\n                        <path\n                            d=\"M1131.82,496.4l-1.811-.323-.011.06c1.35.989,1.9,3.143,1.508,5.346-.882,4.951-5.39,7.7-10.462,6.8-4.951-.882-8.3-5.184-7.441-9.985a5.767,5.767,0,0,1,3.231-4.5l.012-.061-1.782-.317.893-5.012,16.755,2.986Zm-8.393-1.5a4.318,4.318,0,0,0-5.015,3.5,4.34,4.34,0,1,0,5.015-3.5Z\"\n                            transform=\"translate(-1107.478 -430.665)\"\n                        />\n                        <path\n                            d=\"M1133.154,458.628c-.9-.383-1.478.129-1.825.881a1.3,1.3,0,0,0,.413,1.811c.835.386,1.6-.173,3.146-2.06,2.671-3.225,4.7-3.742,6.954-2.7,3.229,1.491,3.977,5.213,2.357,8.721-1.606,3.479-4.727,5.045-8.027,3.927l2.121-4.594a1.756,1.756,0,0,0,2.229-1.1,1.609,1.609,0,0,0-.451-2.168c-.863-.4-1.553-.075-3.344,1.9-3,3.345-5,3.668-6.813,2.833-3.062-1.414-3.716-5.194-2.276-8.312,1.542-3.342,4.473-4.86,7.61-3.681Z\"\n                            transform=\"translate(-1115.347 -410.341)\"\n                        />\n                        <path\n                            d=\"M1150.177,439.8l-10.8-7.5-1.435,2.065-3.173-2.2,1.435-2.065-4.659-3.237,2.9-4.181,4.659,3.236,1.4-2.015,3.174,2.205-1.4,2.014,10.8,7.506Z\"\n                            transform=\"translate(-1118.059 -392.175)\"\n                        />\n                        <path\n                            d=\"M1149.394,409.84l-2.872-2.585,3.406-3.783,2.872,2.585Zm13.994,12.6-12.649-11.386,3.405-3.784,12.65,11.387Z\"\n                            transform=\"translate(-1126.832 -380.932)\"\n                        />\n                        <path\n                            d=\"M1189.188,392.18a3.917,3.917,0,0,0-4.479.357,4.339,4.339,0,0,0,5.27,6.858,3.883,3.883,0,0,0,1.593-4.02l4.155-3.1a9.141,9.141,0,0,1-15.7,9.111,9.108,9.108,0,0,1,13.293-12.288Z\"\n                            transform=\"translate(-1145.376 -371.203)\"\n                        />\n                        <path\n                            d=\"M1238.339,372.339l-5.206-22.087,4.955-1.169,1.611,6.835a6.335,6.335,0,0,1,4.273-2.992c4.3-1.013,9,1.282,10.3,6.8,1.2,5.1-1.143,9.721-6.247,10.925-2,.471-4.218.017-5.295-1.21l-.06.015.415,1.76Zm11-11.351a4.2,4.2,0,1,0-8.186,1.9,4.164,4.164,0,0,0,5.036,3.319A4.255,4.255,0,0,0,1249.338,360.988Z\"\n                            transform=\"translate(-1177.55 -349.083)\"\n                        />\n                        <path\n                            d=\"M1292.607,364.689a3.811,3.811,0,0,0,3.789,3.451,3.583,3.583,0,0,0,3.186-1.408l5.2.308c-1.842,3.608-5.064,5.6-8.645,5.386a9.079,9.079,0,1,1,9.4-8.321,6.525,6.525,0,0,1-.2,1.34Zm7.98-2.966a4.019,4.019,0,0,0-7.714-.459Z\"\n                            transform=\"translate(-1209.479 -352.127)\"\n                        />\n                        <path\n                            d=\"M1343.506,381.99l.631-1.729-.057-.02c-1.207,1.158-3.424,1.327-5.526.56-4.725-1.727-6.651-6.642-4.883-11.482,1.726-4.725,6.543-7.275,11.124-5.6a5.768,5.768,0,0,1,3.875,3.963l.058.021.622-1.7,4.782,1.747-5.841,15.988Zm2.926-8.008a4.32,4.32,0,0,0-2.578-5.546,4.34,4.34,0,1,0,2.578,5.546Z\"\n                            transform=\"translate(-1236.043 -357.352)\"\n                        />\n                        <path\n                            d=\"M1390.906,397.1a3.915,3.915,0,0,0-1.611-4.194,4.339,4.339,0,0,0-5.083,7,3.885,3.885,0,0,0,4.3.388l4.149,3.106a9.14,9.14,0,0,1-13.186-12.475,9.107,9.107,0,0,1,15.55,9.265Z\"\n                            transform=\"translate(-1262.168 -371.431)\"\n                        />\n                        <path\n                            d=\"M1409.878,426.942l7.4-5.715c1.749-1.348,2.219-2.8,1.076-4.277-1.18-1.53-2.641-1.566-4.316-.272l-7.575,5.845-3.11-4.03,17.966-13.864,3.11,4.031-5.778,4.458a4.806,4.806,0,0,1,4.446,2.147c2.379,3.084,1.88,6.452-1.641,9.168l-8.474,6.54Z\"\n                            transform=\"translate(-1277.23 -381.609)\"\n                        />\n                    </g>\n                </g>\n            </svg>\n        ";
    parentBtn.innerHTML = circleLogo;
    circleLogoAnimation.playAnimation(parentBtn);
  },
  playAnimation: function playAnimation(parent) {
    var target = parent.querySelector(".reverse_color .circleLogo");

    if (!target) {
      return;
    }

    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.defaults({
      repeat: -1,
      ease: "none"
    });
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(target, {
      duration: 10,
      rotate: -360
    }); // Hover Animation Speed

    var hover = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(target, {
      duration: 0.8,
      rotate: 360,
      paused: true
    });
    target.addEventListener("mouseenter", function () {
      return hover.play();
    });
    target.addEventListener("mouseleave", function () {
      return hover.pause();
    });
  }
};
circleLogoAnimation.bindSGV();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (circleLogoAnimation);

/***/ }),

/***/ "./src/js/module/CustomCursor.js":
/*!***************************************!*\
  !*** ./src/js/module/CustomCursor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _PlatformCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlatformCheck.js */ "./src/js/module/PlatformCheck.js");



var customCursor = {
  // Created Cursor Element
  create: function create() {
    if (!(0,_PlatformCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
      return;
    }

    var createElem = document.createElement("div");
    var createPointer = document.createElement("span");
    createElem.setAttribute("class", "cursor");
    createElem.appendChild(createPointer);
    document.body.appendChild(createElem);
    customCursor.init();
  },
  // Cursor Init
  init: function init() {
    var cursor = document.querySelector(".cursor");
    var pos = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };
    var mouse = {
      x: pos.x,
      y: pos.y
    };
    var speed = 1;
    var xSet = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.quickSetter(cursor, "x", "px");
    var ySet = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.quickSetter(cursor, "y", "px");
    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(".cursor", {
      xPercent: -50,
      yPercent: -50
    });
    customCursor.run({
      pos: pos,
      mouse: mouse,
      speed: speed,
      xSet: xSet,
      ySet: ySet
    });
    customCursor.reverseColor(cursor);
  },
  // Update Coordinate
  run: function run(rest) {
    var pos = rest.pos;
    var mouse = rest.mouse;
    var speed = rest.speed;
    var xSet = rest.xSet;
    var ySet = rest.ySet;
    window.addEventListener("mousemove", function (e) {
      mouse.x = e.x;
      mouse.y = e.y;
    }); // Follow Mouse

    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.ticker.add(function () {
      // adjust speed for higher refresh monitors
      var dt = 1.0 - Math.pow(1.0 - speed, gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
  },
  // Reverse Color
  reverseColor: function reverseColor(cursor) {
    var hoverTag = document.querySelectorAll(".hover");
    var arr = [];
    arr.push.apply(arr, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(hoverTag));
    arr.forEach(function (obj) {
      obj.addEventListener("mouseenter", function () {
        cursor.classList.add("hover");
      });
      obj.addEventListener("mouseleave", function () {
        cursor.classList.remove("hover");
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customCursor);

/***/ }),

/***/ "./src/js/module/Email.js":
/*!********************************!*\
  !*** ./src/js/module/Email.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/es/index.js");


function EmailJs() {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // generate a five digit number for the contact_number variable

    this.contact_number.value = Math.random() * 100000 | 0; // these IDs from the previous steps

    emailjs_com__WEBPACK_IMPORTED_MODULE_0__["default"].sendForm('service_o7o9yvm', 'template_i90fmnx', this, 'user_VqHFKDuJ0yd1xOoOukLDG').then(function () {
      console.log('SUCCESS!');
      window.location.reload();
    }, function (error) {
      console.log('FAILED...', error);
      alert('문의메일 전송에 실패하였습니다. 다시 시도해 주세요.');
    });
  });
}

EmailJs();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailJs);

/***/ }),

/***/ "./src/js/module/Marquee.js":
/*!**********************************!*\
  !*** ./src/js/module/Marquee.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Marquee(selector, speed) {
  var parentElem = document.querySelector(selector);
  var childElem = parentElem.children[0];
  var copyText = childElem.innerText;
  childElem.append(copyText);
  var i = 0;
  setInterval(function () {
    childElem.style.marginTop = "".concat(i, "px");

    if (i > childElem.clientWidth / 2) {
      i = 0;
    }

    i = i + speed;
  }, 0);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marquee);

/***/ }),

/***/ "./src/js/module/MouseOverTooltip.js":
/*!*******************************************!*\
  !*** ./src/js/module/MouseOverTooltip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlatformCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformCheck.js */ "./src/js/module/PlatformCheck.js");


function mouseOverTooltip(embedData) {
  if (!(0,_PlatformCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])()) {
    return;
  }

  var hoverBox = document.querySelectorAll(".work_list .list");
  hoverBox.forEach(function (obj, i) {
    var iframe = document.createElement("iframe");
    var tooltip = null;
    iframe.setAttribute("class", "video_tooltip");
    iframe.setAttribute("name", "work");
    iframe.setAttribute("frameborder", "0");
    iframe.src = "https://www.youtube.com/embed/".concat(embedData[i], "?rel=0&mute=1&autoplay=1&controls=0&enablejsapi=1&fs=0&modestbranding=1&playsinline=1&color=white\"");
    iframe.width = "560";
    iframe.height = "315";
    obj.addEventListener("mouseenter", function () {
      this.nextElementSibling.appendChild(iframe);
      tooltip = this.nextElementSibling.querySelector(".video_tooltip");
      tooltip.style.display = 'block';
    });
    obj.addEventListener("mousemove", function (e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
      tooltip.style.left = mouseX + "px";
      tooltip.style.top = mouseY - tooltip.clientHeight + "px";

      if (tooltip.offsetTop < 0) {
        tooltip.style.top = mouseY + "px";
      }
    });
    obj.addEventListener("mouseleave", function () {
      tooltip.style.display = 'none';
      tooltip = null;
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouseOverTooltip);

/***/ }),

/***/ "./src/js/module/PlatformCheck.js":
/*!****************************************!*\
  !*** ./src/js/module/PlatformCheck.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function platformCheck() {
  if (["Win16", "Win32", "Win64", "Mac", "MacIntel"].find(function (element) {
    return element == navigator.platform;
  })) {
    return true;
  } else {
    return false;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (platformCheck);

/***/ }),

/***/ "./src/css/scss/style.scss":
/*!*********************************!*\
  !*** ./src/css/scss/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/data/text.json":
/*!*******************************!*\
  !*** ./src/js/data/text.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:application/json;base64,Ww0KICAgIHsNCiAgICAgICAgInRpdGxlIjogew0KICAgICAgICAgICAgImtvIjogIu2UjOudvOyKpO2LsSDruYTsuZg8YnI+7YGs66as7JeQ7J207Yuw67iMIiwNCiAgICAgICAgICAgICJlbiI6ICJwbGFzdGljIGJlYWNoPGJyPmNyZWF0aXZlIHN0dWRpbyINCiAgICAgICAgfSwNCiAgICAgICAgImVtYWlsIjogew0KICAgICAgICAgICAgImtvIjogIuydtCA6IGNvbnRhY3RAcGxhc3RpY2JlYWNoLm5ldCIsDQogICAgICAgICAgICAiZW4iOiAiZSA6IGNvbnRhY3RAcGxhc3RpY2JlYWNoLm5ldCINCiAgICAgICAgfSwNCiAgICAgICAgImFkZHJlc3MiOiB7DQogICAgICAgICAgICAia28iOiAi7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDrj5nqtZDroZwgNyDsgq3rhZXruYzrlKkgNOy4tSAo7KO8KeyXkOydtOyXoOyVhOydvOuenOuTnCIsDQogICAgICAgICAgICAiZW4iOiAiYSA6IDcsIGRvbmdneW8gLSBybyAxOSBnaWwsIG1hcG8tZ3UsIHNlb3VsIg0KICAgICAgICB9LA0KICAgICAgICAiY29udGFjdF9pbmZvIjogew0KICAgICAgICAgICAgImtvIjogIjEuIOyasOumrOyXkOqyjCDrqofqsIDsp4Ag7KCV67O066W8IOyVjOugpOyjvOyEuOyalC4iLA0KICAgICAgICAgICAgImVuIjogIjEuIGhvdyBjYW4gd2UgY29udGFjdCB5b3U/Ig0KICAgICAgICB9LA0KICAgICAgICAiY3VzX2Z1bGxfbmFtZSI6IHsNCiAgICAgICAgICAgICJrbyI6ICLsnbTrpoQiLA0KICAgICAgICAgICAgImVuIjogIkZ1bGwgbmFtZSINCiAgICAgICAgfSwNCiAgICAgICAgImN1c19wb3NpdGlvbiI6IHsNCiAgICAgICAgICAgICJrbyI6ICLsp4HssYUiLA0KICAgICAgICAgICAgImVuIjogIlBvc2l0aW9uIg0KICAgICAgICB9LA0KICAgICAgICAiY3VzX29yZ2FuaXphdGlvbiI6IHsNCiAgICAgICAgICAgICJrbyI6ICLquLDqtIAg7Zi57J2AIOq4sOyXheuqhSIsDQogICAgICAgICAgICAiZW4iOiAiT3JnYW5pemF0aW9uIg0KICAgICAgICB9LA0KICAgICAgICAiY3VzX2VtYWlsIjogew0KICAgICAgICAgICAgImtvIjogIuydtOuplOydvCIsDQogICAgICAgICAgICAiZW4iOiAiRW1haWwiDQogICAgICAgIH0sDQogICAgICAgICJjdXNfcGhvbmUiOiB7DQogICAgICAgICAgICAia28iOiAi7KCE7ZmU67KI7Zi4IiwNCiAgICAgICAgICAgICJlbiI6ICJQaG9uZSINCiAgICAgICAgfSwNCiAgICAgICAgImN1c191cmwiOiB7DQogICAgICAgICAgICAia28iOiAi7IKs7J207Yq4IOyjvOyGjCIsDQogICAgICAgICAgICAiZW4iOiAiVVJMIg0KICAgICAgICB9LA0KICAgICAgICAiYnVkZ2lldF9pbmZvIjogew0KICAgICAgICAgICAgImtvIjogIjIuIOyYiOyCsOqzvCDsnbzsoJXsnYQg7Ja065a76rKMIOuQmOuCmOyalD8iLA0KICAgICAgICAgICAgImVuIjogIjIuIHBsZWFzZSBzaGFyZSB5b3VyIGJ1ZGdpZXQgYW5kIHRpbWVsaW1lIg0KICAgICAgICB9LA0KICAgICAgICAiYnVkZ2lldF9kZWZhdWx0Ijogew0KICAgICAgICAgICAgImtvIjogIuyYiOyCsCIsDQogICAgICAgICAgICAiZW4iOiAiUGxlYXNlIFNlbGVjdC4uLiINCiAgICAgICAgfSwNCiAgICAgICAgInRpbWVsaW5lX2RlZmF1bHQiOiB7DQogICAgICAgICAgICAia28iOiAi7J287KCVIiwNCiAgICAgICAgICAgICJlbiI6ICJQbGVhc2UgU2VsZWN0Li4uIg0KICAgICAgICB9LA0KICAgICAgICAicHJvamVjdF9pbmZvIjogew0KICAgICAgICAgICAgImtvIjogIjMuIOyWtOuWu+qyjCDrj4TsmYDrk5zrpqzrqbQg65Cg6rmM7JqUPyIsDQogICAgICAgICAgICAiZW4iOiAiMy4gaG93IGNhbiB3ZSBoZWxwIHlvdT8iDQogICAgICAgIH0sDQogICAgICAgICJwcm9qZWN0X3RleHQiOiB7DQogICAgICAgICAgICAia28iOiAi7ZSE66Gc7KCd7Yq47JeQIOuMgO2VtCDshKTrqoXtlbTso7zshLjsmpQuPHNwYW4+MTAwMCBjaGF0IG1heDwvc3Bhbj4iLA0KICAgICAgICAgICAgImVuIjogIkRlc2NyaWJlIHlvdXIgcHJvamVjdDxzcGFuPjEwMDAgY2hhdCBtYXg8L3NwYW4+Ig0KICAgICAgICB9LA0KICAgICAgICAicHJvamVjdF9maWxlIjogew0KICAgICAgICAgICAgImtvIjogIu2MjOydvCDsl4XroZzrk5w8c3Bhbj5wZGYsIHppcCAzTWIgbWF4PC9zcGFuPiIsDQogICAgICAgICAgICAiZW4iOiAiVXBsb2FkIHlvdXIgZmlsZTxzcGFuPnBkZiwgemlwIDNNYiBtYXg8L3NwYW4+Ig0KICAgICAgICB9LA0KICAgICAgICAiZmlsZV9idG4iOiB7DQogICAgICAgICAgICAia28iOiAi7LC+6riwIiwNCiAgICAgICAgICAgICJlbiI6ICJGaW5kIg0KICAgICAgICB9LA0KICAgICAgICAicG9saWN5X2NoayI6IHsNCiAgICAgICAgICAgICJrbyI6ICLqsJzsnbjsoJXrs7Qg7KCV7LGF7JeQIOuPmeydmO2VqeuLiOuLpC4iLA0KICAgICAgICAgICAgImVuIjogIkkgYWNjZXB0IHRoZSB0ZXJtcyBvZiB0aGUgcHJpdmFjeSBwb2xpY3kgYW5kIEkgYWdyZWUiDQogICAgICAgIH0sDQogICAgICAgICJzdWJtaXRfYnRuIjogew0KICAgICAgICAgICAgImtvIjogIu2UhOuhnOygne2KuCDrrLjsnZjtlZjquLAiLA0KICAgICAgICAgICAgImVuIjogImdldCBpbiB0b3VjaCINCiAgICAgICAgfSwNCiAgICAgICAgIm1hcnF1ZWUiOiB7DQogICAgICAgICAgICAia28iOiAi7Jqw66as64qUIOuLueyLoOydtCDsg4Hsg4HtlZjripQg66qo65OgIOqyg+uTpOydhCDtlIzrnbzsiqTti7Eg67mE7LmY7JeQ7IScIOunjOuTpOyWtOuDheuLiOuLpC4iLA0KICAgICAgICAgICAgImVuIjogImNyZWF0aXZlIGV2ZXJ5IGZhbnRhc3kgd2hhdGVldmVyIHlvdSBpbWFnaW5lIGluIHBsYXN0aWMgYmVhY2giDQogICAgICAgIH0NCiAgICB9LA0KICAgIHsNCiAgICAgICAgImJ1ZGdpZXRfb3B0aW9uMDEiOiB7DQogICAgICAgICAgICAia28iOiAiMSDsspzrp4zsm5AiLA0KICAgICAgICAgICAgImVuIjogIjEwIG1pbGxpb24iDQogICAgICAgIH0sDQogICAgICAgICJidWRnaWV0X29wdGlvbjAyIjogew0KICAgICAgICAgICAgImtvIjogIjMg7LKc66eM7JuQIiwNCiAgICAgICAgICAgICJlbiI6ICIzMCBtaWxsaW9uIg0KICAgICAgICB9DQogICAgfSwNCiAgICB7DQogICAgICAgICJ0aW1lbGluZV9vcHRpb24wMSI6IHsNCiAgICAgICAgICAgICJrbyI6ICIxIOyjvCIsDQogICAgICAgICAgICAiZW4iOiAiMSB3ZWVrIg0KICAgICAgICB9LA0KICAgICAgICAidGltZWxpbmVfb3B0aW9uMDIiOiB7DQogICAgICAgICAgICAia28iOiAiMyDso7wiLA0KICAgICAgICAgICAgImVuIjogIjMgd2VlayINCiAgICAgICAgfQ0KICAgIH0sDQogICAgew0KICAgICAgICAiY2F0ZWdvcnlfYWxsIjogew0KICAgICAgICAgICAgImtvIjogIuyghOyytCIsDQogICAgICAgICAgICAiZW4iOiAiQUxMIg0KICAgICAgICB9LA0KICAgICAgICAiY2F0ZWdvcnlfbXYiOiB7DQogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIiwNCiAgICAgICAgICAgICJlbiI6ICJNViINCiAgICAgICAgfSwNCiAgICAgICAgImNhdGVnb3J5X2FkIjogew0KICAgICAgICAgICAgImtvIjogIuq0keqzoCIsDQogICAgICAgICAgICAiZW4iOiAiQUQiDQogICAgICAgIH0NCiAgICB9DQpd";

/***/ }),

/***/ "./src/js/data/work.json":
/*!*******************************!*\
  !*** ./src/js/data/work.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = "data:application/json;base64,Ww0KICAgIHsNCiAgICAgICAgIm5hbWUiOiAiYWVzcGEwMSIsDQogICAgICAgICJ1cmwiOiAiNFRXUjkwS0psODQiLA0KICAgICAgICAiY2F0ZWdvcnkiIDogIm12IiwNCiAgICAgICAgInRpdGxlIjogew0KICAgICAgICAgICAgImtvIjogIuuupOyngeu5hOuUlOyYpCAtIDAx7YWM7Iqk7Yq4IDAx7YWM7Iqk7Yq4IDAx7YWM7Iqk7Yq4IiwNCiAgICAgICAgICAgICJlbiI6ICJtdXNpYyB2aWRlbyAtIGdhcyBwZWRhbCINCiAgICAgICAgfQ0KICAgIH0sDQogICAgew0KICAgICAgICAibmFtZSI6ICJiaWdiYW5nIiwNCiAgICAgICAgInVybCI6ICIxQ1RjZWQ5Q01NayIsDQogICAgICAgICJjYXRlZ29yeSIgOiAibXYiLA0KICAgICAgICAidGl0bGUiOiB7DQogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDLthYzsiqTtirggMDLthYzsiqTtirggMDLthYzsiqTtirgiLA0KICAgICAgICAgICAgImVuIjogIm11c2ljIHZpZGVvIC0gMDJ0ZXN0IDAydGVzdCAwMnRlc3QiDQogICAgICAgIH0NCiAgICB9LA0KICAgIHsNCiAgICAgICAgIm5hbWUiOiAibmN0dSIsDQogICAgICAgICJ1cmwiOiAidHlyVnR3RThHdjAiLA0KICAgICAgICAiY2F0ZWdvcnkiIDogImFkIiwNCiAgICAgICAgInRpdGxlIjogew0KICAgICAgICAgICAgImtvIjogIuq0keqzoCAtIDAz7YWM7Iqk7Yq4IDAz7YWM7Iqk7Yq4IDAz7YWM7Iqk7Yq4IiwNCiAgICAgICAgICAgICJlbiI6ICJhZCAtIDAzdGVzdCAwM3Rlc3QgMDN0ZXN0Ig0KICAgICAgICB9DQogICAgfSwNCiAgICB7DQogICAgICAgICJuYW1lIjogIml0enkwMSIsDQogICAgICAgICJ1cmwiOiAiX3lzb21DR2FaTHciLA0KICAgICAgICAiY2F0ZWdvcnkiIDogImFkIiwNCiAgICAgICAgInRpdGxlIjogew0KICAgICAgICAgICAgImtvIjogIuq0keqzoCAtIDA07YWM7Iqk7Yq4IDA07YWM7Iqk7Yq4IDA07YWM7Iqk7Yq4IiwNCiAgICAgICAgICAgICJlbiI6ICJhZCAtIDA0dGVzdCAwNHRlc3QgMDR0ZXN0Ig0KICAgICAgICB9DQogICAgfSwNCiAgICB7DQogICAgICAgICJuYW1lIjogIml6b25lIiwNCiAgICAgICAgInVybCI6ICJXWndyMmFfbEZXWSIsDQogICAgICAgICJjYXRlZ29yeSIgOiAibXYiLA0KICAgICAgICAidGl0bGUiOiB7DQogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDXthYzsiqTtirggMDXthYzsiqTtirggMDXthYzsiqTtirgiLA0KICAgICAgICAgICAgImVuIjogIm11c2ljIHZpZGVvIC0gMDV0ZXN0IDA1dGVzdCAwNXRlc3QiDQogICAgICAgIH0NCiAgICB9LA0KICAgIHsNCiAgICAgICAgIm5hbWUiOiAiYmxhY2twaW5rIiwNCiAgICAgICAgInVybCI6ICJBbXEtcWxxYmpZQSIsDQogICAgICAgICJjYXRlZ29yeSIgOiAibXYiLA0KICAgICAgICAidGl0bGUiOiB7DQogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDbthYzsiqTtirggMDbthYzsiqTtirggMDbthYzsiqTtirgiLA0KICAgICAgICAgICAgImVuIjogIm11c2ljIHZpZGVvIC0gMDZ0ZXN0IDA2dGVzdCAwNnRlc3QiDQogICAgICAgIH0NCiAgICB9LA0KICAgIHsNCiAgICAgICAgIm5hbWUiOiAiaXR6dDAyIiwNCiAgICAgICAgInVybCI6ICJwTmZUSzM5azU1VSIsDQogICAgICAgICJjYXRlZ29yeSIgOiAiYWQiLA0KICAgICAgICAidGl0bGUiOiB7DQogICAgICAgICAgICAia28iOiAi6rSR6rOgIC0gMDfthYzsiqTtirggMDfthYzsiqTtirggMDfthYzsiqTtirgiLA0KICAgICAgICAgICAgImVuIjogImFkIC0gMDd0ZXN0IDA3dGVzdCAwN3Rlc3QiDQogICAgICAgIH0NCiAgICB9LA0KICAgIHsNCiAgICAgICAgIm5hbWUiOiAiYWVzcGEwMiIsDQogICAgICAgICJ1cmwiOiAiWmVlcnJudUxpNUUiLA0KICAgICAgICAiY2F0ZWdvcnkiIDogImFkIiwNCiAgICAgICAgInRpdGxlIjogew0KICAgICAgICAgICAgImtvIjogIuq0keqzoCAtIDA47YWM7Iqk7Yq4IDA47YWM7Iqk7Yq4IDA47YWM7Iqk7Yq4IiwNCiAgICAgICAgICAgICJlbiI6ICJhZCAtIDA4dGVzdCAwOHRlc3QgMDh0ZXN0Ig0KICAgICAgICB9DQogICAgfSwNCiAgICB7DQogICAgICAgICJuYW1lIjogIndhbm5hb25lIiwNCiAgICAgICAgInVybCI6ICJFVmFWN0F3cUJXZyIsDQogICAgICAgICJjYXRlZ29yeSIgOiAibXYiLA0KICAgICAgICAidGl0bGUiOiB7DQogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDnthYzsiqTtirggMDnthYzsiqTtirggMDnthYzsiqTtirgiLA0KICAgICAgICAgICAgImVuIjogIm11c2ljIHZpZGVvIC0gMDl0ZXN0IDA5dGVzdCAwOXRlc3QiDQogICAgICAgIH0NCiAgICB9DQpd";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplasticbeach"] = self["webpackChunkplasticbeach"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map