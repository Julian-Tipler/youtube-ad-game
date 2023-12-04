import { createGameElements } from "./createGameElements.js";
import { injectGameLogic } from "./injectGameLogic.js";

export const createGame = ({ gameContainer }) => {
  gameContainer.appendChild(createGameElements({ gameContainer }));
  injectGameLogic();
};
