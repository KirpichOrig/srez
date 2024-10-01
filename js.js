// вкладки
function showTab(tabName) {
    // Show the tab content when hovering
    document.getElementById(tabName).style.display = "block";
}

function hideTab(tabName) {
    // Hide the tab content when the mouse leaves both the button and the content
    document.getElementById(tabName).style.display = "none";
}



// аккордеон
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-btn');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            // Находим контент внутри ближайшего родителя (div.accord-dev)
            const content = this.closest('.accord-dev').querySelector('.accordion-content');

            // Закрыть все остальные блоки
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                }
            });

            // Открыть/закрыть текущий блок
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-btn');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const content = this.closest('.accord-dev').querySelector('.accordion-content');
            const icon = this.querySelector('img');

            // Закрыть все остальные блоки
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.classList.remove('show');
                    item.closest('.accord-dev').querySelector('img').src = 'media/Icon.png';
                }
            });

            // Открыть/закрыть текущий блок
            content.classList.toggle('show');

            // Меняем иконку при открытии/закрытии
            if (content.classList.contains('show')) {
                icon.src = 'media/Icon-c.png'; // Иконка для открытого блока
            } else {
                icon.src = 'media/Icon.png'; // Иконка для закрытого блока
            }
        });
    });
});



// появляющийся блок
document.addEventListener("DOMContentLoaded", function() {
    const blockg = document.querySelector('.accord');
    const upButton = document.querySelector('.num');

    upButton.style.display = 'none'; // Скрываем кнопку "наверх" изначально

    // Настройка IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                upButton.style.display = 'block'; // Показать кнопку, если блок виден на 50%
            } else {
                upButton.style.display = 'none'; // Скрыть кнопку
            }
        });
    }, {
        threshold: 0.5 // Порог видимости 50%
    });

    // Начать отслеживать blockg
    observer.observe(blockg);
});




document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial_item');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');
  
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
      });
      slides[index].style.display = 'block';
      dots[index].classList.add('active');
    }
  
    showSlide(currentIndex);
  
    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  
    prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  
    dots.forEach((dot, i) => {
      dot.addEventListener('click', function () {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });
  });