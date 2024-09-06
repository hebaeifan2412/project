const cardsData = [
    { title: "Annual Vacation", date: "2/3/2023 - 10/3/2023", days: "8 days", approvedBy: "Hazem Azme" },
    { title: "Annual Vacation", date: "2/3/2023 - 10/3/2023", days: "8 days", approvedBy: "Hazem Azme" },
    { title: "Annual Vacation", date: "2/3/2023 - 10/3/2023", days: "8 days", approvedBy: "Hazem Azme" },
    { title: "Annual Vacation", date: "2/3/2023 - 10/3/2023", days: "8 days", approvedBy: "Hazem Azme" },
    { title: "Annual Vacation", date: "2/3/2023 - 10/3/2023", days: "8 days", approvedBy: "Hazem Azme" },
    { title: "Annual Vacation", date: "2/3/2023 - 10/3/2023", days: "8 days", approvedBy: "Hazem Azme" }
];

function createCards() {
    const container = document.getElementById('historycards');
    
    cardsData.forEach(card => {
      const cards = `
        <div class="col-12 col-md-6 col-lg-3 mb-4">
          <div class="card shadow-sm border-bottom text-secondary">
            <div class="p-3">
              <p class="mb-1">
                <span class="card-title text-dark fw-semibold">${card.title}</span><br>
                ${card.date} <span class="fw-bold">${card.days}</span>
              </p>
              <p class="card-text">Approved by: ${card.approvedBy}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += cards;
    });
}


const cardData = [
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023)", current: " Omar Ahmad", image: "./images/profile.jpeg" },
    { name: "Ahmad Attar", submitted: "1/3/2024", duration: "2 Weeks (1/4/2023 - 14/4/2023", current: " Omar Ahmad", image: "./images/profile.jpeg" },
 ];
  
  function pending() {
    const c= document.getElementById('pendingcards');
    
    cardData.forEach(card => {
      const cards = `
        <div class="col-lg-3 col-sm-12 col-md-3 my-4">
          <div class="card rounded-0 ms-2 shadow-lg  pt-1" style="width: 15rem;">
            <div class="p-1 text-center">
            <img src="${card.image}" class="rounded-circle mt-2" alt="Profile Image" width="80" height="80">
              <h6 class="card-title ">${card.name}</h6>
            </div>
            <div class="ps-4 sfont text-secondary">
              <p class="card-text mb-2"> Submitted on: <br><span class="fw-bold">${card.submitted}</span></p>
              <p class="card-text mb-2"> Duration: <br> <span class="fw-bold">${card.duration}</span></p>
              <p class="card-text mb-2 py-3"> Currently :  <br><span class="fw-bold text-success fs-6 ">${card.current}</span></p>
            </div>
            
          </div>
        </div>
      `;
      c.innerHTML += cards;
    });
  }
  
  // Call the function to generate the cards
pending();
  
// Call the function to generate the cards
createCards();
