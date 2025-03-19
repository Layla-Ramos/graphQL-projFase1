const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    
  }
  type Query {
    products: [Product]
    product(id: ID!): Product
  }
  type Mutation {
    createProduct(
      name: String!
      price: Float!
    ): Product
    editProduct(id: ID!, name: String!, price: Float!): Product
    deleteProduct(id: ID!): Boolean
  }
`;

module.exports = { typeDefs };
