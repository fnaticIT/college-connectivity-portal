const router = require("express").Router();
const Exp = require("../models/Exp");

router.post("/", async (req, res) => {
  const newExp = new Exp(req.body);
  try {
    const savedExp = await newExp.save();
    res.status(200).json(savedExp);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const exp = await Exp.findById(req.params.id);
    res.status(200).json(exp);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const exps = await Exp.find();
    res.status(200).json(exps);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
