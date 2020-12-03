const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const fs=require('fs');
const PORT = process.env.PORT || 3000;




app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));