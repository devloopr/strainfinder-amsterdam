import createProducts from "./components/createProducts.js";
import searchProducts from "./searchProducts.js";
import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/common/displayMessage.js";
import createMenu from "./components/common/createMenu.js";

const productsUrl = baseUrl + "products";

createMenu();

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();
    console.log(json);
    createProducts(json);
    searchProducts(json);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();
