# ModuloUsuariosRespirAR-Back

## Info: 📋

### Generals:

#### UserInfo:
[![UserInfo](https://prnt.sc/3WInEaTMi9NA "UserInfo")](https://prnt.sc/3WInEaTMi9NA "UserInfo")

#### Error:
[![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")

### Login : /login | POST

#### Request:

|Body   | Headers  |
| ------------ | ------------ |
| username: example@test.com | Content-Type: application/json |
| password: passwordExample  |  - |

#### Response:

|  Successful | Error  |
| ------------ | ------------ |
| accessToken: token  | error:{[![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")}  |
|  x-auth-token: token  |-  |
| user: {[![UserInfo](https://prnt.sc/3WInEaTMi9NA "UserInfo")](https://prnt.sc/3WInEaTMi9NA "UserInfo")}  | -  |

### Get Users : /users/list | GET

#### Request:
| Headers  |
| ------------ |
| X-Auth-token: token  |


#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| users: [![users](https://prnt.sc/UOpv5JHg7YjK "users")](https://prnt.sc/UOpv5JHg7YjK "users")  | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Create User : /users/create | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| [![Body](# "Body")](https://prnt.sc/ONh9j3sR55Z5 "Body")  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![CreatedUser](https://prnt.sc/pOA6FtOn5JMn "CreatedUser")](https://prnt.sc/pOA6FtOn5JMn "CreatedUser") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Update User : /users/update/:userId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| [![Body](# "Body")](https://prnt.sc/7A5W6FG2-1NQ "Body")  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![UpdatedUser](https://prnt.sc/XN-UjGDrwNIN "CreatedUser")](https://prnt.sc/XN-UjGDrwNIN "CreatedUser") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Delete User : /users/delete/:userId | DELETE

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| -  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| - | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |


<hr />
### Get Roles : /roles/list | GET

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| -  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![Roles](https://prnt.sc/K-W1IND1wBUX "roles")](https://prnt.sc/K-W1IND1wBUX "roles") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Create role : /roles/create | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| rolName: example  | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![Role](https://i.imgur.com/2ziggc5.png "role")](https://i.imgur.com/2ziggc5.png "role") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Update Role : /roles/update/:rolId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| rolName: example | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![UpdatedRole](https://i.imgur.com/n5VT8dJ.png "UpdatedRole")](https://i.imgur.com/n5VT8dJ.png "UpdatedRole") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Delete Role : /roles/delete/:rolId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| - | X-Auth-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
|- | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

<hr/>
