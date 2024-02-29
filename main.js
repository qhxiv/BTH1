const qlist = document.querySelector('.qlist');
const answer = [];


function createQuestion(type, order) {
  let q = document.createElement('div');
  q.innerHTML = '<form action=""></form>';
  q.className = 'quiz';
  if (type === 1) {
    q.classList.add('quiz--type1');
    q.querySelector('form').innerHTML = `
      <label for="q${order}">Question ${order}: sample text</label>
      <div>
        <input value="yes" id="q${order}" type="radio" name="yes_no">Yes</input>
        <input value="no" id="q${order}" type="radio" name="yes_no">No</input>
      </div>
    `;
  } else if (type === 2) {
    q.classList.add('quiz--type2');
    q.querySelector('form').innerHTML = `
      <label for="q${order}">Question ${order}: sample text</label>
      <div><input quiz__choice id="q${order}" type="radio" name="choose">A. sample text</input></div>
      <div><input quiz__choice id="q${order}" type="radio" name="choose">B. sample text</input></div>
      <div><input quiz__choice id="q${order}" type="radio" name="choose">C. sample text</input></div>
      <div><input quiz__choice id="q${order}" type="radio" name="choose">D. sample text</input></div>
    `;
  } else if (type === 3) {
    q.classList.add('quiz--type3');
    q.querySelector('form').innerHTML = `
      <label for="q${order}">Question ${order}: sample text</label>
      <div><input quiz__choice id="q${order}" type="checkbox" name="choose">sample text</input></div>
      <div><input quiz__choice id="q${order}" type="checkbox" name="choose">sample text</input></div>
      <div><input quiz__choice id="q${order}" type="checkbox" name="choose">sample text</input></div>
      <div><input quiz__choice id="q${order}" type="checkbox" name="choose">sample text</input></div>
    `;
  } else {
    q.classList.add('quiz--type4');
    q.querySelector('form').innerHTML = `
      <label for="q${order}">Question ${order}: sample text</label>
      <div><input type="text" name="text" id="q${order}" placeholder="Enter your answer"></div>
    `;
  }
  console.log(q);
  return q;
}

function renderQuestion() {
  for (let i = 1; i <= 10; ++i) {
    qlist.appendChild(createQuestion(1, i));
  }
  for (let i = 11; i <= 20; ++i) {
    qlist.appendChild(createQuestion(2, i));
  }
  for (let i = 21; i <= 30; ++i) {
    qlist.appendChild(createQuestion(3, i));
  }
  for (let i = 31; i <= 40; ++i) {
    qlist.appendChild(createQuestion(4, i));
  }
}
function start() {
  renderQuestion();
}

start();