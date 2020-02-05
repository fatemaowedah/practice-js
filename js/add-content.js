var shownorder = function(){
    var userorder;
var numberofimage;
var orderimage = '';
while ( userorder !== "house" && userorder !== "hotel"){
    userorder = prompt("please enter house or hotel ?")
    numberofimage = prompt("how many image do you want ?")
for (var i = 0 ; i < numberofimage ; i++){
    console.log("index is " + i);
    if ( userorder === "hotel"){
        orderimage = orderimage + '<img src="images/hotel.png">';
    }else if ( userorder === "house"){
        orderimage = orderimage + '<img src="images/house.png">';
    }console.log(orderimage);
    
}return orderimage;
}
}
document.write ('<p>' + shownorder() + '<p>');

