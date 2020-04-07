const users = require("../models/users");
let id = 1;
module.exports = {
  login: function (req, res) {
    const { username, password } = req.body || {};
    let user = users.find((user) => {
      return user.username === username && user.password === password;
    });
    if (user) {
      req.session.username = username;
      res.json(req.session.username);
    }
  },
  signout: function (req, res) {
    req.session.destroy();
    res.json(req.session);
  },
  register: function (req, res) {
    const { username, password } = req.body;
    if (req.body) {
      users.push({
        id,
        username,
        password,
      });
      id++;
      req.session.username = username;
      res.json(req.session.user);
    } else {
      res.status(500);
    }
  },
  getUser: function (req, res) {
    res.json(req.session.user);
  },
};
