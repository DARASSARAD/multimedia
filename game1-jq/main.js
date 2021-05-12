generateObject()
let objectMovementInterval = setInterval(moveObjectDown, 500);

function generateObject(){
  let obj = '<div class="obj"></div>'
  $('.wrapper').append(obj)
  let wrapperPosition = $('.wrapper').position()
  let wrapperWidth = $('.wrapper').width()
  let positionX = randomIntFromInterval(wrapperPosition.left, wrapperWidth)
  $('.obj').css('left', positionX)
  $('.obj').css('top', 0)
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).keyup(function (e) {
  let keyCode = e.which;
  console.log(keyCode)
  if (keyCode === 39) {
    moveRight();
  }

  if (keyCode === 37) {
    moveLeft();
  }

  if (keyCode === 32) {
    clearInterval(objectMovementInterval)
  }
});

function moveRight() {
  let blokcPosition = $(".block").position();
  if (blokcPosition.left < 280) {
    $(".block").css("left", blokcPosition.left + 20);
  }
}

function moveLeft() {
  let blokcPosition = $(".block").position();
  if (blokcPosition.left > 20) {
    $(".block").css("left", blokcPosition.left - 20);
  }
}

function moveObjectDown(){
  let obj = $('.obj')
  let position = obj.position()
  if (position.top <= 520){
    obj.css('top', position.top + 20)
  }else{
    $(document).find('.obj').remove()
    generateObject()
  }
}
