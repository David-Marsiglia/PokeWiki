import express, { application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import { pokeWikiRouter } from './src/routes/PokeWikiRoutes.js';
import { usersRouter } from './src/routes/UsersRoutes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 10000;

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'src/public')));

app.use(session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(pokeWikiRouter(__dirname));
app.use(usersRouter(__dirname));

app.listen(port)








