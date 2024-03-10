const controller = {}
const { categories, products } = require("../data");

controller.show = (req, res) => {
  let category = req.query.category; 
  res.locals.categories = categories;
  res.locals.products = category ? products.filter(item => item.category == category) : products;
  res.render('task3');
}
module.exports = controller;