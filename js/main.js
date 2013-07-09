$(document).ready(function() {
  $('#home #container, #home #jumper').hide();
  $('#home #jumper').css({ marginTop: $(document).height() });

  $('#navigation ul#links li a span.hover').hover(function () {
    $(this).animate({ top: "-15px" }, "normal", "easeOutBack");
  })

  $('#how-high').click(function() {
    $('#content, #jumper').show();
    $('#jumper').animate({ marginTop: 0 }, 2000, "easeOutBack")
    $('#home #container').show();
    $('#intro').hide();
  });

  if ($("a.work").length) {
    $(".hide").hide();
    $("a[rel='work']").fancybox({
      'autoScale' : 'false',
      'titlePosition' : 'inside',
      'transitionIn'  : 'elastic',
    });
  }

  if ($("a.logos").length) {
    $(".hide").hide();
    $("a[rel='logos']").fancybox({
      'autoScale' : 'false',
      'titlePosition' : 'inside',
    });

  }

  if ($("#whyme #head").length) {
    $('#whyme #head').css({ top: $(document).height() })
    $("#whyme #head").animate({ top: $(document).height() - 205 }, 2000)
  }
});

