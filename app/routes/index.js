module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api", (req, res) => {
        res.json({ message: "Welcome to API." });
    });

    require('./auth.routes')(app);
}