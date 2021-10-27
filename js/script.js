const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log(prev);
console.log(next);

const images = document.getElementsByClassName('image');
const items = document.getElementsByClassName('item');

console.log(images);
console.log(items);

let index = 0;


next.addEventListener('click', function(){
  images[index].classList.remove('active');
  items[index].classList.remove('active');
  console.log(images[index]);
  console.log(items[index]);
  
  index++;

  if(index > images.length-1) index = 0;

  images[index].classList.add('active');
  items[index].classList.add('active');
  console.log(images[index]);
  console.log(items[index]);
});


prev.addEventListener('click', function(){
  images[index].classList.remove('active');
  items[index].classList.remove('active');
  console.log(images[index]);
  console.log(items[index]);
  
  index--;
  
  if(index < 0) index = images.length-1;
  
  images[index].classList.add('active');
  items[index].classList.add('active');
  console.log(images[index]);
  console.log(items[index]);
});