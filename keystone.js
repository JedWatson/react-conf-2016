'use strict';

const keystone = require('keystone');
const config = require('./config');

keystone.init(config.options);
keystone.import('models');
keystone.set('routes', require('./routes'));
keystone.set('nav', {
	'people': 'people',
	'talks': 'talks',
});

keystone.start();
