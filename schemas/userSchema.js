const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
  type Query {
    users: [User]
    userId(userId: ID!): User
  }
  type Mutation {
    createUser(userData: UserInput!): User
    deleteUser(userId: ID!): User
    editUser(userId: ID!, userData: UserInput!): User
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }
`;

module.exports = { typeDefs };

