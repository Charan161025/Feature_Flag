const router =
  require("express").Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  login,
  createOrganization,
  getOrganizations
} = require(
  "../controllers/superAdminController"
);

router.post("/login", login);

router.post(
  "/organization",
  authMiddleware,
  createOrganization
);

router.get(
  "/organizations",
  authMiddleware,
  getOrganizations
);

module.exports = router;