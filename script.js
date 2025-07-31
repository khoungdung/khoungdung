const apps = [
  {
    name: "Delta Emulator",
    icon: "https://i.imgur.com/HjX1C5N.png",
    description: "Trình giả lập GBA, NDS tốt nhất cho iOS.",
    link: "https://drive.google.com/your-delta-link",
    category: "Game"
  },
  {
    name: "Instagram++",
    icon: "https://i.imgur.com/AqslZ8H.png",
    description: "Phiên bản Instagram nâng cao.",
    link: "https://drive.google.com/your-instagram-link",
    category: "Mạng xã hội"
  }
];

const appList = document.getElementById('appList');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const modal = document.getElementById('appDetailModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalIcon = document.getElementById('modalIcon');
const modalDownload = document.getElementById('modalDownload');

function renderApps() {
  const keyword = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  appList.innerHTML = '';

  const filtered = apps.filter(app =>
    app.name.toLowerCase().includes(keyword) &&
    (category === '' || app.category === category)
  );

  filtered.forEach(app => {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = `
      <img src="${app.icon}" alt="${app.name}">
      <h3>${app.name}</h3>
      <p>${app.description}</p>
    `;
    card.onclick = () => showDetail(app);
    appList.appendChild(card);
  });
}

function showDetail(app) {
  modalTitle.textContent = app.name;
  modalDesc.textContent = app.description;
  modalIcon.src = app.icon;
  modalDownload.href = app.link;
  modal.classList.remove('hidden');
}

document.querySelector('.close').onclick = () => modal.classList.add('hidden');
searchInput.oninput = renderApps;
categoryFilter.onchange = renderApps;

document.getElementById('toggleMode').onclick = () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
};

renderApps();
