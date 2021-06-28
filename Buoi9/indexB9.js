// B1
const fetchPromise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
fetchPromise.then(connection => {
  console.log('Connected');
  console.log(connection);
  const jsonPromise = connection.json();
  console.log(jsonPromise)
});
// B3
async function load() {
  const conn = await fetch('https://sheetdb.io/api/v1/58f61be4dda40');
  const data = await conn.json();
  console.log(data[0].id);
  console.log(data[0].name);
  console.log(data[0].age);
}
load();
// B4
function asd() {
  const x = Math.floor(Math.random() * 11);
  console.log(x);
    if (x < 0) {
        console.log('Failed: the number is smaller than 0');
    } else if (x > 10) {
        console.log('Failed: the number is bigger than 10');
    } else {
        console.log('Passed, bravo');
    }
}
asd();
// B5
function mayBe(a, b) {
  let c = b - a;
  return Math.floor(Math.random() * c + a);
}
function asdf() {
  const x = mayBe(4, 16);
  console.log(x);
    if (x < 4) {
        console.log('Failed: the number is smaller than 0');
    } else if (x > 16) {
        console.log('Failed: the number is bigger than 10');
    } else {
        console.log('Passed, bravo');
    }
}
asdf();
// B6
function a(x1, y1, x2, y2) {
  let a = (x1 - x2) * (x1 - x2);
  let b = (y1 - y2) * (y1 - y2);
  return Math.sqrt(a + b);
}

function asdzx() {
  const d = a(3, 10, 0, 6);
  console.log(d)
    if (d !== 5) {
        console.log('Failed: the calculation is wrong');
    } else {
        console.log('Passed, bravo');
    }
}
asdzx();
// B7
async function quote() {
  const conn = await fetch("http://quotes.rest/qod.json");
  const data = await conn.json();
  console.log(data);
  document.getElementById("qu").textContent = data.contents.quotes[0].quote;
  document.getElementById("au").textContent = data.contents.quotes[0].author;
}
quote();