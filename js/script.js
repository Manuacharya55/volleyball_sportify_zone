const cards = document.querySelectorAll('.sliders')
let count = 0;
let addClassName = null;
const card_images = document.querySelectorAll('.slider-image');
const bodyImage = document.querySelector('.timed-slider-content');


function typeOne() {
    if (count < 4) {

        cards.forEach((indx) => {
            indx.classList.remove('slider-active');
        })

        cards[count].classList.add('slider-active');
        let changingImage = card_images[count].getAttribute('src');
        bodyImage.style.backgroundImage = `url(${changingImage})`
        count++;

    }
    else {
        count = 0;
        cards.forEach((indx) => {
            indx.classList.remove('slider-active');
        })


        cards[count].classList.add('slider-active');

        bodyImage.style.backgroundImage = `url("${card_images[count]}")`
        count++;
    }
}

setInterval(typeOne, 4000);
