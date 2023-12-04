import { createGameContainer } from "./game/createGameContainer";
import "./content.css";
import VideoController from "./controllers/VideoController";

console.log("content.js 🚀");
window.addEventListener("load", () => {
  const adContainer = document.querySelector(".html5-video-player");
  const video = document.querySelector("video");

  // Monitors the ad container for changes in class
  // If the class changes to "ad-showing" the video is hidden and the game is created
  // If "ad-showing" is removed the video is revealed and the game is removed
  if (adContainer && video) {
    const videoController = new VideoController(video);

    // Monitors the existing ad container for changes in class
    const adContainerObserver = new MutationObserver(
      handleAd({ videoController })
    );
    adContainerObserver.observe(adContainer, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Monitors the body for changes in child elements
    setInterval(() => {
      const skipButton = document.querySelector(".ytp-ad-skip-button-modern");
      if (skipButton) {
        skipButton?.click();
      }

      const overlay = document.getElementsByClassName(
        "ytp-ad-player-overlay-flyout-cta"
      )[0];
      if (overlay) {
        overlay.style.display = "none";
      }
    }, 200);
  }
});

const handleAd = ({ videoController }) => {
  return (mutations) => {
    mutations.forEach((mutation) => {
      const targetElement = mutation.target;
      if (targetElement.classList.contains("ad-showing")) {
        videoController.hidden();
        createGameContainer({ video: videoController.video });
      } else {
        videoController.revealed();
        // Remove the game container
      }
    });
  };
};
