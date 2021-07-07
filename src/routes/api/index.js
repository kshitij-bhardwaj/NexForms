import {Router as router} from 'express';
import passport from 'passport';
import {Strategy} from 'passport-local'
const api = router();
var users = [{"id":111, "email":"rhydderchc@gmail.com", "password":"thisismypassword"}];
api.use(passport.initialize());
api.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, users[0].id);
});
passport.deserializeUser(function (id, done) {
    done(null, users[0]);
});
passport.use('local-login', new Strategy({
  usernameField: 'email',
    passwordField: 'password',
},
    function (email, password, done) {
        if (email === users[0].email && password === users[0].password) {
          console.log("Working")
            return done(null, users[0]);
        } else {
          console.log("Wrong")
            return done(null, false, {"message": "User not found."});
        }
    })
);
api.post("/login", passport.authenticate("local-login", { failureRedirect: "/", successRedirect: "/dashboard"}), (req, res)=>{
  res.redirect("/dashboard");
})

export default api;