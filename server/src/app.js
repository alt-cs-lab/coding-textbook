const axios = require( "axios" )
const express = require( "express" )
const bodyParser = require( "body-parser" )
const uid = require( "uid-safe" )
const router = require("./endpoints/auth")
const session = require('express-session')
const loginRequired = require('./middleware/login-required')

const app = express()

app.use( bodyParser.json() )

app.use(session({
  genid: function(req) {
    return uid(18) // use UUIDs for session IDs
  },
  secret: 'Annotation-Group-Project',
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
    secure: false,
  }
}))


app.get('/',loginRequired,(req, res) => {
  res.send(`Welcome ${req.session.username}!  You are authenticated :)`);
})

app.get('/api',loginRequired,(req, res) => {
  res.send(`Welcome ${req.session.username}!  You are authenticated :)`);
})

app.use('/api', router)

app.get('/api/logged_in', (req,res) => {
  res.send('Headers sent for parsing')
})


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

//app.post('/', require('./middleware/verify-lti-launch'), require('./endpoints/lti-launch'));

module.exports = app;