'use strict';

const startExtension = () => {
  const cards = document.querySelector('.cards');
  const homePageBtn = document.querySelector('#homePageBtn');
  const storesBtn = document.querySelector('#storesBtn');
  const couponsBtn = document.querySelector('#couponsBtn');
  const buttons = [homePageBtn, storesBtn, couponsBtn];
  const scrollDegree = 280;

  // Slider implementation

  function handleScroll(id) {
    buttons.forEach((button, index) => {
      if (button.id === id) {
        const scrollValue = index * scrollDegree;

        cards.scroll(scrollValue, 0);
        button.classList.add('buttons__active');
      } else {
        button.classList.remove('buttons__active');
      }
    });
  }

  return buttons.map(button =>
    (button.onclick = (event) => handleScroll(event.currentTarget.id))
  );
};

startExtension();
