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
  updateFeature,
  editFeature,
  deleteFeature
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



router.patch(
  "/:id",
  authMiddleware,
  editFeature
);



router.delete(
  "/:id",
  authMiddleware,
  deleteFeature
);

module.exports = router;