$(document).ready(function() {

  $("#add").click(function() {


    for (var num = 99; num >=1; num--) {
      if (num > 1) {
        $("#list").append("<li> " + num + " bottles of beer on the wall, " + num + " bottles of beer. You take one down and pass it around, " + (num - 1) + " bottles of beer on the wall.</li>");
      }
      else {
        $("#list").append("<li> " + num + " bottle of beer on the wall, " + num + " bottle of beer. You take one down and pass it around, " + (num - 1) + " bottles of beer on the wall.</li>");
      }

    };

  });

});
