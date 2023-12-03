import { funFacts } from "../constants/funFacts.js";
export const createText = () => {
  const coverDivText = document.createElement("div");
  coverDivText.classList.add("coverDivText");
  coverDivText.innerText =
    funFacts[Math.floor(Math.random() * funFacts.length)];
  return coverDivText;
};
