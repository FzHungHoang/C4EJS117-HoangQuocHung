// B1
{
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
    };
    for (let x in product) {
    console.log(x);
    }
// 1.1
// x receives from product is property
// 1.2
    for (const [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
      }
    for (const property in product) {
        console.log(`${property}: ${product[property]}`);
      }
}

// B2
{
const task = {
  subject: 'Implement login feature',
  createdBy: 'Hoang Ngoc Duc',
  assignTo: 'Nguyen Phuong Nam',
  dueDate: '2019-10-08T18:00:24+0000',
  expectedHours: 0.5,
  };
var {subject,dueDate,assignTo}=task;
  console.log(subject);
  console.log(dueDate);
  console.log(assignTo);
}

// B3
// B3.1 Object
// B3.2 Array
// B3.3
// for(let x of jobSearch.hits) {console.log(x);}

// B4
// B4.1
{
let dictionary = {
  debug: 'The process of figuring out why your program has a certain error and how to fix it',
  done: 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)',
  defect:'The formal word for ‘error’',
  pm: 'The short version of Project Manager, the person in charge of the final result of a project',
  'ui/ux': 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
};
alert("Hi there, this is dev dictionary");
let key = prompt("Enter a keyword");
let i = dictionary[key];
  if(i != null) {
    alert(`${key} ` + i);}
  else {
    alert(`We could not find your word: ${key}`);
  }

// B4.2
while (true) {
  alert("Hi there, this is dev dictionary");
  let key = prompt("Enter a keyword");
  let i = dictionary[key];
    if(i != null) {
      alert(`${key} ` + i);
    }
    else {
      let a = prompt(`We could not find your word: ${key}, leave your explanation`);
      dictionary[key]=a;
      alert(`Done`);
    }
}
}

// B5
{
let product = [
  {
  name: 'Xiaomi portable charger 20000mah',
  brand: 'Xiaomi',
  price: 428,
  color: 'White',
  category: 'Charger',
  providers : 'Phukienzero Dientuccc',
  },
  {
  name: 'VSmart Active 1',
  brand: 'VSmart',
  price: 5487,
  color: 'Black',
  category: 'Phone',
  providers : 'Tgdd Ddghn VhStore',
  },
  {
  name: 'IPhone X',
  brand: 'Apple',
  price: 21490,
  color: 'Gray',
  category: 'Phone',
  providers : 'Tgdd',
  },
  {
  name: 'Samsung Galaxy A9',
  brand: 'Samsung',
  price: 8490,
  color: 'Blue',
  category: 'Phone',
  providers : 'Tgdd',
  }
];

// 5.1

for(i=0;i<product.length;i++){
  let a=product[i];
  console.log('.............');
  console.log('Name: ' + a.name);
  console.log('Price: '+ a.price);
}

// B5.2

for(i=0;i<product.length;i++){
  let a=product[i];
  console.log(`${Number(i)+1}` +'. '+ a.name);
  console.log('Price: '+ a.price);
}
let x=prompt('Enter the postion');
let p=product[x-1];
for(let b in p){
  console.log(b + ': '+p[b]);
}

// B5.3

let cate = prompt('Enter your category');
for(let items in product){
  if(product[items].category == cate){
    console.log('...........');
    console.log('Name: ' + product[items].name);
    console.log('Price: '+ product[items].price);
  }
}

// 5.4

for(let items in product){
  console.log('...........');
    console.log('Name: ' + items.name);
    console.log('Price: '+ items.price);
    console.log('Providers: '+ items.providers);
}
}