/**
 * TweetFoil Core
 *
 * @fileoverview  Core variables and plugin object.
 * @link          https://github.com/stevenbenner/jquery-tweetfoil
 * @author        Steven Benner (http://stevenbenner.com/)
 * @requires      jQuery 1.7+
 */

// constants
var SCHEME = 'https',
	HOST = 'cdn.syndication.twimg.com',
	PATH = '/widgets/timelines/';

/**
 * Pull tweets from Twitter using the specified widgit id and display them
 * in an unordered list.
 * @param {Object} opts The options object to use for the plugin.
 * @return {jQuery} jQuery object for the matched selectors.
 */
$.fn.tweetFoil = function(opts) {
	var $this = this,
		options = $.extend({}, $.fn.tweetFoil.defaults, opts),
		list = $('<ul/>').addClass(options.className);

	// pull the data from the twitter api
	$.ajax({
		url: SCHEME + '://' + HOST + PATH + options.widgetId,
		data: {
			'dnt': 'true',
			'lang': 'en',
			'suppress_response_codes': 'true'
		},
		cache: false,
		dataType: 'jsonp'
	}).done(function(response) {
		var rawTweets = $(response.body).find('.e-entry-title'),
			count = options.limit > rawTweets.length ? rawTweets.length : options.limit,
			i = 0;

		// add list items
		rawTweets.each(function() {
			list.append($('<li>').append(this));

			// break on limit
			if (++i >= count) {
				return false;
			}
		});

		$this.append(list);
	});

	return $this;
};

/**
 * Default options for the plugin.
 */
$.fn.tweetFoil.defaults = {
	widgetId: '348706263581995009',
	limit: 10,
	className: 'tweetFoil'
};
