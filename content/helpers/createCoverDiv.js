import { funFacts } from "../funFacts";

export const createCoverDiv = ({ video }) => {
  const height = video.offsetHeight;
  const width = video.offsetWidth;

  const coverDiv = document.createElement("div");
  coverDiv.classList.add("coverDiv");
  coverDiv.style.height = height + "px";
  coverDiv.style.width = width + "px";
  const coverDivText = document.createElement("div");
  coverDivText.classList.add("coverDivText");
  coverDivText.innerText =
    funFacts[Math.floor(Math.random() * funFacts.length)];
  coverDiv.appendChild(coverDivText);
  return coverDiv;
};
