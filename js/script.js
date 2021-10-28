const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderRight = document.querySelector('.slider-right');
const sliderLeft = document.querySelector('.slider-left');

const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

// console.log(items);
// console.log(title);
// console.log(text);


const itemsList = document.getElementsByClassName('item');

const images = document.getElementsByClassName('image');

let index = 0;



// inizio ciclo
for(let i=0; i < items.length; i++){

  //image slider left
  const image = document.createElement('div');
  image.className = 'image';
  if(i === 0) image.classList.add('active');
  
  image.innerHTML = 
  `
    <img src="${items[i]}" alt="">
   
  `;

  const textBox = document.createElement('div');
  textBox.className = 'text-box';

  textBox.innerHTML = 
  `
    <h4>${title[i]}</h4>
    <p>${text[i]}</p>
  `;

  // console.log(textBox);

  image.append(textBox);
  sliderLeft.append(image);  


  //items nello slider-right
  const item = document.createElement('div');
  item.className = 'item';
  if(i === 0) item.classList.add('active');
    
  item.innerHTML = `<img src="${items[i]}" alt="">`;
  sliderRight.append(item);    


};



// click su freccia in giù
next.addEventListener('click', function(){
  images[index].classList.remove('active');
  itemsList[index].classList.remove('active');  
  // console.log(images[index]);
  // console.log(items[index]);
  
  index++;

  if(index > images.length-1) index = 0;

  images[index].classList.add('active');
  itemsList[index].classList.add('active');
  // console.log(images[index]);
  // console.log(itemsList[index]);  
});


// click su freccia in su
prev.addEventListener('click', function(){
  images[index].classList.remove('active');
  itemsList[index].classList.remove('active');   
  // console.log(images[index]);
  // console.log(itemsList[index]);
  
  index--;
  
  if(index < 0) index = images.length-1;
  
  images[index].classList.add('active');
  itemsList[index].classList.add('active');    
  // console.log(images[index]);
  // console.log(itemsList[index]);
});