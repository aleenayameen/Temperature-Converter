function convert(){
    var x=document.getElementById("fn").value;
    document.getElementById("print").innerHTML=x + "\xB0F is " + (5/9)*(x-32) + "\xB0C";

    var y= document.getElementById('cel').value;
    document.getElementById("print1").innerHTML=y + "\xB0C is " + ((y * 9/5) + 32) + "\xB0F";
}