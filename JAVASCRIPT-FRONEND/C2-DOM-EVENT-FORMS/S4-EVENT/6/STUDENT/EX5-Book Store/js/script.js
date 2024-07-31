//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  event.preventDefault();
  let btnlist = document.getElementsByTagName("li")

  // 1- Check the event if raised on the button delete 
  for (let i = 0; i < btnlist.length; i++) {
    if (event.target == btnlist[i].lastElementChild) {
      btnlist[i].lastElementChild.parentElement.style.display = 'none'
    }
  }
  //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();
  // 1- Get the book name from the input field
  let nameB = document.getElementById("add-book-textfield").value;
  
  // 2- Create a new spam bookName for the book name, class name = name
  if (nameB != '') {
    let item = document.createElement("span")
    item.classList.add("name")
    item.textContent = nameB
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
    let btnD = document.createElement("span")
    btnD.classList.add("delete")
    btnD.textContent = "delete"
    // 4- Create a new li
    let listItem = document.createElement("li")
    listItem.appendChild(item)
    listItem.appendChild(btnD)
    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
    bookList.appendChild(listItem)
    document.getElementById("add-book-textfield").value = ""
  }

}

function searchBook(event) {
  // 1- Get the search text

  // 2- Loop on all LI

  // Update the style of the LI (visible or hidden)

}




//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("click", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);
