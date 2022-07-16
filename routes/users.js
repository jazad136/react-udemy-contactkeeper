const express = require('express');
const router = express.Router();
const User = require('../models/User')
const {check, validationResult } = require('express-validator')
// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  "/" , 
  // [
  //   check("name", "name is required").not().isEmpty(),
  //   check("email", "Please include a valid email").isEmail(),
  //   check(
  //     "password",
  //     "Please enter a password with 6 or more characters"
  //   ).isLength({ min: 6 }),
  // ],
  (req, res) => {
    // // res.send('Register a user')
    // var errors = validationResult(req)
    // console.log(errors.mapped())
    // if(!errors.isEmpty()) {
    //     res.status(422).json({errors: errors.array()[0].msg})
    // }
    res.send(req.body);
  }
);

module.exports = router;