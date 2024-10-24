//ne razumem najbolje zadatak ocigledno

//cinioci
//ideja je da od svih cinioca izdvojim one koji su prosti
let finalNiz = [];

let fu = (n) => {
  let nizCinioci = [];
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      nizCinioci.push(i);
    }
  }
  for (let i = 1; i < nizCinioci.length; i++) {
    for (let j = 2; j < Math.sqrt(nizCinioci[i]); j++) {
      if (nizCinioci[i] % j === 0) {
        finalNiz.push(j);
      }
    }
  }
};
fu(400);
finalNiz.forEach((element) => {
  console.log(element);
});
