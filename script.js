let closingButton = document.getElementById("close");

let formulaire = document.getElementById("form");

let newWorker = document.getElementById("addNewWorker");

let role = document.getElementById("role");

let url = document.getElementById("url");

let formModal = document.getElementById("formulaire")

let addExp = document.getElementById("expButton");

let canceled = document.getElementById("cancel");

let experienceForms = document.getElementById("experienceForms");

let allworkerData = [];

let worker;

let workers = [  {
    id: 101234,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "0612345678",
    role: "Receptionist",
    image: "/img/user1.png",
    experiences: [
      { company: "Hotel Atlas", job: "Front Desk", start: "2021-02", end: "2023-01" }
    ],
    status: "unassigned",
  },
  {
    id: 101235,
    name: "test tree",
    email: "ahmed.fassi@example.com",
    phone: "0654321876",
    role: "IT Technician",
    image: "/img/user2.png",
    experiences: [
      { company: "Maroc Telecom", job: "Tech Support", start: "2020-01", end: "2022-08" }
    ],
    status: "unassigned",
  },
{
    id: 101238,
    name: "cristiano",
    email: "georgina@example.com",
    phone: "0654321876",
    role: "Cleaning Staff",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmkPMfqHKjGC-fIVOlf2rsZRaXM7TZVLylhQ&s",
    experiences: [
      { company: "Maroc Telecom", job: "Tech Support", start: "2020-01", end: "2022-08" }
    ],
    status: "unassigned",
  }];

closingButton.addEventListener("click", (e) => {

  e.preventDefault();
  formulaire.classList.add("hidden");
});

canceled.addEventListener("click", (e) => {
  e.preventDefault();
  let profile = document.getElementById("profile")
  formulaire.classList.add("hidden");
  formModal.reset()
  profile.src="https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";

});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    let profile = document.getElementById("profile")
  formulaire.classList.add("hidden");
  formModal.reset()
  profile.src="https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";

  }
});

formulaire.addEventListener("click",(e)=>{
if(e.target==formulaire)
  {
   let profile = document.getElementById("profile")
  formulaire.classList.add("hidden");
  formModal.reset()
  profile.src="https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";


  }
})


newWorker.addEventListener("click", () => {
  formulaire.classList.remove("hidden");
});

addExp.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default button behavior

  experienceForms.insertAdjacentHTML(
    "beforeend",
    `
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
              
              <button type="button" onClick=deleteexp(event) class="w-full items-center border-2 border-green-400 ">delete</button>
              
          </div>

        </div>
    `
  );
});

let submitButton = document.getElementById("submiting");

function validation(value, regex) {
  return regex.test(value.trim());
}

let exptest = [];

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let profile = document.getElementById("profile")
  let username = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let image = document.getElementById("url");

  let nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phoneRegex = /^(?:\+212|0)(6|7)[0-9]{8}$/;

  if (!validation(username.value, nameRegex)) {
    username.focus();
    return;
  }
  if (!validation(email.value, emailRegex)) {
    email.focus();
    return;
  }
  if (!validation(phone.value, phoneRegex)) {
    phone.focus();
    return;
  }

  let experiencesList = [];

  let allExp = document.querySelectorAll(".expForm");

  allExp.forEach((exp) => {
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
      end: endDate.value,
    };

    experiencesList.push(expObj);
  });

  if (!image.value) {
    image.value =
      "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
  }

  const employee = {
    id: Date.now(),
    name: username.value.trim(),
    email: email.value.trim(),
    phone: phone.value.trim(),
    role: role.value,
    image: image.value,
    experiences: experiencesList,
    status: "unassigned"
  };

  workers.push(employee);
  console.log(workers);
  console.log(image)
  addWorkerList(workers)
  formModal.reset()
  profile.src="https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
  formulaire.classList.add("hidden");
  
});

document.getElementById("url").addEventListener("input", (e)=>{
  let profile = document.getElementById("profile")
  let tempImg = new Image();

  tempImg.src = e.target.value;

  tempImg.onload = ()=>{
    profile.src = e.target.value;
  }

  tempImg.onerror = ()=>{
    profile.src = "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
  }

})



const listsection =document.getElementById("listsection")


function addWorkerList(workers) {
  let filterd = workers.filter(w => w.status === "unassigned")

  listsection.innerHTML = "";

  filterd.forEach(worker => {
    listsection.innerHTML += `
    <div onClick="afficherProfile(${worker.id})" class="bg-orange-200 w-full h-20 border-2 rounded-lg flex items-center gap-3 p-2 mb-2">
    <img class="border-2 rounded-lg w-14 h-14 object-cover" src="${worker.image}">
    <div class="flex flex-col text-black">
    <h3 class="font-bold text-lg">${worker.name}</h3>
    <h5 class="text-sm text-gray-700">${worker.role}</h5>
    </div>
    </div>
    `;
  });
}

addWorkerList(workers)


let addBtns = document.querySelectorAll(".addButton")

addBtns.forEach(btn => {
  btn.addEventListener("click", ()=>{
    let room = btn.parentElement.id;
    let limit = btn.parentElement.dataset.limit;
    let availableWorkers = filterWorkers(room);
    let modal = document.getElementById("availableWorkers");
    modal.classList.remove("hidden");
    let list = modal.querySelector(".worker-list")
    if(availableWorkers.length > 0 ){
      availableWorkers.forEach(worker => {
        list.innerHTML += `
        <div onClick="addToRoom(${worker.id},'${room}',${limit})" class="bg-orange-200  bg-opacity-40 w-full h-20 border-2 border-orange-200 rounded-md flex items-center gap-6 p-2 mb-2">
        <img class="border-2 border-orange-200 rounded-lg w-14 h-14 object-cover" src="${worker.image}">
        <div class="flex flex-col text-black">
        <h1 class="font-bold text-lg">${worker.name}</h1>
        <h2 class="text-sm text-gray-700">${worker.role}</h2>
        </div>
        </div>
        `;
        
      });
    }else{
      list.innerHTML = "<p>No Workers</p>"
    }
    
    let closeBtn = document.getElementById("close-list")
    closeBtn.addEventListener("click", ()=>{
      list.innerHTML = ""
      modal.classList.add("hidden");
    })
  })
})


function filterWorkers(room){
  let filtred = []
  if(room === "conference"){
    filtred = workers.filter(w => w.status === "unassigned")
  }else if (room === "reciption"){
    filtred = workers.filter(w => (w.role === "Receptionist" || w.role === "Manager" || w.role === "Cleaning Staff" ) && w.status === "unassigned")
  }else if (room === "serveurs"){
    filtred = workers.filter(w => (w.role === "IT Technician" || w.role === "Manager" || w.role === "Cleaning Staff" ) && w.status === "unassigned")
  }else if (room === "security"){
    filtred = workers.filter(w => (w.role === "Security Agent" || w.role === "Manager" || w.role === "Cleaning Staff" ) && w.status === "unassigned")
  }else if (room === "pesonnes"){
    filtred = workers.filter(w => w.status === "unassigned")
  }else if (room === "archifs"){
    filtred = workers.filter(w => w.role === "Manager" && w.status === "unassigned")
  }
  return filtred
}

function addToRoom(idWorker, room, limit){
  let container =  document.getElementById(room);
  let count = container.children.length - 1

  if(count < limit){
    let worker = workers.find(w => w.id === idWorker);
    worker.status = room;
    
    let div = document.createElement("div")
    div.id = `worker-${worker.id}`
    div.className = "bg-white w-60 h-20 border-2 rounded-lg flex items-center gap-3 p-2 mb-2 relative"
    
    div.innerHTML = `
    <i
    class="remove-from-room fa-solid fa-xmark absolute top-3 h-5 right-4 hover:cursor-pointer hover:text-black"
    ></i>
    <img class="border-2 rounded-lg w-14 h-14 object-cover" src="${worker.image}">
    <div class="flex flex-col text-black">
    <h1 class="font-bold text-lg">${worker.name}</h1>
    <h2 class="text-sm text-gray-700">${worker.role}</h2>
    </div>`
    container.classList.remove("bg-red-500","bg-opacity-20");
    
    
    
    div.addEventListener("click", ()=>{
      afficherProfile(idWorker)
      
    })
    
    
    let removeBtn = div.querySelector(".remove-from-room");
    removeBtn.addEventListener("click", e => {
      e.stopPropagation();
      worker.status = "unassigned"
      div.remove()
      addWorkerList(workers);
      
      if(container.children.length==1)
        {
          container.classList.add("bg-red-500","bg-opacity-20");
        }
      })
      
      container.appendChild(div);
      
      addWorkerList(workers);
    }else{
      alert("Room Is Full");
    }
    
    
    let modal = document.getElementById("availableWorkers");
    modal.classList.add("hidden");
    let list = modal.querySelector(".worker-list");
    list.innerHTML = "";
    
  }
  
  function afficherProfile(idWorker){
    let worker = workers.find(w => w.id === idWorker);
    let modal = document.getElementById('profile-modal');
  modal.classList.remove("hidden")
  
  
  let profile = modal.querySelector('.profile');
  
  profile.innerHTML = `
  <div class="bg-white w-full h-20 border-2 rounded-lg flex items-center gap-3 p-2 mb-2">
  <img class="border-2 rounded-lg w-14 h-14 object-cover" src="${worker.image}">
  <div class="flex flex-col text-black">
  <h1 class="font-bold text-lg">${worker.name}</h1>
  <h2 class="text-sm text-gray-700">${worker.role}</h2>
  </div>
  </div>
  `
  let closeBtn = document.getElementById("close-profile")
  closeBtn.addEventListener("click", ()=>{
    profile.innerHTML = ""
    modal.classList.add("hidden");
  })
}

function deleteexp(e) {
e.preventDefault()

e.target.parentElement.remove()
}



// experienceForms.addEventListener("click",(e)=>{
//  e.preventDefault()
//   if(e.target && e.target.id =="subEXP")
//     { 
     
//       let expForm = document.getElementById("expForm")
//       expForm.closest.remove()
//     }
// })
