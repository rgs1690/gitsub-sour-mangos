import { repos } from "./dataArray.js";

// Displays User Profile
const displayUserProfile = () => {
  const domString = `
  <div class="profile-card card" style="width: 18rem;">
    <img class="card-img-top" src="https://avatars.githubusercontent.com/u/6998954?v=4" alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">Monica Powell</h4>
      <h5 class="card-text">M0nica</h5>
      <p>Building tech to elevate people. Founder of React Ladies a community for React JS developers.</p>
      <button type="button" class="btn btn-secondary">Follow</button>
      <button type="button" class="btn btn-secondary">Sponsor</button>
      <button type="button" class="btn btn-secondary">...</button>
      <p><i class="fas fa-user-friends"></i> followers</p>
      <p>following</p>
    </div>
    <ul class="list-group list-group-flush">
      <li><i class="fas fa-map-marker-alt"></i> New York, New York</li>
      <li><i class="fas fa-envelope"></i> github@aboutmonica.com</li>
      <li><i class="fas fa-link"></i> https://www.aboutmonica.com</li>
      <li><i class="fab fa-twitter"></i> @indigitalcolor</li>
    </ul>
    <ul class="list-group list-group-flush">
      <h6>Highlights</h6>
      <li>Arctic Code Vault Contributor</li>
      <li><i class="fas fa-star"></i> GitHub Star</li>
      <li><i class="far fa-star"></i> PRO</li>
    </ul>
    <ul class="list-group list-group-flush">
      <h6>Organizations</h6>
    </ul>
    <ul class="list-group list-group-flush">
      <h6>Sponsors</h6>
    </ul>
  </div>
  `;

  renderToDom("#userProfile", domString);
};

const repoFunction = (array) => {
  let domString = "";
  array.forEach((repo, i) => {
    domString += `<div class="card">
    <h5 class="card-header">Repository</h5>
    <div class="card-body">
      <h5 class="card-title">${repo.name}</h5>
      <p class="card-text">${repo.description}</p>
      <p class="card-text">${repo.view}</p>
      <button id="green-btn--${i}" type="button" class="btn ${
      !repo.star ? "btn-success" : "btn-primary"
    }">☆</button>
    </div>
    </div>`;
  });

  renderToDom("#repoContainer", domString);

  document
    .querySelector("#repoContainer")
    .addEventListener("click", starFunction);
};

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const repoCallback = (event) => {
  event.preventDefault();
  const newRepo = {
    name: document.querySelector("#infoInput").value,
    description: document.querySelector("#descriptionInput").value,
  };
  repos.push(newRepo);

  repoFunction(repos);
};

const repoBtn = () => {
  const repoBtns = document.querySelector("#formContainer");
  repoBtns.addEventListener("submit", repoCallback);
};

const starFunction = (e) => {
  if (e.target.id.startsWith("green-btn")) {
    const [, id] = e.target.id.split("--");
    console.log(id);
    repos[id].star = true;
    repoFunction(repos);
  }
};

const init = () => {
  displayUserProfile();
  repoFunction(repos);
  repoBtn();
};

init();
