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

let workers = [
  {
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
    name: "Ahmed El Fassi",
    email: "ahmed.fassi@example.com",
    phone: "0654321876",
    role: "Security Agent",
    image: "/img/user2.png",
    experiences: [
      { company: "Maroc Telecom", job: "Tech Support", start: "2020-01", end: "2022-08" }
    ],
    status: "unassigned",
  },
  {
    name: "Lisa Wong",
    email: "lisa.wong@example.com",
    phone: "0678123490",
    role: "Security Agent",
    image: "/img/user3.png",
    experiences: [
      { company: "AXA", job: "Security Staff", start: "2019-05", end: "2021-12" }
    ],
    status: "unassigned",
  },
  {
    name: "Mohamed Idrissi",
    email: "mohamed.idrissi@example.com",
    phone: "0623458790",
    role: "Manager",
    image: "/img/user4.png",
    experiences: [
      { company: "Decathlon", job: "Store Manager", start: "2020-04", end: "2023-10" }
    ],
    status: "unassigned",
  },
  {
    name: "Emily Carter",
    email: "emily.carter@example.com",
    phone: "0611122233",
    role: "Cleaning Staff",
    image: "/img/user5.png",
    experiences: [
      { company: "Clinique Agdal", job: "Cleaning Assistant", start: "2022-01", end: "2023-05" }
    ],
    status: "unassigned",
  },
  {
    name: "Youssef Benali",
    email: "youssef.benali@example.com",
    phone: "0699988877",
    role: "Receptionist",
    image: "/img/user6.png",
    experiences: [],
    status: "unassigned",
  },
  {
    name: "Maria Gonzalez",
    email: "maria.gonzalez@example.com",
    phone: "0687654433",
    role: "IT Technician",
    image: "/img/user7.png",
    experiences: [
      { company: "HP", job: "Junior Technician", start: "2021-06", end: "2022-11" }
    ],
    status: "unassigned",
  },
  {
    name: "Hassan Oubaha",
    email: "hassan.oubaha@example.com",
    phone: "0655234478",
    role: "Security Agent",
    image: "/img/user8.png",
    experiences: [
      { company: "Carrefour", job: "Security Guard", start: "2020-02", end: "2023-01" }
    ],
    status: "unassigned",
  },
  {
    name: "Julia Smith",
    email: "julia.smith@example.com",
    phone: "0677001122",
    role: "Manager",
    image: "/img/user9.png",
    experiences: [],
    status: "unassigned",
  },
  {
    name: "Omar Chafi",
    email: "omar.chafi@example.com",
    phone: "0612349900",
    role: "Cleaning Staff",
    image: "/img/user10.png",
    experiences: [
      { company: "Riad Yamna", job: "Cleaner", start: "2019-10", end: "2022-03" }
    ],
    status: "unassigned",
  },
];

closingButton.addEventListener("click", (e) => {
  e.preventDefault();
  formulaire.classList.add("hidden");
});

canceled.addEventListener("click", (e) => {
  e.preventDefault();

  formulaire.classList.add("hidden");
  formModal.reset()
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    formulaire.classList.add("hidden");
  }
});

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
  formulaire.classList.add("hidden");

  addWorkerList(workers)
  formModal.reset()

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
  console.log(workers);
  // Clear list BEFORE looping
  listsection.innerHTML = "";

  workers.forEach(worker => {
    listsection.innerHTML += `
      <div class="bg-white w-full h-20 border-2 rounded-lg flex items-center gap-3 p-2 mb-2">
        <img class="border-2 rounded-lg w-14 h-14 object-cover" src="${worker.image}">
        <div class="flex flex-col text-black">
          <h1 class="font-bold text-lg">${worker.name}</h1>
          <h2 class="text-sm text-gray-700">${worker.role}</h2>
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

