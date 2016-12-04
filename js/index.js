$(document).ready(function() {
  $('.buttons span').on("click", function(){
    var selected = $(this).text();
    if (selected === "C") {
      $("#screen").html('');
    }
    else if (selected === "=") {
      var input = $('#screen').html();
      console.log(input);
    }
    else {
      $("#screen").append(selected);
    }
  });
});

function calculate(string) {

}
