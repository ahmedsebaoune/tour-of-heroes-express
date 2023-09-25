const nano = require("nano")("http://127.0.0.1:5984");

exports.getHeroes = async (req, res) => {
        const username = "ahmed";
        const userpass = "ahmed";
        // authenticate
        nano.auth(username, userpass);

        const db = nano.use("heroes");
  const doc = await db.get("c7092ebfa487ac2d91f24800380003a0");
  res.json({
    msg: doc,
  });
};
