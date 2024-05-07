let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// JavaScript untuk menampilkan halaman yang sesuai saat tautan diklik
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menampilkan halaman yang sesuai
    function showPage(pageId) {
        // Menyembunyikan semua halaman
        var pages = document.querySelectorAll('.page');
        pages.forEach(function(page) {
            page.classList.remove('on');
        });
        // Menampilkan halaman yang dipilih
        var page = document.getElementById(pageId);
        page.classList.add('on');
    }

    // Mendengarkan peristiwa klik pada tautan
    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            var target = event.target.getAttribute('href').substr(1); // Menghapus karakter '#'
            showPage(target);
        });
    });
});