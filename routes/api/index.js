const router = require("express").Router();
const accountRoutes = require('./accounts');
const characterRoutes = require('./characters');

router.use("/accounts", accountRoutes);
router.use("/characters", characterRoutes);

module.exports = router;