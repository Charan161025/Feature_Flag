const bcrypt = require(
  "bcryptjs"
);

const jwt = require(
  "jsonwebtoken"
);

const User = require(
  "../models/User"
);

const Organization = require(
  "../models/Organization"
);

exports.signup = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password,
      organization
    } = req.body;

   

    const org =
      await Organization.findById(
        organization
      );

    if (!org) {
      return res.status(400).json({
        message:
          "Invalid Organization ID"
      });
    }

    

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message:
          "Email already exists"
      });
    }

   

    const hashedPassword =
      await bcrypt.hash(password, 10);

    

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "ORG_ADMIN",
      organization
    });

    res.status(201).json({
      message:
        "Signup Successful",
      user
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
};

exports.login = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    

    const user =
      await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message:
          "Invalid Credentials"
      });
    }

   

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(401).json({
        message:
          "Invalid Credentials"
      });
    }

    

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        organization:
          user.organization
      },
      process.env.JWT_SECRET
    );

    res.json({
      token,
      user
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message
    });
  }
};