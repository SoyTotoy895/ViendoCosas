/* había que hacer una funcion que empeice cuando se carga el contenido de la pagina, 
despues declarar las constantes agarrando los elementos que vas a usar, y despues creas 
las funciones que al hacer click en un botton para un evento*/ 

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menuIcon");
    const sidebarViewContainer = document.getElementById("sidebarViewContainer"); 
    const sidebarSalir = document.getElementById("sidebarSalir");

    // Función para mostrar el sidebar
    menuIcon.addEventListener("click", () => {
        sidebarViewContainer.style.display = "block";
    });

    // Función para ocultar el sidebar
    sidebarSalir.addEventListener("click", () => {
        sidebarViewContainer.style.display = "none";
    });
});
