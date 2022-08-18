"use strict";
var db = require('../db-connections');
class MembersDB {
    getAllMembers(callback) {
        var sql = "SELECT username, telephone from restaurant_review.member";
        db.query(sql, callback);
    }
    //return the data back where the username matches the arguement username
    loginMember(username,callback) {
        var sql = "SELECT password from restaurant_review.member WHERE username = ?";
        db.query(sql,[username], callback);
    }
    //register the user 
    addMember(username,password, callback){
        var sql = "INSERT INTO member (username,password) VALUES (?, ?)";
        db.query(sql, [username,password], callback);

    } 
    updateMember(telephone, username, callback){
        var sql = "UPDATE member SET telephone = ? WHERE username = ?";
        db.query(sql, [telephone, username], callback);
    } // replace elements; no need to update everything.; getUsername([Values]); the sql code that says ? will be replace with with the updated data.,
    
    deleteMember(memberID, callback) {
        var sql = "DELETE from member WHERE id = ?";
        db.query(sql, [memberID], callback);
    } 
}

module.exports = MembersDB;
