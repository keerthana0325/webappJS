const express = require('express'); // Import Express
const app = express();             // Initialize Express
const port = 3000;                 // Port for the server

// Define a route for the home page
app.get('/', (req, res) => {
    res.send('Hello, World! This is your first Node.js app!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
