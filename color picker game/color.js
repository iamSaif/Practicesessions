function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function RGBgen() {
  return `rgb(${getRandomInt(0, 255)},${getRandomInt(0, 255)},${getRandomInt(
    0,
    255
  )})`;
}

function settingupUI(contain) {
  for (var i = 0; i < 6; i++) {
    circlescontainer.insertAdjacentHTML(
      "beforeend",
      `<div class="circlewrapper flex ">
          <div style="background:${RGBgen()}" class="circle"></div>
        </div>`
    );
  }
  circles = Array.from(document.querySelectorAll(".circle"));
  answer = circles[randomnumforanswer].style.background;
  ansnode.textContent = answer;
}

var contain = document.querySelector(".container");
var circlescontainer = document.querySelector(".circles");
var answer = null;
var circles = null;
var randomnumforanswer = getRandomInt(0, 6);
var ansnode = document.querySelector(".answer");
settingupUI();

circlescontainer.addEventListener("click", function(e) {
  if (Array.from(e.target.classList).includes("circle")) {
    var anspicked = e.target.style.background;
    if (anspicked === answer) {
      circles.forEach(function(circle) {
        if (circle.style.background !== answer) {
          circle.style.opacity = 0;
        }
        contain.style.background = answer;
      });
    } else {
      console.log("you lose");
      e.target.style.opacity = 0;
    }
  }
});
var resetbtn = document.querySelector(".reset");
resetbtn.addEventListener("click", function() {
  circlescontainer.innerHTML = ""; // to remove first set of circles
  settingupUI();
});
