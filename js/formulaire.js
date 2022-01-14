$(document).ready(function () {

  var step = 1
  const bez = [.25, .8, .25, 1]
  initStep()

  function initStep() {
    $("#step1").css({ "display": "flex", "opacity": "1", "left": "0px" });
    $("#prevBtn").css({ "visibility": "hidden" });
  }

  $("#nextBtn").click(function () {
    if (step < 6) {
      step++
      nextStep(step)
    }
  })

  $("#prevBtn").click(function () {
    step--
    prevStep(step)
  })

  function nextStep(step) {
    if (step === 2) {
      animateNext(step);
      $("#prevBtn").css({ "visibility": "visible" });
    }
  }

  function prevStep(step) {
    if (step === 1) {
      $("#prevBtn").css({ "visibility": "hidden" });
      animatePrev(step)
    }
  }

  function animateNext(step) {
    $(`#step${step - 1}`).animate({
      left: '-20px',
      opacity: '0',
    }, 400, $.bez(bez), function () {
      $(this).css({ "left": "-20px" });
      $(this).hide();
      $(`#step${step}`).css("display", "flex");
      $(`#step${step}`).animate({
        left: '0',
        opacity: '1',
      }, 400, $.bez(bez));
    });
  }

  function animatePrev(step) {
    $(`#step${step + 1}`).animate({
      left: '20px',
      opacity: '0',
    }, 400, $.bez(bez), function () {
      $(this).hide();
      $(`#step${step}`).css({ "display": "flex" });
      $(`#step${step}`).animate({
        left: '0',
        opacity: '1',
      }, 400, $.bez(bez));
    });
  }

});
