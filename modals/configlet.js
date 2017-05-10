var mongoose = require("mongoose")

mongoose.connect("mongodb://192.168.4.112/CVPDB")

var connection = mongoose.connection

var Schema = mongoose.Schema

var configletSchema = new Schema({
    name: String,
    config: {
        type: String,
        required: true
    },
    configType: {
        type: String,
        default: "static"
    },
    addedOn: {
        type: Date,
        default: Date.now
    }
});

var configletModel = connection.model("config", configletSchema)

var addConfig = function (configData, resCallback) {
    var ConfigData = new configletModel(configData);
    ConfigData.save(function (err, result) {
        if (err) {
            console.log(err)
            resCallback(err)
        } else {
            console.log(result)
            resCallback(result)
        }
    });
}

var getAllConfigs = function (resCallback) {
    configletModel.find({}, function (err, result) {
        if (err) {
            console.log(err)
            resCallback(err)
        } else {
            console.log(result)
            resCallback(result)
        }
    })
}

var getConfig = function (congifletId, resCallback) {
    configletModel.find({ _id: congifletId }, function (err, result) {
        if (err) {
            console.log(err)
            resCallback(err)
        } else {
            console.log(result)
            resCallback(result)
        }
    })
}


var deleteConfig = function (congifletId, resCallback) {
    configletModel.remove({ _id: congifletId }, function (err, result) {
        if (err) {
            console.log(err)
            resCallback(err)
        } else {
            console.log(result)
            resCallback(result)
        }
    })
}

var updateConfig = function (configData, resCallback) {
    configletModel.update({ _id: configData._id }, configData, { upsert: true }, function (err, result) {
        if (err) {
            console.log(err)
            resCallback(err)
        } else {
            console.log(result)
            resCallback(result)
        }
    })
}

module.exports.addConfig = addConfig
module.exports.getAllConfigs = getAllConfigs
module.exports.getConfig = getConfig
module.exports.updateConfig = updateConfig
module.exports.deleteConfig = deleteConfig
