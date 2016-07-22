'use strict';

import _ from 'lodash';

function ApplianceCtrl($stateParams, $state, $filter, $log, $rootScope) {
	var vm = this;
	vm.name = $stateParams.name;
	vm.app = _.find($rootScope.appliances, function (o) {
		return o.name === vm.name;
	});
	vm.details = vm.app.details;
	vm.services = vm.app.services;


	vm.score = vm.app.score; // $stateParams.score;

	vm.setGaugeValue = setGaugeValue;

	setGaugeValue(vm.score / 100);
}

function setGaugeValue(scores) {
	var gauge = new Gauge(document.getElementById("gauge"));

	gauge.value(scores);
};

// #### Gauge
function Gauge(el) {

	// ##### Private Properties and Attributes
	var element,      // Containing element for the info component
		data,         // `.gauge--data` element
		needle,       // `.gauge--needle` element
		value = 0.0,  // Current gauge value from 0 to 1
		prop;         // Style for transform

	// ##### Private Methods and Functions
	var setElement = function (el) {
		// Keep a reference to the various elements and sub-elements
		element = el;
		data = element.querySelector(".gauge--data");
		needle = element.querySelector(".gauge--needle");
	};

	var setValue = function (x) {
		value = x;
		var turns = -0.5 + (x * 0.5);
		data.style[prop] = "rotate(" + turns + "turn)";
		needle.style[prop] = "rotate(" + turns + "turn)";
	};

	// ##### Object to be Returned
	function exports() { };

	// ##### Public API Methods
	exports.element = function (el) {
		if (!arguments.length) { return element; }
		setElement(el);
		return this;
	};

	exports.value = function (x) {
		if (!arguments.length) { return value; }
		setValue(x);
		return this;
	};

	// ##### Initialization
	var body = document.getElementsByTagName("body")[0];
	["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
		forEach(function (p) {
			if (typeof body.style[p] !== "undefined") { prop = p; }
		}
		);

	if (arguments.length) {
		setElement(el);
	}

	return exports;

};

ApplianceCtrl.$inject = ['$stateParams', '$state', '$filter', '$log', '$rootScope'];

export default ApplianceCtrl;
