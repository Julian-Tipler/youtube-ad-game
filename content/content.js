import StateController from "./controllers/StateController";
import { createGameContainer } from "./game/createGameContainer";
import "./content.css";

console.log("content.js 🚀");
window.addEventListener("load", () => {
  const stateController = new StateController();
  setInterval(() => {
    // every 50ms select for ad
    const video = document.querySelector("video");
    if (!video) return;
    const initialVolume = video.volume;

    // if the ad video is playing
    const ad = [...document.querySelectorAll(".ad-showing")][0];
    if (ad) {
      console.log("VIDEO AND AD ARE SHOWING");
      // if the video isn't blocked already
      if (stateController.fetchState != "blocked") {
        video.style.zIndex = "-1";
        video.volume = 0;
        createGameContainer({ video });
        stateController.blocked();
      }
      const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
      if (skipButton) {
        skipButton?.click();
        stateController.searching();
      }
      // if the non-ad video is not playing
    } else {
      stateController.regularVid();
      video.style.zIndex = "1";
      video.volume = initialVolume;
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
