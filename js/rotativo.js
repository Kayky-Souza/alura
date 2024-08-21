var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;
function trocaBanner() {
	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector('.destaque	img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 4000);

$('.novidades').addClass('painel-compacto');
$('.mais-vendidos').addClass('painel-compacto');

$(document).ready(function() {
    // Delegação de eventos para o clique em qualquer botão dentro de .novidades
    $('.novidades').on('click', 'button.mais', function() {
        $('.novidades').removeClass('painel-compacto');
        $(this).text('Mostrar Menos')
               .addClass('menos')
               .removeClass('mais');
    });

    $('.novidades').on('click', 'button.menos', function() {
        $('.novidades').addClass('painel-compacto');
        $(this).text('Mostrar Mais')
               .addClass('mais')
               .removeClass('menos');
    });
});

$(document).ready(function() {
    // Delegação de eventos para o clique em qualquer botão dentro de .mais-vendidos
    $('.mais-vendidos').on('click', 'button.mais', function() {
        $('.mais-vendidos').removeClass('painel-compacto');
        $(this).text('Mostrar Menos')
               .addClass('menos')
               .removeClass('mais');
    });

    $('.mais-vendidos').on('click', 'button.menos', function() {
        $('.mais-vendidos').addClass('painel-compacto');
        $(this).text('Mostrar Mais')
               .addClass('mais')
               .removeClass('menos');
    });
});