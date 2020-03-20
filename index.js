const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 80;

var contacts = [
	{ 
		name: "peter",
		phone: 123456	
	},
	{ 
		name: "pablo",
		phone: 789456	
	}
];

const BASE_API_URL = "/api/v1";

//GET CONTACTS

app.get(BASE_API_URL+"/contacts", (req,res) =>{
	res.send(JSON.stringify(contacts,null,2));
});

//POST CONTACTS

app.post(BASE_API_URL+"/contacts",(req,res) =>{
	var newContact = req.body;
	
	if((newContact =="") || (newContact.name==null)){
		res.sendStatus(400,"BAD REQUEST");
	}else{
		contacts.push(newContact); 
		res.sendStatus(201,"CREATED");
	}
	
});

//DELETE CONTACTS

//GET CONTACTS/xxx

//PUT CONTACTS/xxx

//DELETE CONTACTS/xxx

app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");