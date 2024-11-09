//2.
//promises
//using promises, settimeout
function funcPromise() {
  return new Promise((resolve, reject) => {
    const time = 2003;
    setTimeout(() => {
      if (time > 2000) {
        resolve("true");
      } else {
        reject("false");
      }
    }, time);
  });
}

funcPromise()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
