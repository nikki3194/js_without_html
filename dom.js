const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Yes it is finally working';

container.appendChild(content);

const text_color = document.createElement('p');
text_color.classList.add('text_color');
text_color.textContent ="I am Red!"
text_color.style.color ="Red";
container.appendChild(text_color);
//document.getElementById("p").style.color = "red";



const text_new_color = document.createElement('h3');
text_new_color.classList.add('text_new_color');
text_new_color.textContent = "I am Blue";
text_new_color.style.color = "Blue";
container.appendChild(text_new_color);


const new_div = document.createElement('div');
new_div.classList.add('new_div');
new_div.textContent = "This new div";
new_div.style.border = "thick solid black";
container.appendChild(new_div);
//document.getElementById("my_div").style.border = "thick solid black"; 




const new_h1 = document.createElement('h1');
new_h1.classList.add('new_h1');
new_h1.textContent = "I am h1 and in div";
new_div.appendChild(new_h1);


const new_p = document.createElement('p');
new_p.classList.add('new_p');
new_p.textContent = "ME TOO!!!";
new_div.appendChild(new_p);