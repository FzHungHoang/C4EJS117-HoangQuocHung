// Vd1.1
{
console.log(Math.random())
}
// Vd1.2
{
let shows=[2,4,6,9,-3];
let s=s[Math.floor(Math.random()*shows,length)];
console.log(s);
}
// Vd1.3
{
let quiz=[
    {
        Q1:'Bên cạnh Lục Ngạn, vải thiều của vùng địa phương nào cũng nổi tiếng không kém?',
        Ar:['1.Ba Vì (Hà Nội)','2.Thanh Hà(Hải Dương)','3.Giao Thủy(Nam Định)','4.Đông Hưng(Thái Bình'],
        right: 2
    },
    {
        Q2:'Nhắc tới nhãn lồng là phải nghĩ ngay đến tỉnh thành nào?',
        AR:['1.Hưng Yên','2.Vĩnh Phúc', '3.Bắc Ninh', '4.Thái Bình'],
        right: 1  
    },
    {
        Q3:'Loại bưởi đặc sản của tỉnh Vĩnh Long có tên là gì?',
        AR:[ '1.Năm cây','2.Năm căn','3.Năm roi','4.Năm tiền'],
        right: 3 
    },
    {
        Q4:'Nhắc đến quả na, đâu là địa phương nổi tiếng trồng được giống quả thơm ngon nhất?',
        AR:[ '1.Hà Giang','2.Lạng Sơn','3.Bắc Kạn','4.Cao Bằng'],
        right: 2  
    }
];
let poin=0;
let quizC=quiz.length;
for(i=o;i<quizC;i++){
    let quizR=quiz[Math.floor(Math.random()*quizC)];
    let quizS=quizR;
    let answer=Number(prompt(quizS.Ar+'\n'+quizS.right.join('\n')));
    for(let q of quiz){
        if(q==quizS){
            if(q==quiz.AR){
                console.log('Chính xác');
                poin++;
            }
            else{
                console.log('Sai');
            }
        }
    }
}
}
// B2.1
{
let r=['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
const countData={};
for(i=0;i<r.length;i++){
    const c =r[i].toLocaleLowerCase();
    if(countData[c]){
        countData[c] ++;
    }
    else{
        countData[c]=1;
    }
}
console.log(countData);
}
// B2.2
{
const inventory = [
    {
        name: 'HP Envy 13aq',
        price: 21000,
        brand: 'HP',
        quantity: 5,
    },
    {
        name: 'Dell XPS 9370',
        price: 30000,
        brand: 'Dell',
        quantity: 1,
    },
    {
        name: 'Dell Inspiron 3567',
        price: 9300,
        brand: 'Dell',
        quantity: 12,
    },
    {
        name: 'Dell Latitude E5450',
        price: 8600,
        brand: 'Dell',
        quantity: 2,
    },

    {
        name: 'Asus Zenbook',
        brand: 'Asus',
        price: 20000,
        quantity: 4,
    },
    {
        name: 'HP Pavilion',
        brand: 'HP',
        price: 14000,
        quantity: 7,
    },]

// B3.3
let inventoryByBrand={
    'Dell':[],
    'HP':[],
    'Asus':[],
    };
for(i=0;i<inventory.length;i++){
    let manus=inventory[i];
    let brand=manus.brand;
    inventoryByBrand[brand].push(manus);
    }
console.log(inventoryByBrand);

// B2.4
let brandP=prompt('Which brand?');
for(i=0;i<inventoryByBrand.length;i++){
    let brandC=0;
    let lap='';
    for(c=0;c<inventoryByBrand.length;c++){
        if(brandP==inventoryByBrand[i][c]){
            brandC++;
            lap='';
        }
    }
}
alert(`There aer ${brandC} genertions of ${brandP} in inventory: ${lap}`)
}