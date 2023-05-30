window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.up');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var position = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    // Ajouter la classe "show" si l'élément est visible dans la fenêtre
    if (position < windowHeight) {
      element.classList.add('show');
    }
  }
});
