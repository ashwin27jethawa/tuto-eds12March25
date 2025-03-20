import SwiperText from './swiper-bundle.min.js';

export default function decorate(block) {
  // console.log(block);
  block.classList.add('swiper');

  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');
  Array.from(block.children).forEach((row) => {
    row.classList.add('swiper-slide');
    swiperWrapper.appendChild(row);
  });
  block.append(swiperWrapper);

  const paginationWrapper = document.createElement('div');
  paginationWrapper.classList.add('swiper-pagination');
  block.appendChild(paginationWrapper);

  // const LeftArrow = document.createElement("div");
  // LeftArrow.classList.add("swiper-button-prev");
  // block.appendChild(LeftArrow);

  // const RightArrow = document.createElement("div")
  // RightArrow.classList.add("swiper-button-next");
  // block.appendChild(RightArrow);

  SwiperText(block, {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: true,

    // If we need pagination
    pagination: {
      el: paginationWrapper,
      clickable: true,
    },

    // // Navigation arrows
    // navigation: {
    //     nextEl: RightArrow,
    //     prevEl: LeftArrow,
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });
}
