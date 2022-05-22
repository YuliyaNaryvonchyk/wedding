$(document).ready(() => {
  $('.my-slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $( "#tabs" ).tabs();

  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    header: '> .accordion-item > .accordion-header'
  });

});
