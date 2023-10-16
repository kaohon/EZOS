$( function() {
    var availableTags = [
      "<html lang=''></html>",
      "<script src=''><script>",
      "<style></style>",
      "<span id='' class=''></span>",
      "<span class=''></span>",
      "<span id=''></span>",
      "<p></p>",
      "<br>",
      "<img src=''>",
      "<button id='' class='' onclick='()'></button>",
      "<button class='' onclick='()'></button>",
      "<button id='' onclick='()'></button>",
      "<input type='' value='' id='' class=''>",
      "<link href='' rel=''>"
    ];
    $( "#bscode_area" ).autocomplete({
      source: availableTags
    });
  } );