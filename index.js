const closeMenu = document.getElementById('close-menu');
const openMenu = document.getElementById('open-menu');
const navList = document.querySelector('.nav-list');
const overlay = document.querySelector('.overlay');
const navItems = document.querySelector('.nav-items');

openMenu.addEventListener('click', () => {
    navList.classList.add('flex');
    overlay.classList.add('flex');
    navList.classList.add('place');
    navItems.classList.add('active');
    document.body.classList.add('no-scroll');
})

closeMenu.addEventListener('click', () => {
    navList.classList.add('hide');
    navList.classList.remove('place');
    overlay.classList.remove('flex');
    navList.classList.remove('flex');
    navItems.classList.remove('active');
    document.body.classList.remove('no-scroll');
})

function overlayDiv() {
    if (window.innerWidth > 700) {
        overlay.classList.add('hide')
        overlay.classList.remove('flex')
        navItems.classList.remove('active');
        navList.classList.remove('place');
        document.body.classList.remove('no-scroll');
    }
}

overlayDiv();

window.addEventListener('resize', overlayDiv);


function updateImage(params) {
    const image = document.getElementById('web-image');

    smallSrc = "assets/images/image-web-3-mobile.jpg"
    bigSrc = "assets/images/image-web-3-desktop.jpg"

    if (window.innerWidth > 1060) {
        image.src = bigSrc;
    } else {
        image.src = smallSrc;
    }
}

updateImage();

window.addEventListener('resize', updateImage);