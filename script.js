let closingButton = document.getElementById("close");

let formulaire = document.getElementById("form");

let newWorker = document.getElementById("addNewWorker");

let role = document.getElementById("role");

let url = document.getElementById("url");

let formModal = document.getElementById("formulaire");

let addExp = document.getElementById("expButton");

let canceled = document.getElementById("cancel");

let experienceForms = document.getElementById("experienceForms");

let allworkerData = [];

let worker;

let workers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+212 645-112233",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    experiences: [
      { company: "TechCorp", job: "Team Lead", start: "2019-01-10", end: "2022-07-15" },
      { company: "BizWorld", job: "Supervisor", start: "2016-03-01", end: "2018-12-20" }
    ],
    status: "unassigned"
  },
  {
    id: 2,
    name: "Michael Smith",
    email: "m.smith@example.com",
    phone: "+212 612-334455",
    role: "IT Technician",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    experiences: [
      { company: "NetSolutions", job: "IT Support", start: "2020-05-03", end: "2023-01-11" }
    ],
    status: "unassigned"
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phone: "+212 699-221144",
    role: "Receptionist",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    experiences: [
      { company: "HotelMax", job: "Front Desk", start: "2018-04-10", end: "2022-10-05" }
    ],
    status: "unassigned"
  },
  {
    id: 4,
    name: "Ahmed Benali",
    email: "ahmed.benali@example.com",
    phone: "+212 661-778899",
    role: "Security Agent",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    experiences: [
      { company: "SafeGuard", job: "Security", start: "2017-09-01", end: "2023-03-20" }
    ],
    status: "unassigned"
  },
  {
    id: 5,
    name: "Jessica Lee",
    email: "jessica.lee@example.com",
    phone: "+212 623-990011",
    role: "Cleaning Staff",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    experiences: [
      { company: "CleanPro", job: "Cleaner", start: "2020-01-01", end: "2023-08-10" }
    ],
    status: "unassigned"
  },
  {
    id: 6,
    name: "David Thompson",
    email: "david.thompson@example.com",
    phone: "+212 650-550099",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    experiences: [
      { company: "WorkSphere", job: "Assistant Manager", start: "2018-11-15", end: "2021-04-01" },
      { company: "ProOffice", job: "Manager", start: "2021-04-15", end: "2024-01-12" }
    ],
    status: "unassigned"
  },
  {
    id: 7,
    name: "Nadia Amrani",
    email: "nadia.amrani@example.com",
    phone: "+212 621-773344",
    role: "Receptionist",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    experiences: [
      { company: "Morocco Suites", job: "Receptionist", start: "2019-02-01", end: "2023-05-01" }
    ],
    status: "unassigned"
  },
  {
    id: 8,
    name: "Omar Rami",
    email: "omar.rami@example.com",
    phone: "+212 677-889900",
    role: "IT Technician",
    image: "https://randomuser.me/api/portraits/men/27.jpg",
    experiences: [
      { company: "ITZone", job: "Hardware Tech", start: "2016-06-10", end: "2020-09-03" },
      { company: "TechLine", job: "Network Tech", start: "2020-10-01", end: "2023-12-15" }
    ],
    status: "unassigned"
  },
  {
    id: 9,
    name: "Linda Brooks",
    email: "linda.brooks@example.com",
    phone: "+212 633-112255",
    role: "Cleaning Staff",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    experiences: [
      { company: "EcoClean", job: "Cleaner", start: "2017-03-04", end: "2022-11-02" }
    ],
    status: "unassigned"
  },
  {
    id: 10,
    name: "John Carter",
    email: "john.carter@example.com",
    phone: "+212 688-443322",
    role: "Security Agent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    experiences: [
      { company: "SecureNow", job: "Guard", start: "2015-09-01", end: "2023-06-10" }
    ],
    status: "unassigned"
  },
  {
    id: 11,
    name: "Amina El Idrissi",
    email: "amina.idrissi@example.com",
    phone: "+212 601-932244",
    role: "Receptionist",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    experiences: [
      { company: "Royal Hotel", job: "Front Desk Agent", start: "2019-05-21", end: "2024-01-10" }
    ],
    status: "unassigned"
  },
  {
    id: 12,
    name: "Zakaria Lafi",
    email: "zakaria.lafi@example.com",
    phone: "+212 670-229988",
    role: "IT Technician",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    experiences: [
      { company: "MarocTech", job: "Technician", start: "2018-07-14", end: "2022-09-10" }
    ],
    status: "unassigned"
  },
  {
    id: 13,
    name: "Anna Martinez",
    email: "anna.martinez@example.com",
    phone: "+212 699-122377",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    experiences: [
      { company: "BusinessPro", job: "Office Manager", start: "2017-04-10", end: "2023-02-01" }
    ],
    status: "unassigned"
  },
  {
    id: 14,
    name: "James Walker",
    email: "james.walker@example.com",
    phone: "+212 620-988776",
    role: "Security Agent",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    experiences: [
      { company: "SuperGuard", job: "Security Specialist", start: "2016-11-10", end: "2023-09-11" }
    ],
    status: "unassigned"
  },
  {
    id: 15,
    name: "Karima Saidi",
    email: "karima.saidi@example.com",
    phone: "+212 678-113355",
    role: "Cleaning Staff",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    experiences: [
      { company: "CleanIt", job: "Cleaner", start: "2018-03-01", end: "2023-04-15" }
    ],
    status: "unassigned"
  },
  {
    id: 16,
    name: "William Turner",
    email: "will.turner@example.com",
    phone: "+212 665-556677",
    role: "IT Technician",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    experiences: [
      { company: "TechHub", job: "System Technician", start: "2021-01-01", end: "2024-01-01" }
    ],
    status: "unassigned"
  },
  {
    id: 17,
    name: "Chloé Laurent",
    email: "chloe.laurent@example.com",
    phone: "+212 698-331177",
    role: "Receptionist",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    experiences: [
      { company: "OfficePoint", job: "Reception Agent", start: "2019-07-20", end: "2023-12-04" }
    ],
    status: "unassigned"
  },
  {
    id: 18,
    name: "Soufiane Fathi",
    email: "soufiane.fathi@example.com",
    phone: "+212 622-709910",
    role: "Security Agent",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    experiences: [
      { company: "ProtectionPro", job: "Guard", start: "2016-02-10", end: "2022-08-08" }
    ],
    status: "unassigned"
  },
  {
    id: 19,
    name: "Maria Santos",
    email: "maria.santos@example.com",
    phone: "+212 677-558899",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    experiences: [
      { company: "CorpLine", job: "Team Manager", start: "2015-10-01", end: "2023-01-20" }
    ],
    status: "unassigned"
  },
  {
    id: 20,
    name: "Henry Lewis",
    email: "henry.lewis@example.com",
    phone: "+212 661-200144",
    role: "Cleaning Staff",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    experiences: [
      { company: "ShineCo", job: "Cleaner", start: "2017-12-10", end: "2023-05-11" }
    ],
    status: "unassigned"
  }
];


closingButton.addEventListener("click", (e) => {
  e.preventDefault();
  formulaire.classList.add("hidden");
});

canceled.addEventListener("click", (e) => {
  e.preventDefault();
  let profile = document.getElementById("profile");
  formulaire.classList.add("hidden");
  formModal.reset();
  profile.src =
    "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    let profile = document.getElementById("profile");
    formulaire.classList.add("hidden");
    formModal.reset();
    profile.src =
      "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
  }
});

formulaire.addEventListener("click", (e) => {
  if (e.target == formulaire) {
    let profile = document.getElementById("profile");
    // formulaire.classList.add("hidden");
    formModal.reset();
    profile.src =
      "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
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
              
              <button type="button" onClick=deleteexp(event) class="w-full items-center border-2 border-green-800 ">delete</button>
              
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
  let profile = document.getElementById("profile");
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
    let startCheck = startDate.value;
    let endCheck = endDate.value;

    if (!companyRegex.test(company.value.trim())) {
      company.focus();
      return;
    }
    
    if (!jobRegex.test(job.value.trim())) {
      job.focus();
      return;
    }

if (!startDate.value || !endDate.value) {
  alert("Please select both start and end dates.");
  startDate.focus();
  return;
}



    if(new Date(startCheck) > new Date(endCheck))
      { 
        alert("start dat should be before end date.");
        startDate.focus()
    return
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
    status: "unassigned",
  };

  workers.push(employee);
  console.log(workers);
  console.log(image);
  addWorkerList(workers);
  formModal.reset();
  profile.src =
    "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
  formulaire.classList.add("hidden");
});

document.getElementById("url").addEventListener("input", (e) => {
  let profile = document.getElementById("profile");
  let tempImg = new Image();

  tempImg.src = e.target.value;

  tempImg.onload = () => {
    profile.src = e.target.value;
  };

  tempImg.onerror = () => {
    profile.src =
      "https://media.istockphoto.com/id/517998264/vector/male-user-icon.jpg?s=612x612&w=0&k=20&c=4RMhqIXcJMcFkRJPq6K8h7ozuUoZhPwKniEke6KYa_k=";
  };
});

const listsection = document.getElementById("listsection");

function addWorkerList(workers) {
  let filterd = workers.filter((w) => w.status === "unassigned");

  listsection.innerHTML = "";

  filterd.forEach((worker) => {
    listsection.innerHTML += `
 <div data-id="${worker.id}" onclick="afficherProfile(${worker.id})"
  class="bg-yellow-200 bg-opacity-40 shadow-2xl w-full border-2 rounded-md flex items-center gap-3 p-3 mb-2">

  
  <div class="w-16 h-16 sm:w-12 sm:h-12 flex-shrink-0">
    <img class="w-full h-full object-cover rounded-md" src="${worker.image}">
  </div>


  <div class="flex flex-col overflow-hidden">
    <h3 class="text-lg sm:text-md font-bold text-black truncate">
      ${worker.name}
    </h3>
    <h5 class="text-sm text-gray-600 truncate">
      ${worker.role}
    </h5>
  </div>

</div>
    `;
  });
}

addWorkerList(workers);



let addBtns = document.querySelectorAll(".addButton");

addBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let room = btn.parentElement.id;
    let limit = btn.parentElement.dataset.limit;
    let availableWorkers = filterWorkers(room);
    let modal = document.getElementById("availableWorkers");
    modal.classList.remove("hidden");
    let list = modal.querySelector(".worker-list");
    if (availableWorkers.length > 0) {
      availableWorkers.forEach((worker) => {
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
    } else {
      list.innerHTML = "<p>No Workers</p>";
    }

    let closeBtn = document.getElementById("close-list");
    closeBtn.addEventListener("click", () => {
      list.innerHTML = "";
      modal.classList.add("hidden");
    });
  });
});

function filterWorkers(room) {
  let filtred = [];
  if (room === "conference") {
    filtred = workers.filter((w) => w.status === "unassigned");
  } else if (room === "reciption") {
    filtred = workers.filter(
      (w) =>
        (w.role === "Receptionist" ||
          w.role === "Manager" ||
          w.role === "Cleaning Staff") &&
        w.status === "unassigned"
    );
  } else if (room === "serveurs") {
    filtred = workers.filter(
      (w) =>
        (w.role === "IT Technician" ||
          w.role === "Manager" ||
          w.role === "Cleaning Staff") &&
        w.status === "unassigned"
    );
  } else if (room === "security") {
    filtred = workers.filter(
      (w) =>
        (w.role === "Security Agent" ||
          w.role === "Manager" ||
          w.role === "Cleaning Staff") &&
        w.status === "unassigned"
    );
  } else if (room === "pesonnes") {
    filtred = workers.filter((w) => w.status === "unassigned");
  } else if (room === "archifs") {
    filtred = workers.filter(
      (w) => w.role === "Manager" && w.status === "unassigned"
    );
  }
  return filtred;
}

function addToRoom(idWorker, room, limit) {
  let container = document.getElementById(room);
  let count = container.children.length - 1;

  if (count < limit) {
    let worker = workers.find((w) => w.id === idWorker);
    worker.status = room;

    let div = document.createElement("div");
    div.id = `worker-${worker.id}`;
    div.className =
      "w-20 h-20 border-2 rounded-lg flex items-center bg-transparent border-none";

    div.innerHTML = `<div class="flex">
    
    <i
    class="remove-from-room fa-solid fa-xmark absolute top-3 h-5 right-4 hover:cursor-pointer hover:text-black"
    ></i>
    <img style="width: 60%; height: 60%;" class="border-2 rounded-full object-cover" src="${worker.image}">
    
    </div>
    </div>
    `;
    container.classList.remove("bg-red-500", "bg-opacity-20");

    div.addEventListener("click", () => {
      afficherProfile(idWorker);
    });

    let removeBtn = div.querySelector(".remove-from-room");
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      worker.status = "unassigned";
      div.remove();
      addWorkerList(workers);

      if (container.children.length == 1) {
        container.classList.add("bg-red-500", "bg-opacity-20");
      }
    });

    container.appendChild(div);

    addWorkerList(workers);
  } else {
    toasts("Room Is Full");
  }

  let modal = document.getElementById("availableWorkers");
  modal.classList.add("hidden");
  let list = modal.querySelector(".worker-list");
  list.innerHTML = "";
}

function afficherProfile(idWorker) {
  let worker = workers.find((w) => w.id === idWorker);
  let modal = document.getElementById("profile-modal");
  modal.classList.remove("hidden");

  let profile = modal.querySelector(".profile");
profile.innerHTML = `
  <div class="bg-orange-400 bg-opacity-20 w-full  rounded-2xl shadow-sm p-4 space-y-4">
    <div class="flex flex-col items-center gap-4">
      <img 
        class="w-16 h-16 rounded-xl object-cover border" 
        src="${worker.image}" 
        alt="Profile picture"
      >
      
      <div class="flex flex-col justif-center items-center">
        <h1 class="font-semibold text-xl text-gray-900">${worker.name}</h1>
        <p class="text-sm text-gray-600">${worker.role}</p>

      </div>
      <div class="flex flex-col">
      
      <div>phone:${worker.phone}</div>
      <div>email:${worker.email}</div>
      
      </div>
    </div>
    <div>
      <h2 class="text-lg font-semibold text-gray-900 mb-2">Experiences</h2>

      <div class="space-y-2">
        ${worker.experiences && worker.experiences.length > 0 
          ? worker.experiences.map(exp => `
              <div class="border rounded-xl p-3 bg-gray-50">
                <p class="text-sm font-semibold text-gray-800">${exp.company}</p>
                <p class="text-sm text-gray-600">${exp.job}</p>
                <p class="text-xs text-gray-500">${exp.start} → ${exp.end}</p>
              </div>
            `).join('')
          : `<p class="text-sm text-gray-500">No experience added.</p>`
        }
      </div>
    </div>

  </div>
`;
  let closeBtn = document.getElementById("close-profile");
  closeBtn.addEventListener("click", () => {
    profile.innerHTML = "";
    modal.classList.add("hidden");
  });
}

function deleteexp(e) {
  e.preventDefault();

  e.target.parentElement.remove();
}

workers.forEach((e)=>{
let serveurs=documen.getElementById("serveures")
        if(e.status==="conference")
        {e.status="serveurs"
         serveurs.addToroom(e)
        }
})