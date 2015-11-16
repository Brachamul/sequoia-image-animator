$("head").append("<link rel='stylesheet' href='https://brachamul.github.io/sequoia-image-animator/freewall.css' type='text/css' media='screen'>");

var wall = new freewall("#freewall");
wall.fitWidth();
wall.reset({
    selector: '.brick',
    animate: true,
    onResize: function() {
        wall.fitWidth();
    }
});

// for mobile
$('.brick').click(function(){
    $(this).toggleClass('active')
})

$('.brick:after').click(function(){
    $(this).removeClass('active')
})

$('h2.togglable').click(function(){
    $(this).toggleClass('active')
    $(this).next('.h2-content').slideToggle(3000)
})
