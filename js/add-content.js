
function thetime () {
    // the input
    var hourNow = prompt ("Please enter the time ,enter betwwen 0-24");
    var greeting;
    // the proccess
    if (hourNow >= 18 && hourNow <= 24 ) {
        greeting= 'Good evening!';
        }else if (hourNow >= 12 && hourNow < 18) {
        greeting = ' Good afternoon!';
        }else if (hourNow >= 0 && hourNow < 12) {
        greeting = 'Good morning!';
        }
        // the output
        return greeting; 
}
 var greeting = thetime();
 document.write ( ' <h3>' + greeting + ' </ h3> ');