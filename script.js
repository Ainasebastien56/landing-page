const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('#nav-bar');
const cards =  document.querySelectorAll('#features .feature-card');
const pricingCards = document.querySelectorAll('#pricing .pricing-card');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

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

