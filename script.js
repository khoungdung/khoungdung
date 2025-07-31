// Sample app data
const apps = [
    {
        id: 1,
        name: "Game X",
        category: "game",
        icon: "assets/icons/gamex.png",
        description: "Game hành động hấp dẫn với đồ họa đỉnh cao.",
        downloadLink: "#"
    },
    {
        id: 2,
        name: "Tool Y",
        category: "tool ..

System: Cảm ơn bạn đã cung cấp yêu cầu chi tiết! Dưới đây là phần tiếp tục và hoàn thiện code cho website “Kho App” theo yêu cầu của bạn, bao gồm đầy đủ dữ liệu mẫu, JavaScript để xử lý các chức năng như tìm kiếm, lọc, và hiển thị popup, cùng với hướng dẫn triển khai trên GitHub Pages.

---

### Hoàn thiện `js/main.js`
Tiếp tục từ đoạn code bạn đã thấy, dưới đây là file `main.js` hoàn chỉnh với dữ liệu mẫu và các chức năng yêu cầu:

```javascript
// Sample app data
const apps = [
    {
        id: 1,
        name: "Game X",
        category: "game",
        icon: "assets/icons/gamex.png",
        description: "Game hành động hấp dẫn với đồ họa đỉnh cao, mang đến trải nghiệm giải trí tuyệt vời.",
        downloadLink: "#"
    },
    {
        id: 2,
        name: "Tool Y",
        category: "tool",
        icon: "assets/icons/tooly.png",
        description: "Ứng dụng công cụ mạnh mẽ giúp tối ưu hóa công việc hàng ngày của bạn.",
        downloadLink: "#"
    },
    {
        id: 3,
        name: "Social Z",
        category: "social",
        icon: "assets/icons/socialz.png",
        description: "Kết nối bạn bè và chia sẻ khoảnh khắc với giao diện hiện đại.",
        downloadLink: "#"
    }
];

// DOM elements
const appList = document.getElementById('app-list');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const modal = document.getElementById('app-modal');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalDownload = document.getElementById('modal-download');
const closeBtn = document.querySelector('.close-btn');
const themeToggle = document.getElementById('theme-toggle');

// Display apps
function displayApps(appsToShow) {
    appList.innerHTML = '';
    appsToShow.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');
        appCard.innerHTML = `
            <img src="${app.icon}" alt="${app.name}">
            <h3>${app.name}</h3>
        `;
        appCard.addEventListener('click', () => showModal(app));
        appList.appendChild(appCard);
    });
}

// Show modal with app details
function showModal(app) {
    modalIcon.src = app.icon;
    modalTitle.textContent = app.name;
    modalDescription.textContent = app.description;
    modalDownload.href = app.downloadLink;
    modal.style.display = 'flex';
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Search and filter
function filterApps() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;

    const filteredApps = apps.filter(app => {
        const matchesSearch = app.name.toLowerCase().includes(searchTerm);
        const matchesCategory = category === 'all' || app.category === category;
        return matchesSearch && matchesCategory;
    });

    displayApps(filteredApps);
}

// Event listeners for search and filter
searchInput.addEventListener('input', filterApps);
categoryFilter.addEventListener('change', filterApps);

// Theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Initial display
displayApps(apps);
