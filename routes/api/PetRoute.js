const router = require("express").Router();
const PetController = require("../../controller/PetController");

// Matches with "/api/Pets"
router.route("/")
  .get(PetController.findAll)
  .post(PetController.create);

// Matches with "/api/Pets/:id"
router
  .route("/:id")
  .get(PetController.findById)
  .put(PetController.update)
  .delete(PetController.remove);

// Matches with "/api/Pets/:email"
router
  .route("/ByEmail/:email")
  .get(PetController.findByEmail)

module.exports = router;