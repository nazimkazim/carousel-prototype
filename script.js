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

const total = data.length - 1;

data.forEach(_ => {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dotsContainer.appendChild(dot);
});

const dot = document.querySelectorAll('.dot');

const renderContent = () => {
  avatarImg.src = data[increment].photo;
  user_name.innerHTML = data[increment].name;
  user_content.innerHTML = data[increment].content;
};

renderContent();

const setDisabled = (el, bool) => {
  el.disabled = bool;
};

setDisabled(arrowLeft, true);

const setActive = () => {
  dot[increment].classList.add('active');
  dot.forEach((item, idx) => {
    if (increment !== idx) {
      item.classList.remove('active');
    }
  });
};

arrowRight.addEventListener('click', () => {
  setDisabled(arrowLeft, false);
  increment += 1;
  renderContent();

  if (increment >= total) {
    setDisabled(arrowRight, true);
  }
  setActive();
});

arrowLeft.addEventListener('click', () => {
  setDisabled(arrowRight, false);
  increment -= 1;
  renderContent();
  if (increment <= 0) {
    setDisabled(arrowLeft, true);
  }
  setActive();
});

dot.forEach((item, index) => {
  item.addEventListener('click', () => {
    increment = index;
    renderContent();

    if (increment >= total) {
      setDisabled(arrowRight, true);
      setDisabled(arrowLeft, false);
    }

    if (increment <= 0) {
      setDisabled(arrowLeft, true);
      setDisabled(arrowRight, false);
    }

    if ((increment < total) && (increment > 0)) {
      setDisabled(arrowLeft, false);
      setDisabled(arrowRight, false);
    }

    if (increment === index) {
      setActive();
    }
  });
});

