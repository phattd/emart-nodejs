const express = require('express');
const morgan = require('morgan');
const path =require('path');
const template_engine = require('express-handlebars');
const app = express();
const port = 3000;

//static

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

//Template engine
app.engine('handlebars', template_engine.engine());
app.set('view engine', 'handlebars');
app.set('views', 'src/resoures/view/');

app.get('/home', function(req, res) {
 
  return res.render('home', {title: "Trang chủ"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})