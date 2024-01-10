function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
  
document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll('.sidebar-circle');
  const sections = document.querySelectorAll('.sections');

  function setActiveCircle(index) {
    circles.forEach((circle, i) => {
      if (i === index) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }

  function handleScroll() {
    const scrollPosition = window.scrollY;
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveCircle(index);
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});
