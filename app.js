function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .scale-up');
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .scale-up, .event-highlight-img');
    const windowHeight = window.innerHeight;
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
var typed=new Typed(".text",{
    strings:["Welcome to the ACM Student Chapter"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});
var typed=new Typed(".text1",{
    strings:["The ACM-XIM Chapter is a leading technical student chapter at XIM University..."],
    typeSpeed:50,
    backSpeed:100,
    backDelay:1000,
    loop:true


});
var typed=new Typed(".text2",{
    strings:["Take a glimpse into some of our past events:"],
    typeSpeed:50,
    backSpeed:100,
    backDelay:1000,
    loop:true


});