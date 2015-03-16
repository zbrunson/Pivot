'use strict';

module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: {
				src: [
					'lib/**/*.js',
					'Gruntfile.js'
				]
			}
		},
		mochaTest: {
			all: {
				src: [
					'tests/**/*.js'
				],
				options: {
					require: function() {
						process.env.PROJECT_ROOT = __dirname;
					}
				}
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'mochaTest']);
};

