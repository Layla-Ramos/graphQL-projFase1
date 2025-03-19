const userController = require('../controllers/userController.js');

const resolvers = {
    Query: {
        users: async (_, { id }) => await userController.getUserById(id),
    },

    Mutation: {
        createUser: async (_, { userData }) => {
            return await userController.createUser(userData);
        },
        deleteUser: async (_, { userId }) => {
            return await userController.deleteUser(userId);
        },
        editUser: async (_, { userId, userData }) => {
            return await userController.editUser(userId, userData);
        },
    },
};

module.exports = resolvers;