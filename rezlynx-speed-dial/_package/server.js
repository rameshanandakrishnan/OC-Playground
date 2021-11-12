/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./rezlynx-speed-dial/src/server.ts":
/*!******************************************!*\
  !*** ./rezlynx-speed-dial/src/server.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
const database = [{
  name: 'John Doe',
  age: 34,
  hobbies: ['Swimming', 'Basketball']
}, {
  name: 'Jane Doe',
  age: 35,
  hobbies: ['Running', 'Rugby']
}];

async function getUser(userId) {
  return database[userId];
}

async function data(context, callback) {
  const {
    userId
  } = context.params;
  const user = await getUser(userId);
  const shouldGetMoreData = context.params.getMoreData;
  const [firstName, lastName] = user.name.split(/\s+/);

  if (shouldGetMoreData) {
    return callback(null, {
      age: user.age,
      hobbies: user.hobbies
    });
  }

  return callback(null, {
    userId,
    firstName,
    lastName
  });
}

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************!*\
  !*** ./rezlynx-speed-dial/src/_package/temp/__oc_higherOrderServer.ts ***!
  \************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
/* harmony import */ var _Users_anandakrishnanr_Projects_Project_OC_Playground_rezlynx_speed_dial_src_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rezlynx-speed-dial/src/server */ "./rezlynx-speed-dial/src/server.ts");

const data = (context, callback) => {
  (0,_Users_anandakrishnanr_Projects_Project_OC_Playground_rezlynx_speed_dial_src_server__WEBPACK_IMPORTED_MODULE_0__.data)(context, (error, model) => {
    if (error) {
      return callback(error);
    }

    const props = Object.assign({}, model, {
      _staticPath: context.staticPath,
      _baseUrl: context.baseUrl,
      _componentName: "rezlynx-speed-dial",
      _componentVersion: "1.0.0"
    });
    const srcPathHasProtocol = context.staticPath.indexOf("http") === 0;
    const srcPath = srcPathHasProtocol ? context.staticPath : "https:" + context.staticPath;
    return callback(null, Object.assign({}, {
      reactComponent: {
        key: "f7c48a915820acbfd1037666a4d7f326733320b8",
        src: srcPath + "react-component.js",
        props
      }
    }));
  });
};
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=server.js.map