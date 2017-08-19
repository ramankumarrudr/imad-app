console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHtml = 'New value';
//move the image
var img=document.getElementById('madi')
img.onclick = function(){
    img.style.marginLeft = '100px';
}
//move image for every 50 ms
var img=document.getElementById('madi')
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50)
}