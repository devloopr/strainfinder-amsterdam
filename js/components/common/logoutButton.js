import { clearStorage } from "../../utils/storage.js";

export default function logoutButton() {
  const button = document.querySelector("#logout");

  if (button) {
    button.onclick = function () {
      const doLogout = confirm("Sure?");

      if (doLogout) {
        clearStorage();
        location.href = "/";
      }
    };
  }
}
