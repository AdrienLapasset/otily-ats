$(document).ready(function () {
  // Smooth anchor
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      300
    );
  });

  // Show on scroll
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (
      y < 20 ||
      $(window).scrollTop() + $(window).height() > $(document).height() - 20
    ) {
      $(".poste-interesse").fadeOut();
    } else {
      $(".poste-interesse").fadeIn();
    }
  });
});
