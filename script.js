

let closingButton = document.getElementById("close")

let formulaire = document.getElementById("form")

let newWorker = document.getElementById("addNewWorker")

newWorker.addEventListener("click", ()=>{

formulaire.classList.remove("hidden");

})
closingButton.addEventListener("click", () => {

formulaire.classList.add("hidden");

});

let canceled = document.getElementById("cancel")

cancel.addEventListener("click", () => {


formulaire.classList.add("hidden");

});

document.addEventListener("keydown",(e)=> {
        if(e.key=="Escape")
            {
    formulaire.classList.add("hidden");
         }
    })

