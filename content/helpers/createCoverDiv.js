import { game } from "../game/game";

export const createCoverDiv = ({ video }) => {
  const height = video.offsetHeight;
  const width = video.offsetWidth;

  const coverDiv = document.createElement("div");
  coverDiv.classList.add("coverDiv");
  coverDiv.style.height = height + "px";
  coverDiv.style.width = width + "px";
  const gameContainer = game();
  coverDiv.appendChild(gameContainer);
  return coverDiv;
};
