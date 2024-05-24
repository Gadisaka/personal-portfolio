
const sidebar = document.querySelector(".sidebar")
var in_display = false

function showSidebar() {
    if (in_display){
        sidebar.style.right = '-250px'
        in_display = false
    }
    else{
        sidebar.style.right = '0'
        in_display = true
    }
}

