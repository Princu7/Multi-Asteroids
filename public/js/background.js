window.addEventListener('load', function() {
  var canvas = document.getElementById('background');
  var ctx = canvas.getContext('2d');
  var img = new Image();
  var velocity = 5;
  var x = 0, y = 0;

  img.src="https://raw.githubusercontent.com/straker/galaxian-canvas-game/master/part1/imgs/bg.png";

  function drawImage(){
    y += velocity;
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, x, y - canvas.height, canvas.width, canvas.height);
    if (y >= canvas.height) { y = 0;}
  }

  img.onload = function(){
    setInterval(drawImage, 50);
  };
}, true);
