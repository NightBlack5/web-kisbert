const carouselContainer = document.querySelector('.carousel-container');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const totalItems = carouselItems.length;
        let currentIndex = 0;
        let interval;

        // Função para avançar para o próximo slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }

        // Função para voltar para o slide anterior
        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        }

        // Função para atualizar a posição do carousel
        function updateCarousel() {
            const newPosition = -currentIndex * 100 + '%';
            carouselContainer.style.transform = `translateX(${newPosition})`;
        }

        // Event listeners para os botões de controle
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);

        // Carrossel automático
        function startCarousel() {
            interval = setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos (3000 ms)
        }

        function stopCarousel() {
            clearInterval(interval);
        }

        // Iniciar carrossel automaticamente ao carregar a página
        startCarousel();

        // Pausar carrossel quando o mouse estiver sobre o carrossel
        carousel.addEventListener('mouseover', stopCarousel);
        carousel.addEventListener('mouseleave', startCarousel);
        
        
        document.getElementById('searchInput').addEventListener('input', function() {
            let searchValue = this.value.toLowerCase();
            let results = document.querySelectorAll('.results li');
            
            results.forEach(function(item) {
                let text = item.textContent.toLowerCase();
                if (text.includes(searchValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    