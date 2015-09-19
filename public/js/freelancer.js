/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Close the modal and go to contact
$('.contact-section-link').click(function() {
    $('#enrollmentModal').modal('hide');
    $('html, body').stop().animate({
        scrollTop: $('#contact').offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

$(".modal").on("show.bs.modal", function()  { // any time a modal is shown
    var urlReplace = "#" + $(this).attr('id'); // make the hash the id of the modal shown
    history.pushState(null, null, urlReplace); // push state that hash into the url
});
$(".modal").on("hidden.bs.modal", function()  { // any time a modal is hidden
    history.pushState(null, null, "#"); // push empty hash on url
});

// If a pushstate has previously happened and the back button is clicked, hide any modals.
$(window).on('popstate', function() {
    $(".modal").modal('hide');
});