var clicknumb=0;

var temp = "<li id='ID'><h1>NAME</h1><img src='IMG'><div id='count_X'> # clicks: CLICK_ON</div></li> ";

var temp_name = "<li id='ID'> <h1>NAME</h1> </li> ";

$(document).ready(function(){
  //console.log(data.length);
  //load_cats();
  //$(".admin-btn").hide();
  load_name();
  click_on_cat();


});

function load_name(){
  for(var i=0; i<data.length; i++){
    var temp2;
    temp2 = temp_name.replace("ID", i).replace("NAME", data[i].cat_name);
    $(".cats_names").append(temp2);
  }
};

function click_on_cat(){
  $(".cats_names li").click(function(){
    $(".cats_names").hide();
    load_sel_cat($(this).attr('id'));
  })
};

function load_sel_cat(i){
  var temp1;
  temp1 = temp.replace("ID", i).replace("NAME", data[i].cat_name)
          .replace("IMG", data[i].img).replace("X", i).replace("CLICK_ON", data[i].click_number);
  $(".cats").append(temp1);
  click_counter();
  //$(".admin-btn").hide();
};


function click_counter(){
  $(".cats li").click(function(){

    var k = $(this).attr('id'); //funziona perché ho l'id nel tag <li, this si riferisce ai tags html
    console.log(k);
    data[k].click_number ++;
    $("#count_"+k).html("# clicks: "+data[k].click_number);
  })
};

/*
function load_cats(){
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
*/
