const mongoose = require('mongoose'),
    Product = mongoose.model('Product');

exports.list_all_product = (req, res) => {
    Product.find({}, (err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    });
};


exports.create_a_product = (req, res) => {
    const new_product = new Product(req.body);
    new_product.save((err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    });
};


exports.read_a_product = (req, res) => {
    Product.findById(req.params.productId, (err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    });
};


exports.update_a_product = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.productId }, req.body, { new: true }, (err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    });
};


exports.delete_a_product = (req, res) => {
    Product.remove({
        _id: req.params.productId
    }, (err, product) => {
        if (err)
            res.send(err);
        res.json({ message: 'Product successfully deleted' });
    });
};
