 
new WOW().init();


        let x=document.getElementById('menu');
        let micon=document.getElementById('menu-icon');
        let cicon=document.getElementById('close-icon');

        function openMenu() {
    x.style.display = 'block';  // Show the menu
    cicon.style.display = 'block';  // Show the close icon
    micon.style.display = 'none';  // Hide the menu icon
}

function closeMenu() {
    x.style.display = 'none';  // Hide the menu
    cicon.style.display = 'none';  // Hide the close icon
    micon.style.display = 'block';  // Show the menu icon
}