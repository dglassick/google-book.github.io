const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4000;
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// api routes defined here
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(console.log('Connected to Mongo'));

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
