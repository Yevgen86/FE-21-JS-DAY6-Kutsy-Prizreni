/* 
Challenge

In this exercise, we are going to create a website for the car shop. You are free to expand on design and the structure, but you should follow some basic requirements of this small project:

Create a JSON file with data about cars, e.g. car name, car production year, car image (image link URL), car price, etc.
Display this data from this JSON file in the index.html page using JavaScript loop and according to the provided design


When the user clicks on the car name you should display the div with the big photo and all details about the car, like on the image bellow (you should also provide the feature to hide the big div):
 */

var carsParsed = JSON.parse(cars);
var output = document.getElementById("demo");
var i = 0;
for (let car of carsParsed) {
  console.log(car);
  output.innerHTML += `
    <a href="#" data-bs-toggle="modal" data-bs-target="#static${i}">
        <div class="card" style="width: 18rem;">
            <img src="${car.img}" class="card-img-top" alt="${car.name}">
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
            </div>
        </div>
    </a>

<div class="modal fade" id="static${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="static${car.power}Label" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="static${car.power}Label">${car.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img src="${car.img}" class="card-img-top" alt="${car.name}">

        <ul class="list-group list-group-flush">
        <li class="list-group-item"><small>Year of production:</small><b>${car.prodYear}</b></li>
        <li class="list-group-item"><small>Power:</small><b>${car.power}</b></li>
        <li class="list-group-item"><small>KM:</small><b>${car.km}</b></li>
        <li class="list-group-item"><small>Price:</small><b>${car.price}</b></li>
        </ul>
      </div>
    </div>
  </div>
</div>
    `;
    i++;
}

/* var cards = document.getElementsByClassName("card");

function openCarInfo() {
    for (let i = 0; i < cards.length; i++) {

        cards[i].addEventListener("click", function(){
            cards[i].style.opacity = "0";
        }, false)
    }
}
openCarInfo(); */
