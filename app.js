let express = require("express");
let app = express();
let bodyParser = require("body-parser");
//###################################################################################
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
//###################################################################################
let campgrounds = [
    {name: "Salmon Creek", img: "https://cdn.vox-cdn.com/thumbor/wNCd1cBf7MrId4a_2IT-XmcfygY=/0x0:5114x3414/1200x800/filters:focal(2148x1298:2966x2116)/cdn.vox-cdn.com/uploads/chorus_image/image/64713096/shutterstock_1106746100.0.jpg"},
    {name: "Granite Hill", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbs8lqDN1a7VuhbV6GiLg9h3LBmwo9ODd_pwOTgrsyKsyqKPjk&usqp=CAU"},
    {name: "Mountain Goat's Rest", img: "https://www.reatainsurance.com/wp-content/uploads/2018/07/Fotolia_96898919_Subscription_XXL.jpg"}
]
//###################################################################################

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req,res){
    let name = req.body.name;
    let img = req.body.img;
    let newCamp = {name: name, img: img};
    campgrounds.push(newCamp);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

//###################################################################################

app.listen(6699, function(){
    console.log("deez nuts are up on port 6699");
});