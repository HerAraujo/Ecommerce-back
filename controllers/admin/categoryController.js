const { Category } = require("../../models");

async function show(req, res) {
  try {
    const category = await Category.findAll({
      where: {
        active: true,
      },
    });
    res.json(category);
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function store(req, res) {
  try {
    const category = await Category.create({
      name: String(req.body.name),
      slug: String(req.body.slug),
      photo: String(req.body.photo),
      description: String(req.body.description),
    });

    res.json({ category });
  } catch (err) {
    //err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "Category already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function update(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      await Category.update(
        {
          name: String(req.body.name),
          slug: String(req.body.slug),
          photo: String(req.body.photo),
          description: String(req.body.description),
        },
        { where: { id: req.params.id } },
      );

      res.json({ message: `Category updated successfully` });
    } else {
      res.json({ message: `Category does not exist` });
    }
  } catch (err) {
    //err.parent.errno === Number(process.env.ERROR_CODE_DUPLICATE_KEY) //mysql
    err.parent.code === process.env.ERROR_CODE_DUPLICATE_KEY //postgre
      ? res.status(409).json({ message: "Category already exists" })
      : res.status(400).json({ message: "An error has ocurred" });
  }
}

async function destroy(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      await Category.update({ active: false }, { where: { id: req.params.id } });

      res.json({ message: `Category deleted successfully` });
    } else {
      res.json({ message: `Category does not exist` });
    }
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function showOne(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);

    res.json({ category });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

module.exports = { show, store, update, destroy, showOne };
