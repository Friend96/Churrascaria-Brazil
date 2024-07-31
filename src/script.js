function carregou(){
    var load = document.getElementById('loading')
    var con = document.getElementById('conteudo')

    load.style.display = 'none'
    con.style.display = 'block'
}

function clicou(){
    var i = 0
    var op = document.querySelector('menu > a')
    alert(op[1])
    if(i = 0){
        for(let x = 0;x < parseFloat(op.length); x++){
            op[x].style.display = 'block'
        }
        i = 1
    }
    else{
        for(let x = 0;x < parseFloat(op.length); x++){
            op[x].style.display = 'none'
        }
        i = 0
    }
}

window.addEventListener("scroll", function(){
    var header = document.getElementById('header-top')
    if(window.scrollY > 0){
        header.style.backgroundColor = "#0d06007e"
    }
    else{
        header.style.backgroundColor = "transparent"
    }
})