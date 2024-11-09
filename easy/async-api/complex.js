//4.
//combination with promisses, settimeout,,fetch
//Kreiraj funkciju fetchWithDelay koja vraća Promise
//koji se rešava posle 2 sekunde sa podacima { name: 'Test', age: 25 }.
//Koristi async/await da sačekaš rezultat i ispišeš ga u konzolu.

function fetchWithDelay() {
  return new Promise((resolve) => {
    let person = { name: "Leo", age: 36 };
    const time = 5000;
    setTimeout(() => {
      resolve(person);
    }, time);
  });
}

async function fun() {
  const data = await fetchWithDelay();
  console.log(data);
}

fun();
