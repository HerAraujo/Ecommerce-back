require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const dbInitialSetup = require("./db/dbInitialSetup");
const cors = require("cors");
const APP_PORT = process.env.APP_PORT || 8001;
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://crafterbeer.vercel.app",
  "https://crafterbeer-admin.vercel.app"
];

//Middlewares
app.use(express.static("public"));
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
  allowedHeaders: ["Content-Type", "Authorization"] // Encabezados permitidos
}));
app.use(express.json());

routes(app);

dbInitialSetup();

app.listen(APP_PORT, () =>
  console.log(`\n[Express] Servidor corriendo en el puerto ${APP_PORT}!\n`),
);
