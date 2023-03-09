var header = document.getElementById('header')
var sidebar = document.getElementById('sidebar')
var main = document.getElementById('main')
var show_sidebar = false

function toggle_sidebar(){

    show_sidebar = !show_sidebar;

    if(show_sidebar)
    {
        sidebar.style.left = '0vw';
        sidebar.style.animationName = 'show_side_bar';
        main.style.filter = 'blur(2px)';

    }
    else
    {
        sidebar.style.left = '-100vw';
        sidebar.style.animationName = 'close_side_bar';
        main.style.filter = '';
    }
}

function close_sidebar(){
    if(show_sidebar)
    {
        show_sidebar = true;
        toggle_sidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth> 660 && show_sidebar) 
    {  
        show_sidebar = true;
        toggle_sidebar();
    }
});

const toggleMenuButton = document.querySelectorAll('.toggle_menu');

for (let contador = 0; contador < toggleMenuButton.length; contador++)  {

    const button = toggleMenuButton[contador];

    button.onclick = function () {
        toggle_sidebar();
    };
}
