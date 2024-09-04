import './style.css';

const containerDiv = document.getElementById('container') as HTMLDivElement;
const clearButton = document.getElementById('clear') as HTMLButtonElement;
const makeCreateElementInlineButton = document.getElementById('makeCreateElementInline') as HTMLButtonElement;
const makeCreateElementButton = document.getElementById('makeCreateElement') as HTMLButtonElement;
const makeInnerHTMLButton = document.getElementById('makeInnerHTML') as HTMLButtonElement;
const makeCreateDocumentFragmentButton = document.getElementById('makeCreateDocumentFragment') as HTMLButtonElement;
const amountInput = document.getElementById('amount') as HTMLInputElement;
const warningSpan = document.getElementById('warning') as HTMLSpanElement;

const clear = () => {
  containerDiv.innerHTML = '';
  clearButton.disabled = true;
};

const makeCreateElementInline = () => {
  clear();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');

    div.style.backgroundColor = 'darkorange';
    div.style.opacity = Math.random().toString();
    div.style.margin = '1px';
    div.style.width = '15px';
    div.style.height = '15px';

    containerDiv.appendChild(div);
  }

  clearButton.disabled = false;
};

const makeCreateElement = () => {
  clear();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.className = 'item';
    div.style.opacity = Math.random().toString();
    containerDiv.appendChild(div);
  }

  clearButton.disabled = false;
};

const makeInnerHTML = () => {
  clear();

  let s = '';

  for (let i = 0; i < amount; i++) {
    const d = `<div class="item" style="opacity: ${Math.random()}"></div>`;
    s += d;
  }

  containerDiv.innerHTML = s;

  clearButton.disabled = false;
};

const makeCreateDocumentFragment = () => {
  clear();

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.className = 'item';
    div.style.opacity = Math.random().toString();
    fragment.appendChild(div);
  }

  containerDiv.appendChild(fragment);

  clearButton.disabled = false;
};

makeCreateElementInlineButton.addEventListener('click', makeCreateElementInline);
makeCreateElementButton.addEventListener('click', makeCreateElement);
makeInnerHTMLButton.addEventListener('click', makeInnerHTML);
makeCreateDocumentFragmentButton.addEventListener('click', makeCreateDocumentFragment);
clearButton.addEventListener('click', clear);

let isValid = true;
let isVeryLarge = false;

const validate = () => {
  isValid = Number.isInteger(amount) && amount > 0 && amount < 10_000_000;
  isVeryLarge = amount >= 20_000;

  makeCreateElementInlineButton.disabled = !isValid;
  makeCreateElementButton.disabled = !isValid;
  makeInnerHTMLButton.disabled = !isValid;
  makeCreateDocumentFragmentButton.disabled = !isValid;
  warningSpan.style.display = isVeryLarge ? 'inline' : 'none';
};

let amount = 500;
amountInput.value = amount.toString();

amountInput.addEventListener('change', event => {
  const target = event.target as HTMLInputElement;
  amount = Number(target.value);
  validate();
});
