
const open =document.getElementById('open');
const close=document.getElementById('close');
const menu=document.querySelector('.sec-1 .navigation-menu');
open.addEventListener('click',showMenu);
close.addEventListener('click',closeMenu);

function showMenu(){

    open.style.display="none";
    menu.style.opacity="1";
    close.style.display="inline-block";
    menu.style.display="flex";
    menu.style.right="0";
    
    menu.classList.toggle('show');
    // menu.style.top="-2vh";
    
}

function closeMenu(){
    
    open.style.display="inline-block";
    menu.style.right="-70%";
    close.style.display="none";
    menu.classList.toggle('show');
    menu.style.opacity="0";

}

const navbar=  document.getElementById('navbar').getElementsByTagName('a');
console.log(navbar);


  // console.log(window.innerWidth);
  if (window.innerWidth < 700) {
    for(let i=0;i<navbar.length;i++){
      navbar[i].addEventListener('click',()=>{
        closeMenu();
      })
    }
  }
  else{
    showMenu();
  }

