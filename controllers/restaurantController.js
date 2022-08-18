"use strict";
const RestaurantDB = require('../models/RestaurantDB');
const sgMail = require('@sendgrid/mail')

var restaurantDB = new RestaurantDB();

function getAllRestaurants(request, respond) {
    restaurantDB.getAllRestaurants(function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}


function sendEmail(request, respond) {
    var email =request.body.email;
    var content = request.body.content;

    sgMail.setApiKey("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")
    const msg = {
        to: email, // Change to your recipient
        from: 'fahima1356@gmail.com', // Change to your verified sender
        subject: 'restaurant review',
        text: content,
        html: '<strong>'+ content +'</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            respond.json({ result: "success" })
        })
        .catch((error) => {
            console.error(error)
            respond.json({ result: "fail" })

        })

}
// function searchRestaurants(request, respond) {
//     var searchTerm = request.body.search;
//     restaurantDB.searchRestaurants(searchTerm, function (error, result) {
//         if (error) {
//             respond.json(error);
//         }
//         else {
//             respond.json(result);
//         }
//     });
// } 


module.exports = { getAllRestaurants, sendEmail };