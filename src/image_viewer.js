import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

export default () => {

  const image = document.createElement('img');

  image.src = small;
  image.style.display = 'inline-block';
  image.style.width = '40%';
  image.style.height = 'auto';

  document.body.appendChild(image);

};
