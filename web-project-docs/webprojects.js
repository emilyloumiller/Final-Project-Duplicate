var btn_one = $( ".collage-item" )[ 0 ];
var btn_two = $( ".collage-item" )[ 1 ];
var btn_three = $( ".collage-item" )[ 2 ];
var btn_four = $( ".collage-item" )[ 3 ];
var btn_five = $( ".collage-item" )[ 4 ];
var btn_six = $( ".collage-item" )[ 5 ];
var proj_one = $( ".web-project" )[ 1 ];
var proj_two = $( ".web-project" )[ 2 ];
var proj_three = $( ".web-project" )[ 3 ];
var proj_four = $( ".web-project" )[ 4 ];
var proj_five = $( ".web-project" )[ 5 ];
var proj_six = $( ".web-project" )[ 6 ];


$(btn_one).click(function(){
    $(proj_one).toggleClass("display");
    $("#css-cigarette-box-container").load("cigarettebox/index.html", function(responseTxt, statusTxt, xhr){
      if(statusTxt == "success")
        this.scrollIntoView();
      if(statusTxt == "error")
        window.location.href='cigarettebox/index.html';
    });
});

$(btn_two).click(function(){
  $(proj_two).toggleClass("display");
  $('#canvas-record-container').attr('src', 'http://i6.cims.nyu.edu/~elm476/drawing/htmlcanvas/index.html');
  (proj_two).scrollIntoView();
});

$(btn_three).click(function(){
  $(proj_three).toggleClass("display");
  $('#ispy-container').attr('src', 'http://i6.cims.nyu.edu/~elm476/drawing/htmlandcss/index.html');
  (proj_three).scrollIntoView();
});

$(btn_four).click(function(){
  $(proj_four).toggleClass("display");
  $('#webgl-container').attr('src', 'http://i6.cims.nyu.edu/~elm476/drawing/webgl/eyeball.html');
  (proj_four).scrollIntoView();
});

$(btn_five).click(function(){
  $(proj_five).toggleClass("display")
  $('#bitchdeck').attr('src', 'bitchdeck.pdf');
  (proj_five).scrollIntoView();
});

$(btn_six).click(function(){
  $(proj_six).toggleClass("display")
  $('#baked-deck').attr('src', 'baked-pitchdeck.pdf');
  (proj_six).scrollIntoView();
});

$( ".collage-item" ).mouseenter(function() {
  $(this).find('.web-project-bubble').addClass("web-project-hover");
  $(this).find('.item-num').addClass("item-num-hover");
});

$( ".collage-item" ).mouseleave(function() {
  $(this).find('.web-project-bubble').removeClass("web-project-hover");
  $(this).find('.item-num').removeClass("item-num-hover");
});
