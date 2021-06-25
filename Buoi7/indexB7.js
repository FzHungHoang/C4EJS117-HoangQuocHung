// B1 
// 1-D
// 2-C
// 3-A
// 4-D

// B3
// a. Yes
// b. No

// B4
{
    let a=document.getElementsByTagName("li");
    console.log(a[1]);
    for(let item of a){
        console.log(item);
    }
}

// B11
list = document.getElementById("button");
list.insertAdjacentHTML("afterBegin", '<button id="upper_btn" onClick="convertToUpperCase()">Upper it!!!</button>');
list.insertAdjacentHTML("afterBegin", '<input type="text" id="name_input" placeholder="Enter your name">');
list.insertAdjacentHTML("beforeEnd", '<div id="result_div">Your result will appear here</div>')
function convertToUpperCase(){
    let data = document.getElementById('name_input').value;
    let upperCase = data.toUpperCase();
    console.log(upperCase);
    document.getElementById("result_div").innerHTML = upperCase;
}
//12
let itemList="";
let i = 0;
function addItem(){
    let items= document.getElementById("addItem").value; 
        if(items != ""){
            itemList += "<li><span name='itemItem' id='itemItem"+ i +"'>" + items + "</span> " + "<button onclick='removeItem()'>remove</button></li>";
            i++;
	        document.getElementById("item").innerHTML = itemList;
	        document.getElementById("addItem").value="";				
	}
}

function removeItem(){
	itemlList="";
	let items = document.querySelectorAll("#item li"),index,tab = [];
	for(j = 0; j < items.length; j++){
	    tab.push(items[j].innerHTML);
    }
	for(j = 0; j < items.length; j++){
		items[j].onclick = function(){
		index = tab.indexOf(this.innerHTML);
		items[index].parentNode.removeChild(items[index]);
	    tab.pop(j,1);
			};
        }
}