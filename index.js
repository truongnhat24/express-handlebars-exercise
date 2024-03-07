const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const expressHbs = require('express-handlebars');

// cau hinh thu muc html lam thu muc goc
app.use(express.static(__dirname + '/html'));

// cau hinh view template express-handlebars
app.engine('hbs', expressHbs.engine({
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
  defaultLayout: 'layout',
  extname: "hbs",
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => res.render('index'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));