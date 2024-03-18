import express from "express";
import path from "path";

export function pokeWikiRouter(__dirname) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
  });

  router.get("/home", (req, res) => {
    if (req.session.usuarioLogueado) {
      res.sendFile(path.join(__dirname + "/public/homePage.html"));
    } else {
      res.redirect("/login");
    }
  });
  router.get("/home-guest", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/homePage.html"));
  });

  router.get("/poke-detail", (req, res) => {
    if (req.session.usuarioLogueado) {
      res.sendFile(path.join(__dirname + "/public/pokemonDetail.html"));
    } else {
      res.redirect("/login");
    }
  });

  return router;
}

