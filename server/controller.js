module.exports = {
    getAll: async (req, res) => {
        const db = req.app.get('db')
        db.get_products().then(products => {
            res.status(200).send(products)
        })
    },
    createProduct: async (req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body;
        console.log(req.body)
        const products = await db.create_product([name, price, image_url]).then (products => {
            res.status(200).send(products);
        })
    },
    updateProduct: async (req, res) => {
        const db = req.app.get('db');
        const {name, price, image_url} = req.body;
        const {id} = req.params;
        const products = await db.update_product(id, name, price, image_url).then(products => {
            res.status(200).send(products)
        })
    },
    deleteProduct: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const products = await db.delete_product([id]);
        res.status(200).send(products)
    }
}