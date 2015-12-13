var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Company = new keystone.List('Company', {
	track: true,
});

Company.add({
	name: { type: String, required: true, index: true },
}, 'Profile', {
	homepage: { type: Types.Url },
});

Company.relationship({ ref: 'Person', refPath: 'company', path: 'people' });

transform.toJSON(Company);

Company.defaultColumns = 'name, homepage';
Company.register();
