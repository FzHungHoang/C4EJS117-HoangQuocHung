//B1
//1
// var và const dùng để khai báo biến
//2,3,4
// var vs let vs const
//
// Var
// Phạm vi chức năng
// Không xác định khi truy cập một biến trước khi nó được khai báo
//
// Let
// Phạm vi khối
// Lỗi tham chiếu khi truy cập một biến trước khi nó được khai báo
//
// Const
// Phạm vi khối
// Lỗi tham chiếu khi truy cập một biến trước khi nó được khai báo 
// không thể được chỉ định lại

//B2
//1
// Đối tượng Boolean biểu diễn hai giá trị, hoặc "true" hoặc "false".
//2
// Kết quả boolean "true" hoặc "false".

//B3
//a
let x = 0
while(x<7){
    console.log(x)
    x++;
}

//b
{
let n = prompt("Enter a number");
    for (i = 0; i < n; i++){
       console.log(i);
    }
}

 //c
 {
let n = prompt("Enter a number");
    for (i = 3; i < n; i++){
        console.log(i);
    }
}

//d
{
let c = prompt('Enter c');
let n = prompt('Enter n');
for(i=c; i<n;i++){
    console.log(i);
    }
}

//e
{
let c = prompt('Enter c');
let n = prompt('Enter n');
for(i=c; i<n;i+=3){
    console.log(i);
    }
}

//f
{
let n = prompt('Enter n');
let c = prompt('Enter c');
let s = prompt('Enter s');
for(i=c; i<n;i+=s){
    console.log(i);
    }
}

//B4
{
	let n = prompt("Enter a number");
    let giaithua = 1;
	for (i = 1; i <= n; i++) {
	giaithua = giaithua*i
	}
    alert('The factorial of '+ giaithua)
}

//B5
{
let age=prompt('How old are you?');
if (age <14){
    alert('You are not old enough to view this content');
}
else {
    alert('Enioy!!')
}
}

//B6
{
let n = prompt("Enter a number");
if(n<=4.5){
    alert('Lower half of 9')
}
else{
    alert('Higher half of 9')
}
}

//B7
{
let x = prompt('Enter x');
let n = prompt('Enter n');
if(x <= n/2){
    alert(`${x} is in lower half of ${n}`)
}
else{
    alert(`${x} is in higher half of ${n}`)
}
}

//B8
{
let x = prompt('Enter a number')
if(x % 2==0){
    alert(`${x} is an even number`)
}
else {
    alert(`${x} is an odd number`)
}
}

//B9
//c
{
for (let i = 1; i <= 8; i++) {
    if (i <= 8/2) {
        console.log(0);
        console.log(1);
    }
} 
}

//d
{
let n = prompt('Enter the total number of 1 and 0?');
for (let i = 1; i <= n; i++) {
    if (i <= n/2) {
        console.log(0);
        console.log(1);
        }
    }
    if (n % 2 != 0){
        console.log(0);
    }
}

//a
{
for (let i = 1; i <= 6; i++) {
    if (i <= 6/2) {
        console.log('L');
    }
    else {
        console.log('H');
    }
} 
}

//b
{
let n = prompt('Enter the total number of L and H?');
    let a = Math.ceil(n/2);
    for (let i = 1; i <= n; i++) {
        if (i <= a) {
            console.log('L');
        }
        else {
            console.log('H');
        }
    } 
}
//B10
let m = prompt('Your weight in Kg');
let h = prompt('Your height in M');
let BMI = `${m/(h*2)}`
alert(`Your BMI is ${BMI}`)
if(BMI<16){
    alert('You are severely underweight')
}
else if(BMI<=18.5){
    alert('You are underweight')
}
else if(BMI<=25){
    alert('You are normal')
}
else if(BMI<=30){
    alert('You are overweight')
}
else{
    alert('You are obese')
}