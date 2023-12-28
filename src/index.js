const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars').create({
  extname: 'hbs'
});
const db =  require('./config/db');
//connect db
db.connect();

const app = express()
const port = 3000

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'))

app.use(express.urlencoded({
  extname: true
}));
app.use(express.json());

app.engine('hbs', exphbs.engine);
app.set('view engine', 'hbs'); 
app.set('views', path.join(__dirname,'resources','views') );

//routes init
route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});