let currentPage = '';

function changeBackground(page) {
  const content = document.getElementById('content');
  const menuItems = document.querySelectorAll('.menu-item');

  
  menuItems.forEach(item => {
    item.classList.remove('active');
    item.style.backgroundColor = ''; 
    item.style.color = ''; 
  });

  
  const dynamicScripts = document.querySelectorAll('.dynamic-script');
  dynamicScripts.forEach(script => script.remove());

  
  if (currentPage === page) {
    content.style.backgroundColor = 'rgba(255, 255, 255, 1)'; 
    content.innerHTML = ''; 
    currentPage = ''; 
    return; 
  }

  
  if (currentPage !== page) {
    content.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    content.innerHTML = ''; 
  }

  
  if (page === 'games') {
    content.style.backgroundColor = 'rgba(15, 200, 157, 0.54)';
    const gamesItem = document.querySelector('.games');
    gamesItem.classList.add('active');
    gamesItem.style.backgroundColor = '#0FC89D'; 
    gamesItem.style.color = '#D5F6EF'; 
  } else if (page === 'calculator') {
    content.style.backgroundColor = 'rgba(15, 117, 200, 0.54)';
    const calculatorItem = document.querySelector('.calculator');
    calculatorItem.classList.add('active');
    calculatorItem.style.backgroundColor = '#0F75C8'; 
    calculatorItem.style.color = '#A0D4FF'; 

    
    fetch('calc.html')
      .then(response => response.text())
      .then(html => {
        content.innerHTML = html;

        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const scripts = tempDiv.querySelectorAll('script');
        scripts.forEach(script => {
          const newScript = document.createElement('script');
          if (script.src) {
            newScript.src = script.src; 
          } else {
            newScript.textContent = script.textContent; 
          }
          newScript.classList.add('dynamic-script'); 
          document.body.appendChild(newScript); 
        });
      })
      .catch(error => console.error('Error loading calc.html:', error));
  } else if (page === 'todo') {
    content.style.backgroundColor = 'rgba(228, 191, 100, 1)';
    const todoItem = document.querySelector('.todo');
    todoItem.classList.add('active');
  } else if (page === 'whiteboard') {
    content.style.backgroundColor = 'rgba(233, 126, 229, 1)';
    const whiteboardItem = document.querySelector('.whiteboard');
    whiteboardItem.classList.add('active');
  } else if (page === 'quiz') {
    content.style.backgroundColor = 'rgba(167, 232, 106, 1)';
    const quizItem = document.querySelector('.quiz');
    quizItem.classList.add('active');
  }

  
  currentPage = page; 
}

