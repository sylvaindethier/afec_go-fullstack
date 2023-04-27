const express = require("express");
const stuffController = require("../controllers/stuff");
const auth = require('../middleware/auth');

// Create Router
const router = express.Router();

// POST: Create a Thing
router.post("/", auth, stuffController.createThing);

// GET: Get a Thing by id
router.get("/:id", auth, stuffController.getOneThing);

// PUT: Update a Thing by id
router.put("/:id", auth, stuffController.updateThing);

// DELETE: Delete a Thing by id
router.delete("/:id", auth, stuffController.deleteThing);

// GET: Get all Thing
router.get("/", auth, stuffController.getAllThing);

module.exports = router;
