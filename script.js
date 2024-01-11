const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var fixed = document.querySelector('.fixed-card');
console.log(fixed);
var elem = document.querySelector('.hover-element-wrapper');
elem.addEventListener('mouseenter', function () {
    fixed.style.display = "block"
});
elem.addEventListener('mouseleave', function () {
    fixed.style.display = "none"
});

var hoverelems = document.querySelectorAll(".hover-element");
hoverelems.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })

});

var clickable = document.querySelectorAll(".text-holder h2");
var imagepart = document.querySelector(".text-image-container .image-part");
var para = document.querySelector(".text-holder p");

// clickable.forEach(function(c){

//     c.addEventListener("click",function(){
//         c.style.borderLeft="5px solid red"
//         c.style.color="white"
//         image=c.getAttribute("data-image")
//         text=c.getAttribute("data-text")
//         para.innerHTML=text
//         imagepart.style.backgroundImage=`url(${image})`
//     })

// });

clickable.forEach(function (c) {
    c.addEventListener("click", function () {
        // Reset styles for all h3 elements
        clickable.forEach(function (element) {
            element.style.borderLeft = "3px solid #504B45";
            element.style.color = "#504B45";
            // Reset other styles or attributes as needed
        });

        // Apply styles to the clicked element

        imagepart.classList.add('animate');
        para.classList.add('animate');

        setTimeout(function () {
            para.classList.remove('animate');
            imagepart.classList.remove('animate');
        }, 1000);

        c.style.borderLeft = "5px solid red";
        c.style.color = "white";

        // Accessing data attributes
        var image = c.getAttribute("data-image");
        var text = c.getAttribute("data-text");

        // Update other elements based on data attributes

        para.innerHTML = text;
        imagepart.style.backgroundImage = `url(${image})`;


    });
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 30,
    // grabCursor: true,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var sliderHolder = document.querySelector('.moving-slider-holder');
var customCursor = document.querySelector('.custom-cursor');

sliderHolder.addEventListener('mouseenter', function () {
    // Show the custom cursor and add the slider-cursor class when entering the slider area
    customCursor.style.display = 'block';
    sliderHolder.classList.add('slider-cursor');
});

sliderHolder.addEventListener('mouseleave', function () {
    // Hide the custom cursor and remove the slider-cursor class when leaving the slider area
    customCursor.style.display = 'none';
    sliderHolder.classList.remove('slider-cursor');
});

sliderHolder.addEventListener('mousemove', function (event) {
    // Update the position of the custom cursor based on the mouse movements inside the slider area
    customCursor.style.left = event.pageX + 'px';
    customCursor.style.top = event.pageY + 'px';
});


var loader = document.querySelector("#loader");
setTimeout(function () {
    loader.style.top = "-100%";
}, 4000);