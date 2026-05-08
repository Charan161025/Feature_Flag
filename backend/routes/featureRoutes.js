const express = require(
  "express"
);

const router =
  express.Router();

const authMiddleware =
  require(
    "../middleware/authMiddleware"
  );

const {
  createFeature,
  getFeatures,
  updateFeature
} = require(
  "../controllers/featureController"
);

router.post(
  "/",
  authMiddleware,
  createFeature
);

router.get(
  "/",
  authMiddleware,
  getFeatures
);

router.put(
  "/:id",
  authMiddleware,
  updateFeature
);

module.exports = router;