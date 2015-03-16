'use strict';

var expect = require('chai').expect;
var path = require('path');

var pivot = require(path.join(process.env.PROJECT_ROOT, 'lib', 'pivot'));

describe('lib/pivot.js', function() {
	describe('bad input', function() {
		it('handles no argument', function() {
			expect(pivot()).to.equal(-1);
		});

		it('handles non-array', function() {
			expect(pivot('1,2,3')).to.equal(-1);
		});

		it('handles empty array', function() {
			expect(pivot([])).to.equal(-1);
		});

		it('handles short array', function() {
			expect(pivot([1,1])).to.equal(-1);
		});

		it('handles non-number values in array', function() {
			expect(pivot([1,2,3,'4'])).to.equal(-1);
		});
	});

	describe('good input', function() {
		it('handles [1,4,6,3,2]', function() {
			expect(pivot([1,4,6,3,2])).to.equal(2);
		});

		it('handles [1,1,1,1]', function() {
			expect(pivot([1,1,1,1])).to.equal(-1);
		});

		it('handles [2,-2,2,4,2]', function() {
			expect(pivot([2,-2,2,4,2])).to.equal(3);
		});

		it('handles [2,0,0,2]', function() {
			expect(pivot([2,0,0,2])).to.equal(1);
		});

		it('handles [1,0,1,-1,0,1]', function() {
			expect(pivot([1,0,1,-1,0,1])).to.equal(1);
		});
	});
});

