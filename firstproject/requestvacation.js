const cardData = [
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", salary: "1000 AED", image: "./images/profile.jpeg" },
    {name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023", salary: "1000 AED", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023", salary: "1000 AED", image: "./images/profile.jpeg" }
 ];
 function checkCards() {
    const c= document.getElementById('cardcheckbox');
    
    cardData.forEach(card => {
      const cards = `
        <div class="col-lg-4 col-md-6 col-sm-3 mb-4">
    <div class="card rounded-0 ms-2 shadow-sm pt-1" style="width: 15rem;" data-name="Ahmad">
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
      <div class="ps-3 my-3">
        <a class="btn btn-outline-success fw-semibold btn-sm px-4 py-0" href="#">Decline</a>
        <a href="#" class="btn btn-success fw-semibold btn-sm px-4 py-0">Approve</a>
      </div>
    </div>
  </div>
      `;
      c.innerHTML += cards;
    });
  }
   document.getElementById('selectall').addEventListener('change', function() {
    const isAllChecked = this.checked;
    const checkboxes = document.querySelectorAll('.checkbox'); 
    checkboxes.forEach(checkbox => {
        checkbox.style.display = isAllChecked ? 'inline-block' : 'none'; 
        checkbox.checked = isAllChecked; 
    });
});
    
  checkCards();
  // search fun
  document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let card = document.querySelectorAll('.card');

    card.forEach(function(name) {
      let text = name.textContent || name.innerText;
      if (text.toUpperCase().indexOf(filter) > -1) {
        name.style.display = '';
      } else {
        name.style.display = 'none';
      }
    });
  });