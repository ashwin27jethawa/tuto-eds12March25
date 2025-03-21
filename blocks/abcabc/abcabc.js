export default function decorate(block) {
  [...block.parentNode.nextSibling.children[0].children].forEach((element, index) => {
    element.classList.add(`row${index + 1}`);
    [...element.children].forEach((elementsec, jindex) => {
      elementsec.setAttribute('class', `row${index + 1}  col${jindex + 1}`);
    });
  });
}
