// Dark/Light Mode Toggle
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
};
document.querySelector('.toggle-btn')?.addEventListener('click', toggleTheme);

// Copy Link
function copyShare() {
  navigator.clipboard.writeText(window.location.href);
  alert("Đã copy liên kết chia sẻ!");
}

// Toggle Like
function toggleLike(btn) {
  if (btn.classList.contains("liked")) {
    btn.classList.remove("liked");
    btn.textContent = "❤️ Thêm vào mục yêu thích";
  } else {
    btn.classList.add("liked");
    btn.textContent = "💔 Gỡ khỏi mục yêu thích";
  }
}
