//B1
//1
// Tên biến bắt đầu bằng số. VD: let 21ever
// Có các ký tự đặc biệt trừ "_" và "$". VD: const @gmail
// Tên biến có chứa các từ khóa keyworld. VD var case
//2 
// Mỗi biến sẽ mang một giá trị và mỗi giá trị nagy sẽ có một kiểu dữ liệu khác nhau, 
// để kiểm tra thuộc kiểu dữ liệu nào ta cần xem đến biến của giá trị đó.

//B2
// 1-b; 2-a; 3-e; 4-c;

//B3
//a
let message = "Coding is great";
console.log(message);
//b
let studentcount = 0;
console.log(studentcount);

//B4
//a
{
    //input
    let message = "Coding is great";
    // process update
    message = "Coding might not be easy, but still great"
    console.log(message);
    //output
}
//b
{
    //input
    let studentcount = 0;
    // process update
    studentcount = 16;
    console.log(studentcount);
    //output
}
//c
{
    //input
    let message = "Coding is great";
    // process update
    message = "Coding might not be easy, but still great"
    message = message.toLocaleLowerCase()
    console.log(message);
    //output
}
//d
{
    //input
    let studentcount = 0;
    // process update
    studentcount = 16;
    studentcount = studentcount+1;
    console.log(studentcount);
    //output
}

//B5
alert("You look beautifull day" );

//B6
let name = prompt("Hi there, your name please?");
alert(`Hi `+ name);

//B7
let firstname = prompt("Enter your first name");
let lastname = prompt("Enter your last name");
alert(`Hi `+lastname+` `+firstname);

//B8
let length = prompt("Enter side length of the square");
alert(`The square area is `+ length*length);
//B9

let radius = prompt("Enter the radius of the circle");
alert(`The circle area is `+ radius*3.14);

//B10
let temperature = prompt("Enter the temperature of the circle");
alert(temperature + ` (C) = `+`${temperature*9/5+32}`+' (F)')