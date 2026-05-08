const jwt = require("jsonwebtoken");

const Organization = require(
  "../models/Organization"
);

const SUPER_ADMIN = {
  email: "charan@gmail.com",
  password: "123456"
};

exports.login = async (
  req,
  res
) => {
  const { email, password } =
    req.body;

  if (
    email === SUPER_ADMIN.email &&
    password === SUPER_ADMIN.password
  ) {
    const token = jwt.sign(
      {
        role: "SUPER_ADMIN"
      },
      process.env.JWT_SECRET
    );

    return res.json({
      token
    });
  }

  return res.status(401).json({
    message: "Invalid credentials"
  });
};

exports.createOrganization =
  async (req, res) => {
    try {
      const organization =
        await Organization.create({
          name: req.body.name
        });

      res.json(organization);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };

exports.getOrganizations =
  async (req, res) => {
    try {
      const organizations =
        await Organization.find();

      res.json(organizations);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };