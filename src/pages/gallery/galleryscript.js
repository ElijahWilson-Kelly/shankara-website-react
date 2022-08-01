const photoStrings = [
  '1.jpg',
  '2.jpg',
  '3.jpeg',
  '4.jpeg',
  '6.jpeg',
  '7.jpg',
  '8.jpg',
  '9.jpg'
];

export let photoArray = [];

for (let i=0; i<photoStrings.length; i++) {
  photoArray.push(require(`../../resources/images/gallery/${photoStrings[i]}`));
}

export const shutterEffect = (e) => {
  const numOfShutters = 8;
  const speed = 1000 / numOfShutters

  let i = 0;

  const traverseArray = () => {
    shuttersArray[i].classList.remove('dark');
    shuttersArray[i].classList.add('current');
    if (i > 0) {
      shuttersArray[i - 1].classList.remove('current');
    }

    i++

    if (i >= numOfShutters) {
      // remove all elements;
      shuttersArray.forEach(ele => ele.remove())
      return
    }
    setTimeout(traverseArray,speed);
  }

  const containingElement = document.querySelector('.shutter-effect-container');
  containingElement.style.gridTemplate = `1fr / repeat(${numOfShutters.toString()},1fr)`;

  const shuttersArray = [];

  for (let i=0; i<numOfShutters; i++) {
    const div = document.createElement('div');

    div.className = 'shutter-effect-segment dark';

    containingElement.appendChild(div);
    shuttersArray.push(div);
  }

  setTimeout(traverseArray,speed);
}
