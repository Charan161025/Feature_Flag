const Feature = require(
  "../models/FeatureFlag"
);

exports.checkFeature =
  async (req, res) => {
    try {
      const {
        organizationId,
        featureId
      } = req.body;

      const feature =
        await Feature.findOne({
          _id: featureId,
          organization:
            organizationId
        });

      if (!feature) {
        return res.json({
          enabled: false
        });
      }

      res.json({
        enabled:
          feature.enabled
      });
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };