const router = require("express").Router();
const accountRoutes = require('./accounts');
const characterRoutes = require('./characters');
const logRoutes = require('./login-out');

router.use("/accounts", accountRoutes);
router.use("/characters", characterRoutes);
router.use("/log", logRoutes);

module.exports = router;