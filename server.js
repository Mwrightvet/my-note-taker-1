const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api.routes");
const htmlRoutes = require("./routes/html.routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define API routes
app.use("/api", apiRoutes);

// Define HTML routes
app.use(htmlRoutes);

// Start listening for requests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
