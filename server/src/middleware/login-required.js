const loginRequired = (req, res, next) => {
    // A logged-in user should have a username set in the session
    console.log("Printing req.session.username: " + req.session.username)
    if(req.session && req.session.username) next();
    // If not, redirect them to the login page
    else {
        console.log("Inside of login-required redirect")
        res.redirect('/api/login');
    }
  }
  
  module.exports = loginRequired;