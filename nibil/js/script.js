let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to update the active link based on the section in view
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  sections.forEach((section) => {
    const navLink = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (navLink && isInViewport(section)) {
      document.querySelectorAll('.nav-links a').forEach((link) => {
        link.style.color = ''; // Reset color for all links
      });
      navLink.style.color = 'red'; // Set color for the active link
    }
  });
}

// Event listener for scroll event
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('resize', updateActiveNavLink); // Update on window resize as well
document.addEventListener('DOMContentLoaded', updateActiveNavLink); // Update on initial load