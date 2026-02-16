// Basic UI elements
const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('#nav-bar');
const links = document.querySelectorAll('#nav-bar a');

// Cards used in the two target sections: features (Why Choose EcoBottle?) and pricing (Our Plans)
const cards = document.querySelectorAll('#features .feature-card');
const pricingCards = document.querySelectorAll('#pricing .pricing-card');

// Mobile hamburger toggle
hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

// Nav link active state handling
links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
    })
})

/*
 IntersectionObserver setup
 - We reveal cards with a staggered animation when they enter the viewport.
 - We set a CSS variable `--delay` on each element so the CSS animation can use it.
 - For pricing, when the important `highlight` card appears we add a persistent subtle "pop" animation.
*/
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;

            // compute index among its siblings to create a stagger effect
            const parentChildren = Array.from(el.parentElement.children);
            const index = parentChildren.indexOf(el);

            // set CSS variable used by stylesheet to stagger animation
            el.style.setProperty('--delay', `${index * 120}ms`);

            // add the show class to trigger animation
            el.classList.add('show');

            // for pricing highlighted card, add a special class to enable floating/pop effect
            if (el.classList.contains('highlight')) {
                el.classList.add('highlight-show');
            }

            // Unobserve to make the reveal one-time (polished UX)
            obs.unobserve(el);
        }
    })
}, {
    // trigger a bit earlier so animation starts while element is approaching
    threshold: 0.15,
});

// Observe all cards in both sections
cards.forEach(card => observer.observe(card));
pricingCards.forEach(pricingCard => observer.observe(pricingCard));

