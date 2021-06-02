const data = [
  {
    name: 'Alex',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque sollicitudin dignissim. Donec accumsan dui orci, sit amet pulvinar risus mollis nec.'
  },
  {
    name: 'Jon',
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
    content: 'Suspendisse maximus sit amet neque sed consequat. Suspendisse eu ex et erat pulvinar eleifend ut vitae purus. Fusce ultricies, sapien ut aliquet tempus, orci lacus suscipit lacus, ac imperdiet magna neque non massa. Maecenas sapien mi, gravida a arcu et, sagittis pretium enim.'
  },
  {
    name: 'David',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    content: 'Maecenas ut auctor mi. Etiam venenatis eget velit vel posuere. Morbi fermentum, turpis sed maximus gravida, eros nulla sollicitudin magna, nec congue mi odio in nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia arcu sit amet.'
  },
  {
    name: 'Sam',
    photo: 'https://randomuser.me/api/portraits/men/6.jpg',
    content: 'Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
];



const avatarImg = document.querySelector('.user_img');
const user_name = document.querySelector('.name');
const user_content = document.querySelector('.content');
const arrowLeft = document.querySelector('.arrow_back');
const arrowRight = document.querySelector('.arrow_forward');
const dotsContainer = document.querySelector('.dots_container');

let increment = 0;

data.forEach(_ => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dotsContainer.appendChild(dot);
});

const dot = document.querySelectorAll('.dot');

avatarImg.src = data[increment].photo;
user_name.innerHTML = data[increment].name;
user_content.innerHTML = data[increment].content;
arrowLeft.disabled = true;

arrowRight.addEventListener('click', () => {
  arrowLeft.disabled = false;
  increment += 1;
  avatarImg.src = data[increment].photo;
  user_name.innerHTML = data[increment].name;
  user_content.innerHTML = data[increment].content;

  if (increment >= data.length - 1) {
    arrowRight.disabled = true;
  }

  dot[increment].classList.add('active');
  dot.forEach((item, idx) => {
    if (increment !== idx) {
      item.classList.remove('active');
    }
  });
});

arrowLeft.addEventListener('click', () => {
  arrowRight.disabled = false;
  increment -= 1;
  avatarImg.src = data[increment].photo;
  user_name.innerHTML = data[increment].name;
  user_content.innerHTML = data[increment].content;

  if (increment <= 0) {
    arrowLeft.disabled = true;
  }

  dot[increment].classList.add('active');
  dot.forEach((item, idx) => {
    if (increment !== idx) {
      item.classList.remove('active');
    }
  });

});

dot.forEach((item, index) => {

  item.addEventListener('click', () => {
    increment = index;
    avatarImg.src = data[increment].photo;
    user_name.innerHTML = data[increment].name;
    user_content.innerHTML = data[increment].content;

    if (increment >= data.length - 1) {
      arrowRight.disabled = true;
      arrowLeft.disabled = false;
    }

    if (increment <= 0) {
      arrowLeft.disabled = true;
      arrowRight.disabled = false;
    }

    if ((increment < data.length - 1) && (increment > 0)) {
      arrowLeft.disabled = false;
      arrowRight.disabled = false;
    }

    if (increment === index) {
      item.classList.add('active');
      dot.forEach((item, idx) => {
        if (increment !== idx) {
          item.classList.remove('active');
        }
      });
    }
  });
});

