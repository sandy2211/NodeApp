var express = require("express")
var app = express()
var configRoute = require("./routes/config")
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use("/configlet",configRoute)
app.listen(8088)