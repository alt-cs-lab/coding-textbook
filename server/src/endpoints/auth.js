const axios = require('axios')
const express = require( "express" )

const router = express.Router()
var serviceHost = encodeURIComponent('http://coding-textbook-server:3050/');
var casHost = 'https://signin.k-state.edu/WebISO/';

router.get('/login', (req, res) => {
  res.redirect(`${casHost}login?service=${serviceHost}api/ticket`)
});

router.get('/ticket', async (req,res) => {
  console.log("Testing")
  // get the ticket from the querystring
  const ticket = req.query.ticket;
  // We need to verify this ticket with the CAS server,
  // by making a request against its serviceValidate url
  var url = `${casHost}serviceValidate?ticket=${ticket}&service=${serviceHost}api/ticket`;
  // We'll use the fetch api to talk to the CAS server.  This can throw errors, so
  // we'll wrap it in a try-catch
  try {
    // We'll make an asynchronous request, so we await the response
    const response = await axios.get(url);
    // Then look for a username in the response using a regular expression
    // The response should be the XML specified by the standard.  We could
    // parse it as XML, but we only care about one element (`<cas:user>`),
    // so a regular expression has less overhead.
    var match = /<cas:user>\s*(\S+)\s*<\/cas:user>/.exec(response.data);
    // If it was found, we know the ticket was validated and we can log the user in
    // Otherwise, respond with an unauthorized response
    if(match) {
      // The username should be the first capture group, so store it in our session
      req.session.username = match[1];
      // Then redirect them to the landing page 
      res.redirect('/')
    } else {
      res.status(403).send('Authorization failed');
    }
  } catch (err) {
    // If we caught an error, log it to the console
    console.error(err);
    // and send a 500 status code 
    res.status(500).send('Sorry. Something went wrong.')
  }
})


module.exports = router;