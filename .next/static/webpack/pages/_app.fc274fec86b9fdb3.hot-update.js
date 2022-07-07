"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apollo-client */ \"./apollo-client.js\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n\n\n\n\n\n\n\n\n\n\nvar ref = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_8__.chain.mainnet\n], [\n    _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.apiProvider.fallback()\n]), chains = ref.chains, provider = ref.provider;\nvar connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.getDefaultWallets)({\n    appName: \"My RainbowKit App\",\n    chains: chains\n}).connectors;\nvar wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.createClient)({\n    autoConnect: true,\n    connectors: connectors,\n    provider: provider\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_9__.ApolloProvider, {\n        client: _apollo_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiProvider, {\n            client: wagmiClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.RainbowKitProvider, {\n                coolMode: true,\n                chains: chains,\n                theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_7__.lightTheme)({\n                    accentColor: \"#FFAD33\",\n                    accentColorForeground: \"white\",\n                    borderRadius: \"small\",\n                    fontStack: \"system\"\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_10__.Toaster, {}, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                children: \"poh tools\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                                rel: \"icon\",\n                                href: \"/images/proofofhumanity.png\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_4__.RecoilRoot, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-screen overflow-y-scroll bg-slate-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                                    fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/hawk/HumanityTools/poh-tools/pages/_app.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVc7QUFDYjtBQUNtQjtBQUNOO0FBQ047QUFDdUI7QUFDZjtBQUNEO0FBT1g7QUFHL0IsSUFBNkJVLEdBRzVCLEdBSDRCQSx1RUFBZSxDQUMxQztJQUFDTCxnREFBYTtDQUFDLEVBQ2Y7SUFBQ0ksd0VBQW9CLEVBQUU7Q0FBQyxDQUN6QixFQUhPTyxNQUFNLEdBQWVOLEdBRzVCLENBSE9NLE1BQU0sRUFBRUMsUUFBUSxHQUFLUCxHQUc1QixDQUhlTyxRQUFRO0FBSXhCLElBQU0sVUFBWSxHQUFLTix5RUFBaUIsQ0FBQztJQUN2Q1EsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QkgsTUFBTSxFQUFOQSxNQUFNO0NBQ1AsQ0FBQyxDQUhNRSxVQUFVO0FBSWxCLElBQU1FLFdBQVcsR0FBR2QsbURBQVksQ0FBQztJQUMvQmUsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVUsRUFBVkEsVUFBVTtJQUNWRCxRQUFRLEVBQVJBLFFBQVE7Q0FDVCxDQUFDO0FBRUYsU0FBU0ssS0FBSyxDQUFDLEtBQWlELEVBQUU7UUFBakRDLFNBQVMsR0FBWCxLQUFpRCxDQUEvQ0EsU0FBUyxFQUFFQyxTQUFzQixHQUFuQyxLQUFpRCxDQUFwQ0EsU0FBUyxDQUFJQSxTQUFTO0lBQ2hELHFCQUNFLDhEQUFDdEIsMERBQWM7UUFBQ3VCLE1BQU0sRUFBRWpCLHNEQUFZO2tCQUNsQyw0RUFBQ0QsZ0RBQWE7WUFBQ2tCLE1BQU0sRUFBRUwsV0FBVztzQkFDaEMsNEVBQUNQLHNFQUFrQjtnQkFDakJhLFFBQVEsRUFBRSxJQUFJO2dCQUNkVixNQUFNLEVBQUVBLE1BQU07Z0JBQ2RXLEtBQUssRUFBRWYsa0VBQVUsQ0FBQztvQkFDaEJnQixXQUFXLEVBQUUsU0FBUztvQkFDdEJDLHFCQUFxQixFQUFFLE9BQU87b0JBQzlCQyxZQUFZLEVBQUUsT0FBTztvQkFDckJDLFNBQVMsRUFBRSxRQUFRO2lCQUNwQixDQUFDOztrQ0FFRiw4REFBQzVCLHFEQUFPOzs7OzRCQUFHO2tDQUNYLDhEQUFDRixrREFBSTs7MENBQ0gsOERBQUMrQixPQUFLOzBDQUFDLFdBQVM7Ozs7O29DQUFROzBDQUN4Qiw4REFBQ0MsTUFBSTtnQ0FBQ0MsR0FBRyxFQUFDLE1BQU07Z0NBQUNDLElBQUksRUFBQyw2QkFBNkI7Ozs7O29DQUFHOzs7Ozs7NEJBQ2pEO2tDQUNQLDhEQUFDL0IsOENBQVU7a0NBQ1QsNEVBQUNnQyxLQUFHOzRCQUFDQyxTQUFTLEVBQUMseUNBQXlDOzs4Q0FDdEQsOERBQUNyQywwREFBTTs7Ozt3Q0FBRzs4Q0FDViw4REFBQ3VCLFNBQVMsb0JBQUtDLFNBQVM7Ozs7d0NBQUk7Ozs7OztnQ0FDeEI7Ozs7OzRCQUNLOzs7Ozs7b0JBQ007Ozs7O2dCQUNQOzs7OztZQUNELENBQ2xCO0NBQ0Y7QUE3QlFGLEtBQUFBLEtBQUs7QUErQmQsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCdcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tICdyZWNvaWwnXG5pbXBvcnQgeyBjaGFpbiwgY3JlYXRlQ2xpZW50LCBXYWdtaVByb3ZpZGVyIH0gZnJvbSAnd2FnbWknXG5pbXBvcnQgYXBvbGxvQ2xpZW50IGZyb20gJy4uL2Fwb2xsby1jbGllbnQnXG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcydcbmltcG9ydCB7XG4gIGFwaVByb3ZpZGVyLFxuICBjb25maWd1cmVDaGFpbnMsXG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBsaWdodFRoZW1lLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG59IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3RlcidcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtjaGFpbi5tYWlubmV0XSxcbiAgW2FwaVByb3ZpZGVyLmZhbGxiYWNrKCldXG4pXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ015IFJhaW5ib3dLaXQgQXBwJyxcbiAgY2hhaW5zLFxufSlcbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IHRydWUsXG4gIGNvbm5lY3RvcnMsXG4gIHByb3ZpZGVyLFxufSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBwYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XG4gICAgICA8V2FnbWlQcm92aWRlciBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgICAgPFJhaW5ib3dLaXRQcm92aWRlclxuICAgICAgICAgIGNvb2xNb2RlPXt0cnVlfVxuICAgICAgICAgIGNoYWlucz17Y2hhaW5zfVxuICAgICAgICAgIHRoZW1lPXtsaWdodFRoZW1lKHtcbiAgICAgICAgICAgIGFjY2VudENvbG9yOiAnI0ZGQUQzMycsXG4gICAgICAgICAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6ICd3aGl0ZScsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICdzbWFsbCcsXG4gICAgICAgICAgICBmb250U3RhY2s6ICdzeXN0ZW0nLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPFRvYXN0ZXIgLz5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5wb2ggdG9vbHM8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaW1hZ2VzL3Byb29mb2ZodW1hbml0eS5wbmdcIiAvPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gb3ZlcmZsb3cteS1zY3JvbGwgYmctc2xhdGUtMjAwXCI+XG4gICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZWNvaWxSb290PlxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgIDwvV2FnbWlQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiSGVhZCIsIkFwb2xsb1Byb3ZpZGVyIiwiVG9hc3RlciIsIlJlY29pbFJvb3QiLCJjaGFpbiIsImNyZWF0ZUNsaWVudCIsIldhZ21pUHJvdmlkZXIiLCJhcG9sbG9DbGllbnQiLCJhcGlQcm92aWRlciIsImNvbmZpZ3VyZUNoYWlucyIsImdldERlZmF1bHRXYWxsZXRzIiwibGlnaHRUaGVtZSIsIlJhaW5ib3dLaXRQcm92aWRlciIsIm1haW5uZXQiLCJmYWxsYmFjayIsImNoYWlucyIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImFwcE5hbWUiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJjb29sTW9kZSIsInRoZW1lIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJib3JkZXJSYWRpdXMiLCJmb250U3RhY2siLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ })

});