const form = document.querySelector("form");
const userName = document.getElementById("name");
const resetBtn = document.getElementById("reset");

const SAVED_NAMES = "saved-names";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = userName.value;
  localStorage.setItem(SAVED_NAMES, name);
  console.log("Saved");
});

/*const savedContent = localStorage.getItem(SAVED_NAMES);
  console.log(savedContent);
  if (savedContent) {
    textarea.value = savedContent;
  }*/

resetBtn.addEventListener("click", () => {
  const Accept = confirm("Vuoi davvero resettare?");

  if (Accept) {
    console.log("accettato");
    localStorage.removeItem(SAVED_NAMES);
    form.reset();
  } else {
    console.log("rifiutato");
    alert("Non abbiamo cancellato i dati");
  }
});

document.addEventListener("DOMContentLoaded", timer);
function timer() {
  let sec = sessionStorage.getItem("timer");
  setInterval(function () {
    sec++;
    document.getElementById("time").innerText = sec;
    sessionStorage.setItem("timer", sec);
  }, 1000);
}
