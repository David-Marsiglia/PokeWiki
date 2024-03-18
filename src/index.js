import express, { application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import { insertar } from "./controller/RegisterController.js";
import { login } from "./controller/LoginController.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 10000;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../src')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/login', (req, res) => {
  if (req.session.usuarioLogueado) {
      res.redirect('/');
    } else {
      res.sendFile(path.join(__dirname + '/public/formLogin.html'));
    }

});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/formRegister.html'));
});
app.get('/home', (req, res) => {
  if (req.session.usuarioLogueado) {
      res.sendFile(path.join(__dirname + '/public/homePage.html'));
    } else {
      res.redirect('/login');
    }

});
app.get('/home-guest', (req, res) => {

  res.sendFile(path.join(__dirname + '/public/homePage.html'));

});


app.post('/register', insertar);

app.post('/login', login);
app.get('/poke-detail', (req, res) => {
  if (req.session.usuarioLogueado) {
      res.sendFile(path.join(__dirname + '/public/pokemonDetail.html'));
    } else {
      res.redirect('/login');
    }

});
app.get('/logout', (req, res) => {
  req.session.destroy(()=>{
      res.redirect('/')
  })
});

app.listen(port)








