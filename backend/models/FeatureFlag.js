const mongoose = require(
  "mongoose"
);

const featureSchema =
  new mongoose.Schema(
    {
      featureKey: {
        type: String,
        required: true
      },

      enabled: {
        type: Boolean,
        default: true
      },

      organization: {
        type:
          mongoose.Schema.Types
            .ObjectId,

        ref: "Organization",

        required: true
      }
    },
    { timestamps: true }
  );

module.exports = mongoose.model(
  "Feature",
  featureSchema
);