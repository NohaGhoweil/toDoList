const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname+"/date.js")

var tasks = ["Buy food ", "Cook food", "Eat food"];

var workTasks = [];

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    
    var day = date.getDate();
    res.render("list", { listTitle: day, NewTasks: tasks });

});


app.post("/", function (req, res) {
    Task = req.body.NewItem;
    console.log(req.body.list);
    if (req.body.list === "Work") {
        workTasks.push(Task);
        res.redirect("/work");
    } else {
        tasks.push(Task);
        res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render("list", { listTitle: "Work List", NewTasks: workTasks });
});

app.post("/work", function (req, res) {
    Task = req.body.text;
    workTasks.push(Task);
    res.redirect("/work");

});

app.get ("/about" ,function(req,res){
    res.render("about");
})
app.listen(3000, function () {

    console.log("server is done");
});