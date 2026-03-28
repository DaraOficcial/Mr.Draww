// tampilkan popup saat pertama buka
window.onload = function() {
  document.getElementById("popup").classList.add("show");
}

function tutupPopup() {
  let popup = document.getElementById("popup");
  popup.classList.remove("show");
  popup.classList.add("hide");

  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
}