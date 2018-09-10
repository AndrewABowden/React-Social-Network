var passport =  require("passport");
var LocalStrategy = requier("passport-local").Strategy;

//Models contains the root javascript styles
var db = require("../models");

// use local strategy so we can use username/password
passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function (email, password, done) {
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function (dbUser) {
      if (!dbUser) {
        return done(null, false, {
          message: "Incorrect email."
        });
      } else if (!dbUser.validPassword(password)) {
        //if user has given us email, but password is wrong, display inc
        return done(null, false, {
          message: "Sorry, invalid password.."
        });
      }
      //if none of these happen, return user info
      return done(null, dbUser)
    })
  }
));

//this keeps authentications state across HTTP requests, 
//afterwards we use sequelize to serialize the user, then deserialize
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


module.exports = passport;