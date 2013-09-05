/**
 * TweetFoil Core
 *
 * @fileoverview  Core variables and plugin object.
 * @link          https://github.com/stevenbenner/jquery-tweetfoil
 * @author        Steven Benner (http://stevenbenner.com/)
 * @requires      jQuery 1.7+
 */

// constants
var HOST = 'cdn.syndication.twimg.com',
	PATH = '/widgets/timelines/',
	TWEET_REGEX = /<li class="(?:\s*[\w-]+\s+)*?tweet(?:.*\r?\n)*?<\/li>/g,
	CONTENT_REGEX = /<p class="e-entry-title">(.*)<\/p>/;

/**
 * Pull tweets from Twitter using the specified widgit id and display them
 * in an unordered list.
 * @param {Object} opts The options object to use for the plugin.
 * @return {jQuery} jQuery object for the matched selectors.
 */
$.fn.tweetFoil = function(opts) {
	var $this = this,
		options = $.extend({}, $.fn.tweetFoil.defaults, opts),
		list = $('<ul></ul>').addClass(options.className);

	// pull the data from the twitter api
	$.ajax({
		url: 'https://' + HOST + PATH + options.widgetId,
		data: {
			'dnt': 'true',
			'lang': 'en',
			'suppress_response_codes': 'true'
		},
		cache: false,
		type: 'GET',
		dataType: 'jsonp'
	}).done(function(response) {
		var rawTweets = parseResponse(response.body),
			count = options.limit > rawTweets.length ? rawTweets.length : options.limit,
			i;

		// add list items
		for (i = 0; i < count; i++) {
			list.append($('<li>').html(rawTweets[i]));
		}

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

/**
 * Parse the HTML string in the response body from Twitter
 * @param {Object} response The body property from the API response.
 * @return {array} Array of tweet HTML strings.
 */
function parseResponse(response) {
	var rawTweets = [],
		found;

	// find the tweets via a regexp search
	while ((found = TWEET_REGEX.exec(response)) !== null) {
		rawTweets.push(found[0].match(CONTENT_REGEX)[1]);
	}

	return rawTweets;
}
