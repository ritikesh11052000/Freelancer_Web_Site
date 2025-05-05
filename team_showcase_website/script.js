// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('navbarSearchInput').value.trim().toLowerCase();
  const sections = {
    'team': 'team',
    'services': 'services',
    'portfolio': 'portfolio',
    'why choose us': 'why-choose-us',
    'contact': 'contact'
  };
  if (sections[query]) {
    const section = document.getElementById(sections[query]);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      return false;
    }
  }
  alert('Section not found. Please try: Team, Services, Portfolio, Why Choose Us, Contact.');
  return false;
}
