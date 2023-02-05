const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const cors = require("cors");

const app = express();

app.use(express.json());

const user = require("./routes/userRoute");

app.use("/api/v1", user);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on this host: http://localhost:${process.env.PORT}`
  );
});
