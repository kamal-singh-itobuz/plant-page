const heroSliderContainer = document.querySelector('.hero-slider');
const plantImagesSection = document.querySelector('.plant-collection-images');
const previousButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const plantCollectionImages = [{imageName: "bird-paradise", name: "1. Bird of Paradise"}, {imageName: "rubber-plant", name: "2. Rubber Plants"}, {imageName: "string-pearls", name: "3. String of Pearls"}, {imageName: "rubber-plant", name: "4. Rubber Plants"}];
const heroSliderImages = [{imageName: "main-plant"}, {imageName: "main-plant-copy1"}, {imageName: "main-plant-copy2"}];

function updateHeroCarousel(heroCards, current) {
    heroCards.forEach(card => {
        card.style.height = "36rem";
        card.style.transform = `translateX(-${currentHeroSlide * 100}%)`;
        card.style.zIndex = 0;
    });
    heroCards[current].style.height = "32rem";
    heroCards[current].style.zIndex = 2;
}

function plantCollection (plantCollectionImages, container, section){
    plantCollectionImages.forEach(element => {
        const imageSection = document.createElement('div');
        imageSection.setAttribute('class', `${section}-card`)
        const image = document.createElement('img');
        image.setAttribute('src', `./images/${section}/${element.imageName}.png`);
        image.setAttribute('alt', `${element.imageName}`);
        imageSection.append(image);
        if('name' in element) {
            const imageTitle = document.createElement('p');
            imageTitle.innerText = element.name;
            imageSection.append(imageTitle);
        }
        container.append(imageSection);
    });
}
plantCollection(plantCollectionImages, plantImagesSection, "plant-collection");

previousButton.addEventListener('click', () => {
    plantImagesSection.innerHTML = '';
    const card = plantCollectionImages.shift();
    plantCollectionImages.push(card);
    plantCollection(plantCollectionImages, plantImagesSection, "plant-collection");
});

nextButton.addEventListener('click', () => {
    plantImagesSection.innerHTML = '';
    const card = plantCollectionImages.pop()
    plantCollectionImages.unshift(card);
    plantCollection(plantCollectionImages, plantImagesSection, "plant-collection");
});

// HOME SLIDER

plantCollection(heroSliderImages, heroSliderContainer, "home");

const heroCards = document.querySelectorAll('.home-card');
const heroPreviousButton = document.querySelector('.hero-left-slider-button');
const heroNextButton = document.querySelector('.hero-right-slider-button');
const noOfHeroSlides = heroSliderImages.length;
let currentHeroSlide = 0;
updateHeroCarousel(heroCards, currentHeroSlide);

heroPreviousButton.addEventListener('click', () => {
    currentHeroSlide = (currentHeroSlide+1)%noOfHeroSlides;
    updateHeroCarousel(heroCards, currentHeroSlide);
});

heroNextButton.addEventListener('click', () => {
    currentHeroSlide = (currentHeroSlide-1+noOfHeroSlides)%noOfHeroSlides;
    updateHeroCarousel(heroCards, currentHeroSlide);
});

