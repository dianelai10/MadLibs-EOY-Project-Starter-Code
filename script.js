let storiesCreated; 
$("button").click(function(){
    let name = $(".name-input").val();
    let transport = $(".transport-input").val();
    let adjective = $(".name-input").val();
    let number = $(".number-input").val();


$(".story").append ("<p>" + "One day my friend " + name + " and I decided to take a trip to the beach, so we packed our bags and took the " + transport + " over.It was a " + adjective + " day at the beach! We ended up staying for " + number + " hours!" + "</p>" ) ;

});