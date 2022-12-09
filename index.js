$(".btnInicio").click(function() {
var date = new Date();
var time = date.getDate() + "/" 
+ date.getMonth() + "/"
+ date.getFullYear() + "-"
+ date.getHours() + ":" 
+ date.getMinutes() + ":" 
+ date.getSeconds();

$(".hInicio").text(time); 
});

$(".btnFin").click(function() {
    var date = new Date();
    var time = date.getDate() + "/" 
    + date.getMonth() + "/"
    + date.getFullYear() + "-"
    + date.getHours() + ":" 
    + date.getMinutes() + ":" 
    + date.getSeconds();
    
    $(".hFin").text(time); 
});