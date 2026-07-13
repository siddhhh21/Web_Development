let element = document.getElementById("title");
let x = document.getElementsByClassName("text");
document.getElementsByTagName("p");
document.querySelector("#title");
document.querySelector(".text");
document.querySelectorAll(".text");

// Changing Text
element.innerText = "Hello";
element.textContent = "Hello";

// Changing CSS
element.style.color="red";
element.style.background="yellow";
element.style.fontSize="30px";

// Changing Attributes
element.setAttribute("class","heading");
element.setAttribute("id","title");
element.setAttribute("style","color:blue; background:green; font-size:20px;");

// Changing Classes
element.classList.add("heading");
element.classList.remove("heading");
element.classList.toggle("heading");
element.classList.toggle("bg-blue", true);

// Creating Elements
let div=document.createElement("div");
div.innerText="Hello";
div.id = "my-new-div"; 
document.body.appendChild(div);

// Removing Elements
let myDiv = document.getElementById("my-new-div");
myDiv.remove();

// Event Handling

let button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked!");
});

let box = document.getElementById("myBox");
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue";
});
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "red";
});


// first child and last child
let parent = document.getElementById("parent");
let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;

console.log("First Child:", firstChild);
console.log("Last Child:", lastChild);

// next sibling and previous sibling
let nextSibling = firstChild.nextElementSibling;
let previousSibling = lastChild.previousElementSibling;

console.log("Next Sibling of First Child:", nextSibling);
console.log("Previous Sibling of Last Child:", previousSibling);