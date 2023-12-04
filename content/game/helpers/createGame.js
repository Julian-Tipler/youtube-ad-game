
export const createGame = () => {
  const game = document.createElement("div");
  game.id = "game";

  const blockDiv = document.createElement("div");
  blockDiv.id = "block";

  const holeDiv = document.createElement("div");
  holeDiv.id = "hole";

  const characterDiv = document.createElement("div");
  characterDiv.id = "character";

  game.appendChild(blockDiv);
  game.appendChild(holeDiv);
  game.appendChild(characterDiv);
  return game;
};
