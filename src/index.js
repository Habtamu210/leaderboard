import { result } from './module/result.js';
import './style.css';

function addScore(score) {
  const list = document.querySelector('.score-result');
  const li = document.createElement('li');
  li.innerHTML = `${score.name}: ${score.score}`;
  list.appendChild(li);
}

result.forEach((i) => {
  addScore(i);
});