const productController = require('../controllers/productController.js');

const resolvers = {
    Query: {
      products: async () => await productController.getAllProduct(),
      product: async (_, { id }) => await productController.getProductById(id),
    },
    Mutation: {
      createProduct: async (_, { name, price }) => {
        return await productController.createProduct(name, price); 
      },
      editProduct: async (_, { id, name, price }) => {
        return await productController.editProduct(id, name, price);
      },
      deleteProduct: async (_, { id }) => {
        return await productController.deleteProduct(id);
      },
      
    },
  };

module.exports = resolvers;