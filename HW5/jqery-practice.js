
$(document).ready(function(){
    $("#theRedButton").click(function(){
        $("h1").css("color","red");
        $("h2").css("color","red");
        $("h3").css("color","red");
    });
});
$(document).ready(function(){
    $("#theSpeakersButton").click(function(){
        $("h3").fadeOut(1000);
    });
});




