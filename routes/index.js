
const express = require("express");
const app = express();


/* GET home page. */
//router.get("/", function(req, res, next) {
//res.send( { title: "Josh" });
//});
app.use(express.json());
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.post("/createaccount", function (req, res, next) {
        req.checkbody("username", "Username field cannot be empty.");
        req.checkbody("username", "Username must be between 4-15 characters long.").len(4, 15);
        req.checkbody("email", "The email you entered is invalid, please try again.").isEmail();
        req.checkbody("email", "Email address must be between 8-100 characters long").len(8, 100);
        req.checkbody("password", "Password Must be 8-10 Characters long.").len(8, 100);
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const errors = req.validationErrors();
        if (errors) {
            var console = console.log("errors: ${JSON.stringify(errors)}");
            res.render("createaccount", { title: "Registration error" });
        }

        const db = require("../db/schema.sql");

        db.query("INSERT INTO CreateAccount (username, email, password) VALUES (?, ?, ?)"[username, email, password], function (
            error, res) {
            if (error) throw error;
            res.render("", { title: "The Sizzling Griddle" });
        }
        );
    });

};


var router = express.Router();
router.get("/", function (req, res, next) {
    res.send({ title: "Josh" });
});
module.exports = router;
