'use strict';

const babelify = require('babelify');
const browserify = require('browserify-middleware');
const graphqlHTTP = require('express-graphql');
const graphQLSchema = require('../graphql/schema');
const keystone = require('keystone');

// Setup Route Bindings
exports = module.exports = function (app) {

	app.use('/js', browserify('./client/scripts', {
		transform: [
			babelify.configure({
				presets: ['es2015', 'react'],
			}),
		],
	}));

	app.use('/api/graphql', graphqlHTTP({ schema: graphQLSchema, graphiql: true }));

	// Views
	app.use(function (req, res) {
		res.render('index');
	});

};
