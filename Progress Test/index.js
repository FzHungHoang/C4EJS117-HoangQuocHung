// B1
function reverse(str) {
   var string=str.split("");
   var arrStr=string.reverse();
   return arrStr.join(""); 
  }
console.log(reverse('program'));
// B2
function capitalize(str) {

	var strArr=str.split(" ");
	for(i=0;i<strArr.length;i++){
      let charArr=strArr[i].split("");
	    charArr[0]=charArr[0].toUpperCase();
      strArr[i]=charArr.join("");
	    
	}
	return strArr.join(" ");
}
console.log(capitalize('this is test'));
// B3
function unique(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  console.log(unique([1,2,3,3,4,5,4,4,4,5,5]))
// B4


// B5
let main
    let ngay, thang, nam, ngaymax;
    let ngay=prompt("Nhập ngày");
    
    let thang=prompt("Nhập tháng");
    
    let nam=prompt("Nhập năm");
   
    if (nam<0 || thang<0 || thang> 12 || ngay<0 || ngay> 31)
    {
        alert("Ngay khong hop le");
    }
    else
    {
        switch (thang)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
              ngaymax=31;
              break;
            case 2:
                if ((nam%4==0 && nam%100!=0) || (nam%400==0))
                    ngaymax=29;
                else 
                    ngaymax=28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                ngaymax=30;
                break;
        }
        if (ngay<=ngaymax)
        {
            alert("Ngay hop le !");
        }
        else
        {
            alert("Ngay khong hop le !");
        }
    }

// B5
function checkDate(strDate) {
    var comp = strDate.split('/')
    var d = parseInt(comp[0], 10)
    var m = parseInt(comp[1], 10)
    var y = parseInt(comp[2], 10)
    var date = new Date(y,m-1,d);
    if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
      return true
    }
    return false
}