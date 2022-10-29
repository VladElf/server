const { gql } = require('apollo-server');

const typeDefs = `
  type User {
    email: String!
    name: String
  }

  type Query {
    allUsers: [User]
  }
`;
module.exports = typeDefs;
