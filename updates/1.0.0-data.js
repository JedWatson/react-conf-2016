exports.create = {
	Person: [
		{
			'name.full': 'Jed Watson',
			email: 'jed@thinkmill.com.au',
			password: 'admin',
			company: 'thinkmill',
			github: 'JedWatson',
			twitter: 'JedWatson',
			homepage: '',
			isAdmin: true,
			__ref: 'jed',
		},
		{
			'name.full': 'Christopher Chedeau',
			email: 'vjeux@fb.com',
			password: 'admin',
			company: 'facebook',
			github: 'vjeux',
			twitter: 'vjeux',
			homepage: 'http://blog.vjeux.com',
			isAdmin: true,
			__ref: 'vjeux',
		},
		{
			'name.full': 'Brent Vatne',
			email: 'brentvatne@gmail.com',
			password: 'admin',
			company: 'exponent',
			github: 'brentvatne',
			twitter: 'notbrent',
			homepage: 'http://brentvatne.ca',
			isAdmin: true,
			__ref: 'brent',
		},
	],
	Company: [
		{
			name: 'Facebook',
			homepage: 'http://www.facebook.com',
			__ref: 'facebook',
		},
		{
			name: 'Thinkmill',
			homepage: 'http://www.thinkmill.com.au',
			__ref: 'thinkmill',
		},
		{
			name: 'Exponent',
			homepage: 'http://exponentjs.com',
			__ref: 'exponent',
		},
	],
	Talk: [
		{
			title: 'Keynote',
			type: 'full',
			person: 'vjeux',
			description: 'You don\'t want to miss this!',
		},
		{
			title: 'React Apps with KeystoneJS',
			type: 'full',
			person: 'jed',
			description: 'The easiest back end for your React.js apps',
		},
		{
			title: 'Exponent',
			type: 'full',
			person: 'brent',
			description: 'A new way to publish React Native apps',
		},
	],
};
