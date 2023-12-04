export default class VideoController {
  constructor(video) {
    this.video = video;
    this.initialVolume = video.volume;
  }

  block() {
    this.video.style.zIndex = "-1";
    this.video.volume = 0;
  }
  reveal() {
    this.video.style.zIndex = "1";
    this.video.volume = this.initialVolume;
  }
}
