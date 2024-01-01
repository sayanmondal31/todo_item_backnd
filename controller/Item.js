const Item = require("../models/Item");

exports.createItem = async (req, res) => {
  try {
    if (req.body.title === "" || req.body.description === "") {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const newItem = new Item({
      title: req.body.title,
      description: req.body.description,
    });
    const item = await newItem.save();

    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.editItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      description: req.body.description,
    });
    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json(err);
  }
}
