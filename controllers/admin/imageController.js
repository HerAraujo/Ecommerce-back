const { Image } = require("../../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

async function show(req, res) {
  try {
    const images = await Image.findAll({ order: [["id", "DESC"]] });
    res.json(images);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
      const { data, error } = await supabase.storage
        .from("e-commerce")
        .upload(files.image.newFilename, fs.createReadStream(files.image.filepath), {
          cacheControl: "3600",
          upsert: false,
          contentType: files.image.mimetype,
        });
      const image = await Image.create({ name: files.image.newFilename, title: fields.title });
      res.json(image);
    });
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function destroy(req, res) {
  try {
    const image = await Image.findByPk(req.params.id);
    image && (await image.destroy());
    res.json(image);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

module.exports = { show, store, destroy };
