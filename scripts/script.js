'use strict';
let videoSvg = document.querySelector('.video-pres-control-btn-svg');
let video = document.querySelector('.video-pres-video');
let leftArrow = document.querySelector('.header-bottom-left');
let rightArrow = document.querySelector('.header-bottom-right');
let headerContainer = document.querySelector('.header-container');
let imgs = ['img/header-photo.png', 'img/header-mountain.jpg', 'img/header-alps.jpg', 'img/header-monument_valley.jpg', 'img/header-forest.jpg'];
let indexImg = 0;
let intervalId = null;
let numb = 1;
let pagination = document.querySelectorAll('.pagination-link');
pagination.forEach(pagEl => {
    pagEl.setAttribute('data-pagnumber', numb);
    pagEl.addEventListener('click', event => {

        headerContainer.style.backgroundImage = `url(${imgs[event.target.dataset.pagnumber - 1]})`;
        resetPagStyle();
        event.target.style.border = '2px solid #d3c1ad';
        event.target.style.backgroundColor = 'transparent';
        indexImg = event.target.dataset.pagnumber - 1;
    });
    numb++;
})

function resetPagStyle() {
    pagination.forEach(pag => {
        pag.style.border = '2px solid transparent';
        pag.style.backgroundColor = '#fff';
    })
}

leftArrow.addEventListener('click', function () {
    if (typeof (intervalId) == 'number') {
        window.clearInterval(intervalId);
        intervalId = null;
    }
    if (indexImg <= 0) { indexImg = imgs.length - 1 
    }else{
        indexImg--;
    }
    headerContainer.style.backgroundImage = `url(${imgs[indexImg]})`;
    
    setStylePagination();
    
});

rightArrow.addEventListener('click', function () {

    if (typeof (intervalId) == 'number') {
        window.clearInterval(intervalId);
        intervalId = null;
    }
    
    if (indexImg >= 4) {
        indexImg = 0;
    }else{indexImg++;}
    headerContainer.style.backgroundImage = `url(${imgs[indexImg]})`;
    setStylePagination();
    
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
    
    pagination[0].style.border = '2px solid #d3c1ad';
    pagination[0].style.backgroundColor = 'transparent';
    //start sliding header img's
    intervalId = window.setInterval(changeImg, 3000);
})

function changeImg() {

    if (indexImg >= 4) { indexImg = 0; }else{indexImg++;}
    headerContainer.style.backgroundImage = `url(${imgs[indexImg]})`;
    setStylePagination();
    
}

function setStylePagination() {
    //сброс стилей у пагинации в стиль "по умолчанию"
    resetPagStyle();
    pagination.forEach(pagEl => {

        if (pagEl.dataset.pagnumber - 1 == indexImg) {
            //установка стиля только у одной "кнопки" пагинации
            pagEl.style.border = '2px solid #d3c1ad';
            pagEl.style.backgroundColor = 'transparent';
        }
    })

}