var casper = require('casper').create();

var env = 'live',
    links = [
		'http://0.0.0.0',
		'https://twitter.com/signup'
    ];

env = 'dev'; # comment this out when you're ready to go live

casper.start(env == 'live' ? links[1] : links[0]);
