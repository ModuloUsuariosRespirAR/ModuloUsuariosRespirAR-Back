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
|  apiToken: token  |-  |
| user: {[![UserInfo](https://prnt.sc/3WInEaTMi9NA "UserInfo")](https://prnt.sc/3WInEaTMi9NA "UserInfo")}  | -  |

### get Users : /users/list | GET

#### Request:
| Headers  |
| ------------ |
| api-token: apiToken  |


#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| users: [![users](https://prnt.sc/UOpv5JHg7YjK "users")](https://prnt.sc/UOpv5JHg7YjK "users")  | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Create User : /users/create | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| [![Body](# "Body")](https://prnt.sc/ONh9j3sR55Z5 "Body")  | api-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![CreatedUser](https://prnt.sc/pOA6FtOn5JMn "CreatedUser")](https://prnt.sc/pOA6FtOn5JMn "CreatedUser") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Update User : /users/update/:userId | POST

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| [![Body](# "Body")](https://prnt.sc/7A5W6FG2-1NQ "Body")  | api-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| [![UpdatedUser](https://prnt.sc/XN-UjGDrwNIN "CreatedUser")](https://prnt.sc/XN-UjGDrwNIN "CreatedUser") | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |

### Delete User : /users/delete/:userId | DELETE

#### Request:
| Body  | Headers  |
| ------------ | ------------ |
| -  | api-token: token  |

#### Response:

| Successful  | Error   |
| ------------ | ------------ |
| - | [![ErrorExample](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")](https://prnt.sc/tKyyEDRnAOCf "ErrorExample")  |


<hr />
