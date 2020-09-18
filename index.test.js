const process = require('process');
const cp = require('child_process');
const path = require('path');


// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_REALM'] = "Username-Password-Authentication";
  process.env['INPUT_DOMAIN'] = "ran570.us.auth0.com";
  process.env['INPUT_CLIENT_ID'] = "6cFvyIEg5F8Gw04Ca6h4oxTnExTaRvyj";
  process.env['INPUT_AUDIENCE'] = "https://ran570.us.auth0.com/api/v2/";
  process.env['INPUT_SCOPE'] = "email";
  process.env['INPUT_USERNAME'] = "tester@example.com";
  process.env['INPUT_PASSWORD'] = "Password1234";
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
})
