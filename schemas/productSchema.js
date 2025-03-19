const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Produto {
    id: ID!
    name: String!
    price: Float!
    
  }
  type Query {
    products: [Produto]
    product(id: ID!): Produto
  }
  type Mutation {
    createProduct(
      name: String!
      price: Float!
    ): Produto
    editProduct(id: ID!, name: String!, price: Float!): Produto
    deleteProduct(id: ID!): Boolean
  }
`;

module.exports = { typeDefs };
