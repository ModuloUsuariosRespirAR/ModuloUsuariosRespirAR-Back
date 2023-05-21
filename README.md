# ModuloUsuariosRespirAR-Back

## Info: 📋

### Login : /login

#### Request:

- Body:<br> {<br>
  username: example@test.com,<br>
  password: example<br>
  }
- Headers:<br> {<br>
  Content-Type: application/json<br>
  }

#### Response:

- Successfull:<br> {<br
    accesToken: token,<br>
    apiToken: token,<br>
    user: {UserInfo}<br>
  }
- Error:<br>{<br>
    error:{<br>
      statusCode: code,<br>
      message: errorMessage<br>
    }<br>
  }

### UsersList : /users/list

#### Request:

- Headers: {<br>
  api-token: apiToken<br>
  }

#### Response:

- Successfull:<br>{<br>
    users: [{users...}]<br>
  }
- Error:<br> {<br>
    error:{<br>
      statusCode: code,<br>
      message: errorMessage<br>
    }<br>
  }

<hr />
