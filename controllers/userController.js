const User = require('../models/user.js');
//import bcrypt from "bcrypt";

async function getUserById(id) {
    try {
        const user = await User.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado.");
        }

        return user;
    } catch (error) {
        console.error("Erro ao recuperar usuário:", error.message);
        throw new Error("Erro interno do servidor.");
    }
};
async function createUser(userData) {
    const { name, email, password } = userData;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("Email já está em uso");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const { password: _, ...userWithoutPassword } = newUser.toObject();
        return userWithoutPassword;

    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
    }
};

async function deleteUser(userId) {
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return user;
    } catch (error) {
        console.error("Erro ao deletar usuário:", error);
        throw error;
    }
};

async function editUser(userId, userData) {
    try {
        const user = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!user) {
            throw new Error("Usuário não encontrado");
        }
        return user;
    } catch (error) {
        console.error("Erro ao editar usuário:", error);
        throw error;
    }


};

module.exports = { getUserById, createUser, deleteUser, editUser };