import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');

console.log(small);
image.src = small;
image.style.display = 'inline-block';
image.style.width = '40%';
image.style.height = 'auto';

document.body.appendChild(image);

const bigImage = document.createElement('img');

console.log(big);
bigImage.src = big;
bigImage.style.display = 'inline-block';
bigImage.style.width = '40%';
bigImage.style.height = 'auto';

document.body.appendChild(bigImage);
