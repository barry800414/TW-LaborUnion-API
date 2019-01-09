const { ApolloServer } = require('apollo-server');
const knex = require('knex');

// connecting to server
const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL ||  'postgres://tw_labor_union:tw_labor_union@localhost:5432/tw_labor_union',
});

const typeDefs = require('./schema');

const resolvers = {
  Query: {
    laborUnions: async (root, args, context) => {
      return await context.db.from('labor_unions');
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, context: {
  db
}});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
