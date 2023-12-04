import { createGameContainer } from "./createGameContainer.js";

console.log("mockGame.js 🚀");
const mockGame = () => {
  console.log("mockGame");
  const video = document.querySelector(".video");
  createGameContainer({ video });
};
mockGame();
