// Dependencies
import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

import models from './models';

// Type Definitions and resolver
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/types';

//  Configuration
import { $server } from '../config';

// Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Apollo Server
const apolloServer = new ApolloServer({
  schema,
  context: { models }
});

const alter = true;
const force = false;

models.sequelize.sync({ alter, force }).then(() => {
  apolloServer.listen($server.port).then(db => {
    // eslint-disable-next-line no-console
    console.log(`Server running on ${db.url}`);
  });
});
