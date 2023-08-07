import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import dotenv from "dotenv";
import routers from "@/routers";
import { corsOptions } from "@/configs/corsOptions";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 5000;
const SERVER_URL = process.env.SERVER_URL;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server running on ${
      process.env.NODE_ENV == "development"
        ? `http://localhost:${PORT}`
        : SERVER_URL
    }`
  );
});

app.get("/", (req, res) => {
  res.send("Welcome to API Service");
});

app.use("/accounting", routers());
