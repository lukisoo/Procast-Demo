//Load HTTP module
const http = require("http");
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const { appendFile } = require("fs");
const noteRoutes = require('./routes/api/notes');

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));


//Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/notes', noteRoutes);

app.get('/', (req, res) => {
  res.send('Api running');
})

//listen for request on port 3000, and as a callback function have the port listened on logged
const port = 6969;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
