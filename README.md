# Auth0 Login Action

<p>
  <a href="https://github.com/ran570/auth0Login/actions"><img alt="auth0Login status" src="https://github.com/ran570/auth0Login/workflows/units-test/badge.svg"></a>
</p>

Login to a given AUTH0 application using a username/password authentication and capture the token.
 
## Usage

Include the action in your yaml file and provide the required inputs. Preferably via [Github Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)

### Outputs will include
 
 - [x] *authorization* `Bearer {token}` to be used directly in headers
 - [x] *id_token* a variable which contains the token
 - [x] *id_token* an environment variable with the same token  

```yaml
uses: ran570/auth0Login@v1
with:
  domain: xxx.xxx.auth0.com
  client_id: 6cFvyxxxxxxxxxxxxyy
  audience: leave empty or provide the API used
  scope: any scope defined by your audiance. Usually email is sufficient
  realm: the connection where the username is stored - usually Username-Password-Authentication
  username: the Username
  password: the password
  
```

See the [actions tab](https://github.com/ran570/auth0Login/actions) for runs of this action! :rocket:
