console.log('Loaded!');
/*change the text
var element = document.getElementById('main-text');
element.innerHtml = 'New value';
move the image
var img=document.getElementById('madi')
img.onclick = function(){
    img.style.marginLeft = '100px';
}*/

//move image for every 50 ms
/*var img=document.getElementById('madi')
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,50)
}*/

//var counter=0;
var button = document.getElementById('counter');
button.onclick = function(){
   //Make a request to counter
   var request = new XMLHttpRequest();
   //capture the response
   request.onreadystatechange = function() {
   if(request.readyState === XMLHttpRequest.DONE){
       //take some action
       if (request.status===200){
           var counter =request.responseText;
           var span =document.getElementById('count');
           span.innerHTML =counter.tostring();
       }
   } 
   };
   // make the request
   request.open('GET','http://http://ramankumarrudr.imad.hasura-app.io/counter',true);
   request.send(null);
   
   //render the variable in correct span
   
 /*  counter=counter+1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString(); */
};