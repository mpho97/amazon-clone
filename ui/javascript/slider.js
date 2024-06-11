const open = document.getElementById('menu');
const nav = document.getElementById('navigation');
const close = document.getElementById('close');
 open.addEventListener('click', function(){
    nav.classList.toggle('active');
    //alert("hello");
 });
 close.addEventListener('click', function(){
   //alert("hello");
    nav.classList.remove('active');
 });