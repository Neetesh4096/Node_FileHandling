const Sequelize = require("sequelize");
/////Database
const sequelize = new Sequelize("updo", "root", "falana", {
  dialect: "mysql",
  host: "localhost",
});

sequelize
  .sync()
  .then((result) => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });

/////Database Model
const Updown = sequelize.define("updown", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  filename: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Updown;
