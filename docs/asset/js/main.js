/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _module_CustomCursor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/CustomCursor.js */ \"./src/js/module/CustomCursor.js\");\n/* harmony import */ var _module_CircleLogo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/CircleLogo.js */ \"./src/js/module/CircleLogo.js\");\n/* harmony import */ var _module_Marquee_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/Marquee.js */ \"./src/js/module/Marquee.js\");\n/* harmony import */ var _module_MouseOverTooltip_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./module/MouseOverTooltip.js */ \"./src/js/module/MouseOverTooltip.js\");\n/* harmony import */ var _module_Email_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./module/Email.js */ \"./src/js/module/Email.js\");\n/* harmony import */ var _data_text_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/text.json */ \"./src/js/data/text.json\");\n/* harmony import */ var _data_work_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/work.json */ \"./src/js/data/work.json\");\n/* harmony import */ var _css_scss_common_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/scss/common.scss */ \"./src/css/scss/common.scss\");\n/* harmony import */ var _css_scss_style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../css/scss/style.scss */ \"./src/css/scss/style.scss\");\n/* harmony import */ var _css_scss_contact_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../css/scss/contact.scss */ \"./src/css/scss/contact.scss\");\n/* harmony import */ var _css_scss_work_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/scss/work.scss */ \"./src/css/scss/work.scss\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n// module import\n\n\n\n\n\n\n // css import\n\n\n\n\n // DOM text bind\n\nvar DomTextBind = /*#__PURE__*/function () {\n  function DomTextBind() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, DomTextBind);\n\n    this.lang = \"en\";\n    this.workData;\n    this.textData;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(DomTextBind, [{\n    key: \"getJson\",\n    value: function () {\n      var _getJson = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {\n        var _this = this;\n\n        var workRes, textRes;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                workRes = fetch(_data_work_json__WEBPACK_IMPORTED_MODULE_13__).then(function (workRes) {\n                  return workRes.json();\n                });\n                _context.next = 3;\n                return workRes.then(function (workData) {\n                  return _this.workData = workData;\n                });\n\n              case 3:\n                textRes = fetch(_data_text_json__WEBPACK_IMPORTED_MODULE_12__).then(function (textRes) {\n                  return textRes.json();\n                });\n                _context.next = 6;\n                return textRes.then(function (textData) {\n                  return _this.textData = textData;\n                });\n\n              case 6:\n                this.bindWorkList();\n                this.bindText(); // children class\n\n                convert.parentData(this.workData, this.textData);\n\n              case 9:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getJson() {\n        return _getJson.apply(this, arguments);\n      }\n\n      return getJson;\n    }()\n  }, {\n    key: \"bindWorkList\",\n    value: function bindWorkList() {\n      var data = this.workData;\n      var parent = document.querySelector(\".work_list\");\n      var cursor = document.querySelector(\".cursor\");\n\n      for (var i = 0; i < data.length; i++) {\n        var html = document.createElement(\"li\");\n        html.setAttribute(\"class\", \"list hover \".concat(data[i].name));\n        html.setAttribute(\"category\", \"\".concat(data[i].category));\n        html.innerHTML = \"\\n                <a href=\\\"#\\\" class=\\\"Nefarious toggle_font\\\">\".concat(data[i].title.en, \"</a>\\n                <iframe\\n                    class=\\\"video_tooltip\\\"\\n                    width=\\\"560\\\"\\n                    height=\\\"315\\\"\\n                    src=\\\"https://www.youtube.com/embed/\").concat(data[i].url, \"?&mute=1&enablejsapi=1&playsinline=1&color=white&controls=0\\\"\\n                    frameborder=\\\"0\\\"\\n                    allowfullscreen>\\n                </iframe>\\n            \");\n        parent.appendChild(html);\n      }\n\n      _module_CustomCursor_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].reverseColor(cursor);\n      (0,_module_MouseOverTooltip_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n    }\n  }, {\n    key: \"bindText\",\n    value: function bindText() {\n      var data = this.textData;\n      var textArr = Object.entries(data[0]);\n      var budgietArr = Object.entries(data[1]);\n      var timelineArr = Object.entries(data[2]);\n      var categoryArr = Object.entries(data[3]);\n\n      function bindFuc(variable, name) {\n        // 일반 content text 및 category select radio btn text\n        if (name == 'content' || name == 'category') {\n          for (var i = 0; i < variable.length; i++) {\n            var target = document.querySelector(\"[data-name='\".concat(variable[i][0], \"']\"));\n            target.innerHTML = variable[i][1].en; // 일반 content text\n\n            if (name == 'content') {\n              // marquee text\n              if (target.classList.contains(\"marquee_text\")) {\n                target.innerHTML = variable[i][1].en + variable[i][1].en;\n              } // contact input placeholder\n\n\n              if (target.hasAttribute('placeholder')) {\n                target.innerHTML = '';\n                target.setAttribute('placeholder', variable[i][1].en);\n              }\n            }\n          }\n        } // 예산/일정 select box option text\n        else if (name == 'budgiet' || name == 'timeline') {\n          for (var _i = 0; _i < variable.length; _i++) {\n            var parent = document.querySelector(\"select.\".concat(name));\n            var html = document.createElement(\"option\");\n            html.setAttribute(\"class\", variable[_i][0]);\n            html.innerHTML = variable[_i][1].en;\n            parent.appendChild(html);\n          }\n        }\n      }\n\n      bindFuc(textArr, 'content');\n      bindFuc(budgietArr, 'budgiet');\n      bindFuc(timelineArr, 'timeline');\n      bindFuc(categoryArr, 'category');\n      (0,_module_Marquee_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(\".marquee\", 0.2);\n    }\n  }, {\n    key: \"workCategory\",\n    value: function workCategory() {\n      var list = document.querySelectorAll('.work_list .list');\n\n      for (var i = 0; i < list.length; i++) {\n        var listCategory = list[i].getAttribute('category');\n\n        if (this.id == 'all') {\n          list[i].style.display = 'flex';\n        } else if (listCategory == this.id) {\n          list[i].style.display = 'flex';\n        } else {\n          list[i].style.display = 'none';\n        }\n      }\n    }\n  }]);\n\n  return DomTextBind;\n}(); // convert color & text\n\n\nvar Convert = /*#__PURE__*/function (_DomTextBind) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Convert, _DomTextBind);\n\n  var _super = _createSuper(Convert);\n\n  function Convert(lang) {\n    var _this2;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Convert);\n\n    _this2 = _super.call(this, lang);\n    _this2.workData;\n    _this2.textData;\n    return _this2;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Convert, [{\n    key: \"parentData\",\n    value: function parentData(work, text) {\n      this.workData = work;\n      this.textData = text;\n    }\n  }, {\n    key: \"changeWork\",\n    value: function changeWork() {\n      var data = this.workData;\n\n      for (var i = 0; i < data.length; i++) {\n        var target = document.querySelector(\".\".concat(data[i].name, \" a\"));\n\n        if (this.lang === \"en\") {\n          target.innerHTML = data[i].title.en;\n        } else {\n          target.innerHTML = data[i].title.ko;\n        }\n      }\n    }\n  }, {\n    key: \"changeText\",\n    value: function changeText() {\n      var data = this.textData;\n      var textArr = Object.entries(data[0]);\n      var budgietArr = Object.entries(data[1]);\n      var timelineArr = Object.entries(data[2]);\n      var categoryArr = Object.entries(data[3]);\n      var lang = this.lang;\n\n      function changeFuc(variable, name) {\n        // 일반 content text 및 category select radio btn text\n        if (name == 'content' || name == 'category') {\n          for (var i = 0; i < variable.length; i++) {\n            var target = document.querySelector(\"[data-name='\".concat(variable[i][0], \"']\"));\n\n            if (lang === \"en\") {\n              target.innerHTML = variable[i][1].en; // 일반 content text\n\n              if (name == 'content') {\n                // marquee text\n                if (target.classList.contains(\"marquee_text\")) {\n                  target.innerHTML = textArr[i][1].en + textArr[i][1].en;\n                } // contact input placeholder\n\n\n                if (target.hasAttribute('placeholder')) {\n                  target.setAttribute('placeholder', textArr[i][1].en);\n                }\n              }\n            } else {\n              target.innerHTML = variable[i][1].ko; // 일반 content text\n\n              if (name == 'content') {\n                // marquee text\n                if (target.classList.contains(\"marquee_text\")) {\n                  target.innerHTML = textArr[i][1].ko + textArr[i][1].ko;\n                } // contact input placeholder\n\n\n                if (target.hasAttribute('placeholder')) {\n                  target.setAttribute('placeholder', textArr[i][1].ko);\n                }\n              }\n            }\n          }\n        } // 예산/일정 select box option text\n        else if (name == 'budgiet' || name == 'timeline') {\n          for (var _i2 = 0; _i2 < variable.length; _i2++) {\n            var _target = document.querySelector(\".\".concat(variable[_i2][0]));\n\n            if (lang === \"en\") {\n              _target.innerHTML = variable[_i2][1].en;\n            } else {\n              _target.innerHTML = variable[_i2][1].ko;\n            }\n          }\n        }\n      }\n\n      changeFuc(textArr, 'content');\n      changeFuc(budgietArr, 'budgiet');\n      changeFuc(timelineArr, 'timeline');\n      changeFuc(categoryArr, 'category');\n    }\n  }, {\n    key: \"reverseColorTheme\",\n    value: function reverseColorTheme() {\n      var state = document.documentElement.getAttribute(\"color-theme\");\n\n      if (state === \"white\") {\n        document.documentElement.setAttribute(\"color-theme\", \"blue\");\n      } else {\n        document.documentElement.setAttribute(\"color-theme\", \"white\");\n      }\n    }\n  }, {\n    key: \"change\",\n    value: function change() {\n      var enFont = document.querySelectorAll(\".toggle_font\");\n      convert.lang === \"en\" ? convert.lang = \"ko\" : convert.lang = \"en\";\n      convert.changeWork();\n      convert.changeText();\n      convert.reverseColorTheme();\n\n      for (var i = 0; i < enFont.length; i++) {\n        if (enFont[i].classList.contains(\"Nefarious\")) {\n          enFont[i].classList.remove(\"Nefarious\");\n        } else {\n          enFont[i].classList.add(\"Nefarious\");\n        }\n      }\n    }\n  }]);\n\n  return Convert;\n}(DomTextBind); // instance\n\n\nvar domTextBind = new DomTextBind();\nvar convert = new Convert(); // run\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  domTextBind.getJson();\n  _module_CustomCursor_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].create();\n  _module_CircleLogo_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"].bindSGV();\n}); // reverse color\n\ndocument.querySelector(\".reverse_color\").addEventListener(\"click\", convert.change); // workListCategory\n\nvar radios = document.querySelectorAll('[type=radio]');\nradios.forEach(function (elem) {\n  return elem.addEventListener('click', domTextBind.workCategory);\n}); // custom input[type=\"file\"](file-name bind)\n\n(function bindFileInput() {\n  var elem = document.querySelector(\"#file\");\n  var bindTarget = document.querySelector(\".file_name\");\n  elem.addEventListener(\"change\", function () {\n    var value = this.value;\n    bindTarget.value = value;\n  });\n})(); // email js run\n\n\n(0,_module_Email_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\n\n//# sourceURL=webpack://plasticbeach/./src/js/index.js?");

/***/ }),

/***/ "./src/js/module/CircleLogo.js":
/*!*************************************!*\
  !*** ./src/js/module/CircleLogo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\nvar circleLogoAnimation = {\n  bindSGV: function bindSGV() {\n    var parentBtn = document.querySelector(\".reverse_color\");\n\n    if (!parentBtn) {\n      return;\n    }\n\n    var circleLogo = \"\\n            <svg\\n                xmlns=\\\"http://www.w3.org/2000/svg\\\"\\n                width=\\\"166.266\\\"\\n                viewBox=\\\"0 0 166.266 160.462\\\"\\n                class=\\\"circleLogo\\\"\\n            >\\n                <g transform=\\\"translate(-1099.01 -349.083)\\\">\\n                    <g transform=\\\"translate(1099.01 349.083)\\\">\\n                        <path\\n                            d=\\\"M1423.986,486.061l22.157-4.9,1.034,4.671-1.827.4.021.09a6.553,6.553,0,0,1,3.548,4.68c1.047,4.731-2.074,8.94-7.254,10.085-4.731,1.048-9.448-1.4-10.5-6.155a6.607,6.607,0,0,1,.959-5.457l-7.036,1.557Zm16.729,10.024a4.263,4.263,0,1,0-5.143-3.228A4.28,4.28,0,0,0,1440.714,496.084Z\\\"\\n                            transform=\\\"translate(-1289.309 -426.423)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1445.274,533.36l22.69-.339.077,5.09-22.69.339Z\\\"\\n                            transform=\\\"translate(-1301.775 -456.793)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1439.518,562.324l1.806.353.011-.061c-1.334-1.01-1.848-3.173-1.419-5.37.965-4.936,5.519-7.608,10.574-6.62,4.936.965,8.209,5.323,7.273,10.108a5.765,5.765,0,0,1-3.306,4.446l-.012.061,1.776.347-.976,5-16.7-3.264Zm8.368,1.636a4.319,4.319,0,0,0,5.073-3.415,4.339,4.339,0,1,0-5.073,3.415Z\\\"\\n                            transform=\\\"translate(-1297.833 -466.984)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1439.266,605.919c.9.4,1.48-.1,1.84-.85a1.3,1.3,0,0,0-.383-1.819c-.83-.4-1.6.147-3.181,2.007-2.725,3.181-4.761,3.663-7,2.584-3.2-1.544-3.89-5.279-2.212-8.76,1.664-3.454,4.81-4.966,8.092-3.794l-2.2,4.559a1.755,1.755,0,0,0-2.248,1.061,1.61,1.61,0,0,0,.415,2.175c.857.412,1.552.1,3.375-1.845,3.052-3.3,5.064-3.585,6.86-2.72,3.039,1.464,3.628,5.256,2.137,8.349-1.6,3.315-4.553,4.784-7.671,3.554Z\\\"\\n                            transform=\\\"translate(-1291.334 -493.026)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1417.208,622.531l10.678,7.684,1.469-2.041,3.136,2.257-1.468,2.042,4.6,3.313-2.973,4.132-4.605-3.314-1.433,1.992-3.136-2.257,1.434-1.992-10.679-7.684Z\\\"\\n                            transform=\\\"translate(-1283.599 -509.209)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1405.555,637.1l12.457,11.6-3.469,3.726-12.457-11.6Zm13.782,12.829,2.828,2.633-3.469,3.726-2.828-2.632Z\\\"\\n                            transform=\\\"translate(-1276.485 -517.743)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1381.88,668.141a3.914,3.914,0,0,0,4.482-.281,4.338,4.338,0,0,0-5.152-6.945,3.885,3.885,0,0,0-1.66,3.992l-4.205,3.029a9.14,9.14,0,0,1,15.849-8.846,9.107,9.107,0,0,1-13.495,12.062Z\\\"\\n                            transform=\\\"translate(-1260.409 -528.379)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1328.066,680.158l4.833,22.174-4.974,1.084-1.5-6.862a6.331,6.331,0,0,1-4.322,2.92c-4.315.94-8.976-1.433-10.184-6.977-1.117-5.123,1.307-9.7,6.43-10.818,2.008-.438,4.218.053,5.274,1.3l.059-.013-.385-1.768Zm-11.189,11.165a4.2,4.2,0,1,0,8.217-1.76,4.165,4.165,0,0,0-4.979-3.4A4.255,4.255,0,0,0,1316.877,691.323Z\\\"\\n                            transform=\\\"translate(-1223.531 -542.954)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1278.581,694a3.809,3.809,0,0,0-3.73-3.513,3.579,3.579,0,0,0-3.209,1.354l-5.2-.4c1.9-3.576,5.157-5.511,8.734-5.238a9.078,9.078,0,1,1-9.541,8.16,6.543,6.543,0,0,1,.225-1.337Zm-8.027,2.832a4.018,4.018,0,0,0,7.7.588Z\\\"\\n                            transform=\\\"translate(-1196.565 -546.479)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1223.334,672.346l-.66,1.718.057.021c1.226-1.139,3.446-1.271,5.536-.467,4.695,1.8,6.538,6.752,4.69,11.562-1.8,4.695-6.665,7.164-11.216,5.414a5.771,5.771,0,0,1-3.808-4.027l-.057-.021-.649,1.688-4.751-1.827,6.108-15.888Zm-3.059,7.959a4.32,4.32,0,0,0,2.484,5.588,4.341,4.341,0,1,0-2.484-5.588Z\\\"\\n                            transform=\\\"translate(-1165.453 -537.309)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1180.364,659.752a3.918,3.918,0,0,0,1.54,4.22,4.339,4.339,0,0,0,5.2-6.909,3.885,3.885,0,0,0-4.3-.461l-4.095-3.176a9.14,9.14,0,0,1,12.972,12.7,9.107,9.107,0,0,1-15.391-9.527Z\\\"\\n                            transform=\\\"translate(-1143.734 -526.103)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1157.776,618.224l-7.5,5.59c-1.77,1.32-2.264,2.759-1.147,4.259,1.155,1.549,2.614,1.609,4.311.344l7.672-5.719,3.042,4.082-18.2,13.563-3.042-4.081,5.852-4.363a4.8,4.8,0,0,1-4.41-2.22c-2.327-3.124-1.772-6.482,1.793-9.14l8.582-6.4Z\\\"\\n                            transform=\\\"translate(-1124.721 -504.296)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1140.433,572.347l-22.071,5.276-1.112-4.653,1.819-.436-.021-.089a6.552,6.552,0,0,1-3.627-4.619c-1.126-4.712,1.923-8.972,7.082-10.206,4.713-1.127,9.471,1.236,10.6,5.978a6.607,6.607,0,0,1-.867,5.472l7.009-1.675Zm-16.9-9.74a4.263,4.263,0,1,0,5.2,3.141A4.28,4.28,0,0,0,1123.538,562.607Z\\\"\\n                            transform=\\\"translate(-1108.484 -471.036)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1121.854,545.873l-22.684.719-.161-5.089,22.684-.718Z\\\"\\n                            transform=\\\"translate(-1099.01 -461.34)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1131.82,496.4l-1.811-.323-.011.06c1.35.989,1.9,3.143,1.508,5.346-.882,4.951-5.39,7.7-10.462,6.8-4.951-.882-8.3-5.184-7.441-9.985a5.767,5.767,0,0,1,3.231-4.5l.012-.061-1.782-.317.893-5.012,16.755,2.986Zm-8.393-1.5a4.318,4.318,0,0,0-5.015,3.5,4.34,4.34,0,1,0,5.015-3.5Z\\\"\\n                            transform=\\\"translate(-1107.478 -430.665)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1133.154,458.628c-.9-.383-1.478.129-1.825.881a1.3,1.3,0,0,0,.413,1.811c.835.386,1.6-.173,3.146-2.06,2.671-3.225,4.7-3.742,6.954-2.7,3.229,1.491,3.977,5.213,2.357,8.721-1.606,3.479-4.727,5.045-8.027,3.927l2.121-4.594a1.756,1.756,0,0,0,2.229-1.1,1.609,1.609,0,0,0-.451-2.168c-.863-.4-1.553-.075-3.344,1.9-3,3.345-5,3.668-6.813,2.833-3.062-1.414-3.716-5.194-2.276-8.312,1.542-3.342,4.473-4.86,7.61-3.681Z\\\"\\n                            transform=\\\"translate(-1115.347 -410.341)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1150.177,439.8l-10.8-7.5-1.435,2.065-3.173-2.2,1.435-2.065-4.659-3.237,2.9-4.181,4.659,3.236,1.4-2.015,3.174,2.205-1.4,2.014,10.8,7.506Z\\\"\\n                            transform=\\\"translate(-1118.059 -392.175)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1149.394,409.84l-2.872-2.585,3.406-3.783,2.872,2.585Zm13.994,12.6-12.649-11.386,3.405-3.784,12.65,11.387Z\\\"\\n                            transform=\\\"translate(-1126.832 -380.932)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1189.188,392.18a3.917,3.917,0,0,0-4.479.357,4.339,4.339,0,0,0,5.27,6.858,3.883,3.883,0,0,0,1.593-4.02l4.155-3.1a9.141,9.141,0,0,1-15.7,9.111,9.108,9.108,0,0,1,13.293-12.288Z\\\"\\n                            transform=\\\"translate(-1145.376 -371.203)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1238.339,372.339l-5.206-22.087,4.955-1.169,1.611,6.835a6.335,6.335,0,0,1,4.273-2.992c4.3-1.013,9,1.282,10.3,6.8,1.2,5.1-1.143,9.721-6.247,10.925-2,.471-4.218.017-5.295-1.21l-.06.015.415,1.76Zm11-11.351a4.2,4.2,0,1,0-8.186,1.9,4.164,4.164,0,0,0,5.036,3.319A4.255,4.255,0,0,0,1249.338,360.988Z\\\"\\n                            transform=\\\"translate(-1177.55 -349.083)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1292.607,364.689a3.811,3.811,0,0,0,3.789,3.451,3.583,3.583,0,0,0,3.186-1.408l5.2.308c-1.842,3.608-5.064,5.6-8.645,5.386a9.079,9.079,0,1,1,9.4-8.321,6.525,6.525,0,0,1-.2,1.34Zm7.98-2.966a4.019,4.019,0,0,0-7.714-.459Z\\\"\\n                            transform=\\\"translate(-1209.479 -352.127)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1343.506,381.99l.631-1.729-.057-.02c-1.207,1.158-3.424,1.327-5.526.56-4.725-1.727-6.651-6.642-4.883-11.482,1.726-4.725,6.543-7.275,11.124-5.6a5.768,5.768,0,0,1,3.875,3.963l.058.021.622-1.7,4.782,1.747-5.841,15.988Zm2.926-8.008a4.32,4.32,0,0,0-2.578-5.546,4.34,4.34,0,1,0,2.578,5.546Z\\\"\\n                            transform=\\\"translate(-1236.043 -357.352)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1390.906,397.1a3.915,3.915,0,0,0-1.611-4.194,4.339,4.339,0,0,0-5.083,7,3.885,3.885,0,0,0,4.3.388l4.149,3.106a9.14,9.14,0,0,1-13.186-12.475,9.107,9.107,0,0,1,15.55,9.265Z\\\"\\n                            transform=\\\"translate(-1262.168 -371.431)\\\"\\n                        />\\n                        <path\\n                            d=\\\"M1409.878,426.942l7.4-5.715c1.749-1.348,2.219-2.8,1.076-4.277-1.18-1.53-2.641-1.566-4.316-.272l-7.575,5.845-3.11-4.03,17.966-13.864,3.11,4.031-5.778,4.458a4.806,4.806,0,0,1,4.446,2.147c2.379,3.084,1.88,6.452-1.641,9.168l-8.474,6.54Z\\\"\\n                            transform=\\\"translate(-1277.23 -381.609)\\\"\\n                        />\\n                    </g>\\n                </g>\\n            </svg>\\n        \";\n    parentBtn.innerHTML = circleLogo;\n    circleLogoAnimation.playAnimation(parentBtn);\n  },\n  playAnimation: function playAnimation(parent) {\n    var target = parent.querySelector(\".reverse_color .circleLogo\");\n\n    if (!target) {\n      return;\n    }\n\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.defaults({\n      repeat: -1,\n      ease: \"none\"\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(target, {\n      duration: 10,\n      rotate: -360\n    }); // Hover Animation Speed\n\n    var hover = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(target, {\n      duration: 0.8,\n      rotate: 360,\n      paused: true\n    });\n    target.addEventListener(\"mouseenter\", function () {\n      return hover.play();\n    });\n    target.addEventListener(\"mouseleave\", function () {\n      return hover.pause();\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (circleLogoAnimation);\n\n//# sourceURL=webpack://plasticbeach/./src/js/module/CircleLogo.js?");

/***/ }),

/***/ "./src/js/module/CustomCursor.js":
/*!***************************************!*\
  !*** ./src/js/module/CustomCursor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var _PlatformCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlatformCheck.js */ \"./src/js/module/PlatformCheck.js\");\n\n\n\nvar customCursor = {\n  // Created Cursor Element\n  create: function create() {\n    if (!(0,_PlatformCheck_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()) {\n      return;\n    }\n\n    var createElem = document.createElement(\"div\");\n    var createPointer = document.createElement(\"span\");\n    createElem.setAttribute(\"class\", \"cursor\");\n    createElem.appendChild(createPointer);\n    document.body.appendChild(createElem);\n    customCursor.init();\n  },\n  // Cursor Init\n  init: function init() {\n    var cursor = document.querySelector(\".cursor\");\n    var pos = {\n      x: window.innerWidth / 2,\n      y: window.innerHeight / 2\n    };\n    var mouse = {\n      x: pos.x,\n      y: pos.y\n    };\n    var speed = 1;\n    var xSet = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.quickSetter(cursor, \"x\", \"px\");\n    var ySet = gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.quickSetter(cursor, \"y\", \"px\");\n    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.set(\".cursor\", {\n      xPercent: -50,\n      yPercent: -50\n    }); // customCursor.reverseColor(cursor);\n\n    customCursor.run({\n      pos: pos,\n      mouse: mouse,\n      speed: speed,\n      xSet: xSet,\n      ySet: ySet\n    });\n  },\n  // Update Coordinate\n  run: function run(rest) {\n    var pos = rest.pos;\n    var mouse = rest.mouse;\n    var speed = rest.speed;\n    var xSet = rest.xSet;\n    var ySet = rest.ySet;\n    window.addEventListener(\"mousemove\", function (e) {\n      mouse.x = e.x;\n      mouse.y = e.y;\n    }); // Follow Mouse\n\n    gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.ticker.add(function () {\n      // adjust speed for higher refresh monitors\n      var dt = 1.0 - Math.pow(1.0 - speed, gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.ticker.deltaRatio());\n      pos.x += (mouse.x - pos.x) * dt;\n      pos.y += (mouse.y - pos.y) * dt;\n      xSet(pos.x);\n      ySet(pos.y);\n    });\n  },\n  // Reverse Color\n  reverseColor: function reverseColor(cursor) {\n    var hoverTag = document.querySelectorAll(\".hover\");\n    var arr = [];\n    arr.push.apply(arr, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hoverTag));\n    arr.forEach(function (obj) {\n      obj.addEventListener(\"mouseenter\", function () {\n        cursor.classList.add(\"hover\");\n      });\n      obj.addEventListener(\"mouseleave\", function () {\n        cursor.classList.remove(\"hover\");\n      });\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customCursor);\n\n//# sourceURL=webpack://plasticbeach/./src/js/module/CustomCursor.js?");

/***/ }),

/***/ "./src/js/module/Email.js":
/*!********************************!*\
  !*** ./src/js/module/Email.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! emailjs-com */ \"./node_modules/emailjs-com/es/index.js\");\n\n\nfunction EmailJs() {\n  document.getElementById('contact-form').addEventListener('submit', function (event) {\n    event.preventDefault(); // generate a five digit number for the contact_number variable\n\n    this.contact_number.value = Math.random() * 100000 | 0; // these IDs from the previous steps\n\n    emailjs_com__WEBPACK_IMPORTED_MODULE_0__[\"default\"].sendForm('service_o7o9yvm', 'template_i90fmnx', this, 'user_VqHFKDuJ0yd1xOoOukLDG').then(function () {\n      console.log('SUCCESS!');\n    }, function (error) {\n      console.log('FAILED...', error);\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailJs);\n\n//# sourceURL=webpack://plasticbeach/./src/js/module/Email.js?");

/***/ }),

/***/ "./src/js/module/Marquee.js":
/*!**********************************!*\
  !*** ./src/js/module/Marquee.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Marquee(selector, speed) {\n  var parentElem = document.querySelector(selector);\n  var childElem = parentElem.children[0];\n  var copyText = childElem.innerText;\n  childElem.append(copyText);\n  var i = 0;\n  setInterval(function () {\n    childElem.style.marginTop = \"\".concat(i, \"px\");\n\n    if (i > childElem.clientWidth / 2) {\n      i = 0;\n    }\n\n    i = i + speed;\n  }, 0);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marquee);\n\n//# sourceURL=webpack://plasticbeach/./src/js/module/Marquee.js?");

/***/ }),

/***/ "./src/js/module/MouseOverTooltip.js":
/*!*******************************************!*\
  !*** ./src/js/module/MouseOverTooltip.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _PlatformCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformCheck.js */ \"./src/js/module/PlatformCheck.js\");\n\n\nfunction mouseOverTooltip() {\n  if (!(0,_PlatformCheck_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()) {\n    return;\n  }\n\n  var hoverBox = document.querySelectorAll(\".work_list .list\");\n  hoverBox.forEach(function (obj) {\n    var tooltip = obj.querySelector(\".video_tooltip\");\n    obj.addEventListener(\"mousemove\", function (e) {\n      var mouseX = e.clientX;\n      var mouseY = e.clientY;\n      tooltip.style.left = mouseX + \"px\";\n      tooltip.style.top = mouseY - tooltip.clientHeight + \"px\";\n\n      if (tooltip.offsetTop < 0) {\n        tooltip.style.top = mouseY + \"px\";\n      }\n    });\n    obj.addEventListener(\"mouseenter\", function () {\n      tooltip.contentWindow.postMessage('{\"event\":\"command\",\"func\":\"' + \"playVideo\" + '\",\"args\":\"\"}', \"*\");\n    });\n    obj.addEventListener(\"mouseleave\", function () {\n      tooltip.contentWindow.postMessage('{\"event\":\"command\",\"func\":\"' + \"pauseVideo\" + '\",\"args\":\"\"}', \"*\");\n    });\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mouseOverTooltip);\n\n//# sourceURL=webpack://plasticbeach/./src/js/module/MouseOverTooltip.js?");

/***/ }),

/***/ "./src/js/module/PlatformCheck.js":
/*!****************************************!*\
  !*** ./src/js/module/PlatformCheck.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction platformCheck() {\n  if ([\"Win16\", \"Win32\", \"Win64\", \"Mac\", \"MacIntel\"].find(function (element) {\n    return element == navigator.platform;\n  })) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (platformCheck);\n\n//# sourceURL=webpack://plasticbeach/./src/js/module/PlatformCheck.js?");

/***/ }),

/***/ "./src/css/scss/common.scss":
/*!**********************************!*\
  !*** ./src/css/scss/common.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://plasticbeach/./src/css/scss/common.scss?");

/***/ }),

/***/ "./src/css/scss/contact.scss":
/*!***********************************!*\
  !*** ./src/css/scss/contact.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://plasticbeach/./src/css/scss/contact.scss?");

/***/ }),

/***/ "./src/css/scss/style.scss":
/*!*********************************!*\
  !*** ./src/css/scss/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://plasticbeach/./src/css/scss/style.scss?");

/***/ }),

/***/ "./src/css/scss/work.scss":
/*!********************************!*\
  !*** ./src/css/scss/work.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://plasticbeach/./src/css/scss/work.scss?");

/***/ }),

/***/ "./src/js/data/text.json":
/*!*******************************!*\
  !*** ./src/js/data/text.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"data:application/json;base64,WwogICAgewogICAgICAgICJ0aXRsZSI6IHsKICAgICAgICAgICAgImtvIjogIu2UjOudvOyKpO2LsSDruYTsuZg8YnI+7YGs66as7JeQ7J207Yuw67iMIiwKICAgICAgICAgICAgImVuIjogInBsYXN0aWMgYmVhY2g8YnI+Y3JlYXRpdmUgc3R1ZGlvIgogICAgICAgIH0sCiAgICAgICAgImVtYWlsIjogewogICAgICAgICAgICAia28iOiAi7J20IDogY29udGFjdEBwbGFzdGljYmVhY2gubmV0IiwKICAgICAgICAgICAgImVuIjogImUgOiBjb250YWN0QHBsYXN0aWNiZWFjaC5uZXQiCiAgICAgICAgfSwKICAgICAgICAiYWRkcmVzcyI6IHsKICAgICAgICAgICAgImtvIjogIuyEnOyauO2KueuzhOyLnCDrp4jtj6zqtawg64+Z6rWQ66GcIDcg7IKt64WV67mM65SpIDTsuLUgKOyjvCnsl5DsnbTsl6DslYTsnbzrnpzrk5wiLAogICAgICAgICAgICAiZW4iOiAiYSA6IDcsIGRvbmdneW8gLSBybyAxOSBnaWwsIG1hcG8tZ3UsIHNlb3VsIgogICAgICAgIH0sCiAgICAgICAgImNvbnRhY3RfaW5mbyI6IHsKICAgICAgICAgICAgImtvIjogIjEuIOyasOumrOyXkOqyjCDrqofqsIDsp4Ag7KCV67O066W8IOyVjOugpOyjvOyEuOyalC4iLAogICAgICAgICAgICAiZW4iOiAiMS4gaG93IGNhbiB3ZSBjb250YWN0IHlvdT8iCiAgICAgICAgfSwKICAgICAgICAiY3VzX2Z1bGxfbmFtZSI6IHsKICAgICAgICAgICAgImtvIjogIuydtOumhCIsCiAgICAgICAgICAgICJlbiI6ICJGdWxsIG5hbWUiCiAgICAgICAgfSwKICAgICAgICAiY3VzX3Bvc2l0aW9uIjogewogICAgICAgICAgICAia28iOiAi7KeB7LGFIiwKICAgICAgICAgICAgImVuIjogIlBvc2l0aW9uIgogICAgICAgIH0sCiAgICAgICAgImN1c19vcmdhbml6YXRpb24iOiB7CiAgICAgICAgICAgICJrbyI6ICLquLDqtIAg7Zi57J2AIOq4sOyXheuqhSIsCiAgICAgICAgICAgICJlbiI6ICJPcmdhbml6YXRpb24iCiAgICAgICAgfSwKICAgICAgICAiY3VzX2VtYWlsIjogewogICAgICAgICAgICAia28iOiAi7J2066mU7J28IiwKICAgICAgICAgICAgImVuIjogIkVtYWlsIgogICAgICAgIH0sCiAgICAgICAgImN1c19waG9uZSI6IHsKICAgICAgICAgICAgImtvIjogIuyghO2ZlOuyiO2YuCIsCiAgICAgICAgICAgICJlbiI6ICJQaG9uZSIKICAgICAgICB9LAogICAgICAgICJjdXNfdXJsIjogewogICAgICAgICAgICAia28iOiAi7IKs7J207Yq4IOyjvOyGjCIsCiAgICAgICAgICAgICJlbiI6ICJVUkwiCiAgICAgICAgfSwKICAgICAgICAiYnVkZ2lldF9pbmZvIjogewogICAgICAgICAgICAia28iOiAiMi4g7JiI7IKw6rO8IOydvOygleydhCDslrTrlrvqsowg65CY64KY7JqUPyIsCiAgICAgICAgICAgICJlbiI6ICIyLiBwbGVhc2Ugc2hhcmUgeW91ciBidWRnaWV0IGFuZCB0aW1lbGltZSIKICAgICAgICB9LAogICAgICAgICJidWRnaWV0X2RlZmF1bHQiOiB7CiAgICAgICAgICAgICJrbyI6ICLsmIjsgrAiLAogICAgICAgICAgICAiZW4iOiAiUGxlYXNlIFNlbGVjdC4uLiIKICAgICAgICB9LAogICAgICAgICJ0aW1lbGluZV9kZWZhdWx0IjogewogICAgICAgICAgICAia28iOiAi7J287KCVIiwKICAgICAgICAgICAgImVuIjogIlBsZWFzZSBTZWxlY3QuLi4iCiAgICAgICAgfSwKICAgICAgICAicHJvamVjdF9pbmZvIjogewogICAgICAgICAgICAia28iOiAiMy4g7Ja065a76rKMIOuPhOyZgOuTnOumrOuptCDrkKDquYzsmpQ/IiwKICAgICAgICAgICAgImVuIjogIjMuIGhvdyBjYW4gd2UgaGVscCB5b3U/IgogICAgICAgIH0sCiAgICAgICAgInByb2plY3RfdGV4dCI6IHsKICAgICAgICAgICAgImtvIjogIu2UhOuhnOygne2KuOyXkCDrjIDtlbQg7ISk66qF7ZW07KO87IS47JqULjxzcGFuPjEwMDAgY2hhdCBtYXg8L3NwYW4+IiwKICAgICAgICAgICAgImVuIjogIkRlc2NyaWJlIHlvdXIgcHJvamVjdDxzcGFuPjEwMDAgY2hhdCBtYXg8L3NwYW4+IgogICAgICAgIH0sCiAgICAgICAgInByb2plY3RfZmlsZSI6IHsKICAgICAgICAgICAgImtvIjogIu2MjOydvCDsl4XroZzrk5w8c3Bhbj5wZGYsIHppcCAzTWIgbWF4PC9zcGFuPiIsCiAgICAgICAgICAgICJlbiI6ICJVcGxvYWQgeW91ciBmaWxlPHNwYW4+cGRmLCB6aXAgM01iIG1heDwvc3Bhbj4iCiAgICAgICAgfSwKICAgICAgICAiZmlsZV9idG4iOiB7CiAgICAgICAgICAgICJrbyI6ICLssL7quLAiLAogICAgICAgICAgICAiZW4iOiAiRmluZCIKICAgICAgICB9LAogICAgICAgICJwb2xpY3lfY2hrIjogewogICAgICAgICAgICAia28iOiAi6rCc7J247KCV67O0IOygleyxheyXkCDrj5nsnZjtlanri4jri6QuIiwKICAgICAgICAgICAgImVuIjogIkkgYWNjZXB0IHRoZSB0ZXJtcyBvZiB0aGUgcHJpdmFjeSBwb2xpY3kgYW5kIEkgYWdyZWUiCiAgICAgICAgfSwKICAgICAgICAic3VibWl0X2J0biI6IHsKICAgICAgICAgICAgImtvIjogIu2UhOuhnOygne2KuCDrrLjsnZjtlZjquLAiLAogICAgICAgICAgICAiZW4iOiAiZ2V0IGluIHRvdWNoIgogICAgICAgIH0sCiAgICAgICAgIm1hcnF1ZWUiOiB7CiAgICAgICAgICAgICJrbyI6ICLsmrDrpqzripQg64u57Iug7J20IOyDgeyDge2VmOuKlCDrqqjrk6Ag6rKD65Ok7J2EIO2UjOudvOyKpO2LsSDruYTsuZjsl5DshJwg66eM65Ok7Ja064OF64uI64ukLiIsCiAgICAgICAgICAgICJlbiI6ICJjcmVhdGl2ZSBldmVyeSBmYW50YXN5IHdoYXRlZXZlciB5b3UgaW1hZ2luZSBpbiBwbGFzdGljIGJlYWNoIgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImJ1ZGdpZXRfb3B0aW9uMDEiOiB7CiAgICAgICAgICAgICJrbyI6ICIxIOyynOunjOybkCIsCiAgICAgICAgICAgICJlbiI6ICIxMCBtaWxsaW9uIgogICAgICAgIH0sCiAgICAgICAgImJ1ZGdpZXRfb3B0aW9uMDIiOiB7CiAgICAgICAgICAgICJrbyI6ICIzIOyynOunjOybkCIsCiAgICAgICAgICAgICJlbiI6ICIzMCBtaWxsaW9uIgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgInRpbWVsaW5lX29wdGlvbjAxIjogewogICAgICAgICAgICAia28iOiAiMSDso7wiLAogICAgICAgICAgICAiZW4iOiAiMSB3ZWVrIgogICAgICAgIH0sCiAgICAgICAgInRpbWVsaW5lX29wdGlvbjAyIjogewogICAgICAgICAgICAia28iOiAiMyDso7wiLAogICAgICAgICAgICAiZW4iOiAiMyB3ZWVrIgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgImNhdGVnb3J5X2FsbCI6IHsKICAgICAgICAgICAgImtvIjogIuyghOyytCIsCiAgICAgICAgICAgICJlbiI6ICJBTEwiCiAgICAgICAgfSwKICAgICAgICAiY2F0ZWdvcnlfbXYiOiB7CiAgICAgICAgICAgICJrbyI6ICLrrqTsp4HruYTrlJTsmKQiLAogICAgICAgICAgICAiZW4iOiAiTVYiCiAgICAgICAgfSwKICAgICAgICAiY2F0ZWdvcnlfYWQiOiB7CiAgICAgICAgICAgICJrbyI6ICLqtJHqs6AiLAogICAgICAgICAgICAiZW4iOiAiQUQiCiAgICAgICAgfQogICAgfQpd\";\n\n//# sourceURL=webpack://plasticbeach/./src/js/data/text.json?");

/***/ }),

/***/ "./src/js/data/work.json":
/*!*******************************!*\
  !*** ./src/js/data/work.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"data:application/json;base64,WwogICAgewogICAgICAgICJuYW1lIjogImFlc3BhMDEiLAogICAgICAgICJ1cmwiOiAiNFRXUjkwS0psODQiLAogICAgICAgICJjYXRlZ29yeSIgOiAibXYiLAogICAgICAgICJ0aXRsZSI6IHsKICAgICAgICAgICAgImtvIjogIuuupOyngeu5hOuUlOyYpCAtIDAx7YWM7Iqk7Yq4IDAx7YWM7Iqk7Yq4IDAx7YWM7Iqk7Yq4IiwKICAgICAgICAgICAgImVuIjogIm11c2ljIHZpZGVvIC0gZ2FzIHBlZGFsIgogICAgICAgIH0KICAgIH0sCiAgICB7CiAgICAgICAgIm5hbWUiOiAiYmlnYmFuZyIsCiAgICAgICAgInVybCI6ICIxQ1RjZWQ5Q01NayIsCiAgICAgICAgImNhdGVnb3J5IiA6ICJtdiIsCiAgICAgICAgInRpdGxlIjogewogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDLthYzsiqTtirggMDLthYzsiqTtirggMDLthYzsiqTtirgiLAogICAgICAgICAgICAiZW4iOiAibXVzaWMgdmlkZW8gLSAwMnRlc3QgMDJ0ZXN0IDAydGVzdCIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJuYW1lIjogIm5jdHUiLAogICAgICAgICJ1cmwiOiAidHlyVnR3RThHdjAiLAogICAgICAgICJjYXRlZ29yeSIgOiAiYWQiLAogICAgICAgICJ0aXRsZSI6IHsKICAgICAgICAgICAgImtvIjogIuq0keqzoCAtIDAz7YWM7Iqk7Yq4IDAz7YWM7Iqk7Yq4IDAz7YWM7Iqk7Yq4IiwKICAgICAgICAgICAgImVuIjogImFkIC0gMDN0ZXN0IDAzdGVzdCAwM3Rlc3QiCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAibmFtZSI6ICJpdHp5MDEiLAogICAgICAgICJ1cmwiOiAiX3lzb21DR2FaTHciLAogICAgICAgICJjYXRlZ29yeSIgOiAiYWQiLAogICAgICAgICJ0aXRsZSI6IHsKICAgICAgICAgICAgImtvIjogIuq0keqzoCAtIDA07YWM7Iqk7Yq4IDA07YWM7Iqk7Yq4IDA07YWM7Iqk7Yq4IiwKICAgICAgICAgICAgImVuIjogImFkIC0gMDR0ZXN0IDA0dGVzdCAwNHRlc3QiCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAibmFtZSI6ICJpem9uZSIsCiAgICAgICAgInVybCI6ICJXWndyMmFfbEZXWSIsCiAgICAgICAgImNhdGVnb3J5IiA6ICJtdiIsCiAgICAgICAgInRpdGxlIjogewogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDXthYzsiqTtirggMDXthYzsiqTtirggMDXthYzsiqTtirgiLAogICAgICAgICAgICAiZW4iOiAibXVzaWMgdmlkZW8gLSAwNXRlc3QgMDV0ZXN0IDA1dGVzdCIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJuYW1lIjogImJsYWNrcGluayIsCiAgICAgICAgInVybCI6ICJBbXEtcWxxYmpZQSIsCiAgICAgICAgImNhdGVnb3J5IiA6ICJtdiIsCiAgICAgICAgInRpdGxlIjogewogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDbthYzsiqTtirggMDbthYzsiqTtirggMDbthYzsiqTtirgiLAogICAgICAgICAgICAiZW4iOiAibXVzaWMgdmlkZW8gLSAwNnRlc3QgMDZ0ZXN0IDA2dGVzdCIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJuYW1lIjogIml0enQwMiIsCiAgICAgICAgInVybCI6ICJwTmZUSzM5azU1VSIsCiAgICAgICAgImNhdGVnb3J5IiA6ICJhZCIsCiAgICAgICAgInRpdGxlIjogewogICAgICAgICAgICAia28iOiAi6rSR6rOgIC0gMDfthYzsiqTtirggMDfthYzsiqTtirggMDfthYzsiqTtirgiLAogICAgICAgICAgICAiZW4iOiAiYWQgLSAwN3Rlc3QgMDd0ZXN0IDA3dGVzdCIKICAgICAgICB9CiAgICB9LAogICAgewogICAgICAgICJuYW1lIjogImFlc3BhMDIiLAogICAgICAgICJ1cmwiOiAiWmVlcnJudUxpNUUiLAogICAgICAgICJjYXRlZ29yeSIgOiAiYWQiLAogICAgICAgICJ0aXRsZSI6IHsKICAgICAgICAgICAgImtvIjogIuq0keqzoCAtIDA47YWM7Iqk7Yq4IDA47YWM7Iqk7Yq4IDA47YWM7Iqk7Yq4IiwKICAgICAgICAgICAgImVuIjogImFkIC0gMDh0ZXN0IDA4dGVzdCAwOHRlc3QiCiAgICAgICAgfQogICAgfSwKICAgIHsKICAgICAgICAibmFtZSI6ICJ3YW5uYW9uZSIsCiAgICAgICAgInVybCI6ICJFVmFWN0F3cUJXZyIsCiAgICAgICAgImNhdGVnb3J5IiA6ICJtdiIsCiAgICAgICAgInRpdGxlIjogewogICAgICAgICAgICAia28iOiAi666k7KeB67mE65SU7JikIC0gMDnthYzsiqTtirggMDnthYzsiqTtirggMDnthYzsiqTtirgiLAogICAgICAgICAgICAiZW4iOiAibXVzaWMgdmlkZW8gLSAwOXRlc3QgMDl0ZXN0IDA5dGVzdCIKICAgICAgICB9CiAgICB9Cl0=\";\n\n//# sourceURL=webpack://plasticbeach/./src/js/data/work.json?");

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