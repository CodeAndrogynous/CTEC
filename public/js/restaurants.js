// const searchBar = document.getElementById('searchBar')


// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value
//     const filteredRestaurants = restaurant_array.filter((restaurant)=> {
//         return (
//             restaurant.restaurant.includes(searchString)
//         );
//     });
// });

//This function is to call the restaurants api and get all the restaurants
//that is showing in Shaw Theatres for Showing Now and Coming Soon
function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', restaurant_url, true);
    //This function will be called when data returns from the web api    
    request.onload = function () {
        //get all the restaurants records into our restaurant array        
        restaurant_array = JSON.parse(request.responseText);
        //Fetch the reviews as well        
        fetchReview();
        console.log(restaurant_array) // output to console        
        //call the function so as to display all restaurants tiles for "Now Showing" displayRestaurant(category);    
        displayRestaurants(category);
        //fetchReview();
    };

    //This command starts the calling of the restaurants web api    
    request.send();
}
// this can be used to display the restaurrants 
function displayRestaurants(category) {
    var table = document.getElementById("restaurantsTable");
    var restaurantCount = 0;
    var message = "";



    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    for (var count = 0; count < totalRestaurants; count++) {
        // if (restaurant_array[count].availability == category) {
        var thumbnail = restaurant_array[count].logo;
        var restaurant = restaurant_array[count].restaurant; // chnage the restaurant to restaurant
        var cell = '<div class="card col-md-3" style="border-radius: 25px; padding:15px;">\
                        <img class="card-img-top" src="' + thumbnail + '" alt="Card image cap" style=" border-radius: 25px;">\
                        <div class="card-body">\
                        <img src="images/icons/food.png" width="30" height="30" style="float:left;cursor:pointer"\
                        data-toggle="modal"  data-target="#reviewModal" item="' + count + '" onclick="showRestaurantReview(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#restaurantModal"\
                        class="card-restaurant" item="' + count + '" onclick="showRestaurantDetails(this)" >' + restaurant + '</h5>\
                        </div>\
                        </div>'
        table.insertAdjacentHTML('beforeend', cell);
        restaurantCount++;

        // }
    }
    message = restaurantCount + " Restaurants " + category;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}
//This function is to display the "Now Showing" restaurants
function listNowShowingRestaurants() {

    displayRestaurants(category);
    document.getElementById("nowMenu").classList.add("active");
    document.getElementById("comingMenu").classList.remove("active");
    document.getElementById("aboutMenu").classList.remove("active");
}

//This function is to display the individual restaurants details
//whenever the user clicks on "See More"
function showRestaurantDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("restaurantTitle").textContent = restaurant_array[item].restaurant;
    document.getElementById("thumb").src = restaurant_array[item].thumb;
    document.getElementById("brief").textContent = restaurant_array[item].summary;
    document.getElementById("logo").src = restaurant_array[item].logo;
    document.getElementById("tag").textContent = restaurant_array[item].tag;
    document.getElementById("address").textContent = restaurant_array[item].address;
    document.getElementById("website").textContent = restaurant_array[item].website;
    document.getElementById("phone").textContent = restaurant_array[item].phoneNo;
}

