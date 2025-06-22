const res = require("express/lib/response");
const { Admin } = require("../../models");
const jwt = require("jsonwebtoken");

async function show(req, res) {
  try {
    const admins = await Admin.findAll({ attributes: { exclude: ["password"] } });
    res.json(admins);
  } catch (err) {
    res.status(404).json({ message: `Admin list not found` });
  }
}

async function store(req, res) {
  try {
    const admin = await Admin.create({
      firstname: String(req.body.firstname),
      lastname: String(req.body.lastname),
      password: String(req.body.password),
      email: String(req.body.email),
    });

    const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET);
    res.json({
      token: token,
      firstname: admin.firstname,
      lastname: admin.lastname,
    });
  } catch (err) {
    //err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "Email already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function showAdmin(req, res) {
  try {
    const admin = await Admin.findByPk(req.params.id, { attributes: { exclude: ["password"] } });
    res.json(admin);
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function destroy(req, res) {
  try {
    const admin = await Admin.findOne({ where: { id: String(req.params.id) } });
    await Admin.destroy({
      where: {
        id: String(req.params.id),
      },
    });
    admin
      ? res
          .status(200)
          .json({ message: `${admin.firstname + " " + admin.lastname} deleted successfully` })
      : res.status(404).json({ message: `Admin with id: ${req.params.id} does not exist` });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function update(req, res) {
  try {
    await Admin.update(
      {
        firstname: String(req.body.firstname),
        lastname: String(req.body.lastname),
        email: String(req.body.email),
      },
      { where: { id: req.params.id } },
    );

    const adminUpdated = await Admin.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });
    adminUpdated
      ? res.json(adminUpdated)
      : res.json({ message: `Admin with id: ${req.params.id} does not exist` });
  } catch (err) {
    //err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "Email already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function login(req, res) {
  try {
    const admin = await Admin.findOne({
      where: { email: req.body.email },
    });
    if (!admin) return res.status(400).json({ message: "Incorrect email or password" });
    const result = await admin.validatePassword(req.body.password);
    if (!result) return res.status(400).json({ message: "Incorrect admin or password" });
    const token = jwt.sign({ sub: admin.id }, process.env.JWT_SECRET);
    res.json({
      token: token,
      id: admin.id,
      firstname: admin.firstname,
      lastname: admin.lastname,
    });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

module.exports = { show, store, destroy, update, showAdmin, login };
