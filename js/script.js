const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderRight = document.querySelector('.slider-right');

const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

console.log(items);


const itemsList = document.getElementsByClassName('item');

const images = document.getElementsByClassName('image');

let index = 0;



//ciclo per creare items nello slider-right
for(let i=0; i < items.length; i++){
  const item = document.createElement('div');
  item.className = 'item';
  if(i === 0) item.classList.add('active');
    
  item.innerHTML = `<img src="${items[i]}" alt="">`;
  sliderRight.append(item);    
}



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