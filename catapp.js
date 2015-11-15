var clicknumb=0;

var temp = "<li id='ID'><h1>NAME</h1><img src='IMG'><div id='count_X'> # clicks: CLICK_ON</div></li> ";

$(document).ready(function(){
  //console.log(data.length);
  load();
  click_counter();
  //click_counter($(this).attr("id"));

});

function load(){
  $(".cats").html("");
  for(var i=0; i < data.length; i++){
    var temp1;
    temp1 = temp.replace("ID", i).replace("NAME", data[i].cat_name)
            .replace("IMG", data[i].img).replace("X", i).replace("CLICK_ON", data[i].click_number);
    $(".cats").append(temp1);
  }
};

function click_counter(){
  $(".cats li").click(function(){
    var k = $(this).attr('id'); //funziona perché ho l'id nel tag <li, this si riferisce ai tags html
    data[k].click_number ++;
    $("#count_"+k).html("# clicks: "+data[k].click_number);
  })
};
