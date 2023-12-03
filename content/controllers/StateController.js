const fetchStates = {
  searching: "searching",
  blocked: "blocked",
  regularVid: "regularVid",
};
export default class StateController {
  constructor() {
    this.fetchState = fetchStates.searching;
  }

  searching() {
    this.fetchState = fetchStates.searching;
  }
  blocked() {
    this.fetchState = fetchStates.blocked;
  }
  regularVid() {
    this.fetchState = fetchStates.regularVid;
  }
}
