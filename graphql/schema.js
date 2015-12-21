var GraphQL = require('graphql');
var keystone = require('keystone');
var keystoneTypes = require('keystone-graphql').Types;

var Person = keystone.list('Person');
var Talk = keystone.list('Talk');

var personType = new GraphQL.GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		id: {
			type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
			description: 'The id of the user.',
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
			description: 'The id of the user.',
		},
		title: { type: GraphQL.GraphQLString },
		type: { type: GraphQL.GraphQLString },
		person: {
			type: personType,
			resolve: (source) =>
				Person.model.findById(source.person).exec(),
		},
		time: keystoneTypes.Datetime(Talk.fields.time),
		description: { type: keystoneTypes.Markdown(Talk.fields.description) },
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
