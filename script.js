
var userinput = document.getElementById("userInput");
var enter = document.getElementById("enter");
var ulist = document.querySelector("ul");

/*Main function. If user type anything in the field, add a li elemento to the list-item html class.
Also add a button to remove the element. At the end, add listeners to cross the item as completed, remove the item and,
obviously, insert the item.*/

function addListItem() {

if(checkLength()) {

	var newitem = document.createElement("li");
	var button = document.createElement("button");
	newitem.appendChild(document.createTextNode(userinput.value));
	newitem.appendChild(button);
	button.appendChild(document.createTextNode("X"));
	ulist.appendChild(newitem);
	userinput.value = "";
	}

	function removeItem() {
	
	newitem.classList.add("delete");

	}

	function crossItem() {
	
	newitem.classList.toggle("done");

	}

	function checkLength() {

	if(userinput.value.length > 0) {
		return true;
		}
	}

	button.addEventListener("click", removeItem);
	newitem.addEventListener("click", crossItem);
}

enter.addEventListener("click", addListItem);
enter.addEventListener('keydown', function (e) {

    if (13 === e.keyCode) { 

    }
});





