const Produto = require("../models/product.js");

const createProduct = async (name, price) => {
  const newProduto = new Produto({
    name,
    price
  });

  await newProduto.save();

  return newProduto;
};

const getAllProduct = async () => {
  return await Produto.find();
};

const getProductById = async (id) => {
  try {
    const produto = await produto.findById(id);
    if (!produto) {
      throw new Error("Produto não encontrado");
    }
    return produto;
  } catch (error) {
    throw new Error("Erro ao recuperar produto");
  }
};

const deleteProduct = async (id) => {
  const produto = await Produto.findById(id);

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  await Produto.deleteOne({ _id: id });
  return true;
};

const editProduct = async (id, nome, descricao) => {
  let produto = await Produto.findByIdAndUpdate(
    id,
    { nome, descricao },
    { new: true }
  );

  if (!produto) {
    throw new Error("Produto não encontrado");
  }

  return produto;
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  editProduct,
};
