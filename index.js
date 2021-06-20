import express from "express";
import favicon from "serve-favicon";

const PORT = process.env.PORT || 8080;
const ASSET_URL = process.cwd() + "/assets/";

const app = express();
app.set('view engine', 'pug');
app.use(favicon(ASSET_URL + 'favicon.ico'));

app.get('/', (req, res) => {
    res.render('home.pug');
});

app.get('/calendar', (req, res) => {
    res.render('calendar.pug');
});

app.use('/assets', express.static(ASSET_URL));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
