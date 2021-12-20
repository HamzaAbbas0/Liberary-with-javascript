console.log("Good luck for your first project");
showNotes();
//if user add some text add it to the local storage.
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle= document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let mybj ={
        title :addTitle.value,
        text :addTxt.value
    }
    notesObj.push(mybj);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    addTitle.value = "";
    console.log(notesObj);
    showNotes();

})
// function to show element from the local storage.
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
    <div class=" noteCard my-2 mx-2 card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${element.title}</h5>
      <p class="card-text">${element.text}</p>
      <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Text</button>
    </div>
  </div>`;

    });
    let notesElem = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML =`<b> Nothing to show please "Add note" section above to add a note.</b>`
    }
}
// function to delete a note.
 
function deleteNote(index){
    //console.log("i am deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
//Making search button
let search =  document.getElementById("searchTxt");
 search.addEventListener("input",function(){
 let inputVal = search.value .toLowerCase();
 let noteCard = document.getElementsByClassName("noteCard")
 Array.from(noteCard).forEach(function(element){
     let cardTxt = element.getElementsByTagName("p")[0].innerHTML;
     if(cardTxt.includes(inputVal)){
         element.style.display = "block";
     }
     else {
            element.style.display = "none";
         }
     
 })
 });