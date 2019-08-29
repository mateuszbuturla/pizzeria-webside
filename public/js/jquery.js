$('nav a, .scrollTop, .otherButton').on('click', function () {
    const goToSection = $(this).attr('id');
    $('body, html').animate({
        scrollTop: $('.' + goToSection).offset().top
    })
})
document.addEventListener('scroll', () => {
    if (window.scrollY >= 800)
        document.querySelector('.scrollTop').classList.add('active');
    else
        document.querySelector('.scrollTop').classList.remove('active');
});