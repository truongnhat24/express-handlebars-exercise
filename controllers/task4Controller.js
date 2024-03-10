const controller = {};
const { zodiacs } = require("../data");

controller.show = (req, res) => {
  res.locals.zodiacs = zodiacs;
  res.render('task4');
}

controller.showDetails = (req, res) => {
  let zodiacName = req.params.zodiac;
  let selectedZodiac = zodiacs.filter(item => item.name == zodiacName);
  res.locals.zodiac = selectedZodiac.length ? selectedZodiac[0] : zodiacs[0];
  res.render("task4-details")
}
module.exports = controller;