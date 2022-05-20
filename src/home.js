//import homePage from './home';
import menuPage from './menu';
import contactsPage from './contacts';

function loadPage() {
    //Body
    const body = document.querySelector('body');
    //Content
    let content = document.createElement('div');
    content.className = 'content';
    body.appendChild(content);
    //Load Rest of the Page
    content.appendChild(header());
    content.appendChild(mainContent());
    content.appendChild(footer());
}

function header() {
    //Header
    let header = document.createElement('div');
    header.className = 'header';
    //Title
    let title = document.createElement('div');
    title.className = 'title'
    title.textContent = 'Waffle Bros'
    header.appendChild(title);
    //Tabs Container
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'tabs-container';
    const content = document.querySelector('.content');
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
        removeFooter();
        homePage();
        content.appendChild(footer());
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
        removeFooter();
        menuPage();
        content.appendChild(footer());
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
        removeFooter();
        contactsPage();
        content.appendChild(footer());
    })

    header.appendChild(tabsContainer);
    return header
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

function removeFooter() {
    const footer = document.querySelector('.footer')
    footer.remove();
}

function homePage() {
    console.log('home')
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    content.appendChild(mainContent());
}




export default loadPage;