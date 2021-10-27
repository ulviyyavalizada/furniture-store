
//Sidebar

let menuIcon = document.getElementById('menu-icon');
let closeBtns = document.querySelectorAll('.closebtn');
let header = document.getElementById('header');
let body = document.getElementById('body');


menuIcon.addEventListener('click', openNav);
header.addEventListener('click',closeBtnFunc);
body.addEventListener('click',closeBtnFunc);


function openNav(e) {
    if(e.target.className = 'menu-icon'){
        document.getElementById("mySidenav").style.width = "320px";
        body.setAttribute("style", "filter: blur(13px);");
        document.body.style.overflow = 'hidden';
        document.getElementById('body').scrolling = 'no';
        header.setAttribute("style", "filter: blur(13px);");
    } 
}


function closeBtnFunc(e){
    closeBtns.forEach(function(closeBtn){
        closeBtn.addEventListener('click', function(e){
            document.getElementById("mySidenav").style.width = "0px";
            body.style.filter = 'none';
            document.body.style.overflow = 'visible';
            header.style.filter = 'none';
        });
    });

    if( (e.target.className !== 'menu-icon') && (document.getElementById('mySidenav').checked !== true)){
        document.getElementById("mySidenav").style.width = "0px";
        body.style.filter = 'none';
        document.body.style.overflow = 'visible';
        header.style.filter = 'none';
    }
  
};

closeBtnFunc();

