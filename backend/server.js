const app = require("./app");
const mongoConnection = require("./database/db");
const cloudinary = require("cloudinary");

mongoConnection();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working: http://localhost:${process.env.PORT}`);
});
