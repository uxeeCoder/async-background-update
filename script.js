"use strict";

class AsyncDelay {
  constructor(milliseconds) {
    this.milliseconds = milliseconds;
  }
  async delay() {
    return new Promise((resolve) => setTimeout(resolve, this.milliseconds));
  }
}
const time = 5000;
const body = document.querySelector("body");
const wait = new AsyncDelay(time);
console.log(wait.delay(time));
wait.delay().then(() => {
  body.style.backgroundColor = "blue";
  wait.delay().then(() => {
    body.style.backgroundColor = "green";
    wait.delay().then(() => {
      body.style.backgroundColor = "yellow";
      wait.delay().then(() => {
        body.style.backgroundColor = "white";
      });
    });
  });
});
