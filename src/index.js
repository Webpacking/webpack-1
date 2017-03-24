import './stylesheets/styles.css';
import { TEST, element, createH1 } from './app/module1.js';
import data from './data/data.json';

const app = document.getElementById('app');

app.append(element);

data.colorsArray.forEach((color, i) => {
  const { colorName } = color;
  app.append(createH1(colorName, `${colorName}i`, 'intros', colorName));
});
