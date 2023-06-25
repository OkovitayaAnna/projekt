const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});