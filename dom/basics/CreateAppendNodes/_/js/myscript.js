/*Crating & Appending Nodes*/
/*var myElement = document.createElement('img');
// console.log(myElement);
// Set an attribute with our created element by using dot notation 
// here add source attribute with the element
myElement.src = 'images/artists/Ahmed_Deedat_tn.jpg';
// Add alt tag
myElement.alt = 'Photo of Ahmed Deedat';
// Add non-standard attribute like data-task
myElement.setAttribute('data-task', 'speaker');
// So our element is ready but still we don't see it in our screen
// because its in memory without appending it in our document we can't see it in our page
var myNode = document.querySelectorAll('.artistlist ul li');
// now we append the element with in our desired location
myNode[6].appendChild(myElement);
console.log(myNode[6]);*/
// console.dir(myNode);
// console.log(myElement);

/*Controlling Node insertions*/
/*Use insertBefore() for surgical insertions*/
// Create a paragraph element
/*var pNode = document.createElement('p');
// Create a text node
var myText = document.createTextNode('within walking distance to major shopping venues');
// Append Text node inside paragraph node
pNode.appendChild(myText);
// console.log(pNode);
var newNode = document.querySelector('#thevenue');
// console.dir(newNode);
newNode.insertBefore(pNode, newNode.childNodes[5]);*/

/*Cloning & Removing Nodes*/
var myNode = document.querySelector('.artistlist');
// console.log(myNode);
// Copy the myNode
var newNode = myNode.cloneNode(true);
// console.log(newNode);
var insertLocation = document.querySelector('#sidebar');
// We must copy an elment if we want to use it in different location without copying its lost its original position
// insertLocation.insertBefore(newNode,insertLocation.childNodes[4]);
// If we use the actual element without copying it then it will be repositioned and lost its original position
// insertLocation.insertBefore(myNode,insertLocation.childNodes[4]);
// console.dir(insertLocation);
// removeChild is used for removing a child element
// myNode.parentNode.removeChild(myNode);

// Replace an element
// Firstly select the those element's that those replaced by one another
var myNode = document.querySelector('#featuredartists');
var replaceNode = document.querySelector('#comingtoevent');
replaceNode.parentNode.replaceChild(myNode, replaceNode);