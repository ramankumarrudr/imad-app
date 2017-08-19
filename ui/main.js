console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHtml = 'New value';
//move the image
var img=document.getElementById('madi')
img.onclick = function(){
    i.style.marginLeft = '100px';
}