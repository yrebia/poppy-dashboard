const express = require('express');
const app = express();

require("dotenv").config({ path: "./.env" });

require("./config/db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/", require("./routes/user.routes"));

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
});