module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");

    });

    app.get("/createaccount", function (req, res) {
        res.render("createaccount", );
        
    });

    app.get("/menu", function (req, res) {
        res.render("menu");
    });

    app.get("/viewcart", function (req, res) {
        res.render("viewcart");
    });

    app.get("/login", function (req, res) {

        res.render("login");
    });



};