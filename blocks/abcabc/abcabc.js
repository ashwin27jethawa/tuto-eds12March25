export default function decorate(block) {
    console.log(block.parentNode.nextSibling.children[0].children);
    [...block.parentNode.nextSibling.children[0].children].forEach((element, index) => {
        element.classList.add("row" + (index + 1))
        console.log(element.classList);
        [...element.children].forEach((elementsec, jindex) => {
            elementsec.setAttribute("class","row"+(index+1)+" "+"col"+(jindex+1))
            console.log(elementsec);
        })
    })
}