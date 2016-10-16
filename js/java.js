var xp;
var xy;
var nu=19;
var socket;

 var iw=innerWidth;
var ih=innerHeight;
function init()
 { 
 //display background
for(i=1;i<=nu;++i)
{
var mu=i;
var b = document.getElementById('c'+i);    
 var tx = "url('img/"+((nu+1)-i)+".png')";  
b.style.backgroundImage=tx;;
}



}
window.onload = init();


//add device orientation listener
window.addEventListener("deviceorientation", function(event) {

xp=(event.beta);
xy=(event.gamma);
for(i=1;i<=nu;++i)
{
var b = document.getElementById('c'+i); 
sc=b.dataset.scale;  
b.style.left= (xp/sc)+"px ";
b.style.top=(xy/sc)+"px";
}

}, true);



//add mouse move listener
window.addEventListener('mousemove', function(event){
xp=(event.pageX-(window.iw/2));
xy=(event.pageY-(window.ih/2));

for(i=1;i<=nu;++i)
{
var b = document.getElementById('c'+i);   
sc=b.dataset.scale;
b.style.webkitTransform = "translate("+(xp/sc)+"px, "+(xy/sc)+"px)";
//b.style.translate((xp/sc)+", "+(xy/sc));
//use translate instead of top left animation. this is smoother

}
});
