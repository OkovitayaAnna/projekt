const imageContainer = document.querySelector('.image-container');
const imageInfo = document.querySelector('.image-info');

imageContainer.addEventListener('click', function() {
  imageInfo.style.opacity = '1';
});

imageInfo.addEventListener('click', function(event) {
  event.stopPropagation();
  imageInfo.style.opacity = '0';
});

const readMoreLinks = document.querySelectorAll('.read-more');

readMoreLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});