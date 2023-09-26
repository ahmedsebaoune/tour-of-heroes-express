const express = require("express");

// import controller
const {
  getHeroes,
  getHero,
  editHero,
} = require("../controllers/heroController");
const router = express.Router();



router.get("/heroes", getHeroes);
router.get("/hero/:id", getHero);
router.put("/hero/edit", editHero);






export default router;