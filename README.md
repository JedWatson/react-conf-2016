# react-conf-2016

React Conf 2016 API

Generates a GraphQL API and CMS with [KeystoneJS](http://keystonejs.com) for data management.

## Getting Started

Make sure you have Node v4+ and MongoDB installed, then:

```
git clone github.com/JedWatson/react-conf-2016
cd react-conf-2016
npm install
npm start
```

Sign in with one of the default accounts (see `./updates/1.0.0-admins`) at [localhost:3000](http://localhost:3000)

Try out the GraphQL API with Graphiql at [localhost:3000/api/graphql](http://localhost:3000/api/graphql)

## The Codebase

Data is created on first run by the scripts in `./updates`

Models are defined in `./models`

The schedule isn't actually stored in the database (the talks are) - it's generated by `./lib/schedule.js`

GraphQL schemas are defined in `./graphql/schema.js`

The Keystone instance is configured in `./keystone.js` and the express app is configured by `./routes/index`

There isn't really a client app, just a simple redirect to the keystone signin, but if you want to experiment building a react app to hit the API everything in `./client/scripts` will be bundled with browserify and babel when included in the templates (see `./templates/views`)

## License

MIT. Copyright (c) 2016 Jed Watson.
