import displayMessage from "./common/displayMessage.js";
import { getExistingFavorites } from "../utils/favFunctions.js";

export default function createProducts(json) {
  const container = document.querySelector(".product-container");
  const imgUrl = "http://localhost:1337";
  container.innerHTML = "";

  const favourites = getExistingFavorites();

  json.forEach(function (product) {
    let cssClass = "far";

    const doesObjectExist = favourites.find(function (fav) {
      console.log(fav);

      return parseInt(fav.id) === product.id;
    });

    console.log(doesObjectExist);
    if (doesObjectExist) {
      cssClass = "fa";
    }
    container.innerHTML += `      
                                  <div class="card">            
                                        <div class="card-image">
                                            <img class="cardImg" src="${imgUrl}${product.Img.url}"></img>
                                        </div>
                                        <div class="card-text">
                                             <h4>${product.Name}</h4>
                                             <p>Short info section will come!</p>
                                             <i class="${cssClass} fa-cannabis" data-id="${product.id}" data-name="${product.Name}"></i>
                                        </div>
                                        
                                     
                                        <div class="card-stats">
                                            <div class="stat"> 
                                                <div class="value">420</div>
                                                <div class="type">likes</div>
                                            </div>
                                              <div class="stat button"> 
                                                   <a class="value" href="detail.html?id=${product.id}">
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

  const favButton = document.querySelectorAll(".card i");

  favButton.forEach((icon) => {
    icon.addEventListener("click", handleClick);
  });

  function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavorites();

    const productExist = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (productExist === undefined) {
      const product = { id: id, Name: name };
      currentFavs.push(product);
      saveFavs(currentFavs);
      displayMessage("success", "Added strain to favourites!", ".message-container");
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  }

  function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }
}
