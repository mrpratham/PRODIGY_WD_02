let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById('startStop').textContent = 'Stop';
    isRunning = true;
  }
}

function reset() {
  clearInterval(timer);
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('startStop').textContent = 'Start';
  isRunning = false;
  lapCounter = 1;
  document.getElementById('lapTimes').innerHTML = '';
}

function lap() {
  if (isRunning) {
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
    document.getElementById('lapTimes').appendChild(lapItem);
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  let centiseconds = Number(display.textContent.split(':')[2]);
  let seconds = Number(display.textContent.split(':')[1]);
  let minutes = Number(display.textContent.split(':')[0]);

  centiseconds++;

  if (centiseconds === 100) {
    centiseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  display.textContent = 
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${centiseconds.toString().padStart(2, '0')}`;
}
