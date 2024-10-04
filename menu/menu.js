function toggleMenu() {
    const menuContent = document.getElementById('menu-content');
    menuContent.style.display = (menuContent.style.display === 'block') ? 'none' : 'block';
  }
  
  
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  