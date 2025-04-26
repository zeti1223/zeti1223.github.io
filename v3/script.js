let currentPage = '';

function changeBackground(page) {
  const content = document.getElementById('content');
  const menuItems = document.querySelectorAll('.menu-item');
  
  menuItems.forEach(item => {
    item.style.backgroundColor = '';
    item.style.color = ''; 
  });

  if (currentPage === page) {
    content.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    currentPage = '';
  } else {
    if (page === 'games') {
      content.style.backgroundColor = 'rgba(15, 200, 157, 0.54)';
      const gamesItem = document.querySelector('.games');
      gamesItem.style.backgroundColor = '#0FC89D'; 
      gamesItem.style.color = '#D5F6EF'; 
    } else if (page === 'calculator') {
      content.style.backgroundColor = 'rgba(15, 117, 200, 0.54)';
      const gamesItem = document.querySelector('.calculator');
      gamesItem.style.backgroundColor = '#0F75C8'; 
      gamesItem.style.color = '#A0D4FF'; 
    } else if (page === 'todo') {
      content.style.backgroundColor = 'rgba(228, 191, 100, 1)';
      const gamesItem = document.querySelector('.todo');
      gamesItem.style.backgroundColor = '#'; 
      gamesItem.style.color = '#'; 
    } else if (page === 'whiteboard') {
      content.style.backgroundColor = 'rgba(233, 126, 229, 1)';
      const gamesItem = document.querySelector('.whiteboard');
      gamesItem.style.backgroundColor = '#'; 
      gamesItem.style.color = '#'; 
    } else if (page === 'quiz') {
      content.style.backgroundColor = 'rgba(167, 232, 106, 1)';
      const gamesItem = document.querySelector('.quiz');
      gamesItem.style.backgroundColor = '#'; 
      gamesItem.style.color = '#'; 
    }
    currentPage = page;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    const warning = document.createElement('div');
    warning.textContent = 'Használj PC-t!';
    warning.style.position = 'fixed';
    warning.style.top = '0';
    warning.style.left = '0';
    warning.style.width = '100%';
    warning.style.backgroundColor = '#ff0000;
    warning.style.color = '#000';
    warning.style.textAlign = 'center';
    warning.style.padding = '10px';
    warning.style.fontSize = '300px';
    warning.style.zIndex = '1000';
    document.body.appendChild(warning);
  }
});
