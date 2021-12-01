// move to end to wait the render
// add id to identify the correct list
let orderedListItems = document.getElementById("orderedList").querySelectorAll("li");
      // print the ordered list items, one at a time 
      // Change to forEach to print all items
      orderedListItems.forEach((item) => {
        console.log(item.innerHTML);
      });