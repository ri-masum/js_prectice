const skillList=document.getElementById('skills');

const li=document.createElement('li');
li.innerText='no skill';

skillList.appendChild(li);

const mainContainer=document.getElementById('main-content');

const section=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';
section.appendChild(h1);


const ul=document.createElement('ul');

const li1=document.createElement('li');
li1.innerText='biriyani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='biriyani';
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerhtml directly

const sectionDress=document.createElement('section');
sectionDress.innerHTML=`
<h1>Dress</h1>
<ul>
<li>Genji</li>
<li>lungi</li>
<li>panjabi</li>
<li>serwani</li>

</ul>
`
mainContainer.appendChild(sectionDress);