// Imports
const express = require('express');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/communication', webRoutes);

// App init
app.listen(3001, () => {
  console.log(`Server is listenning on 3001! (http://localhost:3001)`);
});
