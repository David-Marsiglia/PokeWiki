import express from "express";
import path from "path";
import { insertar } from "../controller/RegisterController.js";
import { login } from "../controller/LoginController.js";

export function usersRouter(__dirname) {
  const router = express.Router();

  router.get("/login", (req, res) => {
    if (req.session.usuarioLogueado) {
      res.redirect("/");
    } else {
      res.sendFile(path.join(__dirname + "/src/public/formLogin.html"));
    }
  });

  router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/public/formRegister.html"));
  });

  router.post("/register", insertar);

  router.post("/login", login);

  router.get("/logout", (req, res) => {
    req.session.destroy(() => {
      res.redirect("/");
    });
  });

  return router;
}


