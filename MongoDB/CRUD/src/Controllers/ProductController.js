const ProductModel = require('../Models/productModel');


class ProductController {

    async store(req, res) {
        const { title, description, price } = req.body;

        if(!title || !description || !price) {
            return res.status(400).json({message:"Title,description and price are required"});
        }

        const productAllreadyExists = await ProductModel.findOne({title});

        if(productAllreadyExists) {
            return res.status(400).json({message:"This product already exists"});
        }

        const createdProduct = await ProductModel.create(req.body);
        return res.status(200).json(createdProduct);
    }

    async index(req, res) {
        const products = await ProductModel.find();
        return res.status(200).json(products);
    }

    async show(req, res) {
        try {
            const {
                id
            } = req.params;

            const product = await ProductModel.findById(id);

            if (!product) {
                return res.status(400).json({
                    message: "product does not exists"
                });
            }

            return res.status(200).json(product);

        } catch (error) {
            return res.status(404).json({
                message: "Failed to list product"
            })
        }
    }

    async update(req, res) {
        try {
            const {
                id
            } = req.params;

            const productUpdated = await ProductModel.findByIdAndUpdate(id, req.body);

            const responseUpdated = [{
                    message: "Product updated !!"
                },
                productUpdated

            ]

            return res.status(200).json(responseUpdated);

        } catch (error) {
            return res.status(400).json({
                message: "Failed to update Product"
            });
        }
    }

    async destroy(req, res) {
        try {
            const {
                id
            } = req.params;

            const productDeleted = await ProductModel.findByIdAndDelete(id);

            if (!productDeleted) return res.status(404).json({
                message: "Product does not exists"
            });

            return res.status(200).json([{
                message: "Product Deleted!"
            }, productDeleted])
        } catch (error) {

            res.status(404).json({message:"Failed to delete product"});
        }
    }
}

module.exports = new ProductController();