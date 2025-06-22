require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./db/dbInitialSetup");
const cors = require("cors");
const APP_PORT = process.env.APP_PORT || 8001;
const app = express();

//Middlewares
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

routes(app);

// dbInitialSetup();

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
