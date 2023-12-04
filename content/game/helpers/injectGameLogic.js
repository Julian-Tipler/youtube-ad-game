

export const injectGameLogic = () => {
  let gameState = gameStates.PLAYING;
  var block = document.getElementById("block");
  var hole = document.getElementById("hole");
  var character = document.getElementById("character");
  var score = document.getElementById("score");

  var jumping = 0;

  hole.addEventListener("animationiteration", () => {
    var random = -(Math.random() * 300 + 150);
    hole.style.top = random + "px";
    score.textContent++;
  });
  setInterval(function () {
    switch (gameState) {
      case gameStates.PLAYING:
        var characterTop = parseInt(
          window.getComputedStyle(character).getPropertyValue("top")
        );
        if (jumping == 0) {
          character.style.top = characterTop + 3 + "px";
        }
        var blockLeft = parseInt(
          window.getComputedStyle(block).getPropertyValue("left")
        );
        var holeTop = parseInt(
          window.getComputedStyle(hole).getPropertyValue("top")
        );
        var cTop = -(500 - characterTop);
        // Loss conditions
        if (
          characterTop > 480 ||
          (blockLeft < 20 &&
            blockLeft > -50 &&
            (cTop < holeTop || cTop > holeTop + 130))
        ) {
          gameState = gameStates.LOSE;
          console.log("Game over. Score: " + score.textContent);
          character.style.top = 100 + "px";
          score.textContent = 0;
        }
        break;
      case gameStates.LOSE:
        return;
    }
  }, 20);

  function jump() {
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function () {
      var characterTop = parseInt(
        window.getComputedStyle(character).getPropertyValue("top")
      );
      if (characterTop > 6 && jumpCount < 15) {
        character.style.top = characterTop - 5 + "px";
      }
      if (jumpCount > 20) {
        clearInterval(jumpInterval);
        jumping = 0;
        jumpCount = 0;
      }
      jumpCount++;
    }, 20);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
      jump();
    }
  });
};
