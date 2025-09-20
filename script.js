const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('#nav-bar');
const links = document.querySelectorAll('#nav-bar a');
const cards =  document.querySelectorAll('#features .feature-card');
const pricingCards = document.querySelectorAll('#pricing .pricing-card');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

links.forEach(link=>{
    link.addEventListener('click',()=>{
        links.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
    })
})

const observer = new IntersectionObserver((entries)=>{
   entries.forEach(entry=>{
     if(entry.isIntersecting){
        entry.target.classList.add("show");
     }else{
        entry.target.classList.remove("show");
     }
   })
},{
    rootMargin: "0px 0px -400px 400px"
});

cards.forEach( card=> observer.observe(card))
pricingCards.forEach(pricingCard=> observer.observe(pricingCard));

