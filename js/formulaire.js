$(document).ready(function () {

  var step = 1
  const stepsLength = 6
  const progressStep = 100 / stepsLength
  const bez = [.25, .8, .25, 1]
  initStep()

  function initStep() {
    $("#step1").css({ "display": "flex", "opacity": "1", "left": "0px" });
    $("#prevBtn").css({ "visibility": "hidden" });
    $("#progress").css("width", progressStep * step + "%");
  }

  $("#nextBtn").click(function () {
    if (step < 6) {
      step++
      handleStep(step)
    }
  })

  $("#prevBtn").click(function () {
    step--
    handleStep(step)
  })

  function handleStep(step) {
    $("#progress").css("width", progressStep * step + "%");
    animatePrev(step)
    animateNext(step);
    if (step === 1) {
      $("#prevBtn").css({ "visibility": "hidden" });
    }
    if (step === 2) {
      $("#prevBtn").css({ "visibility": "visible" });
    }
    if (step === 6) {
      $("#navContainer").hide()
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
