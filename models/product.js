
const getAllProductsStatic = async (req, res) => {
    res.status(200).json({ msg: "Get All Products"});
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "Get a Single Product" });
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}