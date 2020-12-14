import { getExistingFavorites } from "./utils/favFunctions.js";

import displayMessage from "./components/common/displayMessage.js";
const imgUrl = "https://strainfinderr.herokuapp.com/";

const favorites = getExistingFavorites();

const container = document.querySelector(".product-container");

if (favorites.length === 0) {
  displayMessage("warning", "No favourites added yet!", ".message-container");
}
favorites.forEach((favorites) => {
  container.innerHTML += `
                                   <div class="card">            
                                        <div class="card-image">
                                              <img class="cardImg" src="${imgUrl}${favorites.Imgurl}"></img>
                                        </div>
                                        <div class="card-text">
                                             <h4>${favorites.Name}</h4>
                                             <p>Short info section will come!</p>
                                             <i class="fa fa-cannabis"></i>
                                        </div>
                                        
                                     
                                        <div class="card-stats">
                                            <div class="stat"> 
                                                <div class="value">420</div>
                                                <div class="type">likes</div>
                                            </div>
                                              <div class="stat button"> 
                                                   <a class="value" href="detail.html?id=${favorites.id}">
                                           Read more
                                        </a>
                                            </div>
                                              <div class="stat"> 
                                                <div class="value">32</div>
                                                <div class="type">reviews</div>
                                            </div>
                                        </div>
                                  </div>`;
});

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", clearFavorites);

function clearFavorites() {
  localStorage.clear();
  location.href = "/fav.html";
}
