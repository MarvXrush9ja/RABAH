const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')
const labels = document.querySelectorAll('.formik-control label')
const box = document.querySelectorAll('.box')
const carouselButtons = document.querySelectorAll('[data-button]');

// toggle for nav
toggle.addEventListener('click', () => {
    nav.classList.toggle('active')
})

// carousel
carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'left' ? -1 : 1;
    const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
    const activeSlide = slides.querySelector('[data-active]');

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    
    delete activeSlide.dataset.active
    slides.children[newIndex].dataset.active = true;
  });
});


// courses
window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });
}

// newsletter
labels.forEach(label => {
    // to get each letters
    label.innerHTML = label.innerText

    // split the letters
    .split('')

    // map to an array
    .map((letter, index) => `<span style='transition-delay: ${index * 50}ms'>${letter}</span>`)

    // join the letters
    .join('')
});

// function sayHello(){
//     alert('HOME')
//    }
   
//    function learnMoreA(){
//      alert('Drums. Keyboard. Lead Guitar. Base Guitar.')
//    }