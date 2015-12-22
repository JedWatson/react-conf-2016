var GraphQL = require('graphql');
var keystone = require('keystone');
var keystoneTypes = require('keystone-graphql').Types;

var schedule = require('../lib/schedule');
var Person = keystone.list('Person');
var Talk = keystone.list('Talk');

var personType = new GraphQL.GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		id: {
			type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
			description: 'The id of the Person',
		},
		name: { type: keystoneTypes.Name(Person.fields.name) },
		email: { type: GraphQL.GraphQLString },
		company: { type: GraphQL.GraphQLString },
		talks: {
			type: new GraphQL.GraphQLList(talkType),
			resolve: (source) =>
				Talk.model.find().where('person', source.id).exec(),
		},
	}),
});

var talkType = new GraphQL.GraphQLObjectType({
	name: 'Talk',
	fields: () => ({
		id: {
			type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
			description: 'The id of the Talk',
		},
		title: { type: GraphQL.GraphQLString },
		type: { type: GraphQL.GraphQLString },
		time: keystoneTypes.Datetime(Talk.fields.time),
		person: {
			type: personType,
			resolve: (source) =>
				Person.model.findById(source.person).exec(),
		},
		description: { type: keystoneTypes.Markdown(Talk.fields.description) },
	}),
});

var scheduleType = new GraphQL.GraphQLObjectType({
	name: 'ScheduleItem',
	fields: () => ({
		key: {
			type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
			description: 'The key used to link times to talks',
		},
		label: { type: GraphQL.GraphQLString },
		type: { type: GraphQL.GraphQLString },
		day: { type: GraphQL.GraphQLString },
		date: { type: GraphQL.GraphQLString },
		time: { type: GraphQL.GraphQLString },
		time24: { type: GraphQL.GraphQLString },
		description: { type: GraphQL.GraphQLString },
		dayNumber: {
			type: GraphQL.GraphQLInt,
			desciption: 'The index of the day',
		},
		duration: {
			type: GraphQL.GraphQLInt,
			desciption: 'The number of minutes this schedule item goes for',
		},
	}),
});

module.exports = new GraphQL.GraphQLSchema({
	query: new GraphQL.GraphQLObjectType({
		name: 'Query',
		fields: {
			people: {
				type: new GraphQL.GraphQLList(personType),
				resolve: (_, args) =>
					Person.model.find().exec(),
			},
			person: {
				type: personType,
				args: {
					id: {
						description: 'id of the Person',
						type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
					},
				},
				resolve: (_, args) =>
					Person.model.findById(args.id).exec(),
			},
			schedule: {
				type: new GraphQL.GraphQLList(scheduleType),
				resolve: (_, args) =>
					schedule.times,
			},
			talks: {
				type: new GraphQL.GraphQLList(talkType),
				resolve: (_, args) =>
					Talk.model.find().exec(),
			},
			talk: {
				type: talkType,
				args: {
					id: {
						description: 'id of the Talk',
						type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
					},
				},
				resolve: (_, args) =>
					Talk.model.findById(args.id).exec(),
			},
		},
	}),
});
