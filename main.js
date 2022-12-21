const toolbarItems = document.querySelectorAll('.toolbar_item');

const sections = {
    0: document.querySelector('.section1'),
    1: document.querySelector('.section2'),
    2: document.querySelector('.section3')
}

window.addEventListener('load', () => {

    //Add toolbar events
    for(let i = 0; i < 3; i++){
        toolbarItems[i].addEventListener('mouseenter', () => {
            toolbarItems[i].classList.add('fade_in');
        })

        toolbarItems[i].addEventListener('mouseout', () => {
            toolbarItems[i].classList.remove('fade_in');
        })

        toolbarItems[i].addEventListener('click', () => {
            sections[i].scrollIntoView()
        })
    }
})