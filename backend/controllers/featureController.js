const Feature = require(
  "../models/FeatureFlag"
);

exports.createFeature =
  async (req, res) => {
    try {
      const {
        featureKey,
        enabled
      } = req.body;

      const feature =
        await Feature.create({
          featureKey,
          enabled,

          
          organization:
            req.user.organization
        });

      res.json(feature);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

exports.getFeatures = async (
  req,
  res
) => {
  try {
    
    const features =
      await Feature.find({
        organization:
          req.user.organization
      });

    res.json(features);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateFeature =
  async (req, res) => {
    try {
      const feature =
        await Feature.findOne({
          _id: req.params.id,

          
          organization:
            req.user.organization
        });

      if (!feature) {
        return res.status(404).json({
          message:
            "Feature not found"
        });
      }

      feature.enabled =
        req.body.enabled;

      await feature.save();

      res.json(feature);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };