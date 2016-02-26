$(document).ready(function () {

    console.log('ready');

$(function() {
    $( "#visual" ).selectmenu();
 
    $( "#interior" ).selectmenu();
 
    $( "#fashion" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
  });