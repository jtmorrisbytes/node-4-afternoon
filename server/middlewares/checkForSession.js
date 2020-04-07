module.exports = function (req, res, next) {
  if (!req.session) {
    console.log(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    );
  }
  // console.log("middleware checking express session", req.session != undefined);
  if (req.session.user) {
    next();
  } else {
    req.session.user = {
      username: "",
      cart: [],
      total: 0,
    };
    next();
  }
};
