

let closingButton = document.getElementById("close")

let formulaire = document.getElementById("form")

let newWorker = document.getElementById("addNewWorker")

let role= document.getElementById("role")

let url = document.getElementById("url")

let addExp = document.getElementById("expButton")

let canceled = document.getElementById("cancel")

let experienceForms= document.getElementById("experienceForms")

let allworkerData=[]

let worker;

let workers = []



closingButton.addEventListener("click", (e) => {

    e.preventDefault()
formulaire.classList.add("hidden");

});



canceled.addEventListener("click", (e) => {
e.preventDefault()

formulaire.classList.add("hidden");

});

document.addEventListener("keydown",(e)=> {
        if(e.key=="Escape")
            {
    formulaire.classList.add("hidden");
         }
        })
        
        
        newWorker.addEventListener("click", ()=>{
        
        formulaire.classList.remove("hidden");
        
        })

addExp.addEventListener("click", (e) => {
    e.preventDefault(); // prevent default button behavior

    experienceForms.insertAdjacentHTML("beforeend", `
       <div class="flex flex-cols w-full fonts-black"></div>
          <div
            id=""
            class="expForm flex flex-col gap-4 justify-around border border-2 border-orange-200 rounded-lg w-[100%] p-2 mt-2 gap-8"
          >
            <div class="flex gap-4">
              <div
                class="flex flex-col w-[48%] text-center justify-center font-semibold"
              >
                <label for="company">comapny name:</label>
                <input
                   name="company"
                    type="text"
                    class="company border-2 rounded-md w-[full] p-2 m-0 border-orange-200 text-black bg-[#F3E9DC]"
                />
              </div>
              <div
                class="flex flex-col w-[48%] text-center justify-center font-semibold"
              >
                <label for="jop">job title:</label>
                <input
                  id="job"
   
                    name="jobTitle"
                    type="text"
                    class="job border-2 rounded-md w-[full] p-2 border-orange-200 text-black bg-[#F3E9DC]"
                />
              </div>
            </div>

            <div  class="flex gap-4">
              <div
                class="flex flex-col w-[48%] text-center justify-center border-2 rounded"
              >
                <label class="font-semibold" for="startDate "
                  >Started in :</label
                >
                <input
                  name="starteDate"
                    class="startDate text-gray-800"
                    type="date"
                />
              </div>
              <div
                class="flex flex-col w-[48%] text-center justify-center border-2 rounded"
              >
                <label class="font-semibold " for="endDate">ended in :</label>
                <input
              
                    name="endDate"
                    class="endDate text-gray-800"
                    type="date"
                />
              </div>
            </div>
          </div>

        </div>
    `);
});


// function validform() {
//     let userName= document.getElementById("name")
//   console.log(userName.value);
  
//     let email = document.getElementById("email")
//     let phone =document.getElementById("phone")
    
//     let allValid = true;
    
//     let userNameregex = /^[A-Z][a-z'-]+(?: [A-Z][a-z'-]+)+$/;
//     let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     let phoneregex = /^(?:\+212|0)(6|7)[0-9]{8}$/;
//     if(!userNameregex.test(userName.value)){
//         alert("sdsdd");
//     }
//     let validname = validate(userName.value,userNameregex);
    
//     let validemail = validate(email.value, emailregex);
    
//     let validphone = validate(phone.value, phoneregex);
    
//   if (!validname || !validemail || !validphone) {
//     allValid = false;
  
// }

// return allValid;
// }

let submitButton = document.getElementById("submiting");



function validation(value,regex)
{
  return regex.test(value.trim())
}

let exptest = [];

document.addEventListener("click",(e)=>{
  document.addEventListener("click",(e)=>{
  if(e.target.id == "submiting"){
    e.preventDefault();

    let username = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let role = document.getElementById("role");

    let nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phoneRegex = /^(?:\+212|0)(6|7)[0-9]{8}$/;

    if (!validation(username.value, nameRegex)) return username.focus();
    if (!validation(email.value, emailRegex))   return email.focus();
    if (!validation(phone.value, phoneRegex))   return phone.focus();

   
    let experiencesList = [];

    let allExp = document.querySelectorAll(".expForm");

    allExp.forEach(exp => {

      let company = exp.querySelector(".company");
      let job = exp.querySelector(".job");
      let startDate = exp.querySelector(".startDate");
      let endDate = exp.querySelector(".endDate");

      let companyRegex = /^[A-Za-z0-9&.,'’\- ]{2,50}$/;
      let jobRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

      
      if (!companyRegex.test(company.value.trim())) {
        company.focus();
        return;
      }

      if (!jobRegex.test(job.value.trim())) {
        job.focus();
        return;
      }

      let expObj = {
        company: company.value.trim(),
        job: job.value.trim(),
        start: startDate.value,
        end: endDate.value
      };

      experiencesList.push(expObj);
    });

    console.log("EXPERIENCES:", experiencesList);

    // Build employee object
    const employee = {
      name: username.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      role: role.value,
      experiences: experiencesList
    };

    console.log("EMPLOYEE:", employee);
  }
});


// // let submitButton = document.getElementById("submiting") 

// submitButton.addEventListener()