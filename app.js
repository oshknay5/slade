const slides = document.querySelectorAll('.slide');
for (const slide of slides){
    slide.addEventListener('mouseover' , ()=>{
        clearActiveClasses();
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach (item => {
        item.classList.remove('active')
    })
}