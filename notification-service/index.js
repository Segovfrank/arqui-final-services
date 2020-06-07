// Imports
const express = require('express');
const webRoutes = require('./routes/web');

// Express app creation
const app = express();

// Configurations

// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/notification', webRoutes);

// App init
app.listen(3000, () => {
  console.log(`Server is listenning on 3000! (http://localhost:3000)`);
});
