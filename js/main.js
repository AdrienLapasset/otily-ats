$(document).ready(function () {
  // Smooth anchor
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });

  // Show on scroll
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (
      y === 0 ||
      $(window).scrollTop() + $(window).height() == $(document).height()
    ) {
      $(".poste-interesse").fadeOut();
    } else {
      $(".poste-interesse").fadeIn();
    }
  });
});
