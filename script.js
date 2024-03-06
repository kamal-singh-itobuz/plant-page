const heroSliderContainer = document.querySelector('.hero-slider');
const plantImagesSection = document.querySelector('.plant-collection-images');
const plantCollectionPreviousButton = document.querySelector('.prev-button');
const plantCollectionNextButton = document.querySelector('.next-button');
const heroRangeSlider = document.querySelectorAll('.range-sliding-span');
const heroPreviousButton = document.querySelector('.hero-left-slider-button');
const heroNextButton = document.querySelector('.hero-right-slider-button');
const clientCards = document.querySelectorAll('.client-card');
const clientRightButton = document.querySelectorAll('.client-arrow');
const clientCardContent = document.querySelectorAll('.client-card-content');
const clientCardText = document.querySelectorAll('.client-card-text');

const plantCollectionImages = [{ imageName: "bird-paradise", name: "1. Bird of Paradise" }, { imageName: "rubber-plant", name: "2. Rubber Plants" }, { imageName: "string-pearls", name: "3. String of Pearls" }, { imageName: "rubber-plant", name: "4. Rubber Plants" }];
const heroSliderImages = [{ imageName: "main-plant" }, { imageName: "big-leaf" }, { imageName: "smaller-leaf" }];
const noOfHeroSlides = heroSliderImages.length;
let currentHeroSlide = 0;
let currentPlantCollectionCard = 0;
let currentClientIndex = 1;

function updateHeroCarousel(heroCards, current, heroRangeSlider) {
    const heightForAll = screen.width < 576 ? "24rem" : (screen.width >= 576 && screen.width < 768 ? "34rem" : "38rem");
    const heightForCurrent = screen.width < 576 ? "20rem" : (screen.width >= 576 && screen.width < 768 ? "30rem" : "34rem");
    heroCards.forEach((card, index) => {
        card.style.height = heightForAll;
        card.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
        card.style.zIndex = 0;
        heroRangeSlider[index].style.backgroundColor = "#3E8847";
    });
    heroCards[current].style.height = heightForCurrent;
    heroCards[current].style.zIndex = 2;
    heroRangeSlider[current].style.backgroundColor = "#09270D";
}

function sliderHTMLCreation(plantCollectionImages, container, section) {
    plantCollectionImages.forEach(element => {
        const imageSection = document.createElement('div');
        imageSection.setAttribute('class', `${section}-card`)
        const image = document.createElement('img');
        image.setAttribute('src', `./images/${section}/${element.imageName}.png`);
        image.setAttribute('alt', `${element.imageName}`);
        imageSection.append(image);
        if ('name' in element) {
            const imageTitle = document.createElement('p');
            imageTitle.innerText = element.name;
            imageSection.append(imageTitle);
        }
        container.append(imageSection);
    });
}

//Plant collection 
sliderHTMLCreation(plantCollectionImages, plantImagesSection, "plant-collection");
const plantCollectionCards = document.querySelectorAll('.plant-collection-card');

plantCollectionPreviousButton.addEventListener('click', () => {
    currentPlantCollectionCard = (currentPlantCollectionCard - 1 + plantCollectionCards.length) % plantCollectionCards.length;
    plantCollectionCards.forEach(card => card.style.transform = `translateX(-${100 * currentPlantCollectionCard}%)`);
});

plantCollectionNextButton.addEventListener('click', () => {
    currentPlantCollectionCard = (currentPlantCollectionCard + 1) % plantCollectionCards.length;
    plantCollectionCards.forEach(card => card.style.transform = `translateX(-${100 * currentPlantCollectionCard}%)`);
});


// HOME SLIDER
sliderHTMLCreation(heroSliderImages, heroSliderContainer, "home");

const heroCards = document.querySelectorAll('.home-card');
updateHeroCarousel(heroCards, currentHeroSlide, heroRangeSlider);

heroPreviousButton.addEventListener('click', () => {
    currentHeroSlide = (currentHeroSlide - 1 + noOfHeroSlides) % noOfHeroSlides;
    updateHeroCarousel(heroCards, currentHeroSlide, heroRangeSlider);
});

heroNextButton.addEventListener('click', () => {
    currentHeroSlide = (currentHeroSlide + 1) % noOfHeroSlides;
    updateHeroCarousel(heroCards, currentHeroSlide, heroRangeSlider);
});

heroRangeSlider.forEach((ele, index) => {
    ele.addEventListener('click', () => {
        currentHeroSlide = (currentHeroSlide - 1 + noOfHeroSlides) % noOfHeroSlides;
        updateHeroCarousel(heroCards, index, heroRangeSlider);
    });
});

// CLIENT SECTION
clientCardContent[0].style.backgroundColor = "#3E8847";
clientCardText[0].style.color = "white";

clientRightButton.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === clientRightButton.length - 1) {
            clientCards.forEach((card, idx) => {
                card.style.transform = `translateX(${0}%)`;
                clientCardContent[idx].style.backgroundColor = "white";
                clientCardText[idx].style.color = "#727272";
            });
            clientCardContent[0].style.backgroundColor = "#3E8847";
            clientCardText[0].style.color = "white";
        }
        else {
            clientCards.forEach(card => {
                card.style.transform = `translateX(-${100 * (index + 1)}%)`;
            });
            clientCardContent[index].style.backgroundColor = "white";
            clientCardText[index].style.color = "#727272";
            clientCardContent[index + 1].style.backgroundColor = "#3E8847";
            clientCardText[index + 1].style.color = "white";
        }
    });
});

