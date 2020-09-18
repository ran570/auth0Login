const core = require('@actions/core');
const request = require('request');

// most @actions toolkit packages have async methods
async function run() {
    try {

        const domain = core.getInput("domain");
        const username = core.getInput("username");
        const audience = core.getInput("audience");
        /*
        POST Form data is derived from input parameters
         */
        let data;
        if (audience) {
            data = {
                audience: audience,
                client_id:core.getInput("client_id"),
                grant_type: "http://auth0.com/oauth/grant-type/password-realm",
                password: core.getInput("password"),
                realm: core.getInput("realm"),
                scope: core.getInput("scope"),
                username: username,
            };
        } else {
            data = {
                client_id:core.getInput("client_id"),
                grant_type: "http://auth0.com/oauth/grant-type/password-realm",
                password: core.getInput("password"),
                realm: core.getInput("realm"),
                scope: core.getInput("scope"),
                username: username,
            };
        }


        // Set the headers
        const headers = {
            "Content-Type": "application/x-www-form-urlencoded",
        };

        // Configure the request
        const options = {
            form: data,
            headers,
            method: "POST",
            url: "https://" +domain+ "/oauth/token",
        };

        core.info(`Performing Login for ${username}  on ${domain} ...`);

        request(options,function (error, response, body) {
            if (error) {
                core.setFailed(error);
            } else {
                const authResult = JSON.parse(body);
                if (authResult['error']) {
                    core.setFailed(authResult['error_description']);
                } else {
                    const myToken = authResult['access_token'];
                    core.setSecret(myToken);
                    core.setOutput('authorization',"Bearer "+myToken);
                    core.setOutput("token", myToken);
                    core.exportVariable("token",myToken);
                }
            }
        });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
