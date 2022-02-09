const app = require("./app");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

// handling uncaught expection

// process.on("uncaughtException", (error) => {
//   console.log(`Error:${err.stack}`);
//   console.log("shutting down due to uncaught expection");
//   process.exit(1);
// });

dotenv.config({ path: "config.env" });

// setting cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// connecting to Database

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `server started at ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

// unhandled promise rejection
// process.on("unhandledRejection", (err) => {
//   console.log(`Error : ${err.message}`);
//   console.log("Server is shutting down due to unhandled promise rejection");
//   server.close(() => {
//     process.exit(1);
//   });
