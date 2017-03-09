import { TEST, element, createH1 } from './app/module1.js';
import data from './data/data.json';

const test2 = 'testing!';
console.warn(data);

const app = document.getElementById('app');

data.colorsArray.forEach((color, i) => {
  const { colorName } = color;
  app.append(createH1(colorName, `${colorName}i`, 'intros'));  
});
