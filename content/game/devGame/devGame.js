import { createGameContainer } from "../createGameContainer.js";

const devGame = () => {
  const video = document.querySelector(".video");
  createGameContainer({ video });
};
devGame();
