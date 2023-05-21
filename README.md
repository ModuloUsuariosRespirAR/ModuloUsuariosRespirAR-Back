# ModuloUsuariosRespirAR-Back

## Info: 📋

### Login : /login

#### Request:

- Body: {
  username: example@test.com,
  password: example
  }
- Headers: {
  Content-Type: application/json
  }

#### Response:

- Successfull: {
  accesToken: token,
  apiToken: token,
  user: {UserInfo}
  }
- Error: {
  error:{
  statusCode: code,
  message: errorMessage
  }
  }

### UsersList : /users/list

#### Request:

- Headers: {
  api-token: apiToken
  }

#### Response:

- Successfull: {
  users: [{users...}]
  }
- Error: {
  error:{
  statusCode: code,
  message: errorMessage
  }
  }

<hr />
