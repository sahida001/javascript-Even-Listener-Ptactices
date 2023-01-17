
/** Event Listener*/
document.querySelector("button").addEventListener("click", clickFunction);
var amarNam= document.querySelector("h1");

function clickFunction(){
    alert("This is a Event listener function");
}

/** This is a anonymous fuction*/
amarNam.addEventListener("click", function(){
   document.write("You are doing great job, Keep it up");
});

/** Event Listners with multuple elements*/

var len = document.querySelectorAll(".myButton").length

for(var i = 0; i<len; i++){

document.querySelectorAll(".myButton")[i].addEventListener("click", function(){

    var text = this.innerHTML;

    document.querySelector("h2").innerHTML = text + "is clicked";
});
}
