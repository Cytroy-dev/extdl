// Example of a basic Express server
const express = require('express');
const app = express();

// Define a route that returns "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
