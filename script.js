let message = document.getElementById("message");

let messageOnline = () => {
  message.textContent = "You're Connected :)";
  message.style.cssText = "background-color: #b9dacf; color: #00fc";
};
let messageOffline = () => {
  message.textContent = "Sorry You're Offline :(";
  message.style.cssText = "background-color: #ffdde0; color: #d32f2f";
};

if (window.navigator.onLine) {
  messageOnline();
} else {
  messageOffline();
}

window.addEventListener("online", messageOnline);
window.addEventListener("offline", messageOffline);