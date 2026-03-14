let ContentBoxTrain = document.getElementById("TrainContent");
let ContentBoxBus = document.getElementById("BusContent");
let ContentBoxHotel = document.getElementById("HotelContent");
let ContentBoxMovie = document.getElementById("MovieContent");
let ContentBoxFood = document.getElementById("FoodContent");
let TrainSlot = document.getElementById("Train");
let BusSlot = document.getElementById("Bus");
let HotelSlot = document.getElementById("Hotel");
let MovieSlot = document.getElementById("Movie");
let FoodSlot = document.getElementById("Food");
TrainSlot.addEventListener("click", function(){
    ContentBoxTrain.style.display = "block";
    ContentBoxBus.style.display = "none";
    ContentBoxHotel.style.display = "none";
    ContentBoxMovie.style.display = "none";
    ContentBoxFood.style.display = "none";
});
BusSlot.addEventListener("click", function(){
    ContentBoxTrain.style.display = "none";
    ContentBoxBus.style.display = "block";
    ContentBoxHotel.style.display = "none";
    ContentBoxMovie.style.display = "none";
    ContentBoxFood.style.display = "none";
});
HotelSlot.addEventListener("click", function(){ 
    ContentBoxTrain.style.display = "none";
    ContentBoxBus.style.display = "none";
    ContentBoxHotel.style.display = "block";
    ContentBoxMovie.style.display = "none";
    ContentBoxFood.style.display = "none";
}
);
MovieSlot.addEventListener("click", function(){
    ContentBoxTrain.style.display = "none";
    ContentBoxBus.style.display = "none";
    ContentBoxHotel.style.display = "none";
    ContentBoxMovie.style.display = "block";
    ContentBoxFood.style.display = "none";
});
FoodSlot.addEventListener("click", function(){
    ContentBoxTrain.style.display = "none";
    ContentBoxBus.style.display = "none";
    ContentBoxHotel.style.display = "none";
    ContentBoxMovie.style.display = "none";
    ContentBoxFood.style.display = "block";
});

