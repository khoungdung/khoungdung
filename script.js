
function openPopup(title, desc, img) {
  document.getElementById("popupTitle").textContent = title;
  document.getElementById("popupDesc").textContent = desc;
  document.getElementById("popupImg").src = img;
  document.getElementById("popupDownload").href = "#";
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
