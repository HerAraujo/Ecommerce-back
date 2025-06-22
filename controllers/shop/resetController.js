const dbInitialSetup = require("../../db/dbInitialSetup");

async function resetAll(req, res) {
  try {
    await dbInitialSetup();
    res.json({ message: "database reseted" });
  } catch (err) {
    res.json(err);
  }
}

module.exports = { resetAll };
