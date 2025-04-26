function togglePopup() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}


window.onclick = function(event) {
    const popup = document.getElementById('contact-popup');
    if (event.target === popup) {
        popup.style.display = "none";
    }
}
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) { 
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});
function showSuccessPopup() {
    const popup = document.getElementById("success-popup");
    popup.style.display = "block"; 
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 3000);
}

