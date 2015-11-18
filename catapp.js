var clicknumb=0;

var temp = "<li id='ID'><h1>NAME</h1><img src='IMG' width='200' height='200'><div id='count_X'> # clicks: CLICK_ON</div></li> ";

var temp_name = "<li id='ID'> <h1>NAME</h1> </li> ";

$(document).ready(function(){
  hide_admin();
  load_name();
});

/* FUNCTIONS */

function hide_admin(){
  $(".btn-admin").hide();
  $(".admin-mod").hide();
};

function load_name(){
  $(".cats_names").html("");
  $(".cats").html("");
  $(".cats_names").show();
  for(var i=0; i<data.length; i++){
    var temp2;
    temp2 = temp_name.replace("ID", i).replace("NAME", data[i].cat_name);
    $(".cats_names").append(temp2);
  }
  click_on_cat();
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
  $(".btn-admin").show();
  click_admin();
};

function click_counter(){
  $(".cats li").click(function(){

    var k = $(this).attr('id');
    data[k].click_number ++;
    $("#count_"+k).html("# clicks: "+data[k].click_number);
  })
};

/*ADMIN MODE FUNCTIONS*/
function click_admin(){
  $(".btn-admin").click(function(){
    var n=$(".cats li").attr('id');
    $(".admin-mod").show();
    $("input[name=cat-name-text]").val(data[n].cat_name);
    $("input[name=cat-clicks-text]").val(data[n].click_number);
    click_cancel();
    click_save();

  })
};

function click_cancel(){
    $(".btn-cancel").click(function(){
        hide_admin();
        load_name();
        //location.refresh(); //è il refresh della pagina!
    })
};

function click_save(){
    $(".btn-save").click(function(){
      var n=$(".cats li").attr('id');
      data[n].cat_name = $("input[name=cat-name-text]").val();
      data[n].click_number = $("input[name=cat-clicks-text]").val();
      alert ("New content saved!");
      hide_admin();
      load_name();
    })
};
