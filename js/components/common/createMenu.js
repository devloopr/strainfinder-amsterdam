import { getUsername } from "../../utils/storage.js";
import logoutButton from "./logoutButton.js";

export default function createMenu() {
  const { pathname } = document.location;

  const container = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<a href="login.html" class="${pathname === "/login.html" ? "active" : ""}"><i class="fal fa-user-secret"></i> Login</a>`;

  if (username) {
    authLink = `
                <a href="add.html" class="${pathname === "/add.html" ? "active" : ""}"><i class="fal fa-seedling"></i> Add more strains</a>
                <button id="logout">Logout </button>`;
  }

  container.innerHTML = `<div class="menu">
                                <a href="/" class="${pathname === "/" || pathname === "/index.html" ? "active" : ""}"><i class="fal fa-home-heart"></i> Home</a>
                                <a href="fav.html"><i class="fal fa-cannabis"></i> Favourites</a>
                                ${authLink}
                        </div>`;

  logoutButton();
}
