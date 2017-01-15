
var html = document.createElement('div');
    html.innerHTML = '<input id="clickMe" type="button" value="TOGGLE GRID" style="position: fixed;bottom: 10px;right: 5px;background-color: #e7e7e7 !important; color: black !important;" />';
    document.body.appendChild(html);

$("<style type='text/css'> .btn-122211221276{;} .greenRowHelper{ background-color:green !important;} .redRowHelper{ background-color:red !important;border: 4px solid purple !important;} .blueRowHelper{ background-color:blue !important;}</style>").appendTo("head");


$("#clickMe").click(function () {

 $("div.container").toggleClass("blueRowHelper");
 $("div.row").toggleClass("greenRowHelper");
 $("div[class^='col']").toggleClass("redRowHelper");

});