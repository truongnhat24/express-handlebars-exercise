const controller = {};

controller.show = (req, res) => {
  let salary = req.query.salary ? parseFloat(req.query.salary) : 0;
  res.locals.jar55 = salary * 55 / 100;
  res.locals.jar10 = salary * 10 / 100;
  res.locals.jar5 = salary * 5 / 100;
  res.render('task2');
}
module.exports = controller;