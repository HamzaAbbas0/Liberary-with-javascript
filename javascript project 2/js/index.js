console.log("welcome to the project 2")
//Constructor
function Book(name, author, type) { 
    this.name = name;
    this.author = author;
    this.type = type;
}
//Display function
function Display() {

}
//Method to display prototype
Display.prototype.add = function (book) {
    console.log("running");
    let tableBody = document.getElementById("tableBody");
    let uiString = `<tr>
    
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                </tr>`
    tableBody.innerHTML += uiString;

}
//Implement the clear function
Display.prototype.clear = function () {
    let liberaryForm = document.getElementById("liberaryForm");
    liberaryForm.reset();
}
//Implement the validate function
Display.prototype.validate = function () {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
//Implement the swfhow function
Display.prototype.show = function (type, DisplayMessage) {
    let message = document.getElementById("message")
    message.innerHTML = `<div class="alert alert-warning ${type} alert-dismissible fade show" role="alert">
    <strong>Message</strong> ${DisplayMessage}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`

    //Add event listner to submit the form
    let liberaryForm = document.getElementById("liberaryForm")
    liberaryForm.addEventListener("submit", liberaryFormSubmit)
    function liberaryFormSubmit(e) {

        let name = document.getElementById("bookName").value;
        let author = document.getElementById("author").value;
        let type;
        let Fiction = document.getElementById("Fiction");
        let Programming = document.getElementById("Programming");
        let Networking = document.getElementById("Networking");
        if (Fiction.checked) {
            type = fiction.value;
        }
        else if (Programming.checked) {
            type = Programming.value;
        }
        else if (Networking.checked) {
            type = Networking.value;
        }
        let book = new Book(name, author, type);
        console.log(book);
        let display = new Display();
        if (display.validate(book)) {
            display.add(book);
            display.clear();
            display.show("sucess", "Your book is sucessfully added")
        }
        else {
            //show error to the user
            display.show("danger", "Sorry you cannot access the book")
        }

        e.preventDefault()
    }
}
