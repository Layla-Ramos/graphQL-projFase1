const Product = require("../models/product.js");

const createProduct = async (name, price) => {
  const newProduct = new Product({
    name,
    price
  });

  await newProduct.save();

  return newProduct;
};

const getAllProduct = async () => {
  return await Product.find();
};

const getProductById = async (id) => {
  try {
    const product = await product.findById(id);
    if (!product) {
      throw new Error("Produto não encontrado");
    }
    return product;
  } catch (error) {
    throw new Error("Erro ao recuperar produto");
  }
};

const deleteProduct = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw new Error("Produto não encontrado");
  }

  await Product.deleteOne({ _id: id });
  return true;
};

const editProduct = async (id, name, price) => {
  let product = await Product.findByIdAndUpdate(
    id,
    { name, price },
    { new: true }
  );

  if (!product) {
    throw new Error("Produto não encontrado");
  }

  return product;
};

module.exports = {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProduct,
  editProduct,
};
