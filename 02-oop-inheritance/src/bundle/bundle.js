(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
	_classCallCheck(this, Actor);

	this.name = name;
	this.age = age;
};

exports.default = Actor;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this.callBackFunctions = Object.create(null);
	}

	_createClass(EventEmitter, [{
		key: 'on',
		value: function on(event, callBack) {
			this.callBackFunctions[event] = callBack;
		}
	}, {
		key: 'emit',
		value: function emit(event) {
			var callBack = this.callBackFunctions[event];
			if (typeof callBack == 'undefined') {
				console.log('You have an Error!');
			} else {
				callBack(event);
			}
		}
	}, {
		key: 'off',
		value: function off(event) {}
	}]);

	return EventEmitter;
}();

exports.default = EventEmitter;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
	function Logger() {
		_classCallCheck(this, Logger);

		this.log = this.Log.bind();
	}

	_createClass(Logger, [{
		key: 'Log',
		value: function Log(info) {
			console.log(' The ' + info + ' event has been emitted');
		}
	}]);

	return Logger;
}();

exports.default = Logger;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Social = {
	share: function share(friendName) {
		console.log(friendName + ' share  ' + this.tittle);
	},
	like: function like(friendName) {
		console.log(friendName + ' likes ' + this.tittle);
	}
};

exports.default = Social;

},{}],5:[function(require,module,exports){
'use strict';

var _movie = require('./movie.js');

var _movie2 = _interopRequireDefault(_movie);

var _Logger = require('./Logger.js');

var _Logger2 = _interopRequireDefault(_Logger);

var _Actor = require('./Actor.js');

var _Actor2 = _interopRequireDefault(_Actor);

var _Social = require('./Social.js');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
	var movie = null;
	var actors = [];
	var addButt = document.getElementById('addButt');
	addButt.addEventListener('click', function (e) {
		e.preventDefault();
		var moviesTittle = document.getElementById('moviesTittle').value;
		var year = document.getElementById('year').value;
		var duration = document.getElementById('duration').value;
		if (moviesTittle != '' && year != '' && duration != '') {
			movie = new _movie2.default(moviesTittle, year, duration);
			var formActors = document.getElementById('actorsForm');
			formActors.classList.remove('formHidden');

			var addActor = document.getElementById('addActor');
			addActor.addEventListener('click', function (e) {
				e.preventDefault();
				var actorName = document.getElementById('actorName');
				var age = document.getElementById('age');
				if (actorName != '' && age != '') {
					actors.push(new _Actor2.default(actorName.value, age.value));
					actorName.value = '';
					age.value = '';
					fillInfo();
				}
			});

			if (movie != null) {
				fillInfo();
			}
			if (actors.length > 0) {
				fillInfo();
			}
		} else {
			alert('you must fill all fields');
		}
	});
	function fillInfo() {
		var infoDiv = document.getElementById('infoDiv');
		infoDiv.innerHTML = '<p> <span class=\'titteSpan\'> Movie\'s Information </span></p> <ul> <li><span class=\'subTitteSpan\'> Tittle: </span>' + movie.tittle + '</li> <li> <span class=\'titteSpan\'> Year: </span>' + movie.year + '</li> <li> <span class=\'subTitteSpan\'>Running Time:</span>' + movie.duration + '</li><li> <span class=\'subTitteSpan\'> Actors: </span> ' + getActors() + '</li></ul>';
	}

	function getActors() {

		var returnVal = '<ul>';

		console.log(actors);
		for (var k in actors) {
			console.log('entro aca');
			returnVal += '<li> <span class=\'subTitteSpan\'> Name: </span>' + actors[k].name + '<span class=\'subTitteSpan\'> Age: </span>' + actors[k].age + ' </li>';
		}

		returnVal += '</ul>';
		return returnVal;
	}

	test();
};

function test() {
	function playWithMovie(movie) {
		var logger = new _Logger2.default();
		movie.on('play', logger.log);
		movie.play();
		var obj = Object.assign(movie, _Social2.default);
		movie.like('Jorge Nicolas');
		movie.share('Orlando');
		//9 point
		movie.getActors();
	}
	console.log('Test ');
	var terminator = new _movie2.default('Terminator I', 1985, 60);
	var arnold = new _Actor2.default('Arnold Schwarzenegger', 50);
	var otherCast = [new _Actor2.default('Paul Winfield', 50), new _Actor2.default('Michael Biehn', 50), new _Actor2.default('Linda Hamilton', 50)];

	terminator.addCast(arnold);
	terminator.addCast(otherCast);

	playWithMovie(terminator);
}

},{"./Actor.js":1,"./Logger.js":3,"./Social.js":4,"./movie.js":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require('./EventEmitter.js');

var _EventEmitter3 = _interopRequireDefault(_EventEmitter2);

var _Actor = require('./Actor.js');

var _Actor2 = _interopRequireDefault(_Actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_EventEmitter) {
	_inherits(Movie, _EventEmitter);

	function Movie(tittle, year, duration) {
		_classCallCheck(this, Movie);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movie).call(this));

		_this.tittle = tittle;
		_this.year = year;
		_this.duration = duration;
		_this.actors = [];
		return _this;
	}

	_createClass(Movie, [{
		key: 'play',
		value: function play() {
			this.emit('play');
			console.log('Play > ' + this.tittle + '(' + this.year + '-' + this.duration + ') :');
		}
	}, {
		key: 'pause',
		value: function pause() {
			emit('pause');
			console.log('Pause || ' + this.tittle + '(' + this.year + '-' + this.duration + ') :');
		}
	}, {
		key: 'resume',
		value: function resume() {
			emit('resume');
			console.log('Resume >> ' + this.tittle + '(' + this.yr + '-' + this.duration + ') :');
		}
	}, {
		key: 'addCast',
		value: function addCast(actor) {

			if (Array.isArray(actor)) {
				this.actors = this.actors.concat(this.actors, actor);
			} else {
				this.actors.push(actor);
			}
		}
	}, {
		key: 'getActors',
		value: function getActors() {
			if (this.actors != null) {
				console.log('Actors of ' + this.tittle + " are: ");
				for (var i in this.actors) {
					/*this is wrong. doesnt work like in java... if i put this, javascript will belive this.actors are  an string
     console.log('- ' + this.actors[i]);*/
					console.log('- Name: ' + this.actors[i].name + ' Age: ' + this.actors[i].age);
				}
			} else {
				console.log('There not any actor');
			}
		}
	}]);

	return Movie;
}(_EventEmitter3.default);

exports.default = Movie;

},{"./Actor.js":1,"./EventEmitter.js":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXEFjdG9yLmpzIiwiYXBwXFxFdmVudEVtaXR0ZXIuanMiLCJhcHBcXExvZ2dlci5qcyIsImFwcFxcU29jaWFsLmpzIiwiYXBwXFxpbmRleC5qcyIsImFwcFxcbW92aWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FlLEFBQU0sQUFBTSxBQUMxQix1QkFBQSxBQUFZLE1BQVosQUFBaUI7QUFBSSxBQUNwQjs7TUFBQSxBQUFLLE9BQUwsQUFBVyxBQUNYO01BQUEsQUFBSyxNQUFMLEFBQVMsQUFDVDtBQUp5Qjs7Ozs7QUNBM0IsQUFFQSxBQUFlOzs7Ozs7Ozs7O0lBQUEsQUFBTSxBQUFZLEFBQ2hDOztBQUFhLEFBQ1o7O09BQUEsQUFBSyxvQkFBa0IsT0FBQSxBQUFPLE9BQTlCLEFBQXVCLEFBQWMsQUFDckM7QUFFRDs7OztxQkFBQSxBQUFHLE9BQUgsQUFBVSxVQUFTLEFBQ2xCO1FBQUEsQUFBSyxrQkFBTCxBQUF1QixTQUF2QixBQUErQixBQUMvQjtBQUNEOzs7dUJBQUEsQUFBSyxPQUFNLEFBQ1Y7T0FBSSxXQUFTLEtBQUEsQUFBSyxrQkFBbEIsQUFBYSxBQUF1QixBQUNwQztPQUFHLE9BQUEsQUFBTyxZQUFWLEFBQXFCLGFBQVksQUFDaEM7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBRkQsVUFHSSxBQUNIO2FBQUEsQUFBUyxBQUNUO0FBQ0Q7QUFDRDs7O3NCQUFBLEFBQUksT0FBTSxBQUVULENBbkIrQjs7Ozs7Ozs7O0FDRmpDLEFBQ0EsQUFBZTs7Ozs7Ozs7OztJQUFBLEFBQU0sQUFBTSxBQUMxQjs7QUFBYSxBQUNaOztPQUFBLEFBQUssTUFBSSxLQUFBLEFBQUssSUFBZCxBQUFTLEFBQVMsQUFDbEI7QUFDRDs7OztzQkFBQSxBQUFJLE1BQUssQUFDUDtXQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVUsT0FBdEIsQUFBNEIsQUFDN0I7QUFOeUI7Ozs7Ozs7OztBQ0QzQjs7Ozs7QUFDQSxJQUFJO1FBQ0ksZUFBQSxBQUFTLFlBQ2hCLEFBQ0M7VUFBQSxBQUFRLEFBQUksQUFBQyxJQUFELEFBQUcsQUFBVywwQkFBVSxLQUFwQyxBQUFZLEFBQTZCLEFBQU8sQUFDaEQ7QUFKVyxBQUtaO09BQU0sY0FBQSxBQUFTLFlBQ2YsQUFDQztVQUFBLEFBQVEsQUFBSSxBQUFDLElBQUQsQUFBRyxBQUFXLHlCQUFTLEtBQW5DLEFBQVksQUFBNEIsQUFBTyxBQUMvQztBQVJGLEFBQWEsQUFXYjtBQVhhLEFBQ1o7O2tCQVVELEFBQWU7OztBQ1pmOztBQUVBLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7Ozs7O0FBQ25CLE9BQUEsQUFBTyxTQUFPLFlBQVUsQUFDdkI7S0FBSSxRQUFKLEFBQVUsQUFDVjtLQUFJLFNBQUosQUFBVyxBQUNYO0tBQUksVUFBVSxTQUFBLEFBQVMsZUFBdkIsQUFBYyxBQUF3QixBQUN0QztTQUFBLEFBQVEsaUJBQVIsQUFBeUIsU0FBUSxVQUFBLEFBQVMsR0FBRSxBQUMzQztJQUFBLEFBQUUsQUFDRjtNQUFJLGVBQWMsU0FBQSxBQUFTLGVBQVQsQUFBd0IsZ0JBQTFDLEFBQTBELEFBQzFEO01BQUksT0FBTSxTQUFBLEFBQVMsZUFBVCxBQUF3QixRQUFsQyxBQUEwQyxBQUMxQztNQUFJLFdBQVUsU0FBQSxBQUFTLGVBQVQsQUFBd0IsWUFBdEMsQUFBa0QsQUFDbEQ7TUFBRyxnQkFBQSxBQUFjLE1BQU0sUUFBcEIsQUFBMkIsTUFBTSxZQUFwQyxBQUE4QyxJQUFHLEFBQ2hEO1dBQVEsQUFBSSxvQkFBSixBQUFVLGNBQVYsQUFBdUIsTUFBL0IsQUFBUSxBQUE0QixBQUNwQztPQUFJLGFBQWEsU0FBQSxBQUFTLGVBQTFCLEFBQWlCLEFBQXdCLEFBQ3pDO2NBQUEsQUFBVyxVQUFYLEFBQXFCLE9BQXJCLEFBQTRCLEFBRTVCOztPQUFJLFdBQVcsU0FBQSxBQUFTLGVBQXhCLEFBQWUsQUFBd0IsQUFDdkM7WUFBQSxBQUFTLGlCQUFULEFBQTBCLFNBQVMsVUFBQSxBQUFTLEdBQUUsQUFDN0M7TUFBQSxBQUFFLEFBQ0Y7UUFBSSxZQUFZLFNBQUEsQUFBUyxlQUF6QixBQUFnQixBQUF3QixBQUN4QztRQUFJLE1BQUssU0FBQSxBQUFTLGVBQWxCLEFBQVMsQUFBd0IsQUFDakM7UUFBRyxhQUFBLEFBQVcsTUFBTSxPQUFwQixBQUF5QixJQUFHLEFBQzNCO1lBQUEsQUFBTyxLQUFLLEFBQUksb0JBQU0sVUFBVixBQUFvQixPQUFNLElBQXRDLEFBQVksQUFBOEIsQUFDMUM7ZUFBQSxBQUFVLFFBQVYsQUFBZ0IsQUFDaEI7U0FBQSxBQUFJLFFBQUosQUFBVSxBQUNWO0FBQ0E7QUFDRDtBQVZELEFBYUE7O09BQUcsU0FBSCxBQUFVLE1BQUssQUFDZDtBQUNBO0FBQ0Q7T0FBRyxPQUFBLEFBQU8sU0FBVixBQUFpQixHQUFFLEFBQ2xCO0FBQ0E7QUFFRDtBQTFCRCxTQTJCSSxBQUNIO1NBQUEsQUFBTSxBQUNOO0FBRUQ7QUFwQ0QsQUFxQ0E7VUFBQSxBQUFTLFdBQVUsQUFDbEI7TUFBSSxVQUFTLFNBQUEsQUFBUyxlQUF0QixBQUFhLEFBQXdCLEFBQ3JDO1VBQUEsQUFBUSxZQUFVLDJIQUEySCxNQUEzSCxBQUFpSSxTQUFqSSxBQUNoQix3REFBd0QsTUFEeEMsQUFDOEMsT0FEOUMsQUFDb0QsaUVBQWlFLE1BRHJILEFBQzJILFdBRDNILEFBRWxCLDZEQUZrQixBQUUyQyxjQUY3RCxBQUUyRSxBQUMzRTtBQUVEOztVQUFBLEFBQVMsWUFBVyxBQUVuQjs7TUFBSSxZQUFKLEFBQWUsQUFFZjs7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO09BQUksSUFBSixBQUFRLEtBQVIsQUFBYSxRQUFPLEFBQ25CO1dBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtnQkFBVyxxREFBcUQsT0FBQSxBQUFPLEdBQTVELEFBQStELE9BQS9ELEFBQXNFLCtDQUErQyxPQUFBLEFBQU8sR0FBNUgsQUFBK0gsTUFBMUksQUFBK0ksQUFDL0k7QUFFRDs7ZUFBQSxBQUFXLEFBQ1g7U0FBQSxBQUFPLEFBRVA7QUFFRDs7QUFFQTtBQWpFRDs7QUFtRUEsU0FBQSxBQUFTLE9BQU0sQUFDZDtVQUFBLEFBQVMsY0FBVCxBQUF1QixPQUFNLEFBQzVCO01BQUksU0FBSixBQUFZLEFBQUksQUFDaEI7UUFBQSxBQUFNLEdBQU4sQUFBUyxRQUFPLE9BQWhCLEFBQXVCLEFBQ3ZCO1FBQUEsQUFBTSxBQUNOO01BQUksTUFBSyxPQUFBLEFBQU8sT0FBaEIsQUFBUyxBQUFjLEFBQU0sQUFDN0I7UUFBQSxBQUFNLEtBQU4sQUFBVyxBQUNYO1FBQUEsQUFBTSxNQUFOLEFBQVksQUFFWjs7UUFBQSxBQUFNLEFBRU47QUFDRDtTQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7S0FBSSxhQUFhLEFBQUksb0JBQUosQUFBVSxnQkFBVixBQUEwQixNQUEzQyxBQUFpQixBQUFnQyxBQUNqRDtLQUFJLFNBQVMsQUFBSSxvQkFBSixBQUFVLHlCQUF2QixBQUFhLEFBQW1DLEFBQ2hEO0tBQUksWUFBWSxDQUNkLEFBQUksb0JBQUosQUFBVSxpQkFESSxBQUNkLEFBQTJCLEtBQzNCLEFBQUksb0JBQUosQUFBVSxpQkFGSSxBQUVkLEFBQTJCLEtBQzNCLEFBQUksb0JBQUosQUFBVSxrQkFIWixBQUFnQixBQUdkLEFBQTRCLEFBRzlCOztZQUFBLEFBQVcsUUFBWCxBQUFtQixBQUNuQjtZQUFBLEFBQVcsUUFBWCxBQUFtQixBQUVuQjs7ZUFBQSxBQUFjLEFBQ2Q7Ozs7QUNsR0Q7Ozs7Ozs7O0FBR0EsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVcsQUFFbEIsQUFBZTs7Ozs7Ozs7Ozs7O0lBQUEsQUFBTSxBQUFjLEFBQVksQUFDOUM7OztnQkFBQSxBQUFZLFFBQVosQUFBb0IsTUFBcEIsQUFBeUI7QUFBUyxBQUNqQyxBQUNBOzs7O1FBQUEsQUFBSyxTQUFMLEFBQVksQUFDWjtRQUFBLEFBQUssT0FBTCxBQUFVLEFBQ1Y7UUFBQSxBQUFLLFdBQUwsQUFBYyxBQUNkO1FBQUEsQUFBSyxTQUFMLEFBQVksQUFFWjs7QUFDRDs7Ozt5QkFBTSxBQUNGO1FBQUEsQUFBSyxLQUFMLEFBQVUsQUFDWDtXQUFBLEFBQVEsSUFBSSxZQUFXLEtBQVgsQUFBZ0IsU0FBaEIsQUFBeUIsTUFBTSxLQUEvQixBQUFvQyxPQUFwQyxBQUE2QyxNQUFNLEtBQW5ELEFBQXdELFdBQXBFLEFBQStFLEFBRWpGO0FBQ0Q7OzswQkFBTyxBQUNOO1FBQUEsQUFBSyxBQUNIO1dBQUEsQUFBUSxJQUFJLGNBQWEsS0FBYixBQUFrQixTQUFsQixBQUEyQixNQUFNLEtBQWpDLEFBQXNDLE9BQXRDLEFBQStDLE1BQU0sS0FBckQsQUFBMEQsV0FBdEUsQUFBaUYsQUFDbkY7QUFDRDs7OzJCQUFRLEFBQ1A7UUFBQSxBQUFLLEFBQ0g7V0FBQSxBQUFRLElBQUksZUFBYyxLQUFkLEFBQW1CLFNBQW5CLEFBQTRCLE1BQU0sS0FBbEMsQUFBdUMsS0FBdkMsQUFBOEMsTUFBTSxLQUFwRCxBQUF5RCxXQUFyRSxBQUFnRixBQUNsRjtBQUVEOzs7MEJBQUEsQUFBUSxPQUFNLEFBRWI7O09BQUcsTUFBQSxBQUFNLFFBQVQsQUFBRyxBQUFjLFFBQU8sQUFDdkI7U0FBQSxBQUFLLFNBQVEsS0FBQSxBQUFLLE9BQUwsQUFBWSxPQUFPLEtBQW5CLEFBQXdCLFFBQXJDLEFBQWEsQUFBK0IsQUFDNUM7QUFGRCxVQUdJLEFBQ0g7U0FBQSxBQUFLLE9BQUwsQUFBWSxLQUFaLEFBQWlCLEFBQ2pCO0FBQ0Q7QUFDRDs7OzhCQUFXLEFBQ1Y7T0FBRyxLQUFBLEFBQUssVUFBUixBQUFnQixNQUFLLEFBQ3BCO1lBQUEsQUFBUSxJQUFJLGVBQWUsS0FBZixBQUFvQixTQUFoQyxBQUF5QyxBQUN6QztTQUFJLElBQUosQUFBUSxLQUFLLEtBQWIsQUFBa0IsUUFBTyxBQUd4Qjs7O2FBQUEsQUFBUSxJQUFJLGFBQVksS0FBQSxBQUFLLE9BQUwsQUFBWSxHQUF4QixBQUEyQixPQUEzQixBQUFrQyxXQUFXLEtBQUEsQUFBSyxPQUFMLEFBQVksR0FBckUsQUFBd0UsQUFDeEU7QUFDRDtBQVBELFVBUUksQUFDSDtZQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFDRDtBQTVDNkMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3Ige1xyXG5cdGNvbnN0cnVjdG9yKG5hbWUsYWdlKXtcclxuXHRcdHRoaXMubmFtZT0gbmFtZTtcclxuXHRcdHRoaXMuYWdlPWFnZTtcclxuXHR9XHJcblxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRFbWl0dGVye1xyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHR0aGlzLmNhbGxCYWNrRnVuY3Rpb25zPU9iamVjdC5jcmVhdGUobnVsbCk7XHJcblx0fVxyXG5cclxuXHRvbihldmVudCwgY2FsbEJhY2spe1xyXG5cdFx0dGhpcy5jYWxsQmFja0Z1bmN0aW9uc1tldmVudF09IGNhbGxCYWNrO1xyXG5cdH1cclxuXHRlbWl0KGV2ZW50KXtcclxuXHRcdGxldCBjYWxsQmFjaz10aGlzLmNhbGxCYWNrRnVuY3Rpb25zW2V2ZW50XTtcclxuXHRcdGlmKHR5cGVvZiBjYWxsQmFjayA9PSd1bmRlZmluZWQnKXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1lvdSBoYXZlIGFuIEVycm9yIScpXHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRjYWxsQmFjayhldmVudCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdG9mZihldmVudCl7XHJcblx0XHRcclxuXHR9XHJcblxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXJ7XHJcblx0Y29uc3RydWN0b3IoKXtcclxuXHRcdHRoaXMubG9nPXRoaXMuTG9nLmJpbmQoKTtcclxuXHR9XHJcblx0TG9nKGluZm8pe1xyXG5cdFx0IGNvbnNvbGUubG9nKCcgVGhlICcgKyBpbmZvKyAnIGV2ZW50IGhhcyBiZWVuIGVtaXR0ZWQnKTtcdFx0XHJcblx0fVxyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5sZXQgU29jaWFsID0ge1xyXG5cdHNoYXJlOiBmdW5jdGlvbihmcmllbmROYW1lKVxyXG5cdHtcclxuXHRcdGNvbnNvbGUubG9nKGAke2ZyaWVuZE5hbWV9IHNoYXJlICAke3RoaXMudGl0dGxlfWApO1xyXG5cdH0sXHJcblx0bGlrZTogZnVuY3Rpb24oZnJpZW5kTmFtZSlcclxuXHR7XHJcblx0XHRjb25zb2xlLmxvZyhgJHtmcmllbmROYW1lfSBsaWtlcyAke3RoaXMudGl0dGxlfWApO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvY2lhbCIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBNb3ZpZSBmcm9tICcuL21vdmllLmpzJztcclxuaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlci5qcyc7XHJcbmltcG9ydCBBY3RvciBmcm9tICcuL0FjdG9yLmpzJztcclxuaW1wb3J0IFNvY2lhbCBmcm9tICcuL1NvY2lhbC5qcyc7XHJcbndpbmRvdy5vbmxvYWQ9ZnVuY3Rpb24oKXtcclxuXHRsZXQgbW92aWU9bnVsbDtcclxuXHRsZXQgYWN0b3JzPVtdO1xyXG5cdGxldCBhZGRCdXR0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEJ1dHQnKTtcclxuXHRhZGRCdXR0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGxldCBtb3ZpZXNUaXR0bGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXNUaXR0bGUnKS52YWx1ZTtcclxuXHRcdGxldCB5ZWFyPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhcicpLnZhbHVlO1xyXG5cdFx0bGV0IGR1cmF0aW9uPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVyYXRpb24nKS52YWx1ZVx0O1xyXG5cdFx0aWYobW92aWVzVGl0dGxlIT0nJyAmJiB5ZWFyIT0gJycgJiYgZHVyYXRpb24hPScnKXtcclxuXHRcdFx0bW92aWUgPSBuZXcgTW92aWUobW92aWVzVGl0dGxlLHllYXIsZHVyYXRpb24pO1xyXG5cdFx0XHRsZXQgZm9ybUFjdG9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RvcnNGb3JtJyk7XHJcblx0XHRcdGZvcm1BY3RvcnMuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybUhpZGRlbicpO1xyXG5cclxuXHRcdFx0bGV0IGFkZEFjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZEFjdG9yJyk7XHJcblx0XHRcdGFkZEFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdGxldCBhY3Rvck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0b3JOYW1lJyk7XHJcblx0XHRcdFx0bGV0IGFnZT0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZScpO1xyXG5cdFx0XHRcdGlmKGFjdG9yTmFtZSE9JycgJiYgYWdlIT0nJyl7XHJcblx0XHRcdFx0XHRhY3RvcnMucHVzaChuZXcgQWN0b3IoYWN0b3JOYW1lLnZhbHVlLGFnZS52YWx1ZSkpO1xyXG5cdFx0XHRcdFx0YWN0b3JOYW1lLnZhbHVlPScnO1xyXG5cdFx0XHRcdFx0YWdlLnZhbHVlPScnO1xyXG5cdFx0XHRcdFx0ZmlsbEluZm8oKTtcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcclxuXHRcdFx0aWYobW92aWUhPW51bGwpe1x0XHJcblx0XHRcdFx0ZmlsbEluZm8oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihhY3RvcnMubGVuZ3RoPjApe1xyXG5cdFx0XHRcdGZpbGxJbmZvKCk7XHRcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGFsZXJ0KCd5b3UgbXVzdCBmaWxsIGFsbCBmaWVsZHMnKTtcclxuXHRcdH1cclxuXHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gZmlsbEluZm8oKXtcclxuXHRcdGxldCBpbmZvRGl2PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb0RpdicpO1xyXG5cdFx0aW5mb0Rpdi5pbm5lckhUTUw9JzxwPiA8c3BhbiBjbGFzcz1cXCd0aXR0ZVNwYW5cXCc+IE1vdmllXFwncyBJbmZvcm1hdGlvbiA8L3NwYW4+PC9wPiA8dWw+IDxsaT48c3BhbiBjbGFzcz1cXCdzdWJUaXR0ZVNwYW5cXCc+IFRpdHRsZTogPC9zcGFuPicgKyBtb3ZpZS50aXR0bGUgXHJcblx0XHQrICc8L2xpPiA8bGk+IDxzcGFuIGNsYXNzPVxcJ3RpdHRlU3BhblxcJz4gWWVhcjogPC9zcGFuPicgKyBtb3ZpZS55ZWFyICsnPC9saT4gPGxpPiA8c3BhbiBjbGFzcz1cXCdzdWJUaXR0ZVNwYW5cXCc+UnVubmluZyBUaW1lOjwvc3Bhbj4nICsgbW92aWUuZHVyYXRpb24gK1xyXG5cdFx0JzwvbGk+PGxpPiA8c3BhbiBjbGFzcz1cXCdzdWJUaXR0ZVNwYW5cXCc+IEFjdG9yczogPC9zcGFuPiAnICsgZ2V0QWN0b3JzKCkgKyAnPC9saT48L3VsPicgO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0QWN0b3JzKCl7XHJcblx0XHRcclxuXHRcdGxldCByZXR1cm5WYWw9ICc8dWw+JztcclxuXHJcblx0XHRjb25zb2xlLmxvZyhhY3RvcnMpO1xyXG5cdFx0Zm9yKHZhciBrIGluIGFjdG9ycyl7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdlbnRybyBhY2EnKTtcclxuXHRcdFx0cmV0dXJuVmFsKz0nPGxpPiA8c3BhbiBjbGFzcz1cXCdzdWJUaXR0ZVNwYW5cXCc+IE5hbWU6IDwvc3Bhbj4nICsgYWN0b3JzW2tdLm5hbWUgKyAnPHNwYW4gY2xhc3M9XFwnc3ViVGl0dGVTcGFuXFwnPiBBZ2U6IDwvc3Bhbj4nICsgYWN0b3JzW2tdLmFnZSArJyA8L2xpPic7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuVmFsKz0nPC91bD4nO1xyXG5cdFx0cmV0dXJuIHJldHVyblZhbDtcclxuXHRcclxuXHR9XHJcblx0XHJcblx0dGVzdCgpO1xyXG5cdFxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0KCl7XHJcblx0ZnVuY3Rpb24gcGxheVdpdGhNb3ZpZShtb3ZpZSl7XHJcblx0XHRsZXQgbG9nZ2VyPSBuZXcgTG9nZ2VyKCk7XHJcblx0XHRtb3ZpZS5vbigncGxheScsbG9nZ2VyLmxvZyk7XHJcblx0XHRtb3ZpZS5wbGF5KCk7XHJcblx0XHRsZXQgb2JqPSBPYmplY3QuYXNzaWduKG1vdmllLFNvY2lhbCk7XHJcblx0XHRtb3ZpZS5saWtlKCdKb3JnZSBOaWNvbGFzJyk7XHJcblx0XHRtb3ZpZS5zaGFyZSgnT3JsYW5kbycpXHJcblx0XHQvLzkgcG9pbnQgXHJcblx0XHRtb3ZpZS5nZXRBY3RvcnMoKTtcclxuXHRcclxuXHR9XHJcblx0Y29uc29sZS5sb2coJ1Rlc3QgJyk7XHJcblx0bGV0IHRlcm1pbmF0b3IgPSBuZXcgTW92aWUoJ1Rlcm1pbmF0b3IgSScsIDE5ODUsIDYwKTtcclxuXHRsZXQgYXJub2xkID0gbmV3IEFjdG9yKCdBcm5vbGQgU2Nod2FyemVuZWdnZXInLCA1MCk7XHJcblx0bGV0IG90aGVyQ2FzdCA9IFtcclxuXHRcdCBuZXcgQWN0b3IoJ1BhdWwgV2luZmllbGQnLCA1MCksXHJcblx0XHQgbmV3IEFjdG9yKCdNaWNoYWVsIEJpZWhuJywgNTApLFxyXG5cdFx0IG5ldyBBY3RvcignTGluZGEgSGFtaWx0b24nLCA1MClcclxuXHRdO1xyXG5cclxuXHR0ZXJtaW5hdG9yLmFkZENhc3QoYXJub2xkKTtcclxuXHR0ZXJtaW5hdG9yLmFkZENhc3Qob3RoZXJDYXN0KTsgXHJcblxyXG5cdHBsYXlXaXRoTW92aWUodGVybWluYXRvcik7XHJcbn0iLCIndXNlIHN0cmljdCc7XHJcblxyXG5cclxuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlci5qcyc7XHJcbmltcG9ydCBBY3RvciBmcm9tICcuL0FjdG9yLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgRXZlbnRFbWl0dGVye1xyXG5cdGNvbnN0cnVjdG9yKHRpdHRsZSwgeWVhcixkdXJhdGlvbil7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy50aXR0bGU9dGl0dGxlO1xyXG5cdFx0dGhpcy55ZWFyPXllYXI7XHJcblx0XHR0aGlzLmR1cmF0aW9uPWR1cmF0aW9uO1xyXG5cdFx0dGhpcy5hY3RvcnM9W107XHJcblxyXG5cdH1cclxuXHRwbGF5KCl7XHJcbiAgICAgdGhpcy5lbWl0KCdwbGF5Jyk7XHJcbiAgICBjb25zb2xlLmxvZygnUGxheSA+ICcgK3RoaXMudGl0dGxlICsgJygnICsgdGhpcy55ZWFyICAgKyAnLScgKyB0aGlzLmR1cmF0aW9uICsgJykgOicpO1xyXG5cdFx0XHJcblx0fVxyXG5cdHBhdXNlKCl7XHJcblx0XHRlbWl0KCdwYXVzZScpO1xyXG4gICAgY29uc29sZS5sb2coJ1BhdXNlIHx8ICcgK3RoaXMudGl0dGxlICsgJygnICsgdGhpcy55ZWFyICAgKyAnLScgKyB0aGlzLmR1cmF0aW9uICsgJykgOicpO1xyXG5cdH1cclxuXHRyZXN1bWUoKXtcclxuXHRcdGVtaXQoJ3Jlc3VtZScpO1xyXG4gICAgY29uc29sZS5sb2coJ1Jlc3VtZSA+PiAnICt0aGlzLnRpdHRsZSArICcoJyArIHRoaXMueXIgICArICctJyArIHRoaXMuZHVyYXRpb24gKyAnKSA6Jyk7XHJcblx0fVxyXG5cclxuXHRhZGRDYXN0KGFjdG9yKXtcclxuXHJcblx0XHRpZihBcnJheS5pc0FycmF5KGFjdG9yKSl7XHJcblx0XHRcdHRoaXMuYWN0b3JzPSB0aGlzLmFjdG9ycy5jb25jYXQodGhpcy5hY3RvcnMsYWN0b3IpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy5hY3RvcnMucHVzaChhY3Rvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdGdldEFjdG9ycygpe1xyXG5cdFx0aWYodGhpcy5hY3RvcnMhPW51bGwpe1xyXG5cdFx0XHRjb25zb2xlLmxvZygnQWN0b3JzIG9mICcgKyB0aGlzLnRpdHRsZSArIFwiIGFyZTogXCIpO1xyXG5cdFx0XHRmb3IobGV0IGkgaW4gdGhpcy5hY3RvcnMpe1xyXG5cdFx0XHRcdC8qdGhpcyBpcyB3cm9uZy4gZG9lc250IHdvcmsgbGlrZSBpbiBqYXZhLi4uIGlmIGkgcHV0IHRoaXMsIGphdmFzY3JpcHQgd2lsbCBiZWxpdmUgdGhpcy5hY3RvcnMgYXJlICBhbiBzdHJpbmdcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnLSAnICsgdGhpcy5hY3RvcnNbaV0pOyovXHJcblx0XHRcdFx0Y29uc29sZS5sb2coJy0gTmFtZTogJysgdGhpcy5hY3RvcnNbaV0ubmFtZSArICcgQWdlOiAnICsgdGhpcy5hY3RvcnNbaV0uYWdlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1RoZXJlIG5vdCBhbnkgYWN0b3InKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcblxyXG4iXX0=
