const passport = require("passport");
const localStrategy = require("passport-local").Strategy
// const bcrypt = require("bcrypt");


module.exports = function (passport) {
passport.user(new localStrategy (function(user, password, done) {
    User.findOne({username: username}, function(err, doc) {
        if(err) {done (err)
        } else {
            if(doc) {
               let valid = doc.comparePassword(password, doc.password)
               if(valid) {
                   done(null, {
                       username: doc.username,
                       password: doc.password
                   })
               }
            } else {
                done(null, false)
            }
        }
    });
}));

passport.serializeUser(function (user, done) {
    done(null, user)
});
passport.deserializeUser(function (user, done) {
    done(null, user)
});

}