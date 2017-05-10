var express = require("express")
var router = express.Router()
var ConfigModel = require("../modals/configlet")


var addHandler = function (req, res) {
    var reqBody = req.body;
    ConfigModel.addConfig(reqBody, function (result) {
        res.status(200);
        res.send(result);
        res.end();
    });
}

var getAllHandler = function (req, res) {
    ConfigModel.getAllConfigs(function (result) {
        res.status(200);
        res.send(result);
        res.end();
    });
}

var getHandler = function (req, res) {
    var params = req.params;
    var configId = params.configId;
    ConfigModel.getConfig(configId, function (result) {
        res.status(200);
        res.send(result);
        res.end();
    });
}

var updateHandler = function (req, res) {
    var reqBody = req.body;
    ConfigModel.updateConfig(reqBody, function (result) {
        res.status(200);
        res.send(result);
        res.end();
    });
}

var deleteHandler = function (req, res) {
    var params = req.params;
    var configId = params.id;
    ConfigModel.deleteConfig(configId, function (result) {
        res.status(200);
        res.send(result);
        res.end();
    });
}

var updateConfig = function (req, res) {

}

router.post("/add", addHandler);
router.get("/getAll", getAllHandler);
router.get("/get/:configId", getHandler);
router.post("/update", updateHandler);
router.delete("/delete/:id", deleteHandler);

module.exports = router