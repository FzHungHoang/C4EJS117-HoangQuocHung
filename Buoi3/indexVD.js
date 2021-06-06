// Init

let movie=['Eighty Six', 'Aldnoah.Zero', 'Gate', 'The Legend of the Galactic Heroes'];
console.log(movie);

// Create

let movie=['Eighty Six', 'Aldnoah.Zero', 'Gate', 'The Legend of the Galactic Heroes'];
movie.push(newMovie);
console.log(movie);

// Read

let x = prompt('Read position');
console.log(movie[x]);

// Update

a = prompt('Update position');
b = prompt('Enter the name');
movie[a]=b;
console.log(movie);

// Delete

a = prompt('Delete position');
movie.splice(a,1);
console.log(movie);

// Read All

for(i=0;i<movie.length;i++){
    console.log(movie[i]);
}

// Update All

for(i=0;i<movie.length;i++){
    movie[i]= movie[i].toUpperCase();
}
console.log(movie);

// While

let n;
while (true) {
    n=String(prompt('Name movie'));
    if(n){
        // n invalid
        break;
    }
}
console.log(n)

// BT
{
let a = ['1. None',' 2. 4 legs',' 3. 8 legs', ' 4. 12 legs'];
alert(a)
while (true) {
    let n = Number(prompt(`How many legs does a spider have?`))
    if (n == null || n == undefined) {
        alert('GoodBye!');
        break;
    }
    else if(n==3){
        alert('Bravo, you are correct');
        break;
    }
    else{
        alert('Good luck next time');
    }
}
}