const cdImage = document.getElementById('cdImage');
const audioPlayer = document.getElementById('audioPlayer');
let isSpinning = false;

cdImage.addEventListener('click', () => {
  if (!isSpinning) {
    cdImage.classList.add('spin-animation');
    audioPlayer.play();
    isSpinning = true;
  } else {
    if (cdImage.style.animationPlayState === 'paused') {
      cdImage.style.animationPlayState = 'running';
      audioPlayer.play();
    } else {
      cdImage.style.animationPlayState = 'paused';
      audioPlayer.pause();
    }
  }
});
