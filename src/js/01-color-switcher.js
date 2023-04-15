const startBtnRef = document.querySelector('[data-start]');
const stopBtnRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

stopBtnRef.disabled = true;

const onStartClick = e => {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  const id = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);

  const onStopClick = () => {
    startBtnRef.disabled = false;
    stopBtnRef.disabled = true;
    clearInterval(id);
    stopBtnRef.removeEventListener('click', onStopClick);
  };

  stopBtnRef.addEventListener('click', onStopClick);
};

startBtnRef.addEventListener('click', onStartClick);
