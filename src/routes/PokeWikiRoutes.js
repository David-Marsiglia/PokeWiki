import express from "express";
import path from "path";

export function pokeWikiRouter(__dirname) {
  const router = express.Router();

  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/public/index.html"));
  });

  router.get("/home", (req, res) => {
    if (req.session.usuarioLogueado) {
      res.sendFile(path.join(__dirname + "/src/public/homePage.html"));
    } else {
      res.redirect("/login");
    }
  });
  router.get("/home-guest", (req, res) => {
    res.sendFile(path.join(__dirname + "/src/public/homePage.html"));
  });

  router.get("/poke-detail", (req, res) => {
    if (req.session.usuarioLogueado) {
      res.sendFile(path.join(__dirname + "/src/public/pokemonDetail.html"));
    } else {
      res.redirect("/login");
    }
  });

  return router;
}

