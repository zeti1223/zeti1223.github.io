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
    content.style.backgroundImage = '';
    content.innerHTML = '';
    currentPage = '';
    return;
  }

  if (currentPage !== page) {
    content.style.backgroundImage = '';
    content.innerHTML = '';
  }

  // Véletlenszerű háttérkép kiválasztása
  /*
  const bgImages = [
    'bg/paper1.jpg',
    'bg/paper2.jpg',
    'bg/paper3.jpg',
    'bg/paper4.jpg',
    'bg/paper5.jpg',
    'bg/paper6.jpg',
    'bg/paper7.jpg'
  ];
  const randomBg = bgImages[Math.floor(Math.random() * bgImages.length)];
  content.style.backgroundImage = `url('${randomBg}')`;
  content.style.backgroundSize = 'cover';
  content.style.backgroundPosition = 'center';
*/
  if (page === 'games') {
content.style.backgroundColor = 'rgba(15, 200, 157, 0.54)';
    const gamesItem = document.querySelector('.games');
    gamesItem.classList.add('active');
    gamesItem.style.backgroundColor = '#0FC89D';
    gamesItem.style.color = '#D5F6EF';

    // Dinamikus tartalom hozzáadása
    content.innerHTML = `
      <table style="width: 100%; height: 100%; border-collapse: collapse; text-align: center;">
        <tr>
          <td colspan="2" style="background-color: #0FC89D;">
            <a href="../Games/2048/index.html" style="display: block; width: 100%; height: 100%; text-decoration: none; color: white; font-family: 'Space Mono', monospace; font-size: 24px; line-height: 100px;">2048</a>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="background-color: #C81010;">
            <a href="../Games/FlappyBird/index.html" style="display: block; width: 100%; height: 100%; text-decoration: none; color: white; font-family: 'Space Mono', monospace; font-size: 24px; line-height: 100px;">Flappy Bird</a>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="background-color: #0FC89D;">
            <a href="../Games/PacMan/index.html" style="display: block; width: 100%; height: 100%; text-decoration: none; color: white; font-family: 'Space Mono', monospace; font-size: 24px; line-height: 100px;">Pac-Man</a>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="background-color: #C81010;">
            <a href="../Games/Snake/index.html" style="display: block; width: 100%; height: 100%; text-decoration: none; color: white; font-family: 'Space Mono', monospace; font-size: 24px; line-height: 100px;">Snake</a>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="background-color: #0FC89D;">
            <a href="../Games/Tetris/index.html" style="display: block; width: 100%; height: 100%; text-decoration: none; color: white; font-family: 'Space Mono', monospace; font-size: 24px; line-height: 100px;">Tetris</a>
          </td>
        </tr>
      </table>
    `;
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

