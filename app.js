const express = require("express");
const bodyParser = require("body-parser");
const { getRandom } = require("./date");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = ["Buy food.","Cook food.","Eat food"];
let workItems = [];
app.get("/", function(req,res){

  let day = date;
  res.render("lists", {listTitle: day, newListItems: items});
  let num = date.getRandom();
  
});


app.post("/", function(req,res){

    let item = req.body.newItem;
        
    
    if(req.body.list === "Work") {
      workItems.push(item);
      res.redirect("/work");
    } else {

      items.push(item);
      res.redirect("/");
    }
});

app.get("/work", function(req,res){
  res.render("lists", {listTitle: "Work Titles", newListItems: workItems});
  });

app.get("/about", function(req,res){
    res.render("about");
    });
    

app.listen(3000, function(){
  console.log("Server running on port 3000.");
});