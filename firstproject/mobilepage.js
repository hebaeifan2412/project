const cardData = [
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" }, 
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" }, 
     { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },

];
 
  const cardsPerPage = 12;
  let currentPage = 1; 
  
  function requestCards() {
    const c = document.getElementById('cards-container');
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
  
    
    const pageData = cardData.slice(start, end);
  
    let cardsHTML = '';
  
    pageData.forEach(card => {
      cardsHTML += `
        <div class="  col-sm-3 col-md-3 col-lg-4 mb-4">
          <div class="card rounded-0 ms-2 shadow-sm pt-1" style="width: 14rem;">
           <input   class="form-check-input checkbox m-2 " type="checkbox">
            <div class="p-1 text-center">
              <img src="${card.image}" class="img-fluid rounded-circle mt-2" alt="Profile Image" style="max-width: 80px; max-height: 80px;">
              <h6 class="card-title">${card.name}</h6>
            </div>
            <div class="ps-4 sfont text-secondary">
              <p class="card-text mb-2">Submitted on: <br><span class="fw-bold">${card.submitted}</span></p>
              <p class="card-text mb-2">Duration: <br><span class="fw-bold">${card.duration}</span></p>
              <p class="card-text">Salary: <br><span class="fw-bold">${card.salary}</span></p>
            </div>
            <div class="ps-1 my-3 text-center">
              <a class="btn btn-outline-success fw-semibold btn-sm px-4 py-0" href="#">Decline</a>
              <a href="#" class="btn btn-success fw-semibold btn-sm px-4 py-0">Approve</a>
            </div>
          </div>
        </div>`;
    });
  
    c.innerHTML = cardsHTML;
    updatePagination();
  }
  
  function updatePagination() {
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    
    document.querySelectorAll('.page-item').forEach(item => {
      item.classList.remove('disabled');
    });
  
    if (currentPage === 1) {
      document.querySelector('.page-item.prev').classList.add('disabled');
    }
  
    if (currentPage === totalPages) {
      document.querySelector('.page-item.next').classList.add('disabled');
    }
    
   
    document.querySelectorAll('.page-item.page').forEach(item => {
      item.classList.remove('activee');
      if (item.querySelector('.page-link').getAttribute('data-page') == currentPage) {
        item.classList.add('activee');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    requestCards();
  
    document.querySelectorAll('.page-link').forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const page = link.getAttribute('data-page');
  
        if (page === 'next') {
          if (currentPage < Math.ceil(cardData.length / cardsPerPage)) {
            currentPage++;
          }
        } else if (page === 'prev') {
          if (currentPage > 1) {
            currentPage--;
          }
        } else {
          currentPage = parseInt(page, 10);
        }
  
        requestCards();
      });
    });
  });
  document.getElementById('selectall').addEventListener('change', function() {
    const isAllChecked = this.checked;
    const checkboxes = document.querySelectorAll('.checkbox'); 
    checkboxes.forEach(checkbox => {
        checkbox.style.display = isAllChecked ? 'inline-block' : 'none'; 
        checkbox.checked = isAllChecked; 
    });
});
  