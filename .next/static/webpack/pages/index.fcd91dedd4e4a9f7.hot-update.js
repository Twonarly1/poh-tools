"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/queries */ \"./graphql/queries.ts\");\n/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Feed */ \"./components/Feed.tsx\");\n/* harmony import */ var _components_PostBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostBox */ \"./components/PostBox.tsx\");\n/* harmony import */ var _components_SubredditList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SubredditList */ \"./components/SubredditList.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(_graphql_queries__WEBPACK_IMPORTED_MODULE_2__.GET_SUBREDDITS_WITH_LIMIT, {\n        variables: {\n            limit: 10\n        }\n    }).data;\n    var subreddits = data === null || data === void 0 ? void 0 : data.getSubredditListLimit;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"my-7 mx-auto max-w-5xl px-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostBox__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-5\",\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"sticky top-36 mt-5 hidden h-fit min-w-[300px] rounded-md border-gray-300 bg-white lg:inline\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-md mb-1 p-4 pb-3 font-bold\",\n                                        children: \"Top Communities\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: subreddits === null || subreddits === void 0 ? void 0 : subreddits.map(function(subreddit, i) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubredditList__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                topic: subreddit.topic,\n                                                index: i\n                                            }, subreddit.id, false, {\n                                                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                                                lineNumber: 29,\n                                                columnNumber: 17\n                                            }, _this1);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUF5QjtBQUVnQjtBQUNxQjtBQUN6QjtBQUNNO0FBQ1c7O0FBRXRELElBQU1NLElBQUksR0FBYSxXQUFNOzs7SUFDM0IsSUFBTSxJQUFNLEdBQUtMLHdEQUFRLENBQUNDLHVFQUF5QixFQUFFO1FBQ25ETSxTQUFTLEVBQUU7WUFDVEMsS0FBSyxFQUFFLEVBQUU7U0FDVjtLQUNGLENBQUMsQ0FKTUYsSUFBSTtJQU1aLElBQU1HLFVBQVUsR0FBZ0JILElBQUksYUFBSkEsSUFBSSxXQUF1QixHQUEzQkEsS0FBQUEsQ0FBMkIsR0FBM0JBLElBQUksQ0FBRUkscUJBQXFCO0lBRTNELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2QkFBNkI7OzBCQUMxQyw4REFBQ1QsMkRBQU87Ozs7cUJBQUc7MEJBQ1gsOERBQUNRLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxNQUFNOztrQ0FDbkIsOERBQUNWLHdEQUFJOzs7OzZCQUFHO2tDQUNSLDhEQUFDUyxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsTUFBTTs7NEJBQ2xCLEdBQUc7MENBQ0osOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyw2RkFBNkY7O2tEQUMxRyw4REFBQ0MsR0FBQzt3Q0FBQ0QsU0FBUyxFQUFDLGlDQUFpQztrREFBQyxpQkFBZTs7Ozs7NkNBQUk7a0RBQ2xFLDhEQUFDRCxLQUFHO2tEQUNERixVQUFVLGFBQVZBLFVBQVUsV0FBSyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLFVBQVUsQ0FBRUssR0FBRyxDQUFDLFNBQUNDLFNBQVMsRUFBRUMsQ0FBQztpRUFDNUIsOERBQUNaLGlFQUFZO2dEQUVYYSxLQUFLLEVBQUVGLFNBQVMsQ0FBQ0UsS0FBSztnREFDdEJDLEtBQUssRUFBRUYsQ0FBQzsrQ0FGSEQsU0FBUyxDQUFDSSxFQUFFOzs7O3NEQUdqQjt5Q0FDSCxDQUFDOzs7Ozs2Q0FDRTs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0Y7Ozs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBaENLZCxJQUFJOztRQUNTTCxvREFBUTs7O0FBRHJCSyxLQUFBQSxJQUFJO0FBa0NWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcbmltcG9ydCB7IEdFVF9TVUJSRURESVRTX1dJVEhfTElNSVQgfSBmcm9tICcuLi9ncmFwaHFsL3F1ZXJpZXMnXG5pbXBvcnQgRmVlZCBmcm9tICcuLi9jb21wb25lbnRzL0ZlZWQnXG5pbXBvcnQgUG9zdEJveCBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RCb3gnXG5pbXBvcnQgU3VicmVkZGl0Um93IGZyb20gJy4uL2NvbXBvbmVudHMvU3VicmVkZGl0TGlzdCdcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1NVQlJFRERJVFNfV0lUSF9MSU1JVCwge1xuICAgIHZhcmlhYmxlczoge1xuICAgICAgbGltaXQ6IDEwLFxuICAgIH0sXG4gIH0pXG5cbiAgY29uc3Qgc3VicmVkZGl0czogU3VicmVkZGl0W10gPSBkYXRhPy5nZXRTdWJyZWRkaXRMaXN0TGltaXRcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNyBteC1hdXRvIG1heC13LTV4bCBweC02XCI+XG4gICAgICA8UG9zdEJveCAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgIDxGZWVkIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtNVwiPlxuICAgICAgICAgIHsnICd9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTM2IG10LTUgaGlkZGVuIGgtZml0IG1pbi13LVszMDBweF0gcm91bmRlZC1tZCBib3JkZXItZ3JheS0zMDAgYmctd2hpdGUgbGc6aW5saW5lXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIG1iLTEgcC00IHBiLTMgZm9udC1ib2xkXCI+VG9wIENvbW11bml0aWVzPC9wPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge3N1YnJlZGRpdHM/Lm1hcCgoc3VicmVkZGl0LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFN1YnJlZGRpdFJvd1xuICAgICAgICAgICAgICAgICAga2V5PXtzdWJyZWRkaXQuaWR9XG4gICAgICAgICAgICAgICAgICB0b3BpYz17c3VicmVkZGl0LnRvcGljfVxuICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VRdWVyeSIsIkdFVF9TVUJSRURESVRTX1dJVEhfTElNSVQiLCJGZWVkIiwiUG9zdEJveCIsIlN1YnJlZGRpdFJvdyIsIkhvbWUiLCJkYXRhIiwidmFyaWFibGVzIiwibGltaXQiLCJzdWJyZWRkaXRzIiwiZ2V0U3VicmVkZGl0TGlzdExpbWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsIm1hcCIsInN1YnJlZGRpdCIsImkiLCJ0b3BpYyIsImluZGV4IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});