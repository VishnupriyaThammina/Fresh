const { redirect } = require("react-router-dom");
const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imgurl = req.body.imgurl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product({ 
        title: title, 
        price: price, 
        image: imgurl,
         description: description });
         product.save()
         .then(result =>{
            console.log("created product");
            res/redirect('/admin/products');
         })
         .catch(err =>{
            console.log(err);
         })

}