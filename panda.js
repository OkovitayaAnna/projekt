function fallAndRecover() {
    var panda = document.getElementById('panda');

    panda.classList.add('fallen');

    setTimeout(function() {
      panda.classList.remove('fallen');
    }, 5000);
  }
  