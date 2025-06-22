const { User } = require("../../models");
const jwt = require("jsonwebtoken");

async function store(req, res) {
  try {
    const user = await User.create({
      ...req.body,
    });

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

    res.json({
      token: token,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  } catch (err) {
    // err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "User already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) return res.status(400).json({ message: "Incorrect email or password" });

    const result = await user.validatePassword(req.body.password);
    if (!result) return res.status(400).json({ message: "Incorrect user or password" });

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

    res.json({
      token: token,
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function update(req, res) {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (!user) return res.status(400).json({ message: "Incorrect email or password" });

    const result = await user.validatePassword(req.body.password);
    if (!result) return res.status(400).json({ message: "Incorrect user or password" });

    await user.update({ ...req.body, password: req.body.newPassword });
    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET);

    res.json({
      token: token,
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
    });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

module.exports = { store, login, update };
