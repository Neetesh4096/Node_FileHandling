const Updown = require("./model");

exports.up = (req, res, next) => {
  const image = req.file;

  res.render("form", { message: "Image Uploaded Successfully" });
  Updown.create({ filename: image.filename, path: image.path })
    .catch((err) => {
      console.log(err);
    })
    .then((result) => {
      console.log(result.dataValues);
    });
};
exports.download = (req, res, next) => {
  console.log("Downloading");
  const id = req.body.id;
  Updown.findOne({ where: { id: id } })
    .then((result) => {
      console.log(result.dataValues.path);
      const file = result.dataValues.path;
      res.download(file);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getall = (req, res, next) => {
  Updown.findAll()
    .then((result) => {
      result.forEach((item) => {
        item.dataValues;
      });
      res.json({ data: result });
    })
    .catch((err) => {
      console.log(err);
    });
};
