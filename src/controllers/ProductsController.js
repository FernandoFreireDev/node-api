const mongoose = require('mongoose');

const Products = mongoose.model('Products');

module.exports = {
    async index(req, res){
        const {page = 1, limit = 1 } = req.query
        const products = await Products.paginate({}, { page: parseInt(page), limit: parseInt(limit) });

        return res.json(products);
    },

    async show(req, res){
        const product = await Products.findById(req.params.product_id);

        return res.json(product);
    },

    async store(req, res){
        const product = await Products.create(req.body);

        return  res.json(product);
    },

    async update(req, res){
        const product = await Products.findByIdAndUpdate(req.params.product_id, req.body, { new: true });

        return res.json(product);
    },

    async destroy(req, res){
        await Products.findByIdAndRemove(req.params.product_id);

        return res.send();
    }
}