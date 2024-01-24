//navbar color
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('windows-scroll',window.scrollY > 0)
})


//show qna class pptik
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        //icon
        const icon = faq.querySelector('.faq__icon i');

        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }

    })
})


//show navcloseandopen
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


//close nav
const closeNav= () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)



//on scrolling
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')            
        }else{
            entry.target.classList.remove('show')
        }
    });
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

// Get all elements with the class "hoverable"
const hoverableElements = document.querySelectorAll('.hoverable');

// Add event listeners to each hoverable element
hoverableElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.classList.add('hovered');
  });

  element.addEventListener('mouseout', () => {
    element.classList.remove('hovered');
  });
});

//coursescrolling
document.addEventListener('DOMContentLoaded', () => {
    const courseElements = document.querySelectorAll('.course');
  
    // Fungsi untuk menentukan apakah elemen berada dalam pandangan layar
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    // Fungsi untuk menetapkan transition-delay pada elemen-elemen yang terlihat
    const setTransitionDelay = () => {
      let delay = 0;
  
      courseElements.forEach((element) => {
        if (isElementInViewport(element)) {
          element.style.transitionDelay = `${delay}ms`;
          delay += 200; // Sesuaikan delay 
        }
      });
    };
  
    // Panggil fungsi setTransitionDelay saat halaman dimuat
    setTransitionDelay();
  
    // Panggil fungsi setTransitionDelay saat halaman di-scroll
    window.addEventListener('scroll', setTransitionDelay);
  });  
    
  
  document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const clearSearchIcon = document.getElementById('clear-search');
    const courses = document.querySelectorAll('.course');
    const messageContainer = document.getElementById('search-message');

    // Tambahkan event listener untuk menghapus isi input dan menyembunyikan/menampilkan ikon "x"
    searchInput.addEventListener('input', function () {
        searchButton.disabled = false;

        // Tampilkan atau sembunyikan ikon "x" berdasarkan isi input
        clearSearchIcon.style.display = searchInput.value.trim() !== '' ? 'inline-block' : 'none';
        messageContainer.textContent = ''; // Hapus pesan setiap kali input berubah
    });

    // Tambahkan event listener untuk menghapus isi input dan menyembunyikan/menampilkan ikon "x"
    clearSearchIcon.addEventListener('click', function () {
        searchInput.value = '';
        searchInput.focus();
        searchButton.disabled = true;
        clearSearchIcon.style.display = 'none';
        filterCourses(); // Panggil fungsi filterCourses untuk memperbarui tampilan
    });

    categoryFilter.addEventListener('change', filterCourses);
    searchButton.addEventListener('click', filterCourses);

    function filterCourses() {
        const selectedCategory = categoryFilter.value.toLowerCase();
        const searchQuery = searchInput.value.toLowerCase();
        let foundCourses = 0;

        courses.forEach(function (course) {
            const category = course.getAttribute('data-category').toLowerCase();
            const title = course.querySelector('h4').innerText.toLowerCase();

            const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
            const searchMatch = searchQuery === '' || title.includes(searchQuery);

            if (categoryMatch && searchMatch) {
                course.style.display = 'block';
                foundCourses++;
            } else {
                course.style.display = 'none';
            }
        });

        if (foundCourses === 0 && searchQuery.trim() !== '') {
            messageContainer.textContent = 'Maaf, data yang kamu cari tidak ada';
        } else {
            messageContainer.textContent = '';
        }
    }
});



  var coursesData = [
      {
          title: 'React js Fundamentals',
          description: 'Mulailah perjalanan Anda dalam pengembangan web dengan memahami dasar-dasar React.js dan menerapkannya dalam proyek web praktis.',
          category: 'web',
          image: './images/courseweb.png'
      },
      {
          title: 'Pengembangan Aplikasi Android',
          description: 'Panduan langkah demi langkah untuk menguasai pengembangan aplikasi Android, mulai dari instalasi hingga implementasi fitur-fitur canggih.',
          category: 'mobile',
          image: './images/coursemobile.jpg'
      },
      {
          title: 'Aplikasi Mobile Menggunakan Flutter',
          description: 'Temui Flutter, framework UI yang cepat, dan raih pemahaman mendalam tentang bagaimana membuat aplikasi mobile dengan mudah.',
          category: 'mobile',
          image: './images/coursemobile.jpg'
      },
      
      {
          title: 'RESTful API Development',
          description: 'Pelajari prinsip-prinsip desain dan implementasi RESTful API untuk mendukung interaksi antara frontend dan backend.',
          category: 'web',
          image: './images/coursemobile.jpg'
      },
      
      {
          title: 'Membuat Aplikasi CRUD dengan MERN Stack',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'web',
          image: './images/coursemobile.jpg'
      },
      
      {
          title: 'Website Apps 2',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/courseweb.png'
      },
      
      {
          title: 'Website Apps 4',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/courseweb.png'
      },
      
      {
          title: 'Website Apss 3',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/courseweb.png'
      },
      
      {
          title: 'web stry',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/courseweb.png'
      },
      
      {
          title: 'Mobile',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/coursemobile.jpg'
      },
      
      {
          title: 'Media Server Apps 1',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'server',
          image: './images/courseserver.jpg'
      },
      
      {
          title: 'Media Server Apps 2',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'server',
          image: './images/courseserver.jpg'
      },
      
      {
          title: 'Media Server Apps 3',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'server',
          image: './images/courseserver.jpg'
      },
      
      {
          title: 'Media Server Apps 4',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'server',
          image: './images/courseserver.jpg'
      },
      
      {
          title: 'Mobile 1',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'web',
          image: './images/coursemobile.jpg'
      },
      
      {
          title: 'Mobile 2',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/coursemobile.jpg'
      },
      
      {
          title: 'Mobile 3',
          description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
          category: 'mobile',
          image: './images/coursemobile.jpg'
      },

      {
        title: 'Mobile 4',
        description: 'Merancang dan mengembangkan aplikasi seluler yang inovatif dan responsif dengan bimbingan ahli di industri teknologi.',
        category: 'mobile',
        image: './images/coursemobile.jpg'
      },
      
      
  ];

  var coursesContainer = document.getElementById('coursesContainer');
var showMoreButton = document.querySelector('.btn-filter[onclick="showMore()"]');
var showLessButton = document.querySelector('.btn-filter[onclick="showLess()"]');
var addedCourses = []; // Menyimpan informasi artikel yang ditambahkan
var currentIndex = 0;
var batchSize = 3;

function createCourse(title, description, category, imageSrc) {
    var article = document.createElement('article');
    article.className = 'course hoverable';
    article.setAttribute('data-category', category);

    var imageDiv = document.createElement('div');
    imageDiv.className = 'course_image';
    var image = document.createElement('img');
    image.src = imageSrc;
    image.alt = '';
    imageDiv.appendChild(image);

    var infoDiv = document.createElement('div');
    infoDiv.className = 'course__info';
    var h4 = document.createElement('h4');
    h4.textContent = title;
    var p = document.createElement('p');
    p.textContent = description;
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'btn btn-primary';
    link.textContent = 'Gabung sini';

    infoDiv.appendChild(h4);
    infoDiv.appendChild(p);
    infoDiv.appendChild(link);

    article.appendChild(imageDiv);
    article.appendChild(infoDiv);

    coursesContainer.appendChild(article);

    // Menyimpan informasi artikel yang ditambahkan
    addedCourses.push(article);
}

function resetCourses() {
    // Hapus semua artikel yang ditambahkan
    addedCourses.forEach(function (course) {
        coursesContainer.removeChild(course);
    });

    addedCourses = []; // Bersihkan array addedCourses
    currentIndex = 0;
    showMoreButton.style.display = 'block';
    showLessButton.style.display = 'none';

    // Fokus pada artikel pertama setelah reset
    var firstCourse = coursesContainer.querySelector('.course');
    if (firstCourse) {
        firstCourse.scrollIntoView({ behavior: 'smooth' });
    }
}

function showMore() {
    var endIndex = currentIndex + batchSize;
    for (var i = currentIndex; i < endIndex && i < coursesData.length; i++) {
        var course = coursesData[i];
        createCourse(course.title, course.description, course.category, course.image);
    }
    currentIndex = endIndex;

    if (currentIndex >= coursesData.length) {
        showMoreButton.style.display = 'none';
        showLessButton.style.display = 'block';
    }
}

function showLess() {
    resetCourses();
}








  

