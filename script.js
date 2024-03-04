const plantImagesSection = document.querySelector('.plant-collection-images');
const previousButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let plantCollectionImages = [{imageName: "bird-paradise", name: "Bird of Paradise"}, {imageName: "rubber-plant", name: "Rubber Plants"}, {imageName: "string-pearls", name: "String of Pearls"}, {imageName: "string-pearls", name: "String of Pearls"}]

function plantCollection (plantCollectionImages){
    plantCollectionImages.forEach(element => {
        const imageSection = document.createElement('div');
        imageSection.setAttribute('class', 'plant-collection-card')
        const image = document.createElement('img');
        image.setAttribute('src', `./images/plant-collection/${element.imageName}.png`);
        image.setAttribute('alt', `${element.name}`);
        const imageName = document.createElement('p');
        imageName.innerText = element.name;
        imageSection.append(image, imageName);
        plantImagesSection.append(imageSection);
    });
}
plantCollection(plantCollectionImages);

previousButton.addEventListener('click', () => {
    const card = plantCollectionImages.shift();
    console.log(card);
    console.log(plantCollectionImages.length);
    plantCollectionImages.push(card);
    console.log(plantCollectionImages.length);
    plantCollection(plantCollectionImages);
});

nextButton.addEventListener('click', () => {
    const card = plantCollectionImages.pop();
    console.log(card);
    console.log(plantCollectionImages.length);
    plantCollectionImages.unshift(card);
    console.log(plantCollectionImages.length);
    plantCollection(plantCollectionImages);
});