module.exports = (app) => {
    const Product = require('../controllers/controller.js');

    app.route('/product')
        .get(Product.list_all_product)
        .post(Product.create_a_product);


    app.route('/product/:productId')
        .get(Product.read_a_product)
        .put(Product.update_a_product)
        .delete(Product.delete_a_product);
};
