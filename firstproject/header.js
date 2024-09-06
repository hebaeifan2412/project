
document.addEventListener('DOMContentLoaded', function() {
  const headerContent = `
                
            
<nav class="navbar navbar-expand-lg pt-2 bg-success border-x-bottom ps-5 ff">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a href="#" class="nav-link link-light fw-bold px-2 active" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="profilepage.html" class="nav-link link-light px-2">Profiles</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-light px-2">Reports</a></li>
          <li class="nav-item"><a href="#" class="nav-link link-light px-2">Settings</a></li>
        </ul>
      </div>
  
      <div class="d-flex px-4 p-2">
        <a href="#" class="nav-link text-light px-2">
          <i class="bi bi-bell-fill fs-4"></i>
        </a>
        <a href="#" class="nav-link text-light px-3">
          <i class="bi bi-person-circle fs-4"></i>
        </a>
      </div>
    </div>
  </nav>
  `;

            document.getElementById('header').innerHTML = headerContent;
        });
