
function openModal(appName) {
  document.getElementById('appModal').style.display = 'flex';
  document.getElementById('modalTitle').textContent = appName;
  document.getElementById('modalVersion').textContent = "Phiên bản: 3.5.6";
  document.getElementById('modalSize').textContent = "Kích thước: 61.57 MB";
}
function closeModal() {
  document.getElementById('appModal').style.display = 'none';
}
