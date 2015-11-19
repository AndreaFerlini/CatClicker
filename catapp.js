var temp = "<li id='ID'><h1>NAME</h1><img src='IMG' width='200' height='200'><div id='count_X'> # clicks: CLICK_ON</div></li> ";
var temp_name = "<li id='ID'> <h1>NAME</h1> </li> ";

$(document).ready(function(){
  view.hide_admin();
  view.load_name();
});

/* VIEW, tutta la modifica del DOM, non interagisce MAI con MODEL */
var view = {
  load_name : function (){
    $(".cats_names").html("");
    $(".cats").html("");
    $(".cats_names").show();
    controller.loading_names();
    view.click_on_cat();
  },
  click_on_cat : function (){
    $(".cats_names li").click(function(){
      $(".cats_names").hide();
      controller.load_sel_cat($(this).attr('id'));
    });
  },
  click_admin : function (){
    $(".btn-admin").click(function(){
      var n=$(".cats li").attr('id');
      $(".admin-mod").show();
      controller.init_admin_textbox(n);
      view.click_cancel();
      view.click_save();
    })
  },
  click_cancel : function (){
    $(".btn-cancel").click(function(){
        view.hide_admin();
        view.load_name();
        //location.refresh(); //è il refresh della pagina!
    })
  },
  click_save : function (){
    $(".btn-save").click(function(){
      controller.save();
      alert ("New content saved!");
      view.hide_admin();
      view.load_name();
    })
  },
  hide_admin : function (){
    $(".btn-admin").hide();
    $(".admin-mod").hide();
  },
};

/*CONTROLLER (interagisce con il MODEL, ovvero i dati*/
var controller = {
  loading_names : function (){
    for(var i=0; i<model.data.length; i++){
      var temp2;
      temp2 = temp_name.replace("ID", i).replace("NAME", model.data[i].cat_name);
      $(".cats_names").append(temp2);
    }
  },
  load_sel_cat : function (i){
    var temp1;
    temp1 = temp.replace("ID", i).replace("NAME", model.data[i].cat_name)
            .replace("IMG", model.data[i].img).replace("X", i).replace("CLICK_ON", model.data[i].click_number);
    $(".cats").append(temp1);
    controller.click_counter();
    $(".btn-admin").show();
    view.click_admin();
  },
  click_counter : function (){
    $(".cats li").click(function(){
      var k = $(this).attr('id');
      model.data[k].click_number ++;
      $("#count_"+k).html("# clicks: "+model.data[k].click_number);
    })
  },
  init_admin_textbox : function (n){
    $("input[name=cat-name-text]").val(model.data[n].cat_name);
    $("input[name=cat-clicks-text]").val(model.data[n].click_number);
  },
  save : function (){
    var n=$(".cats li").attr('id');
    model.data[n].cat_name = $("input[name=cat-name-text]").val();
    model.data[n].click_number = $("input[name=cat-clicks-text]").val();
  },
};
