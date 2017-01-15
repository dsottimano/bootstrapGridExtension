var html = document.createElement('div');
html.innerHTML = '<input id="clickMe" type="button" value="TOGGLE GRID" style="position: fixed;bottom: 10px;right: 5px;background-color: #e7e7e7 !important; color: black !important;" />';
document.body.appendChild(html);

$("<style type='text/css'> .textHelperPosition {display:none;margin-left:0px !important;margin-top:0px !important; z-index: 1 !important; color:white;} .greenRowHelper{ background-color:green !important;} .redRowHelper{ background-color:red !important;border: 4px solid purple !important;} .blueRowHelper{ background-color:blue !important;}</style>").appendTo("head");

//Inject the labels into the DOM as display none
$("div[class^='container']").append('<p class="textHelperPosition"><strong>***CONTAINER***</strong></p>');
$("div[class^='row']").append('<p class="textHelperPosition"><strong>***ROW***</strong></p>');
$("div[class^='col']").append('<p class="textHelperPosition"><strong>***COLUMN***</strong></p>');


//When button is clicked, toggle the display of colors and text
$("#clickMe").click(function () {

    $("div[class^='container']").toggleClass("blueRowHelper");
    $(".textHelperPosition").toggle();
    $("div[class^='row']").toggleClass("greenRowHelper");
    $("div[class^='col']").toggleClass("redRowHelper");

});