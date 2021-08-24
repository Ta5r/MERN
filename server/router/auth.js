const express = require("express");
const { findOne } = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcryptjs");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("<br>Hello World from express auth router");
});

// router.post("/register", (req, res) => {
//   const {name, email, phone, work, password, cpassword} = req.body;
//   //validation
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "plz fill all details" });
//   }

//   User.findOne({ email: email }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({ error: "user already exists" });
//     } else {
//       const user = new User({ name, email, phone, work, password, cpassword });
//       user
//         .save()
//         .then((user) => {
//           res.status(200).json({ message: "user registered successfully" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: "Registering Failed" });
//         });
//     }
//   });
// });

router.post("/register", async (req, res) => {
  const saltRounds = 10;
  const myPlaintextPassword = "s0//P4$$w0rD";
  const someOtherPlaintextPassword = "not_bacon";

  const { name, email, phone, work, password, cpassword } = req.body;
  //validation
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "plz fill all details" });
  }
  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "user already exists" });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });
    // yaha pe save() karne se pehle ek aisa func call karna hoga jo pwd ko hash karde
    await user.save();

    res.status(201).json({ message: "user registered successfully" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "EMAIL / PASSWORD required" });
    } else {
      const userLogin = await User.findOne({ email: email });
      console.log(userLogin);
      if (userLogin) {
        res.json({ message: "user found" }).status(200);
      } else {
        res.json({ message: "user NOT found" }).status(400);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
