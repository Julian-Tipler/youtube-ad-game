import StateController from "./controllers/StateController";
import { createGameContainer } from "./game/createGameContainer";
import "./content.css";
import VideoController from "./controllers/VideoController";

console.log("content.js 🚀");
window.addEventListener("load", () => {
  const stateController = new StateController();
  // Every 200ms check if video and ad are playing
  setInterval(() => {
    const video = document.querySelector("video");
    const ad = [...document.querySelectorAll(".ad-showing")][0];
    // Do nothing if there is no video element
    if (!video) return;
    const videoController = new VideoController(video);
    // If there is an ad element load the game
    if (ad) {
      // if the video isn't blocked already
      if (stateController.fetchState != "blocked") {
        videoController.block();
        createGameContainer({ video });
        stateController.blocked();
      }
      const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
      if (skipButton) {
        skipButton?.click();
        stateController.searching();
      }
    }
    // if the regular (non-ad) video is playing change video settings to normal
    else {
      stateController.regularVid();
      videoController.reveal();
    }
    const overlay = document.getElementsByClassName(
      "ytp-ad-player-overlay-flyout-cta"
    )[0];

    if (overlay) {
      overlay.style.display = "none";
    }
  }, 200);
});
