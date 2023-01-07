const app = require("./app");




///Server
const port = process.env.PORT || 3500;
app.listen(port, (req, res) => {
  console.log(`Server listening on ${port}`);
});
