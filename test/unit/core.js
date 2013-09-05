$(function() {
	'use strict';

	module('TweetFoil Core');

	test('tweetFoil defined', function() {
		var element = $('<div>');
		strictEqual(typeof element.tweetFoil, 'function', 'tweetFoil is defined');
	});

	test('expose default settings', function() {
		ok($.fn.tweetFoil.defaults, 'defaults is defined');
		ok($.fn.tweetFoil.defaults.hasOwnProperty('widgetId'), 'widgetId exists');
		ok($.fn.tweetFoil.defaults.hasOwnProperty('limit'), 'limit exists');
		ok($.fn.tweetFoil.defaults.hasOwnProperty('className'), 'className exists');
	});

	test('tweetFoil', function() {
		var div = $('<div>'),
			empty = $('#thisDoesntExist');

		deepEqual(div.tweetFoil(), div, 'original jQuery object returned for matched selector');
		deepEqual(empty.tweetFoil(), empty, 'original jQuery object returned for empty selector');
	});

});
