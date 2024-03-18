import { insertarDatos } from "../model/InsertUser.js";
import { consultarDatos } from "../model/LoginModel.js";

export async function insertar(req, res) {
  const datos = req.body;

  await consultarDatos(datos, async function (err, result) {
    if (result == 0) {
      const result = await insertarDatos(datos, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.redirect("/register?err=false");
        }
      });
    } else {
      res.redirect("/register?err=true");
    }
  });
}

