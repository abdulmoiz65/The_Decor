// JavaScript code to print the HTML navbar
document.addEventListener("DOMContentLoaded", function () {
    var navbarHTML = `
        <nav class="navbar navbar-light bg-light fixed-top">
          <div class="container-fluid">
           <img src="../images/Main_logo.png" alt=""> 
           <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">The Decor</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="Home.html">Home</a>
                </li>
                <li class="nav-item">
                  
                 
                  <a class="nav-link" href="service2.html">Services</a>
                  <a class="nav-link" href="gallery.html">Gallery</a>
                  <a class="nav-link" href="Booking.html">Booking</a>
                  <a class="nav-link" href="faqs.html">Faqs</a>
                  <a class="nav-link" href="aboutUs.html">About Us</a>
                </li>
                
              </ul>
               
              </div>
            </div>
          </div>
        </nav>
    `;
    document.querySelector("#navvv").innerHTML = navbarHTML;
  });

  document.addEventListener('DOMContentLoaded', function(){
    let footer = `
    <footer class="footer bg-dark text-white p-5">
        <div class="container-fluid">
            <div class="row">

                <div class="col-lg-4 col-md-4 col-sm-6">
                    <h3>The Decor</h3>
                    <ul>
                        <li><a href="./HTML/aboutUs.html">About Us</a></li>
                        <li><a href="./HTML/service2.html">Our services</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Reviews</a></li>
                    </ul>
                </div>
            
                <div class="col-lg-4  col-md-4 col-sm-6">
                    <h3>Get help</h3>
                    <ul>
                        <li><a href="./HTML/faqs.html">Faqs</a></li>
                        <li><a href="./HTML/Booking.html">Booking</a></li>
                        <li><a href="./HTML/gallery.html">Gallery</a></li>
                        <li><a href="">Order status</a></li>
                        
                    </ul>
                </div>
          
                <div class="col-lg-4  col-md-4 col-sm-6">
                    <h3>Follow Us</h3>
                    <ul id="follow">
                        <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
    `;
    document.getElementById("footer").innerHTML = footer;
});
