const menuButton = document.getElementById("menuIcon")
let sidebarContainer = document.getElementById("sidebarView").style.display

function switchMenu(){

    let x = sidebarContainer
    console.log(sidebarContainer)

    if (x == 'none') {
        x = 'block';
      } else {
        x = 'none';
      }

}

menuButton.addEventListener("click", switchMenu)
