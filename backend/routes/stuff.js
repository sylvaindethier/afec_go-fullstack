const express = require("express");
const stuffController = require("../controllers/stuff");

// Create Router
const router = express.Router();

// POST: Create a Thing
router.post("/", stuffController.createThing);

// GET: Get a Thing by id
router.get("/:id", stuffController.getOneThing);

// PUT: Update a Thing by id
router.put("/:id", stuffController.updateThing);

// DELETE: Delete a Thing by id
router.delete("/:id", stuffController.deleteThing);

// GET: Get all Thing
router.get("/", stuffController.getAllThing);

module.exports = router;
