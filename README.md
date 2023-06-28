# ModuloUsuariosRespirAR-Back

## Info: 📋

#### UserInfo:
[![UserInfo](https://i.imgur.com/GI0gNJ7.png "UserInfo")](https://i.imgur.com/GI0gNJ7.png "UserInfo")

#### Error:
[![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")

### Login : /login | POST

#### Request:

|Body   | Headers  |
| ------------ | ------------ |
| username: example@test.com | Content-Type: application/json |
| password: passwordExample  |  - |

#### Response:

|  Successful | Error  |
| ------------ | ------------ |
| accessToken: token  | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |
|  x-auth-token: token  |-  |
| [![UserInfo](https://i.imgur.com/GI0gNJ7.png "UserInfo")](https://i.imgur.com/GI0gNJ7.png "UserInfo")  | -  |

### Get Users : /users/list | GET

#### Request:
| Headers  |
| ------------ |
| X-Auth-token: token  |


#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| users: [![users](https://i.imgur.com/rFltlHn.png "users")](https://i.imgur.com/rFltlHn.png "users")  | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |

### Create User : /users/create | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| [![Body](https://i.imgur.com/LJmmOdE.png "Body")](https://i.imgur.com/LJmmOdE.png "Body")  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![CreatedUser](https://i.imgur.com/qFsSgMw.png "CreatedUser")](https://i.imgur.com/qFsSgMw.png "CreatedUser") | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |

### Update User : /users/update/:userId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
|  [![Body](https://i.imgur.com/xnlUrx7.png "Body")](https://i.imgur.com/xnlUrx7.png "Body")  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![UpdatedUser](https://i.imgur.com/5fNatrx.png "UpdatedUser")](https://i.imgur.com/5fNatrx.png "UpdatedUser") | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample") |

### Delete User : /users/delete/:userId | DELETE

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| -  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| - | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |


<hr />

### Get Roles : /roles/list | GET

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| -  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![Roles](https://i.imgur.com/g1KNy2M.png "roles")](https://i.imgur.com/g1KNy2M.png "roles") | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |

### Create role : /roles/create | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| rolName: example  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![Role](https://i.imgur.com/2ziggc5.png "role")](https://i.imgur.com/2ziggc5.png "role") | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |

### Update Role : /roles/update/:rolId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| rolName: example | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![UpdatedRole](https://i.imgur.com/n5VT8dJ.png "UpdatedRole")](https://i.imgur.com/n5VT8dJ.png "UpdatedRole") | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |

### Delete Role : /roles/delete/:rolId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| - | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
|- | [![ErrorExample](https://i.imgur.com/tD3KlZf.png "ErrorExample")](https://i.imgur.com/tD3KlZf.png "ErrorExample")  |

<hr/>
