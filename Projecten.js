const basePath = "assets/Fotografie/";
const images = [
    "beeldtaal.png",
    "Bloem.jpeg",
    "Hoop.JPG",
    "Jolien_compositie.jpeg",
    "kleurfotografie.JPG",
    "Jolien_mode 1.jpeg",
    "mode2.png",
    "mode3.png",
    "mode4.png",
    "Portret.png"
];

let current = 0;

function setImage() {
    const imgEl = document.getElementById("sliderImage");
    if (!imgEl) {
        console.warn("No element with id `sliderImage` found.");
        return;
    }
    imgEl.src = basePath + encodeURIComponent(images[current]);
}

function nextImage() {
    current = (current + 1) % images.length;
    setImage();
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    setImage();
}

document.addEventListener("DOMContentLoaded", setImage);
const logoBasePath = "Logo's/";

const logoImages = [
    "logo1.jpg",
    "logo2.png",
    "Logo3.png",
    "logo4.jpg",
    "logo5.jpg",
    "logo6.jpeg",
    "logo7.jpeg",
    "logo8.jpeg",
    "logo8.jpg",
    "logo9.jpg",
    "logo10.jpg",
    "logo11.jpg",
    "logo12.png",
    "logo13.png"
];

let logoCurrent = 0;

function setLogoImage() {
    const imgEl = document.getElementById("logoSliderImage");
    if (!imgEl) return;
    imgEl.src = logoBasePath + encodeURIComponent(logoImages[logoCurrent]);
}

function nextLogo() {
    logoCurrent = (logoCurrent + 1) % logoImages.length;
    setLogoImage();
}

function prevLogo() {
    logoCurrent = (logoCurrent - 1 + logoImages.length) % logoImages.length;
    setLogoImage();
}


