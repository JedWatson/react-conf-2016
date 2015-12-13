var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Talk = new keystone.List('Talk', {
	map: { name: 'title' },
	track: true,
});

Talk.add({
	title: { type: String, required: true, index: true },
	type: { type: Types.Select, options: 'full, lightning', initial: true, required: true },
	person: { type: Types.Relationship, ref: 'Person', initial: true },
	time: { type: Date },
	description: { type: Types.Markdown },
});

transform.toJSON(Talk);

Talk.defaultColumns = 'title, type, person, time';
Talk.register();
