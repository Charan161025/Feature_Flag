const router =
  require("express").Router();

const {
  checkFeature
} = require(
  "../controllers/userController"
);

router.post(
  "/check-feature",
  checkFeature
);

module.exports = router;