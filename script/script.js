const clock = document.getElementById('clock');
const date = document.getElementById('date');
const periodDisplay = document.getElementById('period');

const updateClock = () => {
  const now = new Date();
  const days = [
    'یک‌شنبه',
    'دو‌شنبه',
    'سه‌شنبه',
    'چهار‌شنبه',
    'پنج‌شنبه',
    'جمعه',
    'شنبه',
  ];
  const months = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const day = days[now.getDay()];
  const month = months[now.getMonth() - 3];
  const year = now.toLocaleDateString('fa-IR', { year: 'numeric' });
  const time = `${hours}:${minutes}`;
  const period = hours < 12 ? 'صبح' : hours < 18 ? 'بعدازظهر' : 'شب';

  clock.textContent = time;
  date.textContent = `${now.toLocaleDateString('fa-IR', {
    day: 'numeric',
  })} ${month},${day} ${year}`;
  periodDisplay.textContent = period;
};

setInterval(updateClock, 1000);
