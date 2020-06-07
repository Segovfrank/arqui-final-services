// Imports
const express = require('express');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/database', webRoutes);

// App init
app.listen(3002, () => {
  console.log(`Server is listenning on 3002! (http://localhost:3002)`);
});
