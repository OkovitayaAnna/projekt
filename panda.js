function run() {
    var panda = document.getElementById('panda');

    var min;
    var max;
    var maxT;

    min = Math.ceil(0);
    max = Math.floor(1300);
    maxT = max = Math.floor(600);

    panda.style.top = (Math.floor(Math.random() * (maxT - min)) + min) + 'px';
    panda.style.left = (Math.floor(Math.random() * (max - min)) + min) + 'px';
  }
  