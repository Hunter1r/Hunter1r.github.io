'use strict';
let videoSvg = document.querySelector('.video-pres-control-btn-svg');
let video = document.querySelector('.video-pres-video');
let leftArrow = document.querySelector('.header-bottom-left');
let rightArrow = document.querySelector('.header-bottom-right');
let headerContainer = document.querySelector('.header-container');
let imgs = ['img/header-photo.png', 'img/header-mountain.jpg', 'img/header-alps.jpg'];
let indexImg = 0;
let intervalId = null;
leftArrow.addEventListener('click', function () {
    if(typeof(intervalId) == 'number'){
        window.clearInterval(intervalId);
        intervalId = null;
    }
    if (indexImg < 0) { indexImg = imgs.length - 1 }
    headerContainer.style.backgroundImage = `url(${imgs[indexImg]})`;
    indexImg--;
});

rightArrow.addEventListener('click', function () {
    
    if(typeof(intervalId) == 'number'){
        window.clearInterval(intervalId);
        intervalId = null;
    }
    if (indexImg > 2) { 
        indexImg = 0; 
    }
    headerContainer.style.backgroundImage = `url(${imgs[indexImg]})`;
    indexImg++;
})

videoSvg.addEventListener('click', function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
})
window.addEventListener('scroll', function (event) {
    if (window.pageYOffset > 3000) {
        if (video.paused) {
            video.play();
        }
    }
    if (window.pageYOffset > 4000) {
        if (!video.paused) {
            video.pause();
        }
    }
})

window.addEventListener('load', function () {
    //start sliding header img's
    intervalId = window.setInterval(changeImg, 3000);
})

function changeImg() {

    if (indexImg > 2) { indexImg = 0; }
    headerContainer.style.backgroundImage = `url(${imgs[indexImg]})`;
    if (indexImg > 0) {
        headerContainer.style.opacity = 0.8;
    } else { headerContainer.style.opacity = 1; }
    indexImg++;

    

}