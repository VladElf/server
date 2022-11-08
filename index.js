import { ApolloServer } from 'apollo-server';
import typeDefs from './db/schema.js';
import resolvers from './db/resolvers.js';

const server = new ApolloServer({ resolvers, typeDefs });

server.listen().then(({ url }) => {
  console.log(`Servidor listo en la URL ${url}`);
});
