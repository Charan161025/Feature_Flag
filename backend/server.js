const express = require("express");
const path = require("path")
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());
const clientBuildPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(clientBuildPath));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  "/api/superadmin",
  require("./routes/superAdminRoutes")
);

app.use(
  "/api/admin",
  require("./routes/adminRoutes")
);

app.use(
  "/api/features",
  require("./routes/featureRoutes")
);

app.use(
  "/api/user",
  require("./routes/userRoutes")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});