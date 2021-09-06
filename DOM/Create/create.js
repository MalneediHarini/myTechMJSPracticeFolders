const ulElement = document.createElement('ul');
ulElement.textContent = "Flowers Names";

const li1Ele = document.createElement('li');
li1Ele.textContent = "Jasmine";

const li2Ele = document.createElement('li');
li2Ele.textContent = "Rose";

const li3Ele = document.createElement('li');
li3Ele.textContent = "Sun flower";

ulElement.appendChild(li1Ele);
ulElement.appendChild(li2Ele);
ulElement.appendChild(li3Ele);



console.log(ulElement);
//document.write(ulElement);


//adding to body
document.body.appendChild(ulElement);



// ex 2
// <button> Login </button>
const btnValue = document.createElement('button');
btnValue.textContent = 'Login';

document.body.appendChild(btnValue);

