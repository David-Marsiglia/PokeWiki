import express, { application } from 'express';
import { insertar } from './src/controller/RegisterController.js';
import { login } from './src/controller/LoginController.js';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Recuerda cambiar a true en producción
  }));

app.listen('10000')

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'src/public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/login', (req, res) => {
    if (req.session.usuarioLogueado) {
        res.redirect('/');
      } else {
        res.sendFile(path.join(__dirname + '/src/public/formLogin.html'));
      }
    
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/public/formRegister.html'));
});
app.get('/home', (req, res) => {
    if (req.session.usuarioLogueado) {
        res.sendFile(path.join(__dirname + '/src/public/homePage.html'));
      } else {
        res.redirect('/login');
      }
    
});
app.get('/home-guest', (req, res) => {
    
    res.sendFile(path.join(__dirname + '/src/public/homePage.html'));
    
});


app.post('/register', insertar);

app.post('/login', login);
app.get('/poke-detail', (req, res) => {
    if (req.session.usuarioLogueado) {
        res.sendFile(path.join(__dirname + '/src/public/pokemonDetail.html'));
      } else {
        res.redirect('/login');
      }
    
});
app.get('/logout', (req, res) => {
    req.session.destroy(()=>{
        res.redirect('/')
    })
});

