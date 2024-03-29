import express, { application } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import { pokeWikiRouter } from './routes/PokeWikiRoutes.js';
import { usersRouter } from './routes/UsersRoutes.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

app.use(pokeWikiRouter(__dirname));
app.use(usersRouter(__dirname));

app.listen('10000')








