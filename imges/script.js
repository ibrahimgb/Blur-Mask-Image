let blurArea = document.getElementById("blur-area");

document.onmousemove = (e)=>{
    blurArea.style.transform = `translate(${e.pageX}px , ${e.pageY}px)`;
}