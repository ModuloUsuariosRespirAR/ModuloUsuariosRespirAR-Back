import { Keyrock } from "../services/Keyrock.js";

export class Authorizations {
  static async readOnlyDenied(req, res, next) {
    const accessToken = req.headers["accesstoken"];
    const userInfo = await Keyrock.getUserInfo(accessToken);

    if (userInfo.error) {
      res.status(userInfo.error.statusCode).json(userInfo);
    } else if (
      userInfo.roles.find((rol) => rol.name == "ReadOnly") === undefined
    ) {
      next();
    } else {
      res.status(401).json({
        error: {
          statusCode: 401,
          message: "Access Denied",
        },
      });
    }
  }

  static async modifyDenied(req, res, next) {
    const accessToken = req.headers["accesstoken"];
    const userInfo = await Keyrock.getUserInfo(accessToken);

    if (userInfo.error) {
      res.status(userInfo.error.statusCode).json(userInfo);
    } else if (
      userInfo.roles.find((rol) => rol.name == "Modify") === undefined
    ) {
      next();
    } else {
      res.status(401).json({
        error: {
          statusCode: 401,
          message: "Access Denied",
        },
      });
    }
  }

  static async adminOnly(req, res, next) {
    
    const accessToken = req.headers["accesstoken"];
    const userInfo = await Keyrock.getUserInfo(accessToken);

    if (userInfo.error) {
      res.status(userInfo.error.statusCode).json(userInfo);
    } else if (
      userInfo.roles.find((rol) => rol.name == "Modify"||rol.name == "ReadOnly") === undefined
    ) {
      next();
    } else {
      res.status(401).json({
        error: {
          statusCode: 401,
          message: "Access Denied",
        },
      });
    }
  }
}
