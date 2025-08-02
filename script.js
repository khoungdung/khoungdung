
// Dark/Light Mode Toggle
const toggleTheme = () => {
  document.body.classList.toggle('light-mode');
};
document.querySelector('.toggle-btn')?.addEventListener('click', toggleTheme);
