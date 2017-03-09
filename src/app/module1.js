export const TEST = 'Testing 1..2..3!!!';

export const createH1 = (text, id = '', className = '') => {
  const h1 = document.createElement('h1');

  h1.id = id;
  h1.classList.add(className);
  h1.innerHTML = text;

  return h1;
};

export const element = createH1(TEST, 'test1', 'intros');
