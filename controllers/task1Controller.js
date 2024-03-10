const controller = {}
const { emotions } = require("../data");

controller.show = (req, res) => {
  let emotion = req.query.emotion;
  let selectedEmotions = emotions.filter(item => item.title == emotion)
  res.locals.quotePath = selectedEmotions.length ? selectedEmotions[0].quotePath : '/task1/default.jpg';
  res.locals.emotions = emotions;
  res.render('task1');
}
module.exports = controller;