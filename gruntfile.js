module.exports = function (grunt) {

	grunt.initConfig({
		karma: {
			unit: {
				options: {
					frameworks: ['jasmine'],
					files: [
						'node_modules/angular/angular.min.js',
						'node_modules/angular-resource/angular-resource.min.js',
						'node_modules/angular-sanitize/angular-sanitize.min.js',
						'node_modules/angular-mocks/angular-mocks.js',
						'public/javascripts/tweets.module.js',
						'public/javascripts/tweets.factory.js',
						'tests/*.js'
						]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
};