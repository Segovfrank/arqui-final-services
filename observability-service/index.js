// Imports
const express = require('express');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(function(req,res, next){
  res.header('Acces-Control-Allow-Origin', '*');
  res.header('Acces-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Acces-Control-Allow-Headers', 'Content-Type');
  next();

})
// Routes
app.use('/observe', webRoutes);

// App init
app.listen(3003, () => {
  console.log(`Server is listenning on 3003! (http://localhost:3003)`);
});
