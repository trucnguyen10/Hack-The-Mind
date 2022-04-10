var addItemId = 0;
var listItems;
var listAudios;

function addToCart(item)
{
	addItemId += 1;
	var selectedItem = document.createElement('div');
	selectedItem.setAttribute('id',addItemId);
	var title = document.createElement('div');
	title.innerText = item.innerText;
	var delBtn = document.createElement('button');
	delBtn.innerText = 'Delete';
	delBtn.setAttribute('onclick', 'del('+addItemId+')');
	listItems = document.getElementById('title');
	selectedItem.append(title);
	selectedItem.append(delBtn);
	listItems.append(selectedItem);

	var music = document.createElement('audio');
	listItems = document.getElementsByName('audio');
	//listItems.append(music);
}

function del(item)
{
	document.getElementById(item).remove();
}
