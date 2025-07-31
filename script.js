
function showAppDetail(name, description, version, downloads) {
  document.getElementById('appName').innerText = name;
  document.getElementById('appDescription').innerText = description;
  document.getElementById('appVersion').innerText = version;
  document.getElementById('appDownloads').innerText = downloads;
  document.getElementById('appDetailModal').style.display = 'block';
}
function closeModal() {
  document.getElementById('appDetailModal').style.display = 'none';
}
document.getElementById('themeToggle').onclick = () => {
  const html = document.documentElement;
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
}
