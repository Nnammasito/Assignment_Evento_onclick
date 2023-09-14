function changestring(change){
    change.innerHTML = "Logout";
}

function add_like(value){
    let likeOnclick = document.getElementById("like"+ value).innerHTML;
    document.getElementById("like"+value).innerHTML = parseInt(likeOnclick) + 1;
    alert("Ninja was liked")
}

function remove_btn(nombre){
    nombre.remove();
}