"use strict";
class Review {
    constructor(id, restaurantId, restaurant, review, username, rating, datePosted) {
        this.id = id;
        this.restaurantId = restaurantId;
        this.restaurant = restaurant;
        this.review = review;
        this.username = username;
        this.rating = rating;
        this.datePosted = datePosted;
    }
    getId() {
        return this.id;
    }
    getRestaurantId() {
        return this.restaurantId;
    }
    getRestaurant() {
        return this.restaurant;
    }
    getReview() {
        return this.review;
    }
    getUsername() {
        return this.username;
    }
    getRating() {
        return this.rating;
    }
    getDatePosted() {
        return this.datePosted;
    }
    setRestaurantId(restaurantId) {
        this.restaurantId = restaurantId;
    }
    setRestaurant(restaurant) {
        this.restaurant = restaurant;
    }
    setReview(review) {
        this.review = review;
    }
    setUsername(username) {
        this.username = username;
    }
    setRating(rating) {
        this.rating = rating;
    }
    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }

}
//add the set and get methods here}
module.exports = Review;
