import "./game.css";

export const game = () => {
  const gameContainer = document.createElement("div");
  gameContainer.id = "game";

  const blockDiv = document.createElement("div");
  blockDiv.id = "block";

  const holeDiv = document.createElement("div");
  holeDiv.id = "hole";

  const characterDiv = document.createElement("div");
  characterDiv.id = "character";

  gameContainer.appendChild(blockDiv);
  gameContainer.appendChild(holeDiv);
  gameContainer.appendChild(characterDiv);

  return gameContainer;
};
