
const open =document.getElementById('open');
const close=document.getElementById('close');
const menu=document.querySelector('.section-1 .navigation-menu ul');

open.addEventListener('click',showMenu);
close.addEventListener('click',closeMenu);

function showMenu(){
    open.style.display="none";
    close.style.display="inline-block";
    menu.style.display="flex";
    menu.style.top="-2vh";
    
}

function closeMenu(){
    open.style.display="inline-block";
    menu.style.top="-102vh";
    // menu.style.display="none";
    close.style.display="none";
}


const galBtn=document.getElementById('gal-btn');
const galMenu=document.querySelector('.nav-gallery .content');

galBtn.addEventListener('click',()=>{
    galMenu.classList.toggle('show');
    galBtn.classList.toggle('rotate');
    
});