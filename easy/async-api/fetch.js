//1.
//make function which will call dog api
// funct fetchData, GET, and with await is waiting for the response

async function fetchData() {
  try {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
}

fetchData();

//search what can be difficulties in fetching and receiving data back
