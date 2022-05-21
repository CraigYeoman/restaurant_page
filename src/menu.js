function menuPage() {
    console.log('menu')
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    content.appendChild(mainContent);

    //Squarewaffles
    //Variables
    const squareWaffles = document.createElement('div');
    const squareWafflesText = document.createElement('h2');
    const image1 = document.createElement('img');
    const squareWafflesImageCredit = document.createElement('p');
    //Content
    squareWafflesText.textContent = 'We have square waffles!'
    image1.src = "img/square-waffles.jpg";
    squareWafflesImageCredit.textContent ='Photo by Slashio Photography on Unsplash';
    //Class Declaration
    squareWaffles.classList = 'waffle-container'
    squareWafflesText.classList = 'waffle-text'
    image1.classList = 'waffle-image'
    squareWafflesImageCredit.classList = 'waffle-credit'
    //Append
    mainContent.appendChild(squareWaffles);
    squareWaffles.appendChild(squareWafflesText);
    squareWaffles.appendChild(image1);
    squareWaffles.appendChild(squareWafflesImageCredit);

    //Roundwaffles
    //Variables
    const roundWaffles = document.createElement('div');
    const roundWafflesText = document.createElement('h2');
    const image2 = document.createElement('img');
    const roundWafflesImageCredit = document.createElement('p');
    //Content
    roundWafflesText.textContent = 'We have round waffles!'
    image2.src = "img/round-waffles.jpg";
    roundWafflesImageCredit.textContent ='Photo by Joyful Captures on Unsplash';
    //Class Declaration
    roundWaffles.classList = 'waffle-container'
    roundWafflesText.classList = 'waffle-text'
    image2.classList = 'waffle-image'
    roundWafflesImageCredit.classList = 'waffle-credit'
    //Append
    mainContent.appendChild(roundWaffles);
    roundWaffles.appendChild(roundWafflesText);
    roundWaffles.appendChild(image2);
    roundWaffles.appendChild(roundWafflesImageCredit);

    //Chocolatewaffles
    //Variables
    const chocolateWaffles = document.createElement('div');
    const chocolateWafflesText = document.createElement('h2');
    const image3 = document.createElement('img');
    const chocolateWafflesImageCredit = document.createElement('p');
    //Content
    chocolateWafflesText.textContent = 'We have chocolate waffles!'
    image3.src = "img/chocolate-waffles.jpg";
    chocolateWafflesImageCredit.textContent ='Photo by Kobby Mendez on Unsplash';
    //Class Declaration
    chocolateWaffles.classList = 'waffle-container'
    chocolateWafflesText.classList = 'waffle-text'
    image3.classList = 'waffle-image'
    chocolateWafflesImageCredit.classList = 'waffle-credit'
    //Append
    mainContent.appendChild(chocolateWaffles);
    chocolateWaffles.appendChild(chocolateWafflesText);
    chocolateWaffles.appendChild(image3);
    chocolateWaffles.appendChild(chocolateWafflesImageCredit);
}

export default menuPage;