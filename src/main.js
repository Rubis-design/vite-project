import { sum } from './modules/sum.js';

const sumBtn = document.getElementById('sumBtn');

sumBtn.addEventListener('click', () => {
  const result = sum(10, 5);
  console.log('Результат сложения: ', result);
});
