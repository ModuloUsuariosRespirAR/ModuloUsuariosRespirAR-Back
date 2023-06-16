import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

export class Keyrock {
  static baseUrl = process.env.KEYROCK_BASE_URL;
  static appId = process.env.KEYROCK_APP_ID;
  static appSecret = process.env.KEYROCK_APP_SECRET;


  static async setupKeyrockRoles(){

    const username = "admin@test.com";
    const password = "1234";
    const access_token = await this.getAccessToken(username,password);

    if(!access_token.error){

      const authToken = await this.getApiToken(username, password, access_token);
      const result = await this.getRoles(authToken);

      if(result.roles.find((rol) => rol.name == "Modify")=== undefined) {
        this.createRole("Modify", authToken);
      }
      if(result.roles.find((rol) => rol.name == "ReadOnly")=== undefined) {
        this.createRole("ReadOnly", authToken);
      }
    } else {
      console.log("ERROR: No se pudo inicializar Keyrock");
    }
    

    

  }

  //Users

  static async getAccessToken(username, password) {
    const result = await axios
      .post(
        `${this.baseUrl}/oauth2/token`,
        {
          grant_type: "password",
          username,
          password,
        },
        {
          headers: {
            Authorization: this.buildHeader(),
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    if (result.access_token) {
      return result.access_token;
    } else {
      return result;
    }
  }

  static async getUserIdByToken(token) {
    const result = await axios.get(`${this.baseUrl}/v1/auth/tokens`, {
      headers: {
        "X-Auth-token": token,
        "X-Subject-token": token
      }
    })
    .then(response => {return response.data})
    .catch(error => {
      if (error.response) {
        return {
          error: {
            statusCode: error.response.status,
            message: error.response.data.error.message,
          },
        };
      } else {
        return {
          error: {
            statusCode: 500,
            message: "Keyrock connection failed",
          },
        };
      }
    });
    return result;
  }

  static async getApiToken(username, password, token) {
    const result = await axios
      .post(
        `${this.baseUrl}/v1/auth/tokens`,
        {
          name: username,
          password,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    if (result.headers) {
      return result.headers["x-subject-token"];
    } else {
      return result;
    }
  }

  static async getUserById(userId, token) {
    const result = await axios
      .get(`${this.baseUrl}/v1/users/${userId}`, {
        headers: {
          "X-Auth-token": token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async getUsers(token) {
    const result = await axios
      .get(`${this.baseUrl}/v1/users`, {
        headers: {
          "X-Auth-token": token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });

    return result;
  }

  static async getUserInfo(accessToken) {
    const user = await axios
      .get(`${this.baseUrl}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });

    return user;
  }

  static async getUserRoles(userId, token) {
    const result = await axios
      .get(
        `${this.baseUrl}/v1/applications/${this.appId}/users/${userId}/roles`,
        {
          headers: {
            "X-Auth-token": token
          }
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async deleteUser(token, userId) {
    const result = await axios
      .delete(`${this.baseUrl}/v1/users/${userId}`, {
        headers: {
          "X-Auth-token": token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async createUser(reqBody, token) {
    const { user } = reqBody;
    const result = await axios
      .post(
        `${this.baseUrl}/v1/users`,
        {
          user,
        },
        {
          headers: {
            "X-Auth-token": token,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });

    return result;
  }

  static async updateUser(reqBody, token, userId) {
    const { user } = reqBody;
    const result = await axios
      .patch(
        `${this.baseUrl}/v1/users/${userId}`,
        {
          user,
        },
        {
          headers: {
            "X-Auth-token": token,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });

    return result;
  }

  //Roles

  static async createRole(rolName, token) {
    const result = await axios
      .post(
        `${this.baseUrl}/v1/applications/${this.appId}/roles`,
        {
          role: {
            name: rolName,
          },
        },
        {
          headers: {
            "X-Auth-token": token,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async getRole(rolId, token) {
    const result = await axios
      .get(`${this.baseUrl}/v1/applications/${this.appId}/roles/${rolId}`, {
        headers: {
          "X-Auth-token": token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async getRoles(token) {
    const result = await axios
      .get(`${this.baseUrl}/v1/applications/${this.appId}/roles`, {
        headers: {
          "X-Auth-token": token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async updateRole(rolName, rolId, token) {
    const result = await axios
      .patch(
        `${this.baseUrl}/v1/applications/${this.appId}/roles/${rolId}`,
        {
          role: {
            name: rolName,
          },
        },
        {
          headers: {
            "X-Auth-token": token,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async deleteRole(rolId, token) {
    const result = await axios
      .delete(`${this.baseUrl}/v1/applications/${this.appId}/roles/${rolId}`, {
        headers: {
          "X-Auth-token": token,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  static async assingRole(rolId, userId, token) {
    console.log(token);
    const result = await axios
      .put(
        `${this.baseUrl}/v1/applications/${this.appId}/users/${userId}/roles/${rolId}`,
        {},
        {
          headers: {
            "X-Auth-token": token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        if (error.response) {
          return {
            error: {
              statusCode: error.response.status,
              message: error.response.data.error.message,
            },
          };
        } else {
          return {
            error: {
              statusCode: 500,
              message: "Keyrock connection failed",
            },
          };
        }
      });
    return result;
  }

  //Utils

  static buildHeader() {
    const key = `${this.appId}:${this.appSecret}`;
    const base64 = Buffer.from(key).toString("base64");
    // const base64 = Buffer.from(key, "base64");
    return "Basic " + base64;
  }
}
