// B1
{
let a = 5;
let b = 6;
let x;
console.log(a,b);
x=a;
a=b;
b=x;
console.log(a,b);
a = a + b;
b = a - b;
a = a - b;
console.log(a,b);
console.log(b,a);
}

// B2
{
let s = 'Hello beauty there';
let a = s.split(' ');
console.log(a);
}

// B3
{
let a =[4,5,7,-8];
console.log(...a)
}

// B4
{
let shop = ['Jeans', 'T-Shirt', 'Socks'];
let x;
let item, quantity;
    while(true){
        x = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
        if(x == null){
            alert('Bye');
            break;
        }
        else if(x == 'C'){
            item = prompt('Enter the name of the new item');
            shop.push(item);
            console.log(...shop);
            alert('Done');
        }        
        else if(x == 'R'){
            console.log(...shop);
            alert('Done');
        }
        
        else if(x == 'U'){
            quantity = Number(prompt('Enter the position'));
            item = prompt('Enter the name of the new item');
            shop[quantity] = item;
            console.log(...shop);
            alert('Done');
        }
        else if(x == 'D'){
            quantity = Number(prompt("Enter the position"));
            shop.splice(quantity, 1);
            console.log(...shop);
            alert('Done');
        }
        else{
            alert('This command is not supported');
        }
    }
}

// B5
{
let a = prompt('Enter a squence of Number , separated by commas (,)');
let b = a.split(',');
let sum = 0
for(i=0;i<b.length;i++){
    sum += Number(b[i]);
}
alert(`The sum of them is ${sum}`)
}

// B6
{
let a = prompt('Enter a squence of Number , separated by commas (,)');
let b = a.split(',');
alert('The smallest number is ' + Math.min(...b));
}

// B7
{
let a = [3,4,6,-9,10,-88,2];
let x = Number(prompt('Enter a number'));
for(i=0;i<a.length;i++){
    if(x==a[i]){
        alert(`${x} is FOUND in my array at index `+i)
    }
    else{
        alert(`${x} is NOT found in my array`);
    }
}
}

// B8
// 8.1
{
let sheep = [5,7,300,90,24,50,75];
console.log('Hello, my sheep is size');
console.log(...sheep);

// 8.2

console.log('Now my biggest sheep has size ' + Math.max(...sheep));

// 8.3

console.log('After shearing, here is my flock');
sheep[sheep.indexOf(Math.max(...sheep))]=8;
console.log(...sheep);

// 8.4

for(i=0;i<sheep.length;i++)
sheep[i]+=50;
console.log('1 month');
console.log(...sheep);
}
// 8.5
{
let sheep = [5,7,300,90,24,50,75];
    console.log('Hello, my sheep is size');
    console.log(...sheep);
    console.log('After shearing, here is my flock');
    sheep[sheep.indexOf(Math.max(...sheep))]=8;
    console.log(...sheep);
let n = Number(prompt('Enter the number of month'));
let x = 1;
while (x < n) {
    for (i=0; i<sheep.length;i++) sheep[i] += 50;
        console.log(`${x} month`);
        console.log(...sheep);
    if (x != n) {
        console.log('Now my biggest sheep has size ' + Math.max(...sheep));
        console.log('After shearing, here is my flock');
        sheep[sheep.indexOf(Math.max(...sheep))]=8;
        console.log(...sheep);
        x++;
    }
    else{
        break;
     }
 }

// 8.6

let sum = 0;
for(i=0;i<sheep.length;i++)
    sum +=sheep[i];
    console.log(`Total size: ${sum}`);
    console.log(`I would get ${sum*2}$`);
}