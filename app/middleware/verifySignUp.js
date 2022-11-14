const db = require("../models");
const Roles = db.Roles;
const User = db.User;

checkDuplicateEmail = (req, res, next) => {
  // Email
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: "E-mail já está em uso!"
      });
      return;
    }

    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Roles.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "A regra não existe = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateEmail: checkDuplicateEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
