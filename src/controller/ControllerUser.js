import { insertarDatos } from "../model/insertUser.js";
import { consultarDatos } from "../model/LoginModel.js";

export async function insertar(req, res) {
  const datos = req.body;

  await consultarDatos(datos, async function (err, result) {
    if (result == 0) {
      const result = await insertarDatos(datos, function (err, result) {
        if (err) {
          console.log(err);
        } else {
          console.log("primer logro");
          res.send("LO LOGRASTE!!");
        }
      });
    } else {
      res.send("USUARIO YA EXISTE!!");
    }
  });
}
