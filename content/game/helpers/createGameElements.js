export const createGameElements = () => {
  const game = document.createElement("div");
  game.id = "game";

  const blockDiv = document.createElement("div");
  blockDiv.id = "block";

  const holeDiv = document.createElement("div");
  holeDiv.id = "hole";

  const characterDiv = document.createElement("div");
  characterDiv.id = "character";

  const score = document.createElement("div");
  score.id = "score";
  score.textContent = "Score: 0";

  game.appendChild(blockDiv);
  game.appendChild(holeDiv);
  game.appendChild(characterDiv);
  game.appendChild(score);
  return game;
};
