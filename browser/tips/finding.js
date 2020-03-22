/*
<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>


	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info`
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM"


	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find a paragraph by its tag name
    3. Set `elm` to the variable that you found
    4. Alert the inner text of the element with `alert` function, it should alert the text "JavaScript on The DOM" or "Hello World!"


var elm = document.getElementById('info');
alert(elm.innerHTML);

var elm = [];
elm = document.getElementsByTagName('p');
for (i=0; i< elm.length; i++){
	alert(elm[i].innerHTML);
}



<h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>
/*
TODO
// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result

*/

var names = [];
elm = document.getElementsByClassName('name');
for (i=0; i< elm.length; i++){
	names.push(elm[i].innerHTML);
}
alert(names);

/*
	TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info` and set the variable `elm` with its value
    3. Change the contents of that elements to say `JavaScript Rocks!`
*/
var elm = document.getElementById('info');
alert(elm.innerHTML);
elm.innerHTML = 'JavaScript Rocks!';

// TODO:
// 1. Select the element who's attributes you'd like to change and set it to a variable
// 2. Change the width attribute of that element to 200 instead of the default 400 that it starts with in the HTML
// 3. Set a 1 second delay, then change it back to 400

const changeSize = function() {
  document.getElementById('lhl-logo').width = '200';
}
setTimeout(changeSize, 3000);