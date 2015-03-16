'use strict';

var _ = require('underscore');

module.exports = function pivot(arr) {
	if (!_.isArray(arr) || arr.length < 3) {
		return -1;
	}

	var left = 0;
	var right = 0;
	for (var i = 0; i < arr.length; i++) {
		if (!_.isNumber(arr[i])) {
			return -1;
		}

		right += arr[i];
	}

	for (i = 0; i < arr.length; i++) {
		right -= arr[i];

		if (left === right) {
			return i;
		}

		left += arr[i];
	}

	return -1;
};

