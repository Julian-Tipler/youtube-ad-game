export default class VideoController {
  constructor(video) {
    this.video = video;
    this.initialVolume = video.volume;
  }

  hidden() {
    this.video.style.zIndex = "-1";
    this.video.volume = 0;
  }
  revealed() {
    this.video.style.zIndex = "1";
    this.video.volume = this.initialVolume;
  }
}
