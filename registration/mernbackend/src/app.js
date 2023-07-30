const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const session = require("express-session");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");

require("./db/conn");

//importing functions on another file
const myFunctions = require("../templates/partials/functions");

const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const templates_partials = path.join(__dirname,"../templates/partials");


app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: false}));

//For using sessions

// Generate a random secret key
const secretKey = crypto.randomBytes(64).toString("hex");

app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
}));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);
hbs.registerPartials(templates_partials);

app.get("/", (req, res) => {
    // res.render("index", req.session.user ? myFunctions.setParams("You are not logged in Please login.") : req.session.user);
    if(req.session.user){
        res.render("index",myFunctions.setParams(`Welcome ${req.session.user.name}`,{name: req.session.user.name,age: req.session.user.age}));
    }else{
        res.render("index", myFunctions.setParams("Please Login to get started"));
    }
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/logout",(req,res) =>{
    req.session.destroy();
    myFunctions.setfile(res,200,"/","You are successfuly logged out");
})



//handeling post requests
app.post("/register", async (req, res) => {
    try {
        const a = req.body;
        const arrValues = [a.firstname, a.lastname, a.email, a.gender, a.phone, a.age, a.password, a.cpassword];
        const arrKeys = ["firstName","lastName","email","gender","phone","age","password","confirmPassword"];

        //creating an obj for combining keys and values
        const obj = {};
        for (let i = 0; i < arrKeys.length; i++) {
            obj[arrKeys[i]] = arrValues[i];
        }

        await myFunctions.saveData(obj);
        myFunctions.setfile(res,200,"register","You are now registered Successfully!");
    } catch (err) {
        if(err.message.includes("E11000")){
            myFunctions.setfile(res,400,"register","Error: Email or Phone already exists");
        }else if(err.message.includes("ERR_HTTP_INVALID_STATUS_CODE")){
            myFunctions.setfile(res,500,"register","Error: Please Do not miss out a Field every field is mandatory");
        }else if(err.errors && err.errors.email && err.errors.email.path === 'email' || "phone"){
            myFunctions.setfile(res,500,"register","Error: Please Do not miss out Email or Phone field");
        }else{
            myFunctions.setfile(res,400,"register",err.message);
        }
    }
});



app.post("/login", async (req, res) =>{
    try {
        if (req.body.email === '' || req.body.password === '' || req.body.cpassword === '') {
            myFunctions.setfile(res, 400, "login", "Every input is required to be filled to login");
        }else{
            const user = await myFunctions.findUser(req.body.email, req.body.password);
            if(user == null){
                myFunctions.setfile(res,400,"login","User not found");
            }else if(req.body.password !== req.body.cpassword){
                  myFunctions.setfile(res, 400, "login", "Passwords do not match. Please try again");
            }else{
                let sessionUser = myFunctions.setSession(req,`${user.firstName} ${user.lastName}`, user.age);
                res.status(200).render("index", myFunctions.setParams("You are now Logged in Successfully!", sessionUser));
                // myFunctions.destroySession(req,user);
            }
        }
    } catch (err) {
        if (err) {
            myFunctions.setfile(res, 400, "login", err.message);
        }
    }
})

app.listen(80, () => console.log("server started"));