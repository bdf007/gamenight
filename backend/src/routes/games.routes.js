const express = require("express");

const { GameController } = require("../controllers");

const router = express.Router();

router.get("/", GameController.browse);
router.get("/:id", GameController.read);
router.put("/:id", GameController.edit);
router.post("/", GameController.add);
router.delete("/:id", GameController.delete);

module.exports = router;
