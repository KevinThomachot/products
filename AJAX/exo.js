document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "https://randomuser.me/api/?results=56&nat=us,dk,fr,gb");
  request.send();
  console.log("récupération synchrone", request.response);
  request.addEventListener("load", (event) => {
    console.log("récupération asynchrone", JSON.parse(event.target.response));
    let data = JSON.parse(event.target.response);
    function displayUser(user) {
      
      let apiCard = document.createElement("div");
      let apiName = document.createElement("span");
      let apiPhone = document.createElement("span");
      let apiAdresse = document.createElement("span");
      let apiDob = document.createElement("span");
      let apiImg = document.createElement("img");
  
      apiName.textContent = user.name.last;
      apiPhone.textContent = user.phone;
      apiAdresse.textContent = user.location.country;
      apiDob.textContent = user.dob.date;
      apiImg.src = user.picture.thumbnail;
      apiImg.alt = "avatar";
  
      apiCard.classList.add("user-card");
    
  
      apiCard.appendChild(apiImg);
      apiCard.appendChild(apiName);
      apiCard.appendChild(apiPhone);
      apiCard.appendChild(apiAdresse);
      apiCard.appendChild(apiDob);
      container.appendChild(apiCard);
    }
    data.results.forEach((user) => {
      displayUser(user);
    });

    document.addEventListener("change", () => {
      let request = new XMLHttpRequest();
      request.open("GET", "https://randomuser.me/api/?results=56&nat=us,dk,fr,gb");
      request.send();

      let container = document.getElementById("container");
      let choix = document.getElementById("choix");
      container.innerHTML = "";
      data.results.forEach((user) => {
      if (choix.value === user.location.country) {
      displayUser(user);
      } else if 
      (choix.value === "tout") {
        displayUser(user);
    }
    });
    });

    /*document.addEventListener("change", () => {
      let request = new XMLHttpRequest();
      request.open("GET", "https://randomuser.me/api/?results=56&nat=us,dk,fr,gb");
      request.send();

      let container = document.getElementById("container");
      let male = document.getElementById("male");
      let female = document.getElementById("female");
      container.innerHTML = "";
      data.results.forEach((user) => {
        if (male.checked === true) {
          (male.checked = user.gender.male)
          displayUser(user);
        } else if (male.checked === false) {
          displayUser(user);
        }

        if (female.checked === true) {
          (female.checked = user.gender.female)
          displayUser(user);
        } else if (female.checked === false) {
          displayUser(user);
        }
      });
    });*/
    
  });
});

