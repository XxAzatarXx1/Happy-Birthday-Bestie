document.addEventListener('DOMContentLoaded', () => {
  const startScreen = document.getElementById('start-screen');
  const gameScreen = document.getElementById('game-screen');
  const endScreen = document.getElementById('end-screen');
  const startBtn = document.getElementById('start-btn');
  const actionButtons = document.querySelectorAll('.action-btn');

  // Start the game
  startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
  });

  // Handle game actions
  actionButtons.forEach(button => {
    button.addEventListener('click', () => {
      gameScreen.classList.remove('active');
      endScreen.classList.add('active');
    });
  });
});
