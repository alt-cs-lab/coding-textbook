const axios = require( "axios" )
const express = require( "express" )
const bodyParser = require( "body-parser" )

const app = express()

app.use( bodyParser.json() )

app.get('/api/assigned-readings', (req, res) => {
  res.json({
    0: {id: 0, title: "Intro Chapter Heading", url: "https://textbooks.cs.ksu.edu/tlcs/1-what-is-cs/embed.html"},
    1: {id: 1, title: "Introduction", url: "https://textbooks.cs.ksu.edu/tlcs/1-what-is-cs/01-introduction/embed.html"},
    2: {id: 2, title: "What is Computer Science?", url: "https://textbooks.cs.ksu.edu/tlcs/1-what-is-cs/04-computer-programming/embed.html"}
  })
})

app.get('/api/lti', (req, res) => {
  res.status(200).json({
    0: {lti: JSON.stringify("Test Data")}
  })
  console.log("SENT LTI STUFF")
})

// app.get('/api/login', (req, res) => {
//   var sessionID = "RandomValue";
//   console.log("Inside of /api/login")
//   res.setHeader("Set-Cookie", `session-id=${sessionID}; lang=en-US`);
//   sessions = {
//       0: {id: "hello"}
//   }
//   res.json()
// })

// If we are serving our app through a proxy server,
// the proxy server may be using HTTPS protocol while
// the express server is using HTTPS.  This will
// cause the OAuth signatures to not match.  Setting 
// a proxy trust setting on express will have it 
// reflect the protocol used by the proxy instead.
var trustProxy = process.env.TRUST_PROXY;
if(trustProxy) {
  // The 'trust proxy' setting can either be a boolean
  // (blanket trust any proxy) or a specific ip address
  if(trustProxy === "true") app.set('trust proxy', true);
  else app.set('trust proxy', trustProxy);
}

// We use the bodyparser middleware to process incoming
// request bodies
app.use(bodyParser.urlencoded({extended: false}));

// For this app we have a single route that responds to
// LTI launch requests. 
//app.post('/api/lti', require('./middleware/verify-lti-launch'), require('./endpoints/lti-launch'));


app.post('/api/reading', async (req, res) => {
  const response = await axios.get(req.body.url);
  res.send(response.data.replace('</body>', '<script src="https://hypothes.is/embed.js" async></script></body>'))
})

app.post('/', require('./middleware/verify-lti-launch'), require('./endpoints/lti-launch'));

module.exports = app;