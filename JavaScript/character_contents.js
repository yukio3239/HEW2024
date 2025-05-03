const header = document.getElementById('header');

document.addEventListener('mousemove', (event) => {
    // Check if the mouse is near the top of the page
    if (event.clientY < 100) {
        header.style.top = '0'; // Show the header
    } else {
        header.style.top = '-100px'; // Hide the header
    }
});


    // choice-btnのslick設定
    $('.choice-btn').slick({
        infinite: true,
        slidesToShow: 5,
        focusOnSelect: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        asNavFor: '.gallery',
        vertical: true,
    });

    // galleryのslick設定
    $('.gallery').slick({
        infinite: true,
        fade: true,
        arrows: false,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        asNavFor: '.choice-btn',
    });



