var icons = ['0','1','2','3','4','5','6','7','8','9','A','B','C',
             'D','E','F'];

function colorGenerator(){
  var colorToCreate = "#";
  var i = 1;
  while(i < 7){
    colorToCreate += icons[Math.floor(Math.random()*icons.length)];
    i++;
  }
  return colorToCreate;
}

var colorChange = function(){
  var newColor = colorGenerator();
  $("body").css("background-color",newColor);
  $(".blackText").html(newColor);
  $(".whiteText").html(newColor);
}

$(colorChange);

$("body").click(colorChange);
