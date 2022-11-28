var express = require('express'); //use express js
const API_Export = require('./API.js'); // imports api.js
const cors = require('cors');
const API = new API_Export.API(); //create new instance (object) of class API inside api.js
const app = express();
app.use(express.json()) //creates an express application
app.use(cors());
const PORT = 3000; //uses port 3000  for server


app.get("/get_peopledata", (req, res) => {
    res.send(API.retrievepeople ());
    console.log(API.retrievepeople ());
 });
 app.get("/get_departmentdata", (req, res) => {
    res.send(API.retrieveDepartments());
    console.log(API.retrieveDepartments());
 });
 app.post("/get_InsertDepartmentdata", (req, res) => {
   res.send(API.insertDepartments(req.body['Name']));
   console.log(req.body)
   res.send("Success")
});
app.post("/get_InsertPeopledata", (req, res) => {
   let p = req.body; 
   API.insertPeople(p.Name, p.Phone, p.DepartmentID, p.Suburb, p.Address, p.State, p.Postcode, p.Country) 
   res.json({success:true})
});

app.post("/get_UpdatePeopledata", (req, res) => {
   let p = req.body; 
   API.UpdatePeople(p.Name, p.Phone, p.DepartmentID, p.Suburb, p.Address, p.State, p.Postcode, p.Country,p.PeopleID) 
   console.log(p);
   console.log('cccccccc');
   res.json({success:true})
});
app.post("/get_UpdateDepartmentdata", (req, res) => {
   let d = req.body
   console.log(d);
   (API.UpdateDepartments(d.Name, d.DepartmentID));
   res.send("Success");
});

app.get("/", (req, res) => {
    res.send("Success"); // shows server is succussfully routing
 });

 app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`); //server listens on port 3000 if working says it is running on port 3000,  has to be at end of script because of it has to be configed before hand
 });

 app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
 });
 
