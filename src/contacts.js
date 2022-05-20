function contactsPage() {
    console.log('contact')
    console.log('menu')
    const main = document.querySelector('.main');
    const content = document.querySelector('.content');
    main.remove();
    const mainContent = document.createElement('div');
    mainContent.classList = 'main';
    content.appendChild(mainContent);
}

export default contactsPage;