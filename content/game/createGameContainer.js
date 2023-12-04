import { createGame } from "./helpers/createGame.js";
import { flappyCode } from "./helpers/flappyCode.js";

// Contains no game logic, just creates the game container and handles screen resizing
export const createGameContainer = ({ video }) => {
  const height = video.offsetHeight;
  const width = video.offsetWidth;

  const gameContainer = document.createElement("div");
  gameContainer.classList.add("game-container");
  gameContainer.style.height = height + "px";
  gameContainer.style.width = width + "px";
  gameContainer.appendChild(createGame());
  video.parentNode.appendChild(gameContainer);
  flappyCode();

  // Once the gameContainer is created, we can observe the video element for changes in size
  const resizeObserver = new ResizeObserver(handleResize({ gameContainer }));
  resizeObserver.observe(video);
  return gameContainer;
};

const handleResize = ({ gameContainer }) => {
  return (entries) => {
    for (const entry of entries) {
      const { width, height } = entry.contentRect;
      gameContainer.style.height = height + "px";
      gameContainer.style.width = width + "px";
    }
  };
};
