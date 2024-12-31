// Navbar scroll effect
window.addEventListener('scroll', function() {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
navbar.classList.add('scrolled');
} else {
navbar.classList.remove('scrolled');
}
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
target.scrollIntoView({
behavior: 'smooth'
});
});
});

// Intersection Observer untuk mendeteksi elemen yang visible dan invisible
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const element = entry.target;
const progressBar = element.querySelector('.progress-bar');
                
if (entry.isIntersecting) {
// Reset dulu untuk memastikan animasi berjalan ulang
element.classList.remove('animate', 'reset');
progressBar.style.width = '0%';
// Force reflow
void element.offsetWidth;
                    
// Mulai animasi
element.classList.add('animate');
setTimeout(() => {
progressBar.style.width = progressBar.getAttribute('data-progress') + '%';
}, 500);
} else {
// Reset ketika keluar dari viewport
element.classList.add('reset');
element.classList.remove('animate');
progressBar.style.width = '0%';
}
});
}, {
threshold: 0.2, // Trigger ketika 20% elemen terlihat
rootMargin: '-10% 0%' // Memberikan margin agar trigger tidak terlalu di ujung
});

// Observe semua skill-progress elements
document.querySelectorAll('.skill-progress').forEach(el => observer.observe(el));
/*
 * INITIALIZE SWIPER SCRIPT JS
 ============================================== */
document.addEventListener("DOMContentLoaded", function () {
new Swiper('.testimonialSwiper', {
slidesPerView: 1,
spaceBetween: 30,
pagination: {
el: '.swiper-pagination',
clickable: true,
},
autoplay: {
delay: 5000,
disableOnInteraction: false,
},
breakpoints: {
768: {
slidesPerView: 2,
spaceBetween: 20,
},
1024: {
slidesPerView: 3,
spaceBetween: 30,
},
},
});
});

// Fungsi untuk validasi form dan modifikasi action email
function validateForm(event) {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
        
// Cek apakah semua field terisi
if (!name || !email || !subject || !message) {
event.preventDefault(); // Mencegah form untuk dikirim
alert("Please fill in all fields before submitting.");
} else {
// Modifikasi action untuk memasukkan subjek dan pesan ke dalam URL mailto
var mailtoLink = "mailto:mukitgupay@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage: " + message);
window.location.href = mailtoLink; // Buka aplikasi email dengan data yang telah diisi
event.preventDefault(); // Mencegah form untuk dikirim secara tradisional
}
}

// Menambahkan event listener untuk menangani submit form
document.getElementById("contactForm").addEventListener("submit", validateForm);
