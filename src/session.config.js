module.exports = {
  name             : "PHPSESSID",
  secret           : "ruas",
  resave           : false,
  saveUninitialized: true,
  cookie           : {
    httpOnly: false,
    secure  : false,
  },
};
