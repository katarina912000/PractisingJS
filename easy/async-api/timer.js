//3.
//timer, set interval, clear interval, interval id

function startTimer() {
  let c = 0;
  const intervalID = setInterval(() => {
    c++;
    console.log(`${c} seconds`);
    if (c === 10) {
      clearInterval(intervalID);
      console.log("time's up");
    }
  }, 1000);
}
startTimer();
