export const TEST = 'Testing 1..2..3..4!!!';

export const createH1 = (text, id = '', className = '') => {
  const h1 = document.createElement('h1');

  h1.id = id;
  h1.class = className;
  h1.innerHTML = text;

  return h1;
};

export const element = createH1(TEST, 'test1', 'intros');
