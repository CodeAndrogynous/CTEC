"use strict";

var db = require('../db-connections');
class RestaurantDB {
    getAllRestaurants(callback) {
        var sql = "SELECT * from restaurant_review.restaurant;";
        db.query(sql, callback);
    }
    // searchRestaurants(restaurant,callback) {
    //     var sql = "SELECT * FROM restaurant_review.restaurant  WHERE restaurant LIKE 'p%' OR 'i%'  OR 'b%' OR 'u%' OR 'c%' OR 'm%' OR 's%'";
    //     db.query(sql,[restaurant], callback);
    // }
}

    
module.exports = RestaurantDB ;