const router = require("express").Router();
const accountRoutes = require('./accounts');

router.use("/accounts", accountRoutes);

module.exports = router;