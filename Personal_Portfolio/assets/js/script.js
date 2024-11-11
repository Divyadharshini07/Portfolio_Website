'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem?.classList?.toggle("active");
}

// sidebar functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Initialize all filter items as active by default
const filterItems = document.querySelectorAll("[data-filter-item]");
filterItems.forEach(item => {
  item.classList.add("active");
});

// Add click event to select button if it exists
if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });

  // add event in all select items
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

// filter function
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Add click events to filter buttons if they exist
if (filterBtn.length) {
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function() {
      let selectedValue = this.innerText.toLowerCase();
      filterFunc(selectedValue);
    });
  });
}
// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
(function(){
  emailjs.init({
    publicKey: "3j4_uiP0JwEN64fnQ",
  });
})();

//contact form
function sendMail(event){
  event.preventDefault();
  
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  }
  emailjs.send=("service_148ubji","template_j9k8ke7",parms).then(alert("Email Sent!!"))
}


// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const clickedPage = this.textContent.toLowerCase();
    
    pages.forEach((page, index) => {
      if (page.dataset.page === clickedPage) {
        page.classList.add("active");
        navigationLinks[index].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[index].classList.remove("active");
      }
    });
  });
});