var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://farm3.staticflickr.com/2474/3607219603_471f7af9f3.jpg"},
    {name: "Granite Hill", image: "https://farm3.staticflickr.com/2923/13950231147_7032e443a0.jpg"},
    {name: "Mountain Goat's Rest", image: "https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {valkyrie: campgrounds});
})

app.post("/campgrounds", function(req, res){
  // get data from form and add to campground array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  // redirect back to campground page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(process.env.PORT || 5000, function(){
  console.log("The YelpCamp Server has started");
});
