function LoadJson(file,callback){
  var a=new XMLHttpRequest();
   a.overrideMimeType("application/json");
a.open("GET",file,true);
a.onreadystatechange=function(){
  if(a.onreadystate===4 && a.status=="200"){
    callback(a.responseText);
  }
 }
 a.send(null);
}
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.co);
  // console.log(data.co);
})
var right=document.getElementById('right');
var career=document.createElement('h4');
career.textContent="career Object";
career.appendChild(document.createElement("HR"))
function career(careerobject){
var cop=document.createElement("p");
cop.textContent=careerobject;
career.appendChild(cop)
}
right.applying()
var edu=document.createElement("h4");
edu.textContent="Educational Qualification"
