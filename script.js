
const apps = [
  { name: "Zalo++", category: "Mạng xã hội", icon: "assets/icons/zalo.png", description: "Zalo bản mod", link: "https://drive.google.com/yourlink1" },
  { name: "Lịch Việt Pro", category: "Tiện ích", icon: "assets/icons/calendar.png", description: "Lịch âm dương", link: "https://drive.google.com/yourlink2" },
  { name: "Flappy Bird", category: "Game", icon: "assets/icons/flappy.png", description: "Game huyền thoại", link: "https://drive.google.com/yourlink3" }
];

function renderApps(list) {
  const container = document.getElementById("appList");
  container.innerHTML = "";
  list.forEach(app => {
    container.innerHTML += `
      <div class="app-card">
        <img src="${app.icon}" alt="${app.name}">
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <a href="${app.link}" target="_blank">Tải về</a>
      </div>
    `;
  });
}

function filterApps(category) {
  const filtered = category === "Tất cả" ? apps : apps.filter(a => a.category === category);
  renderApps(filtered);
}

document.getElementById("searchInput").addEventListener("input", e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = apps.filter(a => a.name.toLowerCase().includes(keyword));
  renderApps(filtered);
});

window.onload = () => renderApps(apps);
