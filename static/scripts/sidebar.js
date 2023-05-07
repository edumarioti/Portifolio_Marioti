const sidebar = document.getElementById('sidebar')
const main = document.getElementById('main')
const buttonToggleSidebar = document.querySelectorAll("[data-toggleSidebar]")


buttonToggleSidebar.forEach( (elemento) => {
    elemento.addEventListener("click", (event) => {
        toggleSidebar(event.target.dataset.togglesidebar)

    })
})

function toggleSidebar(operacao){
    if(operacao === "open")
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

window.addEventListener('resize', function(event) {
    toggleSidebar();
});


