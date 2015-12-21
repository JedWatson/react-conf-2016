var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Person = new keystone.List('Person', {
	track: true,
});

Person.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, index: true },
	password: { type: Types.Password, initial: true },
}, 'Profile', {
	company: { type: String },
	picture: { type: Types.CloudinaryImage },
	github: { type: String, size: 'small' },
	twitter: { type: String, size: 'small' },
	homepage: { type: Types.Url },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

Person.relationship({ ref: 'Talk', refPath: 'person', path: 'talks' });

// Provide access to Keystone
Person.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

transform.toJSON(Person);

Person.defaultColumns = 'name, email, company, picture, isAdmin';
Person.register();
