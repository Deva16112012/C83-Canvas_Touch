var ox,oy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var w=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if(w<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
color="black";
width=1;
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(E){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    ox=E.touches[0].clientX-canvas.offsetLeft;
    oy=E.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(E){
    console.log("mytouchmove");
    currentmouseX=E.touches[0].clientX - canvas.offsetLeft;
    currentmouseY=E.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        console.log("last position of X and the Y cordinet=",ox+oy);
        ctx.moveTo(ox,oy);
        console.log("curent position of X and the Y cordinet=",currentmouseX+currentmouseY);
        ctx.lineTo(currentmouseX,currentmouseY);
        ctx.stroke();
    ox=currentmouseX;
    oy=currentmouseY;
}