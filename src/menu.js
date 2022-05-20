function menuPage() {
    console.log('menu')
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    content.appendChild(mainContent);

    const squareWaffles = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = "img/square-waffles.jpg";
    mainContent.appendChild(squareWaffles);
    squareWaffles.textContent ='Photo by Slashio Photography on Unsplash';
    squareWaffles.appendChild(image1);

    const roundWaffles = document.createElement('div');
    const image2 = document.createElement('img');
    image2.src = "img/round-waffles.jpg";
    mainContent.appendChild(roundWaffles);
    roundWaffles.appendChild(image2);
    roundWaffles.textContent = 'Photo by Joyful Captures on Unsplash';
    
    const chocolateWaffles = document.createElement('div');
    const image3 = document.createElement('img');
    image3.src = "img/chocolate-waffles.jpg";
    mainContent.appendChild(chocolateWaffles);
    chocolateWaffles.appendChild(image3);
    chocolateWaffles.textContent = 'Photo by Slashio Photography on Unsplash';
}

export default menuPage;