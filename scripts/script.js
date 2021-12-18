$(function () {
  var time = 5000; // Time in milliseconds.
  allInputs = $('input[name="slide_switch"]');
  i = 0;
  setInterval(function () {
    $('input[name="slide_switch"]').prop("checked", false);
    $('#id' + ((i % allInputs.length) + 1)).prop("checked", true);
    i++;
  }, time);
});



function subsc(){
	document.getElementById('container').style.display = "block";
}

function closer() {
	document.getElementById('container').style.display = "none";
}


