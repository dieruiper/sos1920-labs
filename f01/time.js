const moment = require("moment");
const express = require("express");

var app = express();


app.get("/time",(request,response) => {
	response.send("<html>"+moment().format('hh:mm:ss')+"</html>");
});

app.listen (80);

console.log("Server Ready");