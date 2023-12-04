const states = {
  searching: "searching",
  blocked: "blocked",
  regularVid: "regularVid",
};
export default class StateController {
  constructor() {
    this.state = states.searching;
  }

  searching() {
    this.state = states.searching;
  }
  blocked() {
    this.state = states.blocked;
  }
  regularVid() {
    this.state = states.regularVid;
  }
}
