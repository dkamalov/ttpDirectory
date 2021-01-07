

// 1) Select the section with an id of container without using querySelector.

let element1 = document.getElementsByID("container");

// 2) Select the section with an id of container using querySelector.

let element2 = document.querySelector(".container");

// 3) Select all of the list items with a class of "second".

let element3 = document.getElementsByClassName("second");

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.

let element4 = document.getElementsByTagName("ol").item("third");

// 5) Give the section with an id of container the text "Hello!".

let element5 = document.getElementById("container");
element5.appendChild("Hello!");

// 6) Add the class main to the div with a class of footer.
//Create class and then add to class of footer

let element6 = document.getElementById("footer").className = "main";

// 7) Remove the class main on the div with a class of footer.

element6.remove("main");

// 8) Create a new li element.

let element7 = document.createElement("li");

// 9) Give the li the text "four".

element7.appendChild("four");

// 10) Append the li to the ul element.

let element8 = document.getElementById("ul");

// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".

let element9 = document.querySelector(".sli");
    for(let ol of li){
        ol.style.color("green");
    }

// 13) Remove the div with a class of footer.

element6.remove("footer");