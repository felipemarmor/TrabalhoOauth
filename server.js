const express = require("express");
app = express();
const FacebookStrategy= require("passport-facebook").Strategy;
const passport = require("passport");
const port = 3000;





app.get('/success',function(req,res){
    res.sendFile(__dirname + "/success.html");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

  app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html"); 
  });

app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/success');
  });



  passport.use(new FacebookStrategy({
    clientID: "2951201861867465",
    clientSecret: "b95aab91f3c0694de50c6aa98d52187a",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
        console.log(profile);
        return("Success");
  }
));

