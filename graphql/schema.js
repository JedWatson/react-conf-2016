var GraphQL = require('graphql');
var keystoneTypes = require('./keystoneTypes');
var keystone = require('keystone');

var Company = keystone.list('Company');
var Person = keystone.list('Person');
var Talk = keystone.list('Talk');

var companyType = new GraphQL.GraphQLObjectType({
	name: 'Company',
	fields: () => ({
		id: {
			type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
			description: 'The id of the user.',
		},
		name: { type: GraphQL.GraphQLString },
		homepage: { type: GraphQL.GraphQLString },
		people: {
			type: new GraphQL.GraphQLList(personType),
			resolve: (source) =>
				Person.model.find().where('company', source.id).exec(),
		},
	}),
});

var personType = new GraphQL.GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		id: {
			type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
			description: 'The id of the user.',
		},
		name: { type: keystoneTypes.name(Person.fields.name) },
		email: { type: GraphQL.GraphQLString },
		company: {
			type: companyType,
			resolve: (source) =>
				Company.model.findById(source.company).exec(),
		},
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
		time: keystoneTypes.datetime(Talk.fields.time),
		description: { type: keystoneTypes.markdown(Talk.fields.description) },
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
			companies: {
				type: new GraphQL.GraphQLList(companyType),
				resolve: (_, args) =>
					Company.model.find().exec(),
			},
			company: {
				type: companyType,
				args: {
					id: {
						description: 'id of the Company',
						type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID),
					},
				},
				resolve: (_, args) =>
					Company.model.findById(args.id).exec(),
			},
		},
	}),
});
