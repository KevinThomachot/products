document.addEventListener("DOMContentLoaded", () => {
  let users = data.slice(0, 50);

  let userContainer = document.getElementById("userContainer");
  users.forEach((user) => {
    let grille = document.createElement("div");
    userContainer.appendChild(grille);
    grille.classList.add("div");

    let avatarDiv = document.createElement("img");
    avatarDiv.setAttribute("src", user.avatar);
    avatarDiv.alt = "avatar";
    grille.appendChild(avatarDiv);
    avatarDiv.classList.add("avatar");

    let userDiv = document.createElement("h1");
    userDiv.textContent = user.first_name;
    grille.appendChild(userDiv);
    userDiv.classList.add("first_name");

    let lastnameDiv = document.createElement("h1");
    lastnameDiv.textContent = user.last_name;
    grille.appendChild(lastnameDiv);
    lastnameDiv.classList.add("last_name");

    let emailDiv = document.createElement("h3");
    emailDiv.textContent = user.email;
    grille.appendChild(emailDiv);
    emailDiv.classList.add("email");

    let genderDiv = document.createElement("h3");
    genderDiv.textContent = user.gender;
    grille.appendChild(genderDiv);
    genderDiv.classList.add("gender");
  });
});
