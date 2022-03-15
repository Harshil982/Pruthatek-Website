const Logo = require("../models/Logo");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newLogo = new Logo(req.body);

  try {
    const savedLogo = await newLogo.save();
    res.status(200).json(savedLogo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Logo.findByIdAndDelete(req.params.id);
    res.status(200).json("Logo has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET Logo
router.get("/find/:id", async (req, res) => {
  try {
    const logo = await Logo.findById(req.params.id);
    res.status(200).json(logo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL LogoS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  try {
    let logos;

    if (qNew) {
      logos = await Logo.find().sort({ createdAt: -1 }).limit(1);
    } else {
      logos = await Logo.find();
    }

    res.status(200).json(logos);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;