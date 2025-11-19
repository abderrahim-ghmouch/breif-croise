

let closingButton = document.getElementById("close")

let formulaire = document.getElementById("form")

let newWorker = document.getElementById("addNewWorker")

newWorker.addEventListener("click", ()=>{

formulaire.classList.remove("hidden");

})
closingButton.addEventListener("click", () => {

formulaire.classList.add("hidden");

});

let cancel = document.getElementById("cancel")