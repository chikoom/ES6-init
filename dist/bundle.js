/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Default veriables in functions + template strings - new to ES6\nvar nameBuilder = function (firstName = \"Joe\", lastName = \"Doe\") {\n  console.log(`${firstName} ${lastName}`);\n};\n\nnameBuilder(); // const is a constant veriable new in ES6\n\nconst numberOfDivs = 18; // let is a scope veriable new in ES6\n\nfor (let i = 0; i <= numberOfDivs; i++) {\n  var divi = document.createElement('div');\n  divi.innerHTML = i;\n  divi.addEventListener('click', function (e) {\n    alert(\"box number \" + i);\n  }, false);\n  document.getElementsByTagName('section')[0].appendChild(divi);\n}\n\nfunction templateStringExample(name = \"No name entered\", value = 0) {\n  let addedValue = 50;\n  let stringOutput = `\n\t\tThe name entered is: ${name}\\n\n\t\tThe value entered is: ${value}\\n\n\t\tThe added value is: ${addedValue}\\n\n\t\tThe total value is: ${value + addedValue}\\n\n\t`;\n  var textP = document.createElement('p');\n  textP.innerHTML = stringOutput;\n  document.getElementById('templateString').appendChild(textP);\n}\n\ntemplateStringExample(\"Chikoom\", 100); // SET Exmaple\n\nvar books = new Set();\nbooks.add('Pride and Prejudice');\nbooks.add('War and Peace').add('Oliver Twist');\nconsole.log(books);\nconsole.log('how many books?', books.size);\nconsole.log('has Oliver Twist?', books.has('Oliver Twist'));\nbooks.delete('Oliver Twist');\nconsole.log('has Oliver Twist still?', books.has('Oliver Twist'));\nvar data = [4, 2, 4, 4, 2, 5, 1, 6, 7, 5, 6, 8, 2, 7];\nvar set = new Set(data);\nconsole.log('data.length', data.length);\nconsole.log('set.size', set.size); // MAP Exmaple\n\nvar course = new Map();\ncourse.set('react', {\n  description: 'ui'\n});\ncourse.set('jest', {\n  description: 'testing'\n});\nconsole.log(course);\nconsole.log(course.react);\nconsole.log(course.get('react'));\nvar details = new Map([[new Date(), 'today'], ['items', [1, 2]]]);\nconsole.log(details.size);\ndetails.forEach(function (item) {\n  console.log(item);\n});\nvar cats = [\"Tabby\", \"Siamese\", \"Persian\"];\nvar dogs = [\"Golden Retriever\", \"Pug\", \"Schnauzer\"];\nvar animals = [\"Whale\", \"Giraffe\", ...cats, \"Snake\", ...dogs, \"Coyote\"];\nconsole.log(animals); // For-Of Exmaple\n\nfor (let letter of 'JavaScript') {\n  console.log(letter);\n}\n\nvar topics = ['JavaScript', 'Node', 'React'];\n\nfor (let topic of topics) {\n  console.log(topic);\n}\n\nvar topics = new Map();\ntopics.set('HTML', '/class/html');\ntopics.set('CSS', '/class/css');\ntopics.set('JavaScript', '/class/javascript');\ntopics.set('Node', '/class/node');\n\nfor (let topic of topics.keys()) {\n  console.log(topic, \"is the course name\");\n}\n\nfor (let topic of topics.values()) {\n  console.log(\"The course description can be found at\", topic);\n}\n\nfor (let course of topics.entries()) {\n  console.log(course);\n}\n\nfunction addNumbers(x = 0, y = 0) {\n  console.log(x + y);\n}\n\naddNumbers();\naddNumbers(2, 3); // Objects Literals 0 base Array\n\nvar cat = {\n  speak: function (times, sound) {\n    console.log(Array(times + 1).join(sound));\n  },\n  purr: function (times) {\n    console.log(Array(times + 1).join(\"PURR \"));\n  }\n};\ncat.speak(3, \"meow\");\ncat.purr(5); // Objects Literals ES6\n\nvar dog = {\n  speak(times, sound) {\n    console.log(sound.repeat(times));\n  },\n\n  woof(times) {\n    console.log(\"woof\".repeat(times));\n  }\n\n};\ndog.speak(3, \"bark\");\ndog.woof(5); // Arrow functions\n\nvar studentList = students => console.log(students);\n\nstudentList([\"Idan\", \"Zohar\", \"Kundi\"]);\n\nvar studentListNumber = (school, students) => console.log(`the students ${students} are in ${school} school`);\n\nstudentListNumber(\"borochov\", [\"Idan\", \"Zohar\", \"Kundi\"]); // Arrow and this scope\n\nvar kundi = {\n  name: \"Kundofon\",\n  actions: [\"Eat\", \"Sleep\", \"Jump\"],\n  printActions: function () {\n    this.actions.forEach(function (action) {\n      var str = this.name + \" likes to \" + action;\n      console.log(str);\n    }.bind(this));\n  }\n};\nkundi.printActions(); // ES6 version\n\nvar kundofon = {\n  name: \"Kundofoni\",\n  sounds: [\"Meow\", \"Purr\", \"Grr\"],\n\n  printSounds() {\n    this.sounds.forEach(sound => {\n      var str = this.name + \" likes to \" + sound;\n      console.log(str);\n    });\n  }\n\n};\nkundofon.printSounds(); // Destructuring\n\nvar [first,,, foutrh] = [\"Tel Aviv\", \"Ramat gan\", \"Givataim\", \"Nahariya\", \"Haifa\"];\nconsole.log(first, foutrh); // Destructuring 2\n\nvar vecation = {\n  destination: \"Amsterdam\",\n  days: 2,\n  activity: \"walking\",\n  price: 5000\n};\n\nfunction vecationMarketing({\n  destination,\n  days\n}) {\n  return `Come to ${destination} for ${days} days!`;\n}\n\nconsole.log(vecationMarketing(vecation)); // Generators\n\nfunction* director() {\n  yield \"Three\";\n  yield \"Two\";\n  yield \"One\";\n  yield \"Action!\";\n}\n\nvar action = director();\nconsole.log(action.next().value);\nconsole.log(action.next().value);\nconsole.log(action.next().value);\nconsole.log(action.next().value);\nconsole.log(action.next()); // Generator Timer\n\nfunction* eachItem(arr) {\n  for (i = 0; i < arr.length; i++) {\n    yield arr[i];\n  }\n}\n\nvar letters = eachItem([\"a\", \"b\", \"c\"]);\nvar abc = setInterval(function () {\n  var letter = letters.next();\n\n  if (letter.done) {\n    clearInterval(abc);\n    console.log(\"letters are done\");\n  } else {\n    console.log(letter.value);\n  }\n}, 1000); // Symblos premitive type\n\nvar id = Symbol();\nvar courses = {\n  name: \"ES6\",\n  topics: [\"JS\", \"functions\", \"Symbols\"],\n  id: \"learning-js\"\n};\ncourses[id] = 5555;\nconsole.log(courses);\nconsole.log(courses.id);\nconsole.log(courses[id]); // Iterators\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ });