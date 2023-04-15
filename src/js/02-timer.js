import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('[data-start]');
const dayRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
let chooseDate = null;

btnRef.disabled = true;

btnRef.addEventListener('click', onStartClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] - Date.now() > 0) {
      btnRef.disabled = false;
    } else {
      Notiflix.Notify.failure('Please choose a date in the future'); // First Notify.failure
      //   Notiflix.Report.failure(
      //     'Wrong Date',
      //     'Please choose a date in the future',        // Instead of first Notify.failure
      //     'Close'
      //   );
      chooseDate = null;
    }
  },
};

flatpickr(inputRef, options);

function onStartClick() {
  btnRef.disabled = true;
  chooseDate = new Date(inputRef.value);

  const id = setInterval(() => {
    if (chooseDate - Date.now() > 0) {
      convertMs(chooseDate - Date.now());
    } else {
      clearInterval(id);
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  dayRef.textContent = addLeadingZero(days);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  hoursRef.textContent = addLeadingZero(hours);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  minutesRef.textContent = addLeadingZero(minutes);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  secondsRef.textContent = addLeadingZero(seconds);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
