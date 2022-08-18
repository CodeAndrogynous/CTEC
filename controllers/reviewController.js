"use strict";
const ReviewsDB = require('../models/ReviewsDB');
const Review = require('../models/Review');


var reviewsDB = new ReviewsDB();

function getAllReview(request, respond) {
    reviewsDB.getAllReview(function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(result);
        }
    });
}
function addReview(request, respond) {
    var now = new Date();
    var review = new Review(null, request.body.restaurantId, request.body.restaurant, request.body.review,
        request.body.username, request.body.rating, now.toString());
    reviewsDB.addReview(review, function (error, result) {
        if (error) {
            respond.json(error);

        }
        else {
            respond.json(result);
        }
    })
};
function updateReview(request, respond) {
    var now = new Date();
    var review = new Review(parseInt(request.params.id), request.body.restaurantId, request.body.restaurant, request.body.review, request.body.username, request.body.rating, now, toString());
    reviewsDB.updateReview(review, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json(error);
        }
    });
}


function deleteReview(request, respond) {
    var reviewID = request.params.id;
    reviewsDB.deleteReview(reviewID, function (error, result) {
        if (error) {
            respond.json(error);
        } else {
            respond.json('{"status":"successful"}');
        }
    });
}

module.exports = { getAllReview, addReview, updateReview, deleteReview }; 