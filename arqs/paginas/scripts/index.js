document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('carouselClients');
    var carousel = new bootstrap.Carousel(myCarousel);

    myCarousel.addEventListener('slid.bs.carousel', function () {
        var activeItem = myCarousel.querySelector('.carousel-item.active');

        // Remove a classe active de todos os itens do carrossel
        var carouselItems = myCarousel.querySelectorAll('.carousel-item');
        carouselItems.forEach(function (item) {
            item.classList.remove('active');
        });

        // Adiciona a classe active apenas ao item visível após a transição
        activeItem.classList.add('active');
    });
});


function preloadImages(urls, allImagesLoadedCallback) {
    var loadedCounter = 0;
    var toBeLoadedNumber = urls.length;

    urls.forEach(function (url) {
        var img = new Image();
        img.onload = function () {
            loadedCounter++;
            if (loadedCounter === toBeLoadedNumber) {
                allImagesLoadedCallback();
            }
        };
        img.src = url;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var imageUrls = [
        './temp/headphone.png',
        './temp/bluetoothPhone.jpg',
        './temp/earBudy.jpg',
        './temp/foneApple.jpg',
        './temp/qcyT19.jpg',
        './temp/client1 (1).jpg',
        './temp/client2.jpg',
        './temp/client3.jpg'
        // Adicione mais URLs de imagem conforme necessário
    ];

    preloadImages(imageUrls, function () {
        console.log('Todas as imagens foram pré-carregadas');
        // Aqui você pode adicionar código para mostrar o conteúdo da página
        document.body.classList.remove('loading'); // Remove a classe de carregamento da página
    });
});