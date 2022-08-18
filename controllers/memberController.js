"use strict";
const MembersDB = require('../models/MembersDB');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret = "somekeywhichissecret";


var membersDB = new MembersDB();

function getAllMembers(request, respond) {
    membersDB.getAllMembers(function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
function addMember(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    password = bcrypt.hashSync(password, 10);
    membersDB.addMember(username, password, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    })
};
function updateMember(request, respond) {

    var telephone = request.body.telephone;
    var username = request.body.username;
    var token = request.body.token;
    try {
        var decoded = jwt.verify(token, secret);
        membersDB.updateMember(telephone, username, function (error, result) {
            if (error) {
                respond.json(error);
            } else {
                respond.json(result);
            }
        });
    } catch (error) {
        respond.json ({result:"invalid token"});

    }

}

function loginMember(request, respond) {
    var username = request.body.username;
    var password = request.body.password;
    membersDB.loginMember(username, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            const hash = result[0].password;
            var flag = bcrypt.compareSync(password, hash);
            if (flag) {
                var token = jwt.sign(username, secret);
                respond.json({ result: token });
            } else {
                respond.json({ result: "invalid" });
            }

        }
    })
};

function deleteMember(request, respond) {
    var memberID = request.params.id;
    membersDB.deleteMember(memberID, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json('{"status":"successful"}');
        }
    });
}

module.exports = { getAllMembers, addMember, updateMember, deleteMember, loginMember }; 