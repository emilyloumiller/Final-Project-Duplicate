$('.gallery-cell').hover(function(){
$(this).find('.still').toggleClass('still-focus');
$(this).find('.bts-wrapper').toggleClass('bts-focus');
$(this).toggleClass('hover');
});

$('.bts-wrapper').hover(function() {
  $(this).find('.bts-caption').toggleClass('bts-opacity');
})

// crazy roundabout way of containing #panel-2
var containmentLeft = (-1*((window.innerWidth/10)*6.5)-(window.innerWidth/2))
var containmentRight = window.innerWidth+((window.innerWidth/10)*3)*5;

$('#panel-2').draggable({
  cursor: "grabbing",
  axis: "x",
  containment: [containmentLeft,0,containmentRight,0],
  scroll: true
});
