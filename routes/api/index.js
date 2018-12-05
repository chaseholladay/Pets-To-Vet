const router = require("express").Router();
const UserRoutes = require("./UsersRoute");
const VetRoutes = require("./VetRoute");
const PetRoutes = require("./PetRoute");
const Dashboard = require("./Dashboard");

// All routes
router.use("/users", UserRoutes);
router.use("/Vets", VetRoutes);
router.use("/Pets", PetRoutes);
router.use("/Dashboard", Dashboard);

module.exports = router;