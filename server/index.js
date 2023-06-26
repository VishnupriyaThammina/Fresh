const express = require('express'); //
const cors = require('cors');//as server is running on 5000 and client is on 3000
const app = express();// creating an instance of express application
const mongoose = require('mongoose');
const path = require('path');
const userController = require('./controllers/userController');//use this for route handling
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const register = require("./controllers/userRegistration");
// Parse URL-encoded bodies and JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Enable CORS
app.use(cors());
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Specify the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('register');

});


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Care', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

  app.post('/register',register.registerUser);


app.post('/findEmail',userController.findEmail); 

//after all route handlers place this basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//this is to log the information about incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


//starting the express server
const port = 5000;

app.listen(port, (res,req) => {
  console.log("Hey!!")
})