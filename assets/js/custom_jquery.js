$(function () {
  "use strict";

  $(document).ready(function () {
    $("#trailer-dropdown-icon").click(function () {
      $("#trailer-dropdown-icon").toggleClass("click");
      $("#trailer-data").slideToggle(500);
    });
  });

  $(document).ready(function () {
    $("#trailer-database-icon").click(function () {
      $("#trailer-database-icon").toggleClass("click");
      $("#database-data").slideToggle(500);
    });
  });

  $(document).ready(function () {
    $("#popup-data-icon").click(function () {
      $("#popup-data-icon").toggleClass("click");
      $("#popup-data").slideToggle(500);
    });
  });

  $(document).ready(function () {
    $("#popup-bar-icon").click(function () {
      $("#popup-bar-icon").toggleClass("click");
      $("#popup-bar-data").slideToggle(500);
    });
  });

  $(document).ready(function () {
    $("#order-bar-icon").click(function () {
      $("#order-bar-icon").toggleClass("click");
      $("#order-data").slideToggle(500);
    });

    $("#show-more-content").hide();

    $("#show-more").click(function () {
      $("#show-more-content").show(300);
      $("#show-less").show();
      $("#show-more").hide();
    });

    $("#show-less").click(function () {
      $("#show-more-content").hide(150);
      $("#show-more").show();
      $(this).hide();
    });

    // /* ================================================*/

    $(document).ready(function () {
      $("#dropdown-btn").click(function () {
        $(".bi-chevron-down").toggleClass("up");
      });
    });

    $(".custom-select").each(function () {
      var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template +=
        '<span class="custom-select-trigger">' +
        $(this).attr("placeholder") +
        "</span>";
      template += '<div class="custom-options">';
      $(this)
        .find("option")
        .each(function () {
          template +=
            '<span class="custom-option ' +
            $(this).attr("class") +
            '" data-value="' +
            $(this).attr("value") +
            '">' +
            $(this).html() +
            "</span>";
        });
      template += "</div></div>";

      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });

    $(".custom-option:first-of-type").hover(
      function () {
        $(this).parents(".custom-options").addClass("option-hover");
      },
      function () {
        $(this).parents(".custom-options").removeClass("option-hover");
      }
    );
    $(".custom-select-trigger").on("click", function () {
      $("html").one("click", function () {
        $(".custom-select").removeClass("opened");
      });
      $(this).parents(".custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
      $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
      $(this)
        .parents(".custom-options")
        .find(".custom-option")
        .removeClass("selection");
      $(this).addClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this)
        .parents(".custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
    });

    // /* ================================================*/

    // // // /* =====================Order Status Page Selector Item===========================*/

    $(document).ready(function () {
      $("#default_option_one").click(function () {
        $(this).parent().toggleClass("active");
      });

      $("#one li").click(function () {
        var currentele = $(this).html();
        $("#default_option_one li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
      });
    });

    $(document).ready(function () {
      $("#default_option_two").click(function () {
        $(this).parent().toggleClass("active");
      });

      $("#two li").click(function () {
        var currentele = $(this).html();
        $("#default_option_two li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
      });
    });

    $(document).ready(function () {
      $("#default_option_three").click(function () {
        $(this).parent().toggleClass("active");
      });

      $("#three li").click(function () {
        var currentele = $(this).html();
        $("#default_option_three li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
      });
    });

    $(document).ready(function () {
      $("#default_option_four").click(function () {
        $(this).parent().toggleClass("active");
      });

      $("#four li").click(function () {
        var currentele = $(this).html();
        $("#default_option_four li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
      });
    });
  });
});
