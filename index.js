function UpdateSkill(id, value) {
  const ValueElement = document.querySelector(id);
  ValueElement.querySelector('.skill__value').textContent = value + ' / 100';
  console.log(ValueElement);
  ValueElement.querySelector('.skill__progress').style.width = value + '%';
}

const valueHtml = Number(prompt('Ohodnotte svoje znalosti HTML od 0 do 100'));
UpdateSkill('#skill1', valueHtml);
const valueCss = Number(prompt('Ohodnotte svoje znalosti CSS od 0 do 100'));
UpdateSkill('#skill2', valueCss);
const valueJavaScript = Number(
  prompt('Ohodnotte svoje znalosti HTML od 0 do 100'),
);
UpdateSkill('#skill3', valueJavaScript);
