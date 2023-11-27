import { funFacts } from "./funFacts";
import StateController from "./stateController";

console.log("content.js 🚀");
window.addEventListener("load", () => {
  const stateController = new StateController();
  setInterval(() => {
    const ad = [...document.querySelectorAll(".ad-showing")][0];

    if (ad) {
      const video = document.querySelector("video");
      const skipBtn = document.querySelector(".ytp-ad-skip-button-modern");
      if (video) {
        video.style.zIndex = "-1";
        video.volume = 0;
        const height = video.offsetHeight;
        const width = video.offsetWidth;
        if (stateController.fetchState != "blocked") {
          Log("blocking");
          const coverDiv = document.createElement("div");
          coverDiv.classList.add("coverDiv");
          coverDiv.style.height = height + "px";
          coverDiv.style.width = width + "px";
          console.log(
            "height",
            "width",
            coverDiv.style.height,
            coverDiv.style.width
          );
          const coverDivText = document.createElement("div");
          coverDivText.classList.add("coverDivText");
          coverDivText.innerText =
            funFacts[Math.floor(Math.random() * funFacts.length)];
          coverDiv.appendChild(coverDivText);
          video.parentNode.appendChild(coverDiv);
          stateController.blocked();
        }
      }

      if (skipBtn) {
        Log("skipBtn clicked");
        skipBtn?.click();
        stateController.searching();
      }
    } else {
      const video = document.querySelector("video");
      if (video) {
        video.style.zIndex = "1";
        video.volume = 1;
      }
    }
    const overlay = document.getElementsByClassName(
      "ytp-ad-player-overlay-flyout-cta"
    )[0];

    if (overlay) {
      overlay.style.display = "none";
    }
  }, 50);
});

const Log = (msg) => {
  console.log("***" + "\n" + msg + "\n" + "***");
};
