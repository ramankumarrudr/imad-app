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
   
     //render the variable in correct span
   
 /*  counter=counter+1;
   var span = document.getElementById('count');
   span.innerHTML = counter.toString(); */
   
   //Make a request to counter
   var request = new XMLHttpRequest();
   //capture the response
   request.onreadystatechange = function() {
   if(request.readyState === XMLHttpRequest.DONE){
       //take some action
       if (request.status===200){
           var counter =request.responseText;
           var span =document.getElementById('count');
           span.innerHTML =counter.toString();
       }
   } 
   };
   //AJAX CALL
   // make the request
   request.open('GET','http://ramankumarrudr.imad.hasura-app.io/counter',true);
   request.send(null);
   
};
//submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
//Make a request to the server and send the name

//Capture a list of names and render it as a list
 var request = new XMLHttpRequest();
   //capture the response
   request.onreadystatechange = function() {
   if(request.readyState === XMLHttpRequest.DONE){
       //take some action
       if (request.status===200){
           // capture the request and render
        var names = request.responseText;
        names=JSON.parse(names);
var list = '';
for (var i=0; i<names.length;i++){
    list += '<li>' +names[i]+ '</li>';
}
//inserting html into unodered list
var ul = doument.getElementById('namelist');
ul.innerHTML = list;
       }
   } 
   };
   //AJAX CALL
   // make the request
   request.open('GET','http://ramankumarrudr.imad.hasura-app.io/submit-name/name='+ name,true);
   request.send(null);

};
