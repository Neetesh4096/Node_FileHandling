const express = require("express");
const app = express();
const multer = require("multer");

const controller = require("./controller");
const path = require("path");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(express.json());
app.use(express.urlencoded());
app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.render("form", { message: "Welcome" });
});

app.post("/up", controller.up);
app.get("/download", controller.download);
app.get("/getall", controller.getall);

module.exports = app;
