

console.log('Hello')

function homePage() {
    console.log('home')
}

function menuPage() {
    console.log('menu')
}

function contactPage() {
    console.log('contact')
}

function createHeader() {
    //Body
    const body = document.querySelector('body');
    //Content
    let content = document.createElement('div');
    content.className = 'content';
    body.appendChild(content);
    //Header
    let header = document.createElement('div');
    header.className = 'header';
    content.appendChild(header);
    //Title
    let title = document.createElement('div');
    title.className = 'title'
    title.textContent = 'Waffle Bros'
    header.appendChild(title);
    //Tabs Container
    header.appendChild(tabs());
    content.appendChild(mainContent());
    content.appendChild(footer());
}

function tabs() {
    //Tabs Container
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs-container';
    //Home
    const home = document.createElement('button');
    home.className = 'tab';
    home.textContent = 'Home';
    tabsContainer.appendChild(home);
    home.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        e.target.className = 'active';
        menu.className = 'tab'
        contact.className = 'tab'
        homePage();
    })
    //Menu
    const menu = document.createElement('button');
    menu.className = 'tab'
    menu.textContent = 'Menu'
    tabsContainer.appendChild(menu);
    menu.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        e.target.className = 'active';
        home.className = 'tab'
        contact.className = 'tab'
        menuPage();
    })
    //Contact
    const contact = document.createElement('button');
    contact.className = 'tab'
    contact.textContent = 'Contact'
    tabsContainer.appendChild(contact);
    contact.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        e.target.className = 'active';
        home.className = 'tab'
        menu.className = 'tab'
        contactPage();
    })
    return tabsContainer
}

function mainContent() {
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    //Description
    const description = document.createElement('div');
    description.classList = 'description';
    description.textContent = 'This is the best waffle place in town';
    mainContent.appendChild(description);
    //Image
    const image = document.createElement('img');
    image.src = "img/restaurant.jpg";
    mainContent.appendChild(image);
    
    //
    return mainContent;
}

function footer() {
    const container = document.createElement('div');
    container.classList = 'footer';
    const socialLinks = document.createElement('div');
    socialLinks.classList = 'social-links';
    container.appendChild(socialLinks);
    //Social Links
    const facebook = document.createElement('img');
    facebook.classList = 'svg';
    facebook.src = "svg/facebook.svg";
    socialLinks.appendChild(facebook);
    const insta = document.createElement('img');
    insta.src = "svg/instagram.svg";
    socialLinks.appendChild(insta);
    const twitter = document.createElement('img');
    twitter.src = "svg/twitter.svg";
    socialLinks.appendChild(twitter);
    //Copy Right
    const copyRight = document.createElement('div');
    copyRight.textContent = 'Waffle Bros c 2022. All rights waffled'
    copyRight.classList = 'copy-right'
    container.appendChild(copyRight);
    return container
}


createHeader();