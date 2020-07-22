document.addEventListener("DOMContentLoaded", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "https://randomuser.me/api/?results=500");
  request.send();
  console.log("récupération synchrone", request.response);
  request.addEventListener("load", (event) => {
    console.log("récupération asynchrone", JSON.parse(event.target.response));
    let data = JSON.parse(event.target.response);
    data.results.forEach((user) => {
      let apiCard = document.createElement("div");
      let apiName = document.createElement("span");
      let apiPhone = document.createElement("span");
      let apiAdresse = document.createElement("span");
      let apiDob = document.createElement("span");
      let apiImg = document.createElement("img");

      apiName.textContent = user.name.last;
      apiPhone.textContent = user.phone;
      apiAdresse.textContent = user.location.city;
      apiDob.textContent = user.dob.date;
      apiImg.src = user.picture.thumbnail;
      apiImg.alt = "avatar";

      apiCard.appendChild(apiName);
      apiCard.appendChild(apiPhone);
      apiCard.appendChild(apiAdresse);
      apiCard.appendChild(apiDob);
      apiCard.appendChild(apiImg);
      container.appendChild(apiCard);
    });
  });
});
