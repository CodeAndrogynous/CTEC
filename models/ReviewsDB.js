"use strict";
var db = require('../db-connections');
class ReviewsDB {
    getAllReview(callback) {
        var sql = "SELECT * from restaurant_review.review";
        db.query(sql, callback);
    }
    addReview(review, callback){
        var sql = "INSERT INTO review (restaurantId, restaurant, review, username, rating, datePosted) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(sql, [review.getRestaurantId(), review.getRestaurant(), review.getReview(), review.getUsername(), review.getRating(), review.getDatePosted()], callback);

    }
    updateReview(review, callback){
        var sql = "UPDATE review SET review = ?, username = ?, rating = ?, datePosted = ? WHERE _id = ?";
        db.query(sql, [review.getReview(), review.getUsername(), review.getRating(), review.getDatePosted(), review.getId()], callback);
    } // replace elements; no need to update everything.; getUsername([Values]); the sql code that says ? will be replace with with the updated data.,
    
    deleteReview(reviewID, callback) {
        var sql = "DELETE from review WHERE _id = ?";
        db.query(sql, [reviewID], callback);
    } 
}

module.exports = ReviewsDB;
