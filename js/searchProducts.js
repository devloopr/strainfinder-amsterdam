import createProducts from "./components/createProducts.js";

export default function searchProducts(json) {
  const search = document.querySelector("input.search");

  search.addEventListener("keyup", doFiltering);

  function doFiltering(event) {
    const filterValue = event.target.value.trim().toLowerCase();

    const filteredData = json.filter(function (product) {
      if (product.Name.toLowerCase().indexOf(filterValue) > -1) {
        return true;
      }
    });

    createProducts(filteredData);
  }
}
