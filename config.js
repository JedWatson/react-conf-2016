exports.options = {

	'name': 'React Conf 2016',
	'brand': 'React Conf 2016',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',

	'cloudinary config': process.env.CLOUDINARY_URL || 'cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'Person',
	'cookie secret': '748b3bf25359fdd2a1b574f6d83dad615d99a1a536d5f59112bcef1a55943ebf04714b56f0ab8ed52b08913a9f56e8dc4d316efd999fc396f6b53b8f2b16e964',

};
