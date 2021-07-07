import express from 'express';
import path from 'path';
import session from 'express-session'
import {urlencoded, json as bodyparserJson} from 'body-parser'
import apiRouter from './routes/api/index';
const app = express();
const router = express.Router();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"assets")))
app.use(bodyparserJson()); 
app.use(urlencoded({ extended: false }))
app.get("/", (req, res)=>{
  res.render("home")
})
app.get("/login", (req, res)=>{
  res.render("login");
})
app.use(session({
    secret: "tHiSiSasEcRetStr",
    resave: true,
    saveUninitialized: true }));
app.use("/api", apiRouter);
app.listen(8000, ()=>{
  console.log("The application has successfully started!")
})