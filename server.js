var express = require("express"); //using the express web framework
const port = 3000;
var restaurantController = require('./controllers/restaurantController'); // set restaurantController to the restaurantController class
var reviewController = require('./controllers/reviewController');
var memberController = require('./controllers/memberController');

var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited reviews from user

//route for review
app.route('/restaurants').get(restaurantController.getAllRestaurants); // activate the getallrestaurants method if the route is GET(method) /restaurants
app.route('/reviews').get(reviewController.getAllReview)//activate the getALLReviews methods if the route is GET (method) /reviews
app.route('/reviews').post(reviewController.addReview); //acivate the addReviews methods if the route is POST(method) /reviews
app.route('/reviews/:id').put(reviewController.updateReview)
app.route('/reviews/:id').delete(reviewController.deleteReview); // active the deleteReview method if the route is DELETE (method) /review

//route for members
app.route('/members').get(memberController.getAllMembers)//activate the getALLReviews methods if the route is GET (method) /reviews
app.route('/members').post(memberController.addMember); //acivate the addReviews methods if the route is POST(method) /reviews
app.route('/members').put(memberController.updateMember)
app.route('/members/:id').delete(memberController.deleteMember); // active the deleteReview method if the route is DELETE (method) /review
app.route('/login').post(memberController.loginMember); // active the deleteReview method if the route is DELETE (method) /review

app.route('/email').post(restaurantController.sendEmail); // active the deleteReview method if the route is DELETE (method) /review
//app.route('/search').get(restaurantController.searchRestaurants); // active the deleteReview method if the route is DELETE (method) /review


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 
